import React from "react";
import TileContainer from "../Tile/TileContainer";
import { PlayingState } from "./GameState";
import { pages } from "../App";
interface GameProps {
  pattern: Array<number>;
  playingState: PlayingState;
  addValueToPattern: () => void;
  changePage: (nextPage: pages) => void;
  startGame: () => void;
  startNextRound: (prevState: PlayingState) => void;
  showPattern: () => void;
}

export class GamePage extends React.Component<GameProps> {
  public componentDidMount() {
    this.props.startGame();
  }

  public componentDidUpdate(prevProps: GameProps) {
    this.props.startNextRound(prevProps.playingState);
    if (this.props.playingState === PlayingState.GameOver) {
      this.props.changePage(pages.ResultsPage);
    }
  }

  render() {
    return (
      <div>
        <table cellSpacing={10}>
          <tbody>
            <tr>
              <td>
                <TileContainer val={0} color={"blue"} />
              </td>
              <td>
                <TileContainer val={1} color={"green"} />
              </td>
            </tr>
            <tr>
              <td>
                <TileContainer val={2} color={"orange"} />
              </td>
              <td>
                <TileContainer val={3} color={"red"} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
