const { colors } = require("@apollo/space-kit/colors");

exports.colors = {
    primary: colors.indigo.dark,
    primaryLight: colors.indigo.lighter,
    secondary: colors.pink.base,
    tertiary: colors.teal.dark,
    tertiaryLight: colors.teal.base,
    divider: colors.silver.dark,
    background: colors.silver.light,
    background2: colors.silver.base,
    text1: colors.black.lighter,
    text2: colors.grey.dark,
    text3: colors.grey.light,
    text4: colors.silver.darker,
    warning: colors.yellow.base,
    shadow: colors.black.darker,
    highlight: colors.blue.base,
    highlight2: colors.blue.lighter,
    highlight3: colors.blue.lightest,
    hoverOpacity: 0.8
};

exports.customizedColorScheme = {
    primary: primaryThemeColor || colors.grey.dark,
    primaryLight: primaryLightColor || colors.silver.lighter,
    secondary: secondaryColor || colors.indigo.base,
    tertiary: tertiaryColor || colors.teal.dark,
    tertiaryLight: tertiaryLightColor || colors.teal.base,
    divider: dividerColor || colors.silver.dark,
    background: backgroundColor || colors.silver.light,
    background2: background2Color || colors.silver.base,
    text1: text1Color || colors.black.lighter,
    text2: text2Color || colors.grey.dark,
    text3: text3Color || colors.grey.light,
    text4: text4Color || colors.silver.darker,
    warning: warningColor || colors.yellow.base,
    shadow: shadowColor || colors.black.darker,
    highlight: highlightColor || colors.blue.base,
    highlight2: highlight2Color || colors.blue.lighter,
    highlight3: highlight3Color || colors.blue.lightest,
    hoverOpacity: hoverOpacityColor || 0.8
};
