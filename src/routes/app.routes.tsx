import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/Login'
import { HomeRoutes } from './home.routes'
import Treinos from '../screens/Training'
import Perfil from '../screens/Person'
import { StatusBar } from 'expo-status-bar'

const { Navigator, Screen } = createStackNavigator()

export function AppRoutes() {
  return (
    <>
      <StatusBar
        translucent={true}
        style='light'
      />
      <Navigator
        initialRouteName="Login"
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

          }}
          />
      </Navigator>
    </>
  )
}