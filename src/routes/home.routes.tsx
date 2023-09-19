import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { FontAwesome5 } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import Training from '../screens/Training';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const TrainingStack = createStackNavigator();

const TrainingStackScreen = ({ navigation }: any) => (
  <TrainingStack.Navigator>
    <TrainingStack.Screen
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
          <FontAwesome5
            name="arrow-left"
            color="#FF6900"
            size={24}
            style={{ marginLeft: 16 }}
            onPress={() => navigation.navigate('Inicio')}
          />
        ),
      }}
    />
  </TrainingStack.Navigator>
);

export function HomeRoutes() {
  return (
    <>
      <StatusBar translucent={true} style='light' />
      <Tab.Navigator 
        initialRouteName="Treinos"
        screenOptions={{
          tabBarStyle:{
            backgroundColor: '#2A2C33',
            borderTopColor: 'rgba(255, 105, 0, 1.4)',
            height: 70,
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
            tabBarLabelStyle: { fontSize: 16, fontWeight: 'bold' },
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
            tabBarLabelStyle: { fontSize: 16 },
          }}
          name="Treinos" 
          component={TrainingStackScreen}
        />

        <Tab.Screen
          options={{ 
            headerShown: false,
            tabBarIcon: () => (
              <FontAwesome5 name="bars" color="#FF6900" size={25} />
            ),
            tabBarLabelStyle: { fontSize: 16 },
          }}
          name="Menu" 
          component={SettingsScreen} 
        />        
      </Tab.Navigator>
    </>
  );
}
