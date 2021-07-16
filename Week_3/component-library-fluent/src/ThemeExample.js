import React from "react";
import { createTheme } from "@fluentui/react";
import {
  Customizations,
  DefaultButton,
  PrimaryButton,
  Toggle,
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

class MyContent extends React.Component {
  render() {
    Customizations.applySettings({ theme: myTheme });
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

class ThemeExample extends React.Component {
  render() {
    return (
      <div className="App">
        <p>Hello world!</p>

        <MyContent />
      </div>
    );
  }
}
export default ThemeExample;
