import {Pressable, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Colors from '../../constants/colors';

function Tiles({icon, size, onPress, children}) {
  return (
    <View style={styles.tilesOuterContainer}>
      <Pressable
        style={({pressed}) =>
          pressed
            ? [styles.tilesInnerContainer, styles.pressed]
            : styles.tilesInnerContainer
        }
        onPress={onPress}
        android_ripple={{color: Colors.primary600}}>
        <Icon name={icon} size={size} />
        <Text style={styles.tilesText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default Tiles;

const styles = StyleSheet.create({
  tilesOuterContainer: {
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 10,
    backgroundColor: '#cccccc',
    shadowColor: 'black',
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  tilesInnerContainer: {
    height: 120,
    width: 150,
    alignItems: 'center',
    backgroundColor: '#c6975dea',
    justifyContent: 'center',
  },
  tilesText: {
    color: Colors.black1,
    fontSize: 20,
    fontWeight: 'bold',
  },
  pressed: {
    opacity: 0.75,
  },
});
