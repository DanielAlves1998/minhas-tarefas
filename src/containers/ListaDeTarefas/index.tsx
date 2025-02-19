import { useSelector } from 'react-redux' //importção interna primeiro
//depois importações externas
import Tarefa from '../../components/FiltroCard/Tarefa'
import { Container } from './styles'

import { RootReducer } from '../../store'

//o container é do styles que criei para dár um espaçamento na página
//uot;categoria&ldquo; e &quot;termo&ldquo; ssas são tarefas especiais do html, são caracteris de ciações, como o &copy; etc...
const ListaDeTarefas = () => {
  const { tarefas } = useSelector((state: RootReducer) => state)
  return (
    <Container>
      <p>2 Tarefas marcaas como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
      <ul>
        {tarefas.map((t) => (
          <li key={t.titulo}>
            <Tarefa
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
