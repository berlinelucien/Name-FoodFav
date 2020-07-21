import React from "react";
import { pages } from "./App";

interface CommunityScreenProps {
  changePage: (page: pages) => void;
}

export class CommunityPage extends React.Component<CommunityScreenProps> {
  render() {
    return (
      <div>
        <h1>Community</h1>
      </div>
    );
  }
}
