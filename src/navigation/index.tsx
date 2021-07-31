import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {MainStack} from '@constants/navigation.constant';
import {Home, Dashboard} from '@screens';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name={MainStack.Dashboard} component={Dashboard} />
        <Stack.Screen name={MainStack.Home} component={Home} />
      </Stack.Navigator>
    </>
  );
};

export default MainNavigation;
