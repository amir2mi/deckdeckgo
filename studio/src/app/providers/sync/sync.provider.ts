import {del, delMany, get, keys, update} from 'idb-keyval';

import {Sync, SyncData, SyncPending, SyncPendingDeck} from '@deckdeckgo/editor';

import syncStore from '../../stores/sync.store';
import authStore from '../../stores/auth.store';
import offlineStore from '../../stores/offline.store';

import {cloud} from '../../utils/core/environment.utils';
import {cloudProvider} from '../../utils/core/providers.utils';

export const sync = async (syncData: SyncData | undefined) => {
  try {
    if (!syncData) {
      return;
    }

    if (!authStore.state.loggedIn || !offlineStore.state.online) {
      return;
    }

    if (!isSyncPending()) {
      return;
    }

    if (!cloud()) {
      return;
    }

    syncStore.state.sync = 'in_progress';

    const {sync}: {sync: Sync} = await cloudProvider<{sync: Sync}>();

    return sync({
      syncData,
      userId: authStore.state.authUser.uid,
      clean: cleanSync
    });
  } catch (err) {
    syncStore.state.sync = 'error';
    console.error(err);
  }
};

export const isSyncPending = (): boolean => syncStore.state.sync === 'pending';

export const cleanSync = async ({syncedAt}: SyncData) => {
  await filterPending(syncedAt);

  await initSyncState();
};

const filterPending = async (syncedAt: Date) => {
  const data: SyncPending | undefined = await get<SyncPending>('deckdeckgo_pending_sync');

  if (!data) {
    return undefined;
  }

  const filter = (arr: SyncPendingDeck[]) => arr.filter(({queuedAt}: SyncPendingDeck) => queuedAt.getTime() > syncedAt.getTime());

  await update<SyncPending>(
    'deckdeckgo_pending_sync',
    (data: SyncPending) =>
      ({
        updateDecks: filter(data.updateDecks),
        deleteDecks: filter(data.deleteDecks),
        updateSlides: filter(data.updateSlides),
        deleteSlides: filter(data.deleteSlides)
      } as SyncPending)
  );
};

export const initSyncState = async () => {
  if (!authStore.state.loggedIn) {
    syncStore.state.sync = 'idle';
    return;
  }

  const data: SyncPending | undefined = await get<SyncPending>('deckdeckgo_pending_sync');

  if (!data) {
    syncStore.state.sync = 'idle';
    return;
  }

  const {updateDecks, deleteDecks, deleteSlides, updateSlides} = data;

  if (updateDecks.length === 0 && deleteDecks.length === 0 && deleteSlides.length === 0 && updateSlides.length === 0) {
    syncStore.state.sync = 'idle';
    return;
  }

  syncStore.state.sync = 'pending';
};

export const clearSync = async () => {
  await del('deckdeckgo_pending_sync');

  const storageKeys: string[] = (await keys<string>()).filter((key: string) => key.startsWith('/decks/') || key.startsWith('/assets/'));

  if (!storageKeys.length) {
    return;
  }

  await delMany(storageKeys);
};