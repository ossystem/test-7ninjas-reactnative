import { StackNavigator } from 'react-navigation'
import AddNoteScreen from '../Containers/AddNoteContainer'
import NotesListScreen from '../Containers/NotesListContainer'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  AddNoteScreen: { screen: AddNoteScreen },
  NotesListScreen: { screen: NotesListScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'AddNoteScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
