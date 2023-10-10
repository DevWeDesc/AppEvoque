import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Register } from "../screens/Register";
import Login from "../screens/Login";
import Perfil from "../screens/Person";
import Invoices from "../screens/Plans";
import Treinos from "../screens/Training";
import { PostUsers } from "../screens/PostUsers";

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Meu Perfil" component={Perfil} />
        <Stack.Screen name="Invoices" component={Invoices} />
        <Stack.Screen name="Treinos" component={Treinos} />
        <Stack.Screen name="Novo Post" component={PostUsers} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
