// In App.js in a new project

import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './src/screen/LoginScreen';
import SignUpScreen from './src/screen/SignUpScreen';
import HomeScreen from './src/screen/HomeScreen';
import EditScreen from './src/screen/EditScreen';
import ReduxUsers from './src/Core/Dashboard/ReduxUsers';
import Login from './src/Core/Login/login';
import ReduxEditScreen from './src/screen/ReduxEditUser';
import {Provider} from 'react-redux';
import {configureStore} from './src/redux/store';

const Stack = createNativeStackNavigator();
const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginClass">
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="LoginClass"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Users"
            component={HomeScreen}
            options={{headerShown: true}}
          />
          <Stack.Screen
            name="ReduxEditUser"
            component={ReduxEditScreen}
            options={{headerShown: true}}
          />
          <Stack.Screen
            name="Sign Up"
            component={SignUpScreen}
            options={{headerShown: true}}
          />
          <Stack.Screen
            name="Edit User"
            component={EditScreen}
            options={{headerShown: true}}
          />
          <Stack.Screen
            name="Redux"
            component={ReduxUsers}
            options={{headerShown: true}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
