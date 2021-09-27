import React from 'react';
import { StyledCell } from './Styles/StyledCell';
import { TETROMINOS } from '../tetroMinos';

const Cell = ({type}) => { 
    return(
        <StyledCell type={'L'} color={TETROMINOS['L'].color}/>
    
    )
}

export default Cell;