import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colecao from '../../views/Colecao/Colecao';
import Perfil from '../../views/Perfil/Perfil';
import { MaterialIcons } from '@expo/vector-icons';
import RotasDrawer from '../rotasDrawer/RotasDrawer';

const Tab = createBottomTabNavigator();

const RotasTab = () => {
  return (
    <Tab.Navigator 
      tabBarOptions={
      {
        labelStyle: { fontSize: 24 },
        style: {backgroundColor: '#14417b'},
        activeTintColor: '#FFFFFF', 
        showLabel:false,
      }
      }
    >
      <Tab.Screen 
        name="Inicial" 
        component={RotasDrawer}
        options={{
            unmountOnBlur: true,
            tabBarLabel: 'Inicial',
            tabBarIcon: ({ color }) => (
                <MaterialIcons name='home' size={24} color={color}/>
            ),
        }}
       />
      <Tab.Screen
       name="Colecao" 
       component={Colecao}
       options={{
            tabBarLabel: 'Coleção',
            tabBarIcon: ({ color }) => (
                <MaterialIcons name='storage' size={24} color={color}/>
            ),
        }}
      />
      <Tab.Screen 
        name="Perfil" 
        component={Perfil}
        options={{
            tabBarLabel: 'Perfil',
            tabBarIcon: ({ color }) => (
                <MaterialIcons name="person" size={24} color={color}/>
            ),
        }}
      />
    </Tab.Navigator>
  );
}

export default RotasTab;