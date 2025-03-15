import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import EstiloGlobal, { Container } from './styles'

import { store } from './store'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'

const rotas = createBrowserRouter([
  //aqui é para uma criação de uma página más sem sair da página ou ter um carregamento, por isso foi necessário baixar o router- dom, do react
  //nessse caso tem o PATH que significa caminho, e o caminho inicial é o / e quando o caminho encontar o / algum elemento irás er renderizado, nesse caso será o home que indiquei em baixo
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novo',
    element: <Cadastro />
  }
])

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </Provider>
  )
}

export default App
