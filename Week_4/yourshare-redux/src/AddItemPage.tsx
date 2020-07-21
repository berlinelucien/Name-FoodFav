import React from "react";
import { pages } from "./App";

interface AddItemScreenProps {
  changePage: (page: pages) => void;
}

export class AddItemPage extends React.Component<AddItemScreenProps> {
  render() {
    return (
      <div>
        <h1>Add item</h1>
      </div>
    );
  }
}