export type Styles = {
  'mainDetailsWrapper': string;
  'temperature': string;
  'iconWrapper': string;
  'currentDescription': string;
  'sss': string;
}

export type ClassesType = keyof Styles;

declare const styles: Styles;

export default styles;
