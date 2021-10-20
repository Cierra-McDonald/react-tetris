import React from 'react';
import { StyledCell } from './Styles/StyledCell';
import { TETROMINOS } from '../tetroMinos';

const Cell = ({type}) => { 
    return(
        <StyledCell type={type} color={TETROMINOS[type].color}/>
    
    )
}

export default Cell;