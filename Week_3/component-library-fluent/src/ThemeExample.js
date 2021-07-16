import React from "react";
import { createTheme } from "@fluentui/react";
import {
  ThemeProvider,
  DefaultButton,
  PrimaryButton,
  Toggle,
  Separator,
} from "@fluentui/react";

const myTheme = createTheme({
  palette: {
    themePrimary: "#006603",
    themeLighterAlt: "#eff9ef",
    themeLighter: "#c2e7c3",
    themeLight: "#92d194",
    themeTertiary: "#41a345",
    themeSecondary: "#0e7812",
    themeDarkAlt: "#005c03",
    themeDark: "#004e03",
    themeDarker: "#003902",
    neutralLighterAlt: "#faf9f8",
    neutralLighter: "#f3f2f1",
    neutralLight: "#edebe9",
    neutralQuaternaryAlt: "#e1dfdd",
    neutralQuaternary: "#d0d0d0",
    neutralTertiaryAlt: "#c8c6c4",
    neutralTertiary: "#becbef",
    neutralSecondary: "#849cdf",
    neutralPrimaryAlt: "#5375d0",
    neutralPrimary: "#4065c9",
    neutralDark: "#314d99",
    black: "#243971",
    white: "#ffffff",
  },
});

class ThemedExample extends React.Component {
  render() {
    return (
      <div>
        <ThemeProvider theme={myTheme}>
          <DefaultButton text="DefaultButton" />
          <PrimaryButton text="PrimaryButton" />
          <Toggle label="Enabled" />
          <Toggle label="Disabled" disabled={true} />
        </ThemeProvider>
      </div>
    );
  }
}

class NormalExample extends React.Component {
  render() {
    return (
      <div>
        <DefaultButton text="DefaultButton" />
        <PrimaryButton text="PrimaryButton" />
        <Toggle label="Enabled" />
        <Toggle label="Disabled" disabled={true} />
      </div>
    );
  }
}

const headacheTheme = createTheme({
  palette: {
    themePrimary: "#f20a57",
    themeLighterAlt: "#fef5f8",
    themeLighter: "#fdd6e3",
    themeLight: "#fbb3cb",
    themeTertiary: "#f76998",
    themeSecondary: "#f4266a",
    themeDarkAlt: "#da094e",
    themeDark: "#b80742",
    themeDarker: "#880531",
    neutralLighterAlt: "#dedfe7",
    neutralLighter: "#dadce3",
    neutralLight: "#d1d3da",
    neutralQuaternaryAlt: "#c3c4cb",
    neutralQuaternary: "#babbc2",
    neutralTertiaryAlt: "#b2b4ba",
    neutralTertiary: "#f1fcc2",
    neutralSecondary: "#e4f987",
    neutralPrimaryAlt: "#d8f651",
    neutralPrimary: "#d3f53b",
    neutralDark: "#a0ba2d",
    black: "#768921",
    white: "#e4e6ed",
  },
});

class HeadacheExample extends React.Component {
  render() {
    return (
      <div>
        <ThemeProvider theme={headacheTheme}>
          <DefaultButton text="DefaultButton" />
          <PrimaryButton text="PrimaryButton" />
          <Toggle label="Enabled" />
          <Toggle label="Disabled" disabled={true} />
        </ThemeProvider>
      </div>
    );
  }
}
class ThirdExample extends React.Component {
  render() {
    return (
      <div>
        <Separator>'Normal', unstyled FluentUI:</Separator>
        <NormalExample />
        <Separator>Styled FluentUI:</Separator>
        <ThemedExample />
        <Separator>Headache Inducing Style:</Separator>
        <HeadacheExample />
      </div>
    );
  }
}
export default ThirdExample;
