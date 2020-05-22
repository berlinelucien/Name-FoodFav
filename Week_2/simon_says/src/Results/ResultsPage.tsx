import React from "react";
import Cookies from "universal-cookie";

interface ResultsProps {
  url?: string;
  score: number;
  getUrl: () => void;
}
export default class ResultsPage extends React.Component<ResultsProps> {
  public componentWillMount() {
    this.props.getUrl();
    const cookies = new Cookies();
    const highScore: number = cookies.get("highScore") || 0;
    if (highScore < this.props.score) {
      cookies.set("highScore", this.props.score);
      this.highScore = this.props.score;
    } else {
      this.highScore = highScore;
    }
  }

  render() {
    return (
      <div>
        <p>Game Over</p>
        <p>score={this.props.score}</p>
        <p>highScore={this.highScore}</p>
        <p
          onClick={() => {
            window.location.reload();
          }}
        >
          Restart
        </p>
        <img src={this.props.url} alt={"smiley.gif"}></img>
      </div>
    );
  }

  private highScore: number = 0;
}
