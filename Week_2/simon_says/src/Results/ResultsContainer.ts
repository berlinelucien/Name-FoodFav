import { GameState } from "../Game/GameState";
import { connect } from "react-redux";
import ResultsPage from "./ResultsPage";
import { getCatPicture } from "../Game/GameActions";

const mapStateToProps = (state: GameState) => {
  return {
    url: state.catPictureUrl,
    score: state.score
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getUrl: () => dispatch(getCatPicture())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultsPage);
