import styled from 'styled-components'

//o A de Aside tem que ser maiúscula pq só os componentes tem a primeira letra do nome maiúscula
export const Aside = styled.aside`
  padding: 16px; //é o espaçamento
  background-color: #eee;
  height: 100vh; // o HEIGHT é a autura entre o conteúdo e o site, e nesse caso é de 100 % do (VH) = vel port, da autura dele. o VEL PORT É TODA A AREA VISIVEL DO NAVEGADOR
`

export const Filtros = styled.div`
  display: grid; //serve para deixar um ao lado do outro
  grid-template-columns: 1fr 1fr; // o fr significa fração
  grid-gap: 8px; //dá um distanciamento em todos os lados da div, fazendo um distânciamneto em todas as barras
  margin-top: 16px;
`

export const Campo = styled.input`
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #666666;
  border-color: #666666;
  width: 100%;
`
