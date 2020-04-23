import { connect } from "react-redux";
import Tile from "../Tile/Tile";
import { GameState } from "../Game/GameState";
import { updateTile, submitTile } from "../Game/GameActions";

interface OwnProps {
  val: number;
}
const mapStateToProps = (state: GameState, ownProps: any) => {
  return {
    val: ownProps.val,
    blink: state.tiles[ownProps.val],
    playingState: state.playingState,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateTile: (tileIndex: number, value: boolean) => {
      dispatch(updateTile(tileIndex, value));
    },
    submitTile: (tileIndex: number) => {
      dispatch(submitTile(tileIndex));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tile);
