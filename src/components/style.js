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
`

export const Div = styled.div`
    width: 40%;

    h1{
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
    list-style: none;
    padding: 1.2vh 3vw;
`