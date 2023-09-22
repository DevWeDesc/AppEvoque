import React from 'react';
import { Platform, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { DrawerActions, NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FontAwesome5, Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Training from '../screens/Training';
import Person from '../screens/Person';
import Login from '../screens/Login';
import Invoices from '../screens/Invoices';
import PlanDetail from '../screens/PlanDetail';


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
          backgroundColor: '#2A2C33',
          shadowColor: 'transparent',
        },
        headerTintColor: '#FF6900',
        headerTitleStyle: {
          fontSize: 16,
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
        headerLeft: () => (
          <Feather
            name="arrow-left"
            color="#FF6900"
            size={24}
            style={{ marginLeft: 16 }}
            onPress={() => navigation.navigate('Home')}
          />
        ),
      }}
    />
    
  </Stack.Navigator>
);

const InvoicesStackScreen = () => {
  const navigation = useNavigation();
  return(
    <Stack.Navigator>
    <Stack.Screen
        name="Invoices" 
        component={Invoices} 
        options={{
          title: 'Finanças',
          headerShown: true,
          headerStyle:{
            backgroundColor: '#2A2C33',
            shadowColor: 'transparent',
          },
          headerTintColor: '#FF6900',
          headerTitleStyle: {
            fontSize: 16,
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
          headerLeft: () => (
            <Feather
            name="arrow-left"
            color="#FF6900"
            size={24}
            style={{ marginLeft: 16 }}
              onPress={() => navigation.navigate('Home' as never)}
              />
          ),
         }}
         />
      <Stack.Screen
        name="PlanDetail" 
        component={PlanDetail} 
        options={{
          title: 'Detalhes do Plano',
          headerShown: true,
          headerStyle:{
            backgroundColor: '#2A2C33',
            shadowColor: 'transparent',
          },
          headerTintColor: '#FF6900',
          headerTitleStyle: {
            fontSize: 16,
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
          headerLeftLabelVisible: false,
          
          }}
          />
  </Stack.Navigator>
)
};

function AppDrawer() {
  
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#2A2C33',
          width: 240,
        },
        drawerActiveBackgroundColor: '#FF6900',
        drawerActiveTintColor: '#FFF',
        drawerInactiveTintColor: '#FFF',
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
          title: 'Inicio',
        }} 
      />
      
      <Stack.Screen     
        name="Person" 
        component={PersonStackScreen} 
        options={{
          title: 'Perfil',
        }}
      />

      <Stack.Screen     
        name="Treinos" 
        component={TrainingStackScreen} 
        options={{
          title: 'Treinos',
        }}

      />
      <Stack.Screen
        name="Invoices"
        options={{
          title: 'Finanças'
        }}
        component={InvoicesStackScreen} 
      />

    <Drawer.Screen 
      name="Sair" 
      component={Login} 
      options={{
        headerShown: false,
        drawerLabel: 'Sair',
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
        title: 'Treinos',
        headerStyle: {
          backgroundColor: '#2A2C33',
          shadowColor: 'transparent',
        },
        headerTintColor: '#FF6900',
        headerTitleStyle: {
          fontSize: 16,
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
        headerLeft: () => (
          <Feather
            name="arrow-left"
            color="#FF6900"
            size={24}
            style={{ marginLeft: 16 }}
            onPress={() => {
              navigation.goBack(), 
              navigation.navigate('Home')
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
      <StatusBar translucent={true} style='light' />
      <Tab.Navigator 
        initialRouteName="Home"
        screenOptions={{
          tabBarStyle:{
            backgroundColor: '#2A2C33',
            borderTopColor: 'rgba(255, 105, 0, 1.4)',
            height: Platform.OS === 'ios' ? 90 : 70,
          },
          tabBarActiveTintColor: '#FFF',

        }}
      >
        <Tab.Screen 
          options={{ 
            headerShown: false,
            tabBarIcon: () => (
              <FontAwesome5 name="home" color="#FF6900" size={25} />
            ),
            tabBarLabelStyle: { 
              fontSize: 16,
              marginBottom: Platform.OS === 'ios' ? 0 : 10,
            },
          }}
          name="Inicio" 
          component={HomeScreen} 
        />

        <Tab.Screen
          options={{ 
            headerShown: false,
            tabBarIcon: () => (
              <FontAwesome5 name="dumbbell" color="#FF6900" size={24} />
            ),
            tabBarLabelStyle: { 
              fontSize: 16,
              marginBottom: Platform.OS === 'ios' ? 0 : 10,
            },
          }}
          name="Treinos" 
          component={TrainingStackScreen}
        />

        <Tab.Screen

          options={{ 
            headerShown: false,
            tabBarIconStyle:{
              width: 60,
              height: 60,
            },
            tabBarIcon: () => (
                <FontAwesome5 name="bars" color="#FF6900" size={24} />
            ),
            tabBarLabelStyle: { 
              fontSize: 16,
              marginBottom: Platform.OS === 'ios' ? 0 : 10,
            },
            
          }}
          name="Menu"
          component={SettingsScreen}
          listeners={{
            tabPress: e => {
              e.preventDefault();
              navigation.dispatch(DrawerActions.openDrawer());
            }
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
