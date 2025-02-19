import { useState } from 'react'
import * as S from './styles' //import ( * ) = tudo ( as ) = de from = de ./styles

import * as enums from '../../../utils/enums/tarefa'

//aqui vou criar um tipo para as props, ela faz com que o sistema reconheça se é uma string ou number etc...
type Props = {
  titulo: string
  prioridade: enums.Prioridade
  status: enums.Status
  descricao: string
}

//aqui vou fazer tambêm uma desistruturação das props
const Tarefa = ({ descricao, prioridade, status, titulo }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false) //o useState é usado para vedadeiro ou falso

  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Descricao value={descricao} />
      <S.BarraAcoes>
        {estaEditando ? ( // A ? significa (ENTÃO)
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoRemoverECancelar onClick={() => setEstaEditando(false)}>
              Cancelar
            </S.BotaoRemoverECancelar>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoRemoverECancelar>Remover</S.BotaoRemoverECancelar>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
