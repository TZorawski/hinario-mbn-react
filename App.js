import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';

import Home from './src/pages/Home';
import Hino from './src/pages/Hino';
import Locations from './src/pages/About';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
        headerStyle: {
          backgroundColor: '#607d8b',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      >
        <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{
          title: 'Hinário MBN',
          //headerShown: false,
        }}
        />

        <Stack.Screen 
        name="Hino" 
        component={Hino} 
        options={({ route }) => ({
          title: route.params.hinoTitle,
        })}
        />

        <Stack.Screen 
        name="Locations" 
        component={Locations} 
        options={({ route }) => ({
          title: 'Locais',
        })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
