import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { FontAwesome5 } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';


const Tab = createBottomTabNavigator();

export function HomeRoutes() {
  return (
    <>
      <StatusBar
        translucent={true}
        // hidden={true}
        style='light'
      />
      <Tab.Navigator 
        screenOptions={{
          tabBarStyle:{
            backgroundColor: '#2A2C33',
            borderTopColor: 'rgba(255, 105, 0, 1.4)',
            height: 70,
          },
          tabBarActiveTintColor: '#FFF',
          // tabBarLabelPosition: 'beside-icon',

        }}
      >
        <Tab.Screen 
          options={{ headerShown: false,
            tabBarIcon: () => (
              <FontAwesome5 name="home" color="#FF6900" size={25} />
            ),
            tabBarLabelStyle: { fontSize: 16, fontWeight: 'bold'  },
          }}
          name="Inicio" 
          component={HomeScreen} 
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
