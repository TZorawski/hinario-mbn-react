import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, StyleSheet } from 'react-native';

import Home from './src/pages/Home';
import Hino from './src/pages/Hino';
import Locations from './src/pages/About';

const Stack = createNativeStackNavigator();
const PRIM_COLOR = '#98a3a7ff';
const SEC_COLOR = '#607d8b';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: PRIM_COLOR,
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
          options={({ navigation }) => ({
            title: 'Hinário MBN',
            //headerShown: false,
            headerRight: () => <Button title='Info' color={SEC_COLOR} onPress={() => {
              navigation.navigate('Locations')
            }} />,
          })}
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
