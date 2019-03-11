import { Navigation } from 'react-native-navigation'

import Auth from './auth/authenticationViewController'
import Menu from './components/Menu/MenuViewController'
import Home from './pages/Home/HomeViewController'
import Login from './pages/Login/LoginViewController'
import Detalhes from './pages/Detalhes/DetalhesViewController'
import SiteClube from './pages/Webviews/clubeViewController'
import SiteSocio from './pages/Webviews/socioViewController'
import Jogadores from './pages/Jogadores/JogadoresViewController'
import Biografia from './pages/Biografia/BiografiaViewController'
import Ingressos from './pages/Ingressos/IngressosViewController'
import Localizacao from './pages/LocalizacaoEstadio/LocalizacaoEstadioViewController'
import FotoIngresso from './pages/Ingressos/IngressoFoto'
import Notificacoes from './pages/Notificacoes/NotificacoesViewController'
import JogadorDetalhe from './pages/Jogadores/DetalhesJogador/JogadorViewController'
import DesempenhoJogador from './pages/Detalhes/DetalhesTab/Escalacoes/EscalacaoJogadores/Desempenho/DesempenhoViewController'
import TelaPublicidade from './pages/Webviews/TelaPublicidade/TelaPublicidade'
import HistoricoPartidas from './pages/HistoricoPartidas/HistoricoPartidasViewController'
import EscalacaoJogadores from './pages/Detalhes/DetalhesTab/Escalacoes/EscalacaoJogadores/Tab'
import DetalheImagemView from './pages/DetalheImagemview'

export const registerComponents = () => {
  Navigation.registerComponent('Auth', () => Auth)
  Navigation.registerComponent('Menu', () => Menu)
  Navigation.registerComponent('Home', () => Home)
  Navigation.registerComponent('Login', () => Login)
  Navigation.registerComponent('Futebol', () => TemporadaFutebol)
  Navigation.registerComponent('Basquete', () => TemporadaBasquete)
  Navigation.registerComponent('Detalhes', () => Detalhes)
  Navigation.registerComponent('SiteClube', () => SiteClube)
  Navigation.registerComponent('SiteSocio', () => SiteSocio)
  Navigation.registerComponent('Jogadores', () => Jogadores)
  Navigation.registerComponent('Biografia', () => Biografia)
  Navigation.registerComponent('Ingressos', () => Ingressos)
  Navigation.registerComponent('Localizacao', () => Localizacao)
  Navigation.registerComponent('FotoIngresso', () => FotoIngresso)
  Navigation.registerComponent('TelaPublicidade', () => TelaPublicidade)
  Navigation.registerComponent('Notificacoes', () => Notificacoes)
  Navigation.registerComponent('JogadorDetalhe', () => JogadorDetalhe)
  Navigation.registerComponent('EscalacaoJogadores', () => EscalacaoJogadores)
  Navigation.registerComponent('DetalheImagem', () => DetalheImagemView)
  Navigation.registerComponent('DesempenhoJogador', () => DesempenhoJogador)
  Navigation.registerComponent('HistoricoPartidas', () => HistoricoPartidas)
}
