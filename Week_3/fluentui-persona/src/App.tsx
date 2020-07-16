import React from 'react';
import { Persona } from "@fluentui/react"

class App extends React.Component {

  public render() {
    return (
      <div className="App">
        <h1>Hello Component Library!</h1>
        <h2>This example has everything in a single .TSX file</h2>
        <div style={{ backgroundColor: "yellow" }}> {/* Div is here only to highlight where the component starts & ends*/}
          <div id="persona-container">       {/* DO WE REALLY NEED THIS??????? */}
            <Persona
              text="Text"
              secondaryText="Secondary Text"
              imageUrl="https://th.bing.com/th/id/OIP.x8Jwnqge_gR1-412yihxJQHaHa?w=177&h=173&c=7&o=5&dpr=1.25&pid=1.7"
            />
          </div>
        </div>
      </div >
    );
  }
}
export default App;