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
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: Colors.primary500},
        headerTintColor: 'white',
        contentStyle: {backgroundColor: Colors.primary100},
        headerShown: true,
      }}>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          headerRight: ({tintColor}) => (
            <IconButton
              icon="exit"
              color={tintColor}
              size={24}
              onPress={authCtx.logout}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function Navigation() {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <>
      {/* <StatusBar style="light" /> */}
      <AuthContextProvider>
        <Navigation />
      </AuthContextProvider>
    </>
  );
}
