import { StyleSheet } from 'react-native'

const BG_BLACK_OPACITY = 'rgba(0, 0, 0, 0.7)';
const styles = StyleSheet.create({
  container: {
      flex: 1,
      position: 'absolute',
      backgroundColor: BG_BLACK_OPACITY,
      justifyContent: 'center',
      alignItems: 'center',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
    },
});

export default styles;
