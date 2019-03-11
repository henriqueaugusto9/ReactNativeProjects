import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import JogoAnterior from '../../pages/JogoAnterior/index'
import JogoAtual from '../../pages/JogoAtual/index'
import ProximoJogo from '../../pages/ProximoJogo/index'
import { withNavigation } from 'react-navigation'
import Colors from '../../utils/colors';

class HomeHeader extends Component {
  render() {
    return (
      <Swiper
        style={styles.container} 
        showsButtons={false}
        dotColor={Colors.white}
        activeDotColor={Colors.red} 
        index={1}>
        <JogoAnterior style={styles.slide} />
        <JogoAtual style={styles.slide} />
        <ProximoJogo style={styles.slide} />
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

})

export default withNavigation(HomeHeader)