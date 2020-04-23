import React from "react";
import "./Tile.css";
import { animated, useSpring } from "react-spring";

export interface TileProps {
  val: number;
  blink: boolean;
  color: string;
  updateTile: (tileIndex: number, value: boolean) => void;
  submitTile: (tileIndex: number) => void;
}

interface TileState {
  blink: boolean;
}

interface AnimationTileProps {
  animationView: JSX.Element;
  blink: boolean;
  onAnimationEnd: () => void;
}

function AnimateTile(props: AnimationTileProps) {
  const springProps = useSpring({
    from: {
      opacity: 1,
    },
    to: async (next: any) => {
      if (props.blink) {
        await next({ opacity: 0 });
        await next({ opacity: 1 });
        props.onAnimationEnd();
      }
    },
    config: { duration: 200 },
  });
  return (
    <div>
      <animated.div className="script-box" style={springProps}>
        {props.animationView}
      </animated.div>
    </div>
  );
}

export default class Tile extends React.Component<TileProps, TileState> {
  constructor(props: any) {
    super(props);
    this.state = {
      blink: false,
    };
  }

  render() {
    return (
      <div onClick={this.props.submitTile.bind(this, this.props.val, true)}>
        <AnimateTile
          animationView={
            <div className="Tile" style={{ backgroundColor: this.props.color }}>
              <p>{this.props.val}</p>
            </div>
          }
          blink={this.props.blink}
          onAnimationEnd={this.props.updateTile.bind(
            this,
            this.props.val,
            false
          )}
        />
      </div>
    );
  }
}
