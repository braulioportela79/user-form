import "styled-components";
import { ThemeColors } from "styles/global";

type ThemeInterface = typeof ThemeColors;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeInterface {}
}
