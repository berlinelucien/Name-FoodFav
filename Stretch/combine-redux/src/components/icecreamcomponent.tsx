import React from 'react'
import { connect } from 'react-redux'
import { createBuyIcecreamAction } from "../redux/actions";

interface IIcecreamProps {
  numIcecreamProps: number,
  buyIcecreamProps: (n: number) => number;
}

class Icecream extends React.Component<IIcecreamProps> {

  handleClick = (event: React.MouseEvent<HTMLButtonElement>) => 
  {
    event.preventDefault();
    console.log("add icecream");
    this.props.buyIcecreamProps(2);
  };

  render() {
    return (
      <div>
        <h1>Buy Icecream</h1>
        <h2>Number of icecream - {this.props.numIcecreamProps} </h2>
        <button onClick={this.handleClick}>Buy Icecream</button>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => {
  console.log("mapStateToProps");
  console.log(state);
  console.log(state.icecream.numIcecream);
  return {
    numIcecreamProps: state.icecream.numIcecream
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    buyIcecreamProps: (n: number) => dispatch(createBuyIcecreamAction(n))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Icecream)