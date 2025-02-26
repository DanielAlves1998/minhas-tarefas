import styled from 'styled-components'

//o omit ele é para omitir, nesse casso ele está omitindo o contador (| essa barra significa E) e legenda
//type PropsSemLegendaEContador = Omit<Props, 'contador' | 'legenda' | 'criterio'>

type Props = {
  ativo: boolean
}

export const Card = styled.div<Props>`
  //{(pros) = (pros.ativo ? '1e90ff' : 'a1a1a1')>} essa regra ela é para quando clicar ficar de uma cor nesse caso azul e quando não clicar ficar cinza
  padding: 8px; //espaçamento
  border: 1px solid ${(props) => (props.ativo ? '#1e90ff' : '#a1a1a1')}; //CRIA UMA BORDA, nessecaso cria uma borda em volda ao card
  background-color: ${(props) => (props.ativo ? '#fff' : '#fcfcfc')};
  //essa cor estando aqui faz com que todos os elementos tenham a mesma cor
  color: ${(props) => (props.ativo ? '#1e90ff' : '#5e5e5e')};
  border-radius: 8px; //é a largura da borda
  cursor: pointer;
`

export const Contador = styled.span`
  font-weight: bold; //estilo da fonte
  font-size: 24px; //largura da letra
  display: block; //alinha em blocos ao em vez de colunas, e vai uma para baixo do outro
`

export const Label = styled.span``
