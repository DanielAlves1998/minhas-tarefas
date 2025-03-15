import { Circulo } from './styles' //importei diretamente porquê quando se importa com o(import * as S) é quando se tem muitas constantes

const BotaoAdicionar = () => <Circulo to="/novo">+</Circulo> //tem que ter esse to pq é da importação do react-router-dom se n seria o href mesmo

export default BotaoAdicionar
