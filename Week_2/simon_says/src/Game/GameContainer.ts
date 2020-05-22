import { connect } from "react-redux";
import { GameState, PlayingState } from "./GameState";
import { GamePage } from "./GamePage";
import {
  addValueToPattern,
  showPattern,
  startNextRound,
  startGame,
} from "./GameActions";

const mapStateToProps = (state: GameState) => {
  return {
    pattern: state.pattern,
    playingState: state.playingState,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    addValueToPattern: () => {
      dispatch(addValueToPattern());
    },
    startGame: () => {
      dispatch(startGame());
    },
    startNextRound: (prevState: PlayingState) => {
      dispatch(startNextRound(prevState));
    },
    showPattern: () => {
      dispatch(showPattern());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
