import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import Tiles from '../components/ui/Tiles';
import IconButton from '../components/ui/IconButton';

function WelcomeScreen() {
  return (
    <ImageBackground
      source={require('../assets/images/marissa-grootes-flRm0z3MEoA-unsplash.jpg')}
      resizeMode="cover"
      style={styles.rootScreen}
      imageStyle={styles.backgroundImage}>
      <SafeAreaView style={styles.rootContainer}>
        <View style={styles.heading}>
          <Text style={styles.title}>Welcome to ShivKala</Text>
          <Text style={styles.title2}> Stock Management System</Text>
          <View>
            <View style={styles.tiles}>
              <Tiles icon="reader-sharp" size={50}>
                {'Stock Entry'}
              </Tiles>
              <Tiles icon="qr-code-outline" size={50}>
                {'Billing'}
              </Tiles>
            </View>
            <View style={styles.tiles}>
              <Tiles icon="person-add" size={50}>
                {'Add Wholesaler'}
              </Tiles>
              <Tiles icon="stats-chart" size={50}>
                {'Reports'}
              </Tiles>
            </View>
          </View>
        </View>
        <Text>You authenticated successfully!!</Text>
      </SafeAreaView>
    </ImageBackground>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
    margin: 20,
  },
  heading: {
    flex: 1,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  title2: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.7,
  },

  tiles: {
    //flex: 1,
    flexDirection: 'row',
  },
  iconStyle: {
    flex: 1,
    flexDirection: 'row',
  },
});
