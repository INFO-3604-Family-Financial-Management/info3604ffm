import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import icons from "../../constants/icons"

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View>
      <Image 
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className='w-6 h-6'
      />
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs> 
        <Tabs.Screen 
          name="home"
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({color, focused}) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            )
          }}
        />
        <Tabs.Screen 
          name="expense-tracking"
          options={{
            title: 'Expenses',
            headerShown: false,
            tabBarIcon: ({color, focused}) => (
              <TabIcon
                icon={icons.add}
                color={color}
                name="Expenses"
                focused={focused}
              />
            )
          }}
        />
        <Tabs.Screen 
          name="profile"
          options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({color, focused}) => (
              <TabIcon
                icon={icons.profile}
                color={color}
                name="Profile"
                focused={focused}
              />
            )
          }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout;