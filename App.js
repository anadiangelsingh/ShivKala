import {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//import 'react-native-gesture-handler';
//import {StatusBar} from 'expo-status-bar';

import LoginScreen from './src/screens/LoginScreen';
//import SignupScreen from './screens/SignupScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import {Colors} from './src/constants/styles';
import {AuthContext} from './src/store/auth-context';
import AuthContextProvider from './src/store/auth-context';
import IconButton from './src/components/ui/IconButton';
import StockEntryForm from './src/screens/StockEntry';
import BillingScreen from './src/screens/BillingScreen';
import {ImageBackground, StyleSheet} from 'react-native';

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: Colors.primary500},
        headerTintColor: 'white',
        //contentStyle: {backgroundColor: Colors.primary100},
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  const authCtx = useContext(AuthContext);

  return (
    <ImageBackground
      source={require('./src/assets/images/marissa-grootes-flRm0z3MEoA-unsplash.jpg')}
      resizeMode="cover"
      style={styles.rootScreen}
      imageStyle={styles.backgroundImage}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: '#e8d0b4ea'},
          //headerTintColor: 'white',
          //contentStyle: {backgroundColor: Colors.primary100},

          headerShown: true,
        }}>
        <Stack.Screen
          name="Home"
          component={WelcomeScreen}
          options={{
            headerRight: ({tintColor}) => (
              <IconButton
                icon="exit"
                //color={tintColor}
                size={24}
                onPress={authCtx.logout}
              />
            ),
          }}
        />
        <Stack.Screen name="StockEntryForm" component={StockEntryForm} />
        <Stack.Screen name="Billing" component={BillingScreen} />
      </Stack.Navigator>
    </ImageBackground>
  );
}

function Navigation() {
  const authCtx = useContext(AuthContext);

  return (
    <>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </>
  );
}

export default function App() {
  return (
    <>
      {/* <StatusBar style="light" /> */}
      <NavigationContainer>
        <AuthContextProvider>
          <Navigation />
        </AuthContextProvider>
      </NavigationContainer>
    </>
  );
}
const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.7,
  },
});
