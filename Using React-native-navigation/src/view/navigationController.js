import { Navigation } from 'react-native-navigation'
import React, { Component } from 'react'

export default class NavigationController extends Component {

  navegacao(menu, id, pagina, titulo, cor, prop) {
    Navigation.setRoot({
      root: {
        sideMenu: {
          left: {
            component: {
              name: menu,
              passProps: {
                propriedade: prop
              },
              options: {
                layout: {
                  orientation: ['portrait'] 
                },
              }
            }
          },
          center: {
            stack: {
              children: [{
                component: {
                  id: id,
                  name: pagina,
                  options: {
                    layout: {
                      orientation: ['portrait'] 
                    },
                    topBar: {
                      title: {
                        text: titulo,
                        alignment: 'flex-start',
                        color: '#FFFFFF'
                      },
                      leftButtons: [
                        {
                          id: 'botaoMenu',
                          icon: require('./assets/icon.png')
                        }
                      ],
                      background: {
                        color: cor
                      },
                    }
                  }
                }
              }]
            }
          }
        }
      }
    })
  }

  navegacaoComRetorno(id, pagina, titulo, cor) {
    Navigation.push(id, {
      component: {
        name: pagina,
        options: {
          layout: {
            orientation: ['portrait'] 
          },
          topBar: {
            title: {
              text: titulo,
              alignment: 'flex-start',
              color: '#FFFFFF'
            },
            background: {
              color: cor
            },
            backButton: {
              color: '#FFFFFF'
            },
          }
        }
      }
    })
  }

  navegacaoComRetornoProp(id, pagina, titulo, prop, cor, prop2) {
    Navigation.push(id, {
      component: {
        name: pagina,
        passProps: {
          propriedade: prop,
          propriedade2: prop2
        },
        options: {
          layout: {
            orientation: ['portrait'] 
          },
          topBar: {
            title: {
              text: titulo,
              alignment: 'flex-start',
              color: '#FFFFFF'
            },
            backButton: {
              color: '#FFFFFF'
            },
            background: {
              color: cor
            },
            elevation: 0
          }
        }
      }
    })
  }

  telaLogin(pagina) {
    Navigation.setRoot({
      root: {
        component: {
          name: pagina,
          options: {
            layout: {
              orientation: ['portrait'] 
            },
          }
        },
      }
    })
  }

  webView(pagina, titulo) {
    Navigation.showModal({
      stack: {
        children: [{
          component: {
            name: pagina,
            options: {
              layout: {
                orientation: ['portrait'] 
              },
              topBar: {
                title: {
                  text: titulo
                }
              }
            }
          }
        }]
      }
    })
  }

  authenticationScreen(pagina) {
    Navigation.setRoot({
      root: {
        component: {
          name: pagina,
          options: {
            layout: {
              orientation: ['portrait'] 
            },
          }
        }
      }
    })
  }

  navigationButtonPressed({ buttonId }, id) {
    if (buttonId === 'botaoMenu') {
      Navigation.mergeOptions(id, {
        sideMenu: {
          left: {
            visible: true
          }
        }
      })
    }
  }

  navegacaoShareButton(id, pagina, titulo, prop, cor) {
    Navigation.push(id, {
      component: {
        name: pagina,
        passProps: {
          propriedade: prop,
        },
        options: {
          layout: {
            orientation: ['portrait'] 
          },
          topBar: {
            rightButtons: [
              {
                id: 'shareButton',
                icon: require('./assets/share.png')
              },
            ],
            title: {
              text: titulo,
              alignment: 'flex-start',
              color: '#FFFFFF'
            },
            backButton: {
              color: '#FFFFFF'
            },
            background: {
              color: cor
            }
          }
        }
      }
    })
  }

  Auth = () => {
    this.authenticationScreen('Auth')
  }

  Login = () => (
    this.telaLogin('Login')
  )

  Home = (nomeClube, cor, prop) => (
    this.navegacao('Menu', 'Home', 'Home', nomeClube, cor, prop)
  )

  Jogadores = (cor, prop) => (
    this.navegacao('Menu', 'Jogadores', 'Jogadores', 'Jogadores', cor, prop)
  )

  HistoricoPartidas = (cor, prop) => (
    this.navegacao('Menu', 'HistoricoPartidas', 'HistoricoPartidas', 'Histórico de Partidas', cor, prop)
  )

  Biografia = (cor, prop) => (
    this.navegacao('Menu', 'Biografia', 'Biografia', 'Biografia do Clube', cor, prop)
  )

  Detalhes = (id, nome, prop, cor) => (
    this.navegacaoComRetornoProp(id, 'Detalhes', nome, prop, cor)
  )

  Ingressos = (cor, prop) => (
    this.navegacao('Menu', 'Ingressos', 'Ingressos', 'Ingressos Virtuais', cor, prop)
  )

  Notificacoes = (cor, prop) => (
    this.navegacao('Menu', 'Notificacoes', 'Notificacoes', 'Notificações', cor, prop)
  )

  Localizacao = (id, cor) => {
    this.navegacaoComRetorno(id, 'Localizacao', 'Localização', cor)
  }

  JogadorDetalhe = (id, nome, prop, cor) => {
    this.navegacaoComRetornoProp(id, 'JogadorDetalhe', nome, prop, cor)
  }

  EscalacaoJogadores = (id, cor, titulo, prop, prop2) => {
    this.navegacaoComRetornoProp(id, 'EscalacaoJogadores', titulo, prop, cor, prop2)
  }

  DesempenhoJogador = (id, nome, prop, cor, prop2) => {
    this.navegacaoComRetornoProp(id, 'DesempenhoJogador', nome, prop, cor, prop2)
  }

  FotoIngresso = (id, nome, prop, cor) => {
    this.navegacaoShareButton(id, 'FotoIngresso', nome, prop, cor)
  }

  DetalheImagem = (id, prop, cor, titulo) => {
    this.navegacaoComRetornoProp(id, 'DetalheImagem', titulo, prop, cor)
  }

  TelaPublicidade = (id, prop, cor, titulo) => {
    this.navegacaoComRetornoProp(id, 'TelaPublicidade', titulo, prop, cor)
  }

  SiteClube = () => {
    this.webView('SiteClube')
  }

  SiteSocio = () => {
    this.webView('SiteSocio', 'Seja socio torcedor!')
  }

  Temporada = (pagina) => {
    this.telaLogin(pagina)
  }
}