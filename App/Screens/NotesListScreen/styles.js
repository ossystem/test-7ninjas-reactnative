import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  details: { 
    height: 400, 
    width: 500, 
    backgroundColor: 'white', 
    flexDirection: 'column',
    justifyContent: 'center', 
    alignItems: 'center',
    position: 'absolute',
  },
  button: {
    position: 'absolute',
    bottom: 50,
    width: 200,
    height: 50,
  }
})