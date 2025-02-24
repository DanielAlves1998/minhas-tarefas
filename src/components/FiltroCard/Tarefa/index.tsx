//todas as dependências externas vem primeiro, e depis as internas
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles' //import ( * ) = tudo ( as ) = de from = de ./styles

import * as enums from '../../../utils/enums/tarefa'

import { remover, editar } from '../../../store/reducers/tarefas'
import TarefaClass from '../../../models/Tarefa'

//aqui vou criar um tipo para as props, ela faz com que o sistema reconheça se é uma string ou number etc...
type Props = TarefaClass

//aqui vou fazer tambêm uma desistruturação das props
const Tarefa = ({
  descricao: descricaoOriginal, //foi feito esse procedimento pq tem outronome igual, e quando isso acontece é mecessário fazer isso
  prioridade,
  status,
  titulo,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false) //o useState é usado para vedadeiro ou falso

  const [descricao, setDescricao] = useState('') //isso é para que no sistema seja possivel colocar uma descrição , escrever no caso

  //o sistema de preenchimento deve ser preenchido com as imformações da descrição original lá em cima, por isso é necessário esse sistema a baixo
  //nesse caso significa que se descri... .lenght for maior que 0 irá chamar setDescri..., se não irá chamar descri...
  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setDescricao(descricaoOriginal)
    }
  }, [descricaoOriginal])

  //aqui é para qunado clicar em cancelar voltar para o que estava em edição anteriormente lá no botão cancelar
  function cancelarEdicao() {
    setEstaEditando(false)
    setDescricao(descricaoOriginal)
  }

  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Descricao
        //aqui é necesário fazer isso para que não seja possivel editar a descrição sem antes clicar no botão editar. A esclamação ! serve para negar
        disabled={!estaEditando}
        value={descricao}
        onChange={(evento) => setDescricao(evento.target.value)} //isso é necessário para ativar o set descrição lá em cima
      />
      <S.BarraAcoes>
        {estaEditando ? ( // A ? significa (ENTÃO)
          <>
            <S.BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    descricao,
                    prioridade,
                    status,
                    titulo,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </S.BotaoSalvar>
            <S.BotaoRemoverECancelar onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoRemoverECancelar>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoRemoverECancelar onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoRemoverECancelar>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
