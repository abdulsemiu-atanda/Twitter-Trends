import {createNavigationReducer} from 'react-navigation-redux-helpers'

import AppNavigator from '../config/routes'

const navReducer = createNavigationReducer(AppNavigator)

export default navReducer
