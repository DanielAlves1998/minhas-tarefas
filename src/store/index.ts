//aqui viu fazer a importação do REDUX
import { configureStore } from '@reduxjs/toolkit'

import tarefasReducer from './reducers/tarefas'
import filtroReducer from './reducers/filtro'

export const store = configureStore({
  reducer: {
    tarefas: tarefasReducer,
    filtro: filtroReducer
  }
})

//o RETURNTYPE ele vai incluir um tipo de objeto ou variavel ou constante
export type RootReducer = ReturnType<typeof store.getState>

export default store
