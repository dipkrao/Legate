import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CustomDiscoverTopTabBar from "./CustomDiscoverTopTabBar";
import InvisibleGrille from "./toptabbarmenu/InvisibleGrille";
import Ultrazip from "./toptabbarmenu/Ultrazip";
import HbbCondoGates from "./toptabbarmenu/HbbCondoGates";
import WindowGrille from "./toptabbarmenu/WindowGrille";
import LandedGates from "./toptabbarmenu/LandedGates";
import Blinds from "./toptabbarmenu/Blinds";
import OtherProducts from "./toptabbarmenu/OtherProducts";
import { COLORS } from "../../constants/Theme";

const Tab = createMaterialTopTabNavigator();

function HomeTopTab({ index, descriptors, navigation, position }) {
  const isFocused = index === index;

    return (
      <Tab.Navigator
        tabBar={props => <CustomDiscoverTopTabBar {...props} />}
        screenOptions={{
          tabBarLabelStyle: {
            fontSize: 14,
            color: 'white',
          },
          activeTintColor: '#EC5F5F',
          inactiveTintColor: '#6F7FAF',
          tabBarStyle: { backgroundColor: COLORS.background },
  
        }}>
        <Tab.Screen name="InvisibleGrille" component={InvisibleGrille} options={{ tabBarLabel: 'Invisible Grille' }} />
        <Tab.Screen name="Ultrazip" component={Ultrazip} options={{ tabBarLabel: 'Ultrazip' }} />
        <Tab.Screen name="HbbCondoGates" component={HbbCondoGates} options={{ tabBarLabel: 'HBB / Condo Gates' }} />
        <Tab.Screen name="WindowGrille" component={WindowGrille} options={{ tabBarLabel: 'Window Grille' }} />
        <Tab.Screen name="LandedGates" component={LandedGates} options={{ tabBarLabel: 'Landed Gates' }} />
        <Tab.Screen name="Blinds" component={Blinds} options={{ tabBarLabel: 'Blinds' }} />
        <Tab.Screen name="OtherProducts" component={OtherProducts} options={{ tabBarLabel: 'Other Products' }} />
      </Tab.Navigator>
    );
  }
  export default HomeTopTab;