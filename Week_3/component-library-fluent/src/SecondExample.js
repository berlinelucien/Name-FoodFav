import * as React from "react";

import { Component } from "react";
import { Persona } from "@fluentui/react";
import { Stack } from "@fluentui/react";

const SecondExample = () => {
  return (
    <div style={{ height: "360px" }}>
      <Stack tokens={{ childrenGap: "20px" }}>
        <MyPersona
          imageUrl="https://www.bing.com/th?id=OIP.IBGgSiBlFVOG5aIwRa3vuQHaEJ&w=228&h=133&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
          text="Tom Riddle"
          secondaryText="He Who Must Not Be Named"
        />
        <MyPersona
          imageUrl="https://www.bing.com/th?id=OIP.kqk76MIGNb-kPWlnTk8bHQHaJq&w=76&h=106&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
          text="Harry Potter"
          secondaryText="The Boy Who Lived"
        />
        <MyPersona
          imageUrl="https://www.bing.com/th?id=OIP.MwFnJTZb07cS0nTztgzOkgAAAA&w=100&h=110&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
          text="Ron Weasley"
          secondaryText="Friend Of Harry and Hermione"
        />
        <MyPersona
          imageUrl="https://www.bing.com/th?id=OIP.HQyCBZXEv7g0PBDLUWAkzAHaJe&w=75&h=100&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
          text="Hermione Granger"
          secondaryText="Bails Out Ron And Harry A Lot"
        />
      </Stack>
    </div>
  );
};

class MyPersona extends Component {
  constructor(props) {
    super(props);
    this.state = {
      click_count: 0,
    };
  }

  moveToNextText = () => {
    console.log("this.state.click_count is: " + this.state.click_count);
    this.setState((state) => ({ click_count: state.click_count + 1 }));
  };

  render() {
    return (
      <div id="persona-container">
        <Persona
          imageUrl={this.props.imageUrl}
          text={this.props.text}
          secondaryText={
            this.props.secondaryText +
            " | You clicked this " +
            this.state.click_count.toString() +
            " times!"
          }
          onClick={this.moveToNextText}
        />
      </div>
    );
  }
}

export default SecondExample;
