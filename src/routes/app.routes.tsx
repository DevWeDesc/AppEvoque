import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/Login'
import { HomeRoutes } from './home.routes'

const { Navigator, Screen } = createStackNavigator()

export function AppRoutes() {
  return (
    <Navigator
      initialRouteName="Home"
      // Alterar para a tela de login
      screenOptions={{
        headerShown: false,
        headerBackgroundContainerStyle: {
          backgroundColor: '#f5f5f5'
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
    </Navigator>
  )
}