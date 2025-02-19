import * as S from './styles' //aqui estou falando que é para emportar (*) = (significa todos) os S = significa styles from = de './styles, essas são as abreviações para não ter que colocar todas as importações

export type Props = {
  ativo?: boolean
  contador: number
  legenda: string
}

//o S.car é a abreviação de styles.Card da pasta de styles, e colocando eles assim os cardes pagam todos os estilos editados em styles
//estou jogando as Props para cà para que funciona as props do style para ter o efeito
const FiltroCard = ({ ativo, contador, legenda }: Props) => (
  <S.Card ativo={ativo}>
    <S.Contador>{contador}</S.Contador>
    <S.Label>{legenda}</S.Label>
  </S.Card>
)

export default FiltroCard
