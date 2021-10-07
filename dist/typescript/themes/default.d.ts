import 'typeface-public-sans';
export declare const spacingInsetValues: {
    quarck: number;
    nano: number;
    xs: number;
    sm: number;
    md: number;
    lg: number;
};
declare const theme: {
    colors: {
        primaryDarkest: string;
        primaryDark: string;
        primaryBase: string;
        primaryLight: string;
        primaryLightest: string;
        black: string;
        neutralDarkest: string;
        neutralDark: string;
        neutralBase: string;
        neutralLight: string;
        neutralLightest: string;
        white: string;
        feedbackErrorDark: string;
        feedbackErrorBase: string;
        feedbackErrorLight: string;
        feedbackInfoDark: string;
        feedbackInfoBase: string;
        feedbackInfoLight: string;
        feedbackSuccessDark: string;
        feedbackSuccessBase: string;
        feedbackSuccessLight: string;
        feedbackWarningDark: string;
        feedbackWarningBase: string;
        feedbackWarningLight: string;
        highlight01Dark: string;
        highlight01Base: string;
        highlight01Light: string;
        highlight02Dark: string;
        highlight02Base: string;
        highlight02Light: string;
        highlight03Dark: string;
        highlight03Base: string;
        highlight03Light: string;
        highlight04Dark: string;
        highlight04Base: string;
        highlight04Light: string;
        highlight05Dark: string;
        highlight05Base: string;
        highlight05Light: string;
    };
    spacing: {
        quarck: number;
        nano: number;
        xs: number;
        sm: number;
        md: number;
        lg: number;
    };
    breakpoints: {
        phone: number;
        tablet: number;
    };
    textVariants: {
        bold: {
            fontFamily: string;
            fontWeight: string;
        };
        semibold: {
            fontFamily: string;
            fontWeight: string;
        };
        medium: {
            fontFamily: string;
            fontWeight: string;
        };
        regular: {
            fontFamily: string;
            fontWeight: string;
        };
    };
    borderRadii: {
        none: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
        pill: number;
        circular: number;
    };
};
export declare type Theme = typeof theme;
export default theme;
export declare const colors: CustomColors[];
export declare const fontSizes: CustomFontSize[];
export declare const lineHeights: CustomLineHeight[];
export declare const letterSpacings: CustomLetterSpacing[];
export declare const opacities: CustomOpacity[];
export declare const shadows: CustomShadow[];
export declare const spacings: CustomSpacing[];
export declare const spacingsInset: CustomSpacingInset[];
export declare const sizes: CustomSize[];
export declare const borderWidthValues: {
    none: number;
    hairline: number;
    thin: number;
    thick: number;
    heavy: number;
};
export declare const fontSizeValues: {
    details: number;
    xxxxs: number;
    xxxs: number;
    xxs: number;
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
    xxxl: number;
    xxxxl: number;
    giant: number;
    display: number;
};
export declare const lineHeightValues: {
    superdistant: string;
    distant: string;
    medium: string;
    tight: string;
};
export declare const letterSpacingValues: {
    superdistant: number;
    distant: number;
    medium: number;
    tight: number;
};
export declare const opacityValues: {
    semiopaque: number;
    intense: number;
    medium: number;
    light: number;
    semitransparent: number;
};
export declare const shadowOffsetValues: {
    near: {
        width: number;
        height: number;
    };
    medium: {
        width: number;
        height: number;
    };
    distant: {
        width: number;
        height: number;
    };
    superdistant: {
        width: number;
        height: number;
    };
};
export declare const shadowOpacityValues: {
    near: number;
    medium: number;
    distant: number;
    superdistant: number;
};
export declare const shadowRadiusValues: {
    near: number;
    medium: number;
    distant: number;
    superdistant: number;
};
export declare const spacingValues: {
    quarck: number;
    nano: number;
    xxxs: number;
    xxs: number;
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
    xxxl: number;
    huge: number;
    giant: number;
};
export declare const sizeValues: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
    xxxl: number;
};
export declare const borderWidth: {
    property: "bw";
    themeKey: undefined;
    variant: boolean;
    func: import("@shopify/restyle").RestyleFunction<Record<string, any>, import("@shopify/restyle").BaseTheme, "borderWidth" | "bw">;
};
export declare const fontSize: {
    property: "fs";
    themeKey: undefined;
    variant: boolean;
    func: import("@shopify/restyle").RestyleFunction<Record<string, any>, import("@shopify/restyle").BaseTheme, "fontSize" | "fs">;
};
export declare const lineHeight: {
    property: "lh";
    themeKey: undefined;
    variant: boolean;
    func: import("@shopify/restyle").RestyleFunction<Record<string, any>, import("@shopify/restyle").BaseTheme, "lineHeight" | "lh">;
};
export declare const letterSpacing: {
    property: "ls";
    themeKey: undefined;
    variant: boolean;
    func: import("@shopify/restyle").RestyleFunction<Record<string, any>, import("@shopify/restyle").BaseTheme, "letterSpacing" | "ls">;
};
export declare const opacity: {
    property: "op";
    themeKey: undefined;
    variant: boolean;
    func: import("@shopify/restyle").RestyleFunction<Record<string, any>, import("@shopify/restyle").BaseTheme, "opacity" | "op">;
};
export declare const shadowOffset: {
    property: "sof";
    themeKey: undefined;
    variant: boolean;
    func: import("@shopify/restyle").RestyleFunction<Record<string, any>, import("@shopify/restyle").BaseTheme, "shadowOffset" | "sof">;
};
export declare const shadowRadius: {
    property: "sr";
    themeKey: undefined;
    variant: boolean;
    func: import("@shopify/restyle").RestyleFunction<Record<string, any>, import("@shopify/restyle").BaseTheme, "shadowRadius" | "sr">;
};
export declare const shadowOpacity: {
    property: "sop";
    themeKey: undefined;
    variant: boolean;
    func: import("@shopify/restyle").RestyleFunction<Record<string, any>, import("@shopify/restyle").BaseTheme, "shadowOpacity" | "sop">;
};
