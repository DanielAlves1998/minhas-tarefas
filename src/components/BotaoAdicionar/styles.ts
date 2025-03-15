import { Link } from 'react-router-dom'
import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

//o link tem que ser aplicado assim pq ele é uma importação
export const Circulo = styled(Link)`
  height: 64px;
  width: 64px;
  background-color: ${variaveis.verde};
  color: #fff;
  position: fixed; //para dar um posicionamento fixo
  bottom: 40px;
  right: 40px;
  border-radius: 50%; //é para arredondar as bordas uniforme
  display: flex; //para deixar o conteúdo flexivel
  justify-content: center; //para centralizar o conteúdo para centralizar na orizontal
  align-items: center; //para tratar o alinhamento na orizontal
  font-size: 40px; //para almentar o tamanho da fonte
  text-decoration: none; //tira a decoração do A do link
`
