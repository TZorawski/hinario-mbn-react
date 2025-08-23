import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native';

import Home from './src/pages/Home';
import Hino from './src/pages/Hino';
import Locations from './src/pages/About';
import { COLORS } from './src/constants/colors';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          headerTintColor: COLORS.header_color,
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
            headerRight: () => <Button title='Info' color={COLORS.secondary} onPress={() => {
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