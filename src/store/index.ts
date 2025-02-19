//aqui viu fazer a importação do REDUX
import { configureStore } from '@reduxjs/toolkit'

import tarefasReducer from './reducers/tarefas'

export const store = configureStore({
  reducer: {
    tarefas: tarefasReducer
  }
})

//o RETURNTYPE ele vai incluir um tipo de objeto ou variavel ou constante
export type RootReducer = ReturnType<typeof store.getState>

export default store
