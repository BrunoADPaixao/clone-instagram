import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Feed from './pages/Feed';

import Header from './components/Header';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Feed"
          component={Feed}
          options={{
            headerTitle: () => <Header />,
            headerStyle: {
              backgroundColor: '#F5F5F5',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
