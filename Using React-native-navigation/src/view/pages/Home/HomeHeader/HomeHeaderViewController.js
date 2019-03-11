import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import JogoAnterior from '../../Jogos/JogoAnterior/JogoAnteriorViewController'
import JogoAtual from '../../Jogos/JogoAtual/JogoAtualViewController'
import JogoPosterior from '../../Jogos/JogoPosterior/JogoPosteriorViewController'
import Swiper from 'react-native-swiper'
import { info } from '../../../../config/config'

export default class HomeHeaderViewController extends Component {
  render() {
    return (
      <View style={
        {
          flex: 2,
          backgroundColor: info.colors.primary,
          opacity: 0.93
        }}>
        <Swiper
          showsButtons={false}
          containerStyle={styles.swiper}
          dotColor={info.colors.white}
          activeDotColor={info.colors.secondary}
          index={1}>
          <JogoAnterior style={styles.slide} />
          <JogoAtual style={styles.slide} />
          <JogoPosterior style={styles.slide} />
        </Swiper>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  slide: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  }
})


