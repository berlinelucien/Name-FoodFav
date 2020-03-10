import { connect } from "react-redux";
import { App } from "./App";
import { addListItem } from "./actions";

const mapStateToProps = (state: any) => {
    return {
        list: state.list
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        addListItem: (item: string) => dispatch(addListItem(item))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
