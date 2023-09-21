import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/Login'
import { HomeRoutes } from './home.routes'
import Treinos from '../screens/Training'
import Perfil from '../screens/Person'
import { StatusBar } from 'expo-status-bar'
import { FontAwesome5 } from '@expo/vector-icons';

const { Navigator, Screen } = createStackNavigator()

export function AppRoutes({ navigation }:any) {
  return (
    <>
      <StatusBar
        translucent={true}
        style='light'
      />
      <Navigator
        initialRouteName="Home"
        // Alterar para a tela de login
        screenOptions={{
          headerShown: false,

          headerBackgroundContainerStyle: {
            // backgroundColor: '#2A2C33'
            // backgroundColor: '#FF6900'
          },
        }}
        >
        <Screen
          name="Login"
          component={Login}
          />
        <Screen
          name="Home"
          component={HomeRoutes}
          />
        <Screen
          name="Person"
          component={Perfil}
          options={{
            headerShown: true,
            headerTitle: 'Perfil',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#2A2C33',
              shadowColor: 'transparent',
            },
            headerTintColor: '#FF6900',
            headerTitleStyle: {
              fontSize: 16,
              fontWeight: 'bold',
            },
          }}
          />
      </Navigator>
    </>
  )
}