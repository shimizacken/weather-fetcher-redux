export type Styles = {
  'container': string;
  'checkmark': string;
  'disabled': string;
}

export type ClassesType = keyof Styles;

declare const styles: Styles;

export default styles;
