import {Pressable, StyleSheet, Text, View} from 'react-native';
import IconButton from './IconButton';

import Colors from '../../constants/colors';

function Tiles({childrenn, onPress, children}) {
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
        <Text style={styles.buttonText}>{children}</Text>
        <IconButton
          icon="reader-sharp"
          //color={tintColor}
          size={24}
          //onPress={authCtx.logout}
        />
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
  },
  buttonInnerContainer: {
    height: 120,
    width: 150,
    alignItems: 'center',
    backgroundColor: '#fad7a0ea',
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
