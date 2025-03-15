import BotaoAdicionar from '../../components/BotaoAdicionar'
import BarraLateral from '../../containers/barraLateral'
import ListaDeTarefas from '../../containers/ListaDeTarefas'

const Home = () => (
  <>
    <BarraLateral mostraFiltros />
    <ListaDeTarefas />
    <BotaoAdicionar />
  </>
)

export default Home
