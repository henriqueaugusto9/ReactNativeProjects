import React from 'react'

import MaterialComunity from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionic from 'react-native-vector-icons/Ionicons'

export const IconeMaterialComunity = (props) => (
  <MaterialComunity
    color={props.color}
    style={props.style}
    name={props.name}
    size={props.size}
  />
)

export const IconeMaterial = (props) => (
  <MaterialIcons
    color={props.color}
    style={props.style}
    name={props.name}
    size={props.size}
  />
)

export const IconeIonic = (props) => (
  <Ionic
    color={props.color}
    style={props.style}
    name={props.name}
    size={props.size}
  />
)
