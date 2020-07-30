import React from 'react'
import { connect } from 'react-redux'
import { createBuyCakeAction } from "../redux/actions";

interface ICakeProps {
  numCakeProps: number,
  buyCakeProps: (n: number) => number;
}

class Cake extends React.Component<ICakeProps> {

  handleClick = (event: React.MouseEvent<HTMLButtonElement>) => 
  {
    event.preventDefault();
    console.log("add cake");
    this.props.buyCakeProps(1);
  };

  render() {
    return (
      <div>
        <h1>Buy Cake</h1>
        <h2>Number of cakes - {this.props.numCakeProps} </h2>
        <button onClick={this.handleClick}>Buy Cake</button>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => {
  console.log("mapStateToProps");
  console.log(state);
  console.log(state.cake.numCake);
  return {
    numCakeProps: state.cake.numCake
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    buyCakeProps: (n: number) => dispatch(createBuyCakeAction(n))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cake)