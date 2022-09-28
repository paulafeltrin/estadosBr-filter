import React, {useEffect, useState} from "react";
import {EstadosBrasil} from "./components/Lista";
import * as S from './components/style';

export default function App() {

  const [input, setInput] = useState('')
   const [novaLista, setNovaLista] = useState([])

   useEffect(()=>{ 
       let ListaFiltrada = EstadosBrasil.filter(item =>{
         if(item.toLowerCase().includes(input.toLowerCase())){
           return true
         }else {
           return false
         }
       })
     setNovaLista(ListaFiltrada)
   }, [input])

  return (
    <S.Container>
      <S.Div>
        <S.GlobalStyle />
        <h1>Lista dos Estados brasileiros com Filter</h1>
        <input value={input} onChange={(e) => {setInput(e.target.value)}}/>
        <ul>{novaLista.map(item => (
          <S.Li>{item}</S.Li>
        ))}</ul>
      </S.Div>
    </S.Container>
  )
}
