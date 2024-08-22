import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Image } from 'react-native';
import Dashboard from './src/screens/dashboard'; 

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Image source={require('./assets/My Dashboard.png')} />
            ),
          }}
        />
        <Tab.Screen
          name="SecondTab"
          component={Dashboard}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Image source={require('./assets/Group 431.png')} />
            ),
          }}
        />
        <Tab.Screen
          name="ThirdTab"
          component={Dashboard}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Image source={require('./assets/Group 432.png')} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
