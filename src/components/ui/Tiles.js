import {Pressable, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Colors from '../../constants/colors';

function Tiles({icon, size, onPress, children}) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({pressed}) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{color: Colors.primary600}}>
        <Icon name={icon} size={size} />
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default Tiles;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.9,
    shadowRadius: 4,
  },
  buttonInnerContainer: {
    height: 120,
    width: 150,
    alignItems: 'center',
    backgroundColor: '#c6975dea',
    justifyContent: 'center',
  },
  buttonText: {
    color: Colors.black1,
    fontSize: 20,
    fontWeight: 'bold',
  },
  pressed: {
    opacity: 0.75,
  },
});
