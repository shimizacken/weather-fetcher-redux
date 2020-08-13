export type Styles = {
  'buttons': string;
  'cancelButton': string;
}

export type ClassesType = keyof Styles;

declare const styles: Styles;

export default styles;
