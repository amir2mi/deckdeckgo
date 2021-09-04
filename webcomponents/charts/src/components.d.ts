/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { DeckdeckgoBarChartData, DeckdeckgoBarChartDataValue } from "@deckdeckgo/types";
export namespace Components {
    interface DeckgoBarChart {
        /**
          * Display multiple graphs and animate the transition between these
         */
        "animation": boolean;
        /**
          * Duration of the transition between graphs
         */
        "animationDuration": number;
        /**
          * Set to `true` in case you would like to load (fetch) the data by yourself. Useful in case your data are protected with a token.
         */
        "customLoader": boolean;
        /**
          * Instead of a source file, source data can also be provided as an array of `DeckdeckgoBarChartData`
         */
        "data": DeckdeckgoBarChartData[];
        /**
          * In case you would like to redraw your chart, for example on resize of the window.
          * @param width
          * @param height
         */
        "draw": (width?: number, height?: number) => Promise<void>;
        /**
          * The height of the chart
         */
        "height": number;
        /**
          * Is animation at the begin of the serie.
         */
        "isBeginning": () => Promise<boolean>;
        /**
          * Is animation at the end of the serie.
         */
        "isEnd": () => Promise<boolean>;
        /**
          * The margin bottom of the chart in pixel
         */
        "marginBottom": number;
        /**
          * The margin left of the chart in pixel
         */
        "marginLeft": number;
        /**
          * The margin right of the chart in pixel
         */
        "marginRight": number;
        /**
          * The margin top of the chart in pixel
         */
        "marginTop": number;
        /**
          * If you are using animation, this method is used to display the next data respectively the next chart.
         */
        "next": () => Promise<void>;
        /**
          * If you "manually" load the data, call this method once the text content fetched.
          * @param content
         */
        "postCustomLoad": (content: string | undefined) => Promise<void>;
        /**
          * If you are using animation, this method is used to display the previous data respectively the previous chart.
         */
        "prev": () => Promise<void>;
        /**
          * The line separator use in your csv file
         */
        "separator": string;
        /**
          * The path to the source file of the data
         */
        "src": string;
        /**
          * This is the method we are using to refresh the current bar chart when an audience is participating to live vote. It will not redraw the axis but it will draw and animate the bars.
          * @param values
         */
        "updateCurrentBar": (values: DeckdeckgoBarChartDataValue[]) => Promise<void>;
        /**
          * The width of the chart
         */
        "width": number;
        /**
          * If `false`, no axis y will be draw.
         */
        "yAxis": boolean;
        /**
          * Set a minimal value for the y Axis. Useful in case the series of data could contains only zeros.
         */
        "yAxisMin": number;
    }
    interface DeckgoLineChart {
        /**
          * Display multiple graphs and animate the transition between these
         */
        "animation": boolean;
        /**
          * Duration of the transition between graphs
         */
        "animationDuration": number;
        /**
          * Draw the area.
         */
        "area": boolean;
        /**
          * Set to `true` in case you would like to load (fetch) the data by yourself. Useful in case your data are protected with a token.
         */
        "customLoader": boolean;
        /**
          * The pattern for the dates. All supported date format: https://date-fns.org/v2.0.0-alpha.26/docs/parse.
         */
        "datePattern": string;
        /**
          * In case you would like to redraw your chart, for example on resize of the window.
          * @param width
          * @param height
         */
        "draw": (width?: number, height?: number) => Promise<void>;
        /**
          * Render a grid behind the chart.
         */
        "grid": boolean;
        /**
          * The height of the chart
         */
        "height": number;
        /**
          * Is animation at the begin of the serie.
         */
        "isBeginning": () => Promise<boolean>;
        /**
          * Is animation at the end of the serie.
         */
        "isEnd": () => Promise<boolean>;
        /**
          * The margin bottom of the chart in pixel
         */
        "marginBottom": number;
        /**
          * The margin left of the chart in pixel
         */
        "marginLeft": number;
        /**
          * The margin right of the chart in pixel
         */
        "marginRight": number;
        /**
          * The margin top of the chart in pixel
         */
        "marginTop": number;
        /**
          * If you are using animation, this method is used to display the next data respectively the next chart.
         */
        "next": () => Promise<void>;
        "postCustomLoad": (content: string | undefined) => Promise<void>;
        /**
          * If you are using animation, this method is used to display the previous data respectively the previous chart.
         */
        "prev": () => Promise<void>;
        /**
          * The line separator use in your csv file
         */
        "separator": string;
        /**
          * Render smooth lines or with edges.
         */
        "smooth": boolean;
        /**
          * The path to the source file of the data
         */
        "src": string;
        /**
          * Render ticks on the axes.
         */
        "ticks": number;
        /**
          * The width of the chart
         */
        "width": number;
        /**
          * The y axis behavior.
         */
        "yAxisDomain": string;
    }
    interface DeckgoPieChart {
        /**
          * Display multiple graphs and animate the transition between these
         */
        "animation": boolean;
        /**
          * Duration of the transition between graphs
         */
        "animationDuration": number;
        /**
          * Set to `true` in case you would like to load (fetch) the data by yourself. Useful in case your data are protected with a token.
         */
        "customLoader": boolean;
        /**
          * In case you would like to redraw your chart, for example on resize of the window.
          * @param width
          * @param height
         */
        "draw": (width?: number, height?: number) => Promise<void>;
        /**
          * The height of the chart
         */
        "height": number;
        /**
          * The inner radius of the pie
         */
        "innerRadius": number;
        /**
          * Is animation at the begin of the serie.
         */
        "isBeginning": () => Promise<boolean>;
        /**
          * Is animation at the end of the serie.
         */
        "isEnd": () => Promise<boolean>;
        /**
          * The margin bottom of the chart in pixel
         */
        "marginBottom": number;
        /**
          * The margin left of the chart in pixel
         */
        "marginLeft": number;
        /**
          * The margin right of the chart in pixel
         */
        "marginRight": number;
        /**
          * The margin top of the chart in pixel
         */
        "marginTop": number;
        /**
          * If you are using animation, this method is used to display the next data respectively the next chart.
         */
        "next": () => Promise<void>;
        "postCustomLoad": (content: string | undefined) => Promise<void>;
        /**
          * If you are using animation, this method is used to display the previous data respectively the previous chart.
         */
        "prev": () => Promise<void>;
        /**
          * The line separator use in your csv file
         */
        "separator": string;
        /**
          * The path to the source file of the data
         */
        "src": string;
        /**
          * The width of the chart
         */
        "width": number;
    }
}
declare global {
    interface HTMLDeckgoBarChartElement extends Components.DeckgoBarChart, HTMLStencilElement {
    }
    var HTMLDeckgoBarChartElement: {
        prototype: HTMLDeckgoBarChartElement;
        new (): HTMLDeckgoBarChartElement;
    };
    interface HTMLDeckgoLineChartElement extends Components.DeckgoLineChart, HTMLStencilElement {
    }
    var HTMLDeckgoLineChartElement: {
        prototype: HTMLDeckgoLineChartElement;
        new (): HTMLDeckgoLineChartElement;
    };
    interface HTMLDeckgoPieChartElement extends Components.DeckgoPieChart, HTMLStencilElement {
    }
    var HTMLDeckgoPieChartElement: {
        prototype: HTMLDeckgoPieChartElement;
        new (): HTMLDeckgoPieChartElement;
    };
    interface HTMLElementTagNameMap {
        "deckgo-bar-chart": HTMLDeckgoBarChartElement;
        "deckgo-line-chart": HTMLDeckgoLineChartElement;
        "deckgo-pie-chart": HTMLDeckgoPieChartElement;
    }
}
declare namespace LocalJSX {
    interface DeckgoBarChart {
        /**
          * Display multiple graphs and animate the transition between these
         */
        "animation"?: boolean;
        /**
          * Duration of the transition between graphs
         */
        "animationDuration"?: number;
        /**
          * Set to `true` in case you would like to load (fetch) the data by yourself. Useful in case your data are protected with a token.
         */
        "customLoader"?: boolean;
        /**
          * Instead of a source file, source data can also be provided as an array of `DeckdeckgoBarChartData`
         */
        "data"?: DeckdeckgoBarChartData[];
        /**
          * The height of the chart
         */
        "height"?: number;
        /**
          * The margin bottom of the chart in pixel
         */
        "marginBottom"?: number;
        /**
          * The margin left of the chart in pixel
         */
        "marginLeft"?: number;
        /**
          * The margin right of the chart in pixel
         */
        "marginRight"?: number;
        /**
          * The margin top of the chart in pixel
         */
        "marginTop"?: number;
        /**
          * The event to be processed to load the data if you are using a custom loader.
          * @private
         */
        "onChartCustomLoad"?: (event: CustomEvent<string>) => void;
        /**
          * Emit the random colors that are generated for the charts.
         */
        "onChartRandomColor"?: (event: CustomEvent<string[]>) => void;
        /**
          * The line separator use in your csv file
         */
        "separator"?: string;
        /**
          * The path to the source file of the data
         */
        "src"?: string;
        /**
          * The width of the chart
         */
        "width"?: number;
        /**
          * If `false`, no axis y will be draw.
         */
        "yAxis"?: boolean;
        /**
          * Set a minimal value for the y Axis. Useful in case the series of data could contains only zeros.
         */
        "yAxisMin"?: number;
    }
    interface DeckgoLineChart {
        /**
          * Display multiple graphs and animate the transition between these
         */
        "animation"?: boolean;
        /**
          * Duration of the transition between graphs
         */
        "animationDuration"?: number;
        /**
          * Draw the area.
         */
        "area"?: boolean;
        /**
          * Set to `true` in case you would like to load (fetch) the data by yourself. Useful in case your data are protected with a token.
         */
        "customLoader"?: boolean;
        /**
          * The pattern for the dates. All supported date format: https://date-fns.org/v2.0.0-alpha.26/docs/parse.
         */
        "datePattern"?: string;
        /**
          * Render a grid behind the chart.
         */
        "grid"?: boolean;
        /**
          * The height of the chart
         */
        "height"?: number;
        /**
          * The margin bottom of the chart in pixel
         */
        "marginBottom"?: number;
        /**
          * The margin left of the chart in pixel
         */
        "marginLeft"?: number;
        /**
          * The margin right of the chart in pixel
         */
        "marginRight"?: number;
        /**
          * The margin top of the chart in pixel
         */
        "marginTop"?: number;
        /**
          * The event to be processed to load the data if you are using a custom loader.
          * @private
         */
        "onChartCustomLoad"?: (event: CustomEvent<string>) => void;
        /**
          * Emit the random colors that are generated for the charts.
         */
        "onChartRandomColor"?: (event: CustomEvent<string[]>) => void;
        /**
          * The line separator use in your csv file
         */
        "separator"?: string;
        /**
          * Render smooth lines or with edges.
         */
        "smooth"?: boolean;
        /**
          * The path to the source file of the data
         */
        "src"?: string;
        /**
          * Render ticks on the axes.
         */
        "ticks"?: number;
        /**
          * The width of the chart
         */
        "width"?: number;
        /**
          * The y axis behavior.
         */
        "yAxisDomain"?: string;
    }
    interface DeckgoPieChart {
        /**
          * Display multiple graphs and animate the transition between these
         */
        "animation"?: boolean;
        /**
          * Duration of the transition between graphs
         */
        "animationDuration"?: number;
        /**
          * Set to `true` in case you would like to load (fetch) the data by yourself. Useful in case your data are protected with a token.
         */
        "customLoader"?: boolean;
        /**
          * The height of the chart
         */
        "height"?: number;
        /**
          * The inner radius of the pie
         */
        "innerRadius"?: number;
        /**
          * The margin bottom of the chart in pixel
         */
        "marginBottom"?: number;
        /**
          * The margin left of the chart in pixel
         */
        "marginLeft"?: number;
        /**
          * The margin right of the chart in pixel
         */
        "marginRight"?: number;
        /**
          * The margin top of the chart in pixel
         */
        "marginTop"?: number;
        /**
          * The event to be processed to load the data if you are using a custom loader.
          * @private
         */
        "onChartCustomLoad"?: (event: CustomEvent<string>) => void;
        /**
          * Emit the random colors that are generated for the charts.
         */
        "onChartRandomColor"?: (event: CustomEvent<string[]>) => void;
        /**
          * The line separator use in your csv file
         */
        "separator"?: string;
        /**
          * The path to the source file of the data
         */
        "src"?: string;
        /**
          * The width of the chart
         */
        "width"?: number;
    }
    interface IntrinsicElements {
        "deckgo-bar-chart": DeckgoBarChart;
        "deckgo-line-chart": DeckgoLineChart;
        "deckgo-pie-chart": DeckgoPieChart;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "deckgo-bar-chart": LocalJSX.DeckgoBarChart & JSXBase.HTMLAttributes<HTMLDeckgoBarChartElement>;
            "deckgo-line-chart": LocalJSX.DeckgoLineChart & JSXBase.HTMLAttributes<HTMLDeckgoLineChartElement>;
            "deckgo-pie-chart": LocalJSX.DeckgoPieChart & JSXBase.HTMLAttributes<HTMLDeckgoPieChartElement>;
        }
    }
}
