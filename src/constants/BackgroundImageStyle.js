import {ImageBackground, StyleSheet} from 'react-native';

function BackgroundImageStyle() {
  return (
    <ImageBackground
      source={require('../assets/images/marissa-grootes-flRm0z3MEoA-unsplash.jpg')}
      resizeMode="cover"
      style={styles.rootScreen}
      imageStyle={styles.backgroundImage}
    />
  );
}

export default BackgroundImageStyle;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.1,
  },
});
