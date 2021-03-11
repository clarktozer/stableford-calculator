export enum ThemeType {
    Dark = "dark",
    Light = "light"
}

export const ThemeCookie = "sctheme";

export const FrontNine = Array.from({ length: 9 }, (_, i) => i + 1);

export const BackNine = Array.from({ length: 9 }, (_, i) => i + 10);

export const PointsState = Array.from({ length: 18 }, () => 0);
