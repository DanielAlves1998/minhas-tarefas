import styled from 'styled-components'
import variaveis from '../../../styles/variaveis'

import * as enums from '../../../utils/enums/tarefa' // O (* as) significa importe tudo como enum esse cason

type TagProps = {
  prioridade?: enums.Prioridade
  status?: enums.Status
  parametro: 'status' | 'prioridade'
}
//ENUM significa enumeradores, que é uma lista de constantes

function retornaCorDeFundo(props: TagProps): string {
  if (props.parametro === 'prioridade') {
    if (props.prioridade === enums.Prioridade.URGENTE) return variaveis.vermelho
    if (props.prioridade === enums.Prioridade.IMPORTANTE)
      return variaveis.amarelo2
  } else {
    if (props.status === enums.Status.PENDENTE) return variaveis.amarelo
    if (props.status === enums.Status.CONCLUIDA) return variaveis.verde
  }

  //esse return é se caso nenhuma das opções acima não forem feitas, irá nos retornar esse cinza
  return '#ccc'
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); //dá um sombreamento em baixo
  padding: 16px; //é o espaçamento da div
  margin-bottom: 32px; //dá uma margem nesse caso para todo o card
  border-radius: 16px; //arredondamento da borda
`

export const Titulo = styled.h3`
  font-size: 18px; //é o tamanho da fonte do h3 nesse caso
  font-weight: bold; //é o estilo da fonte
  margin-bottom: 16px; //dá um espaçamento para baixo
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  color: #fff; //cor do texto
  font-weight: bold; //estilo da fonte
  font-size: 10px; //tamanho da fonte
  background-color: ${(props) =>
    retornaCorDeFundo(
      props
    )}; // é para dar uma cor para as tags que ficam em cima do botão
  border-radius: 8px; //arredonda as bordas
  margin-right: 16px; //dá uma margem para a direita
  display: inline-block; //é ara os eleentos sairem de cima de uma div da outra
`

export const Descricao = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace; //quando se tem uma fonte com um 'sobre nome' é necessário colocar aspas
  display: block; //é para alinhar o campo de digitação para baixo
  width: 100%; //faz com que ocupe toda a área do site
  margin-bottom: 16px; //dá um espaçamento para baixo
  margin-top: 16px; //dá um espaçamento para cima
  resize: none; // tira o comportamento de diminuir e aumentar a barra de texto
  border: none; //tira a borda
  background-color: transparent; //é para remover o fundo
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px; //espaçamento o 8px é de cima para baixo, e 12px é da direita para direita
  border: none; //é para retirar a borda
  cursor: pointer; //é para a setinha do cursor mudar
  background-color: #2f3640; //cor do botão
  border-radius: 8px; //arredonda as bordas
  margin-right: 8px; //dá uma margem para a direita
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export const BotaoRemoverECancelar = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
