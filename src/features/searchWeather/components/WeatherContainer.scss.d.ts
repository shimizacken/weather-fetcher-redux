export type Styles = {
  'mainWeatherWrapper': string;
  'innerWrapper': string;
  'resultsWrapper': string;
}

export type ClassesType = keyof Styles;

declare const styles: Styles;

export default styles;
