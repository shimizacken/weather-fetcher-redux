export type Styles = {
  'detailsWrapper': string;
  'cityName': string;
  'country': string;
}

export type ClassesType = keyof Styles;

declare const styles: Styles;

export default styles;
