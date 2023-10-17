import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "../screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Register } from "../screens/Register";
import Login from "../screens/Login";
import Perfil from "../screens/Perfil";
import Treinos from "../screens/Training";
import { PostUsers } from "../screens/PostUsers";
import { SplashInit } from "../screens/Splash";
import { SplashScreen } from "../screens/Splash/Splash";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Explorer } from "../screens/Explorer";
import { AppContextProvider } from "../context/context";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string | any;
          switch (route.name) {
            case "Register":
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
              break;

            // case "Explorer":
            //   iconName = focused ? "search" : "search-outline";
            //   break;
            case "Sessão de Treinos":
              iconName = focused ? "barbell-sharp" : "barbell-outline";
              break;
            case "Meu Perfil":
              iconName = focused
                ? "person-circle-sharp"
                : "person-circle-outline";
              break;
            case "Novo Post":
              iconName = focused ? "add-circle-sharp" : "add-circle-outline";
              break;
            case "HomeScreen":
              iconName = focused ? "home-sharp" : "home-outline";
              break;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: "#1E1E1E", borderColor: "#1e1e1e" },
        tabBarItemStyle: { borderColor: "#1e1e1e" },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Sessão de Treinos"
        component={Treinos}
        options={{
          headerStyle: { backgroundColor: "#1E1E1E" },
          headerTintColor: "#FFF",
        }}
      />
      <Tab.Screen
        name="Novo Post"
        component={PostUsers}
        options={{ headerShown: false }}
      />

      {/* <Tab.Screen
        name="Explorer"
        component={Explorer}
        options={{ headerShown: false }}
      /> */}
      <Tab.Screen
        name="Meu Perfil"
        component={Perfil}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

function AppNavigator() {
  return (
    <AppContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen
            name="SplashInit"
            component={SplashInit}
            options={{ headerShown: false, animation: "fade" }}
          />
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{ headerShown: false, animation: "fade" }}
          /> */}
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false, animation: "fade" }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HomeScreen"
            component={TabNavigation}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContextProvider>
  );
}

export default AppNavigator;
