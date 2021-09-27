import styled from 'styled-components'
import bgImage from '../../assets/bg.jpeg';

export const StyledTetrisWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background: url(${bgImage}) #000;
    background-size: cover;
    overflow: hidden;

    `

export const StyledTetris = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 4rem;
    margin: 0 auto;
    max-width: 90rem;

    aside { 
        width: 100%;
        max-width: 20rem;
        display: block;
        padding: 0 2rem;

    }

`;