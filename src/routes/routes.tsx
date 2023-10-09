import React from "react";
import { Platform, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  DrawerActions,
  NavigationContainer,
  useNavigation,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { FontAwesome5, Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import Training from "../screens/Training";
import Person from "../screens/Person";
import Login from "../screens/Login";
import Invoices from "../screens/Plans";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const PersonStackScreen = ({ navigation }: any) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Perfil"
      component={Person}
      options={{
        headerStyle: {
          backgroundColor: "#2A2C33",
          shadowColor: "transparent",
        },
        headerTintColor: "#FFF",
        headerTitleStyle: {
          fontSize: 16,
          fontWeight: "bold",
        },
        headerTitleAlign: "center",
        headerLeft: () => (
          <Feather
            name="arrow-left"
            color="#FFF"
            size={24}
            style={{ marginLeft: 16 }}
            onPress={() => navigation.navigate("Home")}
          />
        ),
      }}
    />
  </Stack.Navigator>
);

const InvoicesStackScreen = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PlansStack"
        component={Invoices}
        options={{
          title: "Planos",
          headerShown: true,
          headerStyle: {
            backgroundColor: "#1E1E1E",
            shadowColor: "transparent",
          },
          headerTintColor: "#FFF",
          headerTitleStyle: {
            fontSize: 16,
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
          headerLeft: () => (
            <Feather
              name="arrow-left"
              color="#FFF"
              size={24}
              style={{ marginLeft: 16 }}
              onPress={() => navigation.navigate("Home" as never)}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

function AppDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: "#1E1E1E",
          width: 240,
        },
        drawerActiveBackgroundColor: "#FFF",
        drawerActiveTintColor: "#FFF",
        drawerInactiveTintColor: "#FFF",
      }}
    >
      <Drawer.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          drawerLabel: () => null,
          swipeEnabled: false,
        }}
      />

      <Drawer.Screen
        name="Home"
        component={HomeRoutes}
        options={{
          title: "Inicio",
        }}
      />

      <Stack.Screen
        name="Person"
        component={PersonStackScreen}
        options={{
          title: "Perfil",
        }}
      />

      <Stack.Screen
        name="Treinos"
        component={TrainingStackScreen}
        options={{
          title: "Treinos",
        }}
      />
      <Stack.Screen
        name="Plans"
        options={{
          title: "Planos",
        }}
        component={InvoicesStackScreen}
      />

      <Drawer.Screen
        name="Sair"
        component={Login}
        options={{
          headerShown: false,
          drawerLabel: "Sair",
          swipeEnabled: false,
        }}
      />
    </Drawer.Navigator>
  );
}

const TrainingStackScreen = ({ navigation }: any) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Training"
      component={Training}
      options={{
        title: "Treinos",
        headerStyle: {
          backgroundColor: "#1E1E1E",
          shadowColor: "transparent",
        },
        headerTintColor: "#FFF",
        headerTitleStyle: {
          fontSize: 16,
          fontWeight: "bold",
        },
        headerTitleAlign: "center",
        headerLeft: () => (
          <Feather
            name="arrow-left"
            color="#FFF"
            size={24}
            style={{ marginLeft: 16 }}
            onPress={() => {
              navigation.goBack(), navigation.navigate("Home");
            }}
          />
        ),
      }}
    />
  </Stack.Navigator>
);

function HomeRoutes() {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar translucent={true} style="light" />
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "#1E1E1E",
            borderTopColor: "#FFF",
            height: Platform.OS === "ios" ? 90 : 70,
          },
          tabBarActiveTintColor: "#9f9f9f",
        }}
      >
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <FontAwesome5 name="home" color="#FFF" size={25} />
            ),
            tabBarLabelStyle: {
              fontSize: 16,
              marginBottom: Platform.OS === "ios" ? 0 : 10,
            },
          }}
          name="i"
          component={HomeScreen}
        />

        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <FontAwesome5 name="dumbbell" color="#FFF" size={24} />
            ),
            tabBarLabelStyle: {
              fontSize: 16,
              marginBottom: Platform.OS === "ios" ? 0 : 10,
            },
          }}
          name="Treinos"
          component={TrainingStackScreen}
        />

        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIconStyle: {
              width: 60,
              height: 60,
            },
            tabBarIcon: () => (
              <FontAwesome5 name="bars" color="#FFF" size={24} />
            ),
            tabBarLabelStyle: {
              fontSize: 16,
              marginBottom: Platform.OS === "ios" ? 0 : 10,
            },
          }}
          name="d"
          component={SettingsScreen}
          listeners={{
            tabPress: (e) => {
              e.preventDefault();
              navigation.dispatch(DrawerActions.openDrawer());
            },
          }}
        />
      </Tab.Navigator>
    </>
  );
}

function AppNavigator() {
  return (
    <NavigationContainer>
      <AppDrawer />
    </NavigationContainer>
  );
}

export default AppNavigator;
