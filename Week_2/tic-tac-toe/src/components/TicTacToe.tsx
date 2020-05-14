import * as React from 'react';
import { GridRow } from './GridRow';
import { TicTacToeState, Player, GameWinner, BoxVal } from '../redux-components/GameStore';
import { Dispatch } from 'redux';
import { MarkBox, FindWinner, ResetGame } from '../redux-components/Actions';
import { connect } from 'react-redux';
import './TicTacToe.css';

export interface TicTacToeDataProps {
    gridVals: BoxVal[];
    currentPlayer: Player;
    gameWinner: GameWinner;
}

export interface TicTacToeCallbackProps {
    onBoxClick: (position: number) => void;
    onResetClick: () => void
}

export type TicTacToeProps = TicTacToeDataProps & TicTacToeCallbackProps;

const TicTacToe: React.FC<TicTacToeProps> = (props: TicTacToeProps) => {
    return (
        <>
            <h2>{
                !props.gameWinner
                ? `Current player: ${props.currentPlayer}`
                : `Game over. ${props.gameWinner === 'tie' ? 'It\'s a tie 👔': `Winner: Player ${props.gameWinner} 🎉`}`
            }</h2>
            <GridRow rowVals={props.gridVals.slice(0,3)} rowIndex={0} onBoxClick={props.onBoxClick}/>
            <GridRow rowVals={props.gridVals.slice(3,6)} rowIndex={1} onBoxClick={props.onBoxClick}/>
            <GridRow rowVals={props.gridVals.slice(6,9)} rowIndex={2} onBoxClick={props.onBoxClick}/>
            {props.gameWinner ? <button onClick={props.onResetClick} className="btn">RESET</button> : null}
        </>
    )
}

const mapStateToProps = (state: TicTacToeState): TicTacToeDataProps => {
    return {
        gridVals: state.boxVals,
        currentPlayer: state.currentPlayer,
        gameWinner: state.gameWinner
    }
}

const mapDispatchToProps = (dispatch: Dispatch): TicTacToeCallbackProps => {
    return {
        onBoxClick: (position: number) => {
            dispatch(MarkBox(position));
            dispatch(FindWinner());
        },
        onResetClick: () => {
            dispatch(ResetGame());
        }
    }
}

export const ConnectedTicTacToe = connect(mapStateToProps, mapDispatchToProps)(TicTacToe);
