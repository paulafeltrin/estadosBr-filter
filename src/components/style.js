import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
`
export const Container = styled.section`
    display: flex;
    justify-content: center;
    padding: 8vh 0;
    background-color: #009c3b;
    color: white;
`

export const Div = styled.div`
    width: 40%;

    h1{
        font-size: 1.5rem;
        text-align: center;
        padding: 2vh 1.3vw;
    }

    input{
        width: 100%;
        height: 5vh;
        text-align: center;
        margin-bottom: 5vh;
    }
`
export const Li = styled.li`
    font-size: 1.2rem;
    list-style: none;
    padding: 1.2vh 3vw;
`