import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SuccessScreen from './components/SuccessScreen';
import HomeScreen from './components/HomeScreen';
import { PlaidTheme } from './components/style';
import OptionsScreen from './components/OptionsScreen';
import IdentityScreen from './components/IdentityScreen';
import BalanceScreen from './components/BalanceScreen';
import AvailableProductsScreen from './components/AvailableProductsScreen';

const Stack = createNativeStackNavigator();

const App = (): React.ReactElement => {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={PlaidTheme}>
        <StatusBar barStyle="light-content" backgroundColor="#000000" />
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerStyle: {
                backgroundColor: '#000000',
              },
              headerTintColor: '#fff',
            }}
          />
          <Stack.Screen
            name="Success"
            component={SuccessScreen}
            options={{
              headerStyle: {
                backgroundColor: '#000000',
              },
              headerTintColor: '#fff',
            }}
          />
          <Stack.Screen
            name="Options"
            component={OptionsScreen}
            options={{
              headerStyle: {
                backgroundColor: '#000000',
              },
              headerTintColor: '#fff',
            }}
          />
          <Stack.Screen
            name="Identity"
            component={IdentityScreen}
            options={{
              headerStyle: {
                backgroundColor: '#000000',
              },
              headerTintColor: '#fff',
            }}
          />
          <Stack.Screen
            name="Balance"
            component={BalanceScreen}
            options={{
              headerStyle: {
                backgroundColor: '#000000',
              },
              headerTintColor: '#fff',
            }}
          />
          <Stack.Screen
            name="Products"
            component={AvailableProductsScreen}
            options={{
              headerStyle: {
                backgroundColor: '#000000',
              },
              headerTintColor: '#fff',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;