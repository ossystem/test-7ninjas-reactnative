import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin,
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center'
  },
  navigateTo: {
    width: 200,
    // position: 'absolute',
    // bottom: 50,
    // right: 50,
    backgroundColor: Colors.facebook,
  },
  save: {
    width: 200,
    // position: 'absolute',
    // bottom: 50,
    // right: 50,
    backgroundColor: Colors.ricePaper,
  }
})
