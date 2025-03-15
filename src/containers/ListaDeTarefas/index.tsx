//a lista de tarefas é responsavel por renderisar todas as tarefas
import { useSelector } from 'react-redux' //importção interna primeiro
//depois importações externas
import Tarefa from '../../components/FiltroCard/Tarefa'
import { MainContainer, Titulo } from '../../styles'

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

  //criei uma ooutra função porque o código de exibição do site estava ficando muito extenço e quando fica grande é melhor colocar em uma função
  const exibeResultadoFiltrage = (quantidade: number) => {
    let mensagem = ''
    const complementacao =
      termo !== undefined && termo.length > 0 ? `e "${termo}"` : ''

    if (criterio === 'todas') {
      mensagem = `${quantidade} tarefa(s) encontrada(s) como: todas ${complementacao}`
    } else {
      mensagem = `${quantidade} tarefa(s) encontarda(s) como: "${`${criterio}=${valor}`}" ${complementacao}`
    }

    return mensagem
  }

  //aqui estou criando uma função para as tarefas, porque não é bm fazer direto no paragrafo por exemplo ou na div etc... sempre é bom fazer uma função
  const tarefas = filtrarTarefas()
  const mensagem = exibeResultadoFiltrage(tarefas.length)

  return (
    <MainContainer>
      {/* as significa Como, esse P é para diser que é de uma tag P*/}
      <Titulo as={'p'}>{mensagem}</Titulo>{' '}
      <ul>
        {tarefas.map((t) => (
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
    </MainContainer>
  )
}

export default ListaDeTarefas
