//Nesse arquivo vou importar o criateGlobalStyle para criar o css global do projeto
import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none; //é para tirar todos os estilos nesse caso os pontos do site geral
  }

`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto; //o auto é para qure a coluna ocupe todo o espaço disponivel
`

export default EstiloGlobal
