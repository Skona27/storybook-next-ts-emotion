export declare type IColor = "white" | "dark_blue" | "light_blue" | "grey" | "light_grey";
export declare type IBreakpoint = "fromTablet" | "fromDesktop";
export declare type IColors = {
    [Key in IColor]: string;
};
export declare type IBreakpoints = {
    [Key in IBreakpoint]: string;
};
export interface ITheme {
    colors: IColors;
    bp: IBreakpoints;
}
