import 'styled-components';
import { darkTheme } from './colors';

export type Theme = typeof darkTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
