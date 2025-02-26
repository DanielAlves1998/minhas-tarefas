import { useDispatch, useSelector } from 'react-redux'
import { alterarFiltro } from '../../store/reducers/filtro'
import * as S from './styles' //aqui estou falando que é para emportar (*) = (significa todos) os S = significa styles from = de './styles, essas são as abreviações para não ter que colocar todas as importações
import * as enums from '../../utils/enums/tarefa'
import { RootReducer } from '../../store'

export type Props = {
  legenda: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: enums.Prioridade | enums.Status
}

//o S.car é a abreviação de styles.Card da pasta de styles, e colocando eles assim os cardes pagam todos os estilos editados em styles
//estou jogando as Props para cà para que funciona as props do style para ter o efeito
const FiltroCard = ({ legenda, criterio, valor }: Props) => {
  //o uso do dispetch é necesário pq vou fazer a atualização através dele
  const dispatch = useDispatch()
  const { filtro, tarefas } = useSelector((state: RootReducer) => state)

  //aqui é a função para ver se o card está ativo ou n
  const verificaEstaAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio
    const mesmoValor = filtro.valor === valor

    return mesmoCriterio && mesmoValor
  }

  const contarTarefas = () => {
    if (criterio === 'todas') return tarefas.itens.length
    if (criterio === 'prioridade') {
      return tarefas.itens.filter((item) => item.prioridade === valor).length
    }
    if (criterio === 'status') {
      return tarefas.itens.filter((item) => item.status === valor).length
    }
  }

  const filtrar = () => {
    dispatch(
      alterarFiltro({
        criterio,
        valor
      })
    )
  }

  const contador = contarTarefas()
  const ativo = verificaEstaAtivo()

  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
