import React from "react";
import { pages } from "./App";
import ItemList from "./components/ItemList/ItemList"

import { IYourShareState, IPerson } from './redux/types';
import { connect } from 'react-redux';

interface WelcomeScreenProps {
  changePage: (page: pages) => void;
  you: IPerson;
}

class WelcomePage extends React.Component<WelcomeScreenProps> {
  render() {
    return (
      <div>
        <h1>Welcome, {this.props.you.name}</h1>
        <ItemList />
        <p onClick={(e) => this.props.changePage(pages.AddItemPage)}>
          Add item
          </p>
        <p onClick={(e) => this.props.changePage(pages.CommunityPage)}>
          Community
          </p>
      </div>
    );
  }
}

// Map redux state to component state
// This function subscribes to all store updates and gets called when
// anything in the store changes. It return an object containing the store data you
// want to transmit as props to a component
// Here an object containing countValue is transmitted
function mapStateToProps(state: IYourShareState) {
  return {
    you: state.currentUser // "currentUser" in Redux state is 'you' on this page
  }
}

// Map redux actions to component props
// This function returns an object with 2 functions that the component can call
// increase... fires a dispatch with increase... as a type
function mapDispatchToProps(dispatch: any) {
  return {
    // no actions on this page / screen
  }
}

// The Hight Order Component (HOC)
// props need to be recived by the component
const connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(WelcomePage);

export { connectedComponent as WelcomePage }
