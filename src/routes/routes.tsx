import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Register } from "../screens/Register";
import Login from "../screens/Login";
import Perfil from "../screens/Person";
import Invoices from "../screens/Plans";
import Treinos from "../screens/Training";
import { PostUsers } from "../screens/PostUsers";
import { SplashScreen } from "../screens/Splash";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false, animation: "fade" }}
        />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Meu Perfil" component={Perfil} />
        <Stack.Screen name="Invoices" component={Invoices} />
        <Stack.Screen
          name="Sessão de Treinos"
          component={Treinos}
          options={{
            headerStyle: { backgroundColor: "#1E1E1E" },
            headerTintColor: "#FFF",
          }}
        />
        <Stack.Screen name="Novo Post" component={PostUsers} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
