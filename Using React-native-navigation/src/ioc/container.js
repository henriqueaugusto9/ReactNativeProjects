import Bottle from 'bottlejs'
import Navigation from '../view/navigationController'

const bottle = new Bottle()

//Navigation
bottle.factory('navigation', () => new Navigation())

export const { container } = bottle