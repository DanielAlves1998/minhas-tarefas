import BarraLateral from '../../containers/barraLateral'
import Formulario from '../../containers/Formulario'

const Cadastro = () => (
  //essa prioridade è para que consigamos selecionar apenas uma opção
  <>
    {/* barra lateral */}
    <BarraLateral mostraFiltros={false} />
    <Formulario />
  </>
)

export default Cadastro
