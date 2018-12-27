import {Component, Element, Event, EventEmitter, Method, Prop} from '@stencil/core';

import {DeckdeckgoSlide, DeckdeckgoSlideUtils} from '../deckdeckgo-slide';
import {DeckdeckgoUtils} from '../../utils/deckdeckgo-utils';

@Component({
  tag: 'deckgo-slide-qrcode',
  styleUrl: 'deckdeckgo-slide-qrcode.scss',
  shadow: true
})
export class DeckdeckgoSlideQrcode implements DeckdeckgoSlide {

  @Element() el: HTMLElement;

  @Event() slideDidLoad: EventEmitter<void>;

  @Prop() content: string;

  async componentDidLoad() {
    await DeckdeckgoUtils.hideLazyLoadImages(this.el);

    this.initWindowResize();

    await this.initQRCodeSize();

    this.slideDidLoad.emit();
  }

  private initWindowResize() {
    if (window) {
      window.addEventListener('resize', DeckdeckgoUtils.debounce(this.onResizeContent));
    }
  }

  private onResizeContent = async () => {
    await this.initQRCodeSize();

    const element: HTMLElement = this.el.shadowRoot.querySelector('deckgo-qrcode');

    if (element) {
      await (element as any).generate();
    }
  };

  private initQRCodeSize(): Promise<void> {
    return new Promise<void>((resolve) => {
      const container: HTMLElement = this.el.shadowRoot.querySelector('div.deckgo-slide-qrcode');

      if (container) {
        const width: number = container.clientWidth;
        const height: number = container.clientHeight;

        const qrCode: HTMLElement = container.querySelector('deckgo-qrcode');

        if (qrCode) {
          qrCode.style.setProperty('--deckgo-qrcode-size', (width > height ? height : width) + 'px');
        }
      }

      resolve();
    });
  }

  @Method()
  beforeSwipe(_swipeLeft: boolean): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      resolve(true)
    });
  }

  @Method()
  afterSwipe(): Promise<void> {
    return DeckdeckgoSlideUtils.afterSwipe();
  }

  @Method()
  lazyLoadContent(): Promise<void> {
    return DeckdeckgoSlideUtils.lazyLoadContent(this.el);
  }

  render() {
    return <div class="deckgo-slide">
      <slot name="title"></slot>
      <div class="deckgo-slide-qrcode">
        <slot name="content"></slot>
        <deckgo-qrcode content={this.content}></deckgo-qrcode>
      </div>
    </div>;
  }

  hostData() {
    return {
      class: {
        'deckgo-slide-container': true
      }
    }
  }

}
