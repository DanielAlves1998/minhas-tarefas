//a lista de tarefas é responsavel por renderisar todas as tarefas
import { useSelector } from 'react-redux' //importção interna primeiro
//depois importações externas
import Tarefa from '../../components/FiltroCard/Tarefa'
import { Container } from './styles'

import { RootReducer } from '../../store'

//o container é do styles que criei para dár um espaçamento na página
//uot;categoria&ldquo; e &quot;termo&ldquo; ssas são tarefas especiais do html, são caracteris de ciações, como o &copy; etc...
const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  //essa é a função para filtrar as tarefas na área de buscar so site
  const filtrarTarefas = () => {
    let tarefasFiltradas = itens
    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0 //o lowercase é para que o sistema não diferencie palavras com letra maiúscula com a minúscula
      )

      if (criterio === 'prioridade') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.prioridade === valor
        )
      } else if (criterio === 'status') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.status === valor
        )
      }

      return tarefasFiltradas
    } else {
      return itens
    }
  }

  return (
    <Container>
      <p>
        2 Tarefas marcaas como: &quot;categoria&ldquo; e &quot;{termo}&ldquo;
      </p>
      <ul>
        <li>{termo}</li>
        <li>{criterio}</li>
        <li>{valor}</li>
      </ul>
      <ul>
        {filtrarTarefas().map((t) => (
          <li key={t.titulo}>
            <Tarefa
              id={t.id}
              descricao={t.descricao}
              titulo={t.titulo}
              status={t.status}
              prioridade={t.prioridade}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeTarefas
