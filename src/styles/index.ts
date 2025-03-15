//Nesse arquivo vou importar o criateGlobalStyle para criar o css global do projeto
import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

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

//esse styles foi criado para dar um espaçamento dá página para o conteúdo do site
export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll; //(overflow-y) = transbordar, estão todas as vezes que o conteúdo ultrapassar o 80 vh de cima ele cerá ocultado com esse scroll do overflow-y, o y é o eixo da vertical, o horizontal é o X
`

export const Titulo = styled.h2`
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: bold;
`

export const Campo = styled.input`
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #666666;
  border-color: #666666;
  width: 100%;
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px; //espaçamento o 8px é de cima para baixo, e 12px é da direita para direita
  border: none; //é para retirar a borda
  cursor: pointer; //é para a setinha do cursor mudar
  background-color: ${variaveis.azulEscuro}; //cor do botão
  border-radius: 8px; //arredonda as bordas
  margin-right: 8px; //dá uma margem para a direita
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export default EstiloGlobal
