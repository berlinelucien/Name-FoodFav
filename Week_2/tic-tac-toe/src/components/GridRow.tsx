import * as React from 'react';
import './GridRow.css';
import { BoxVal } from '../redux-components/GameStore';

export interface GridRowProps {
    rowVals: BoxVal[]
    rowIndex: number;
    onBoxClick: (position: number) => void;
}

export const GridRow: React.FC<GridRowProps> = (props: GridRowProps) => {
    return (
        <div className="row">
            {
                props.rowVals.map((val, index) => (
                    <span className="box" key={index} onClick={() => props.onBoxClick(3*props.rowIndex + index)}>{val}</span>
                ))
            }
        </div>
    )
}