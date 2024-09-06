import { View, Text, Image } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { icons } from '../../constants';
import home from './home';

const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View className="items-center justify-center gap-2">
            <Image
                source={icon}
                resizeMode="contain"
                tintcolor={color}
                className="w-6 h-6"
            />
            <Text className={`${focused ? 'font-pmedium' : 'font-pregular'} text-xs`} style={{ color: color }}>{name}</Text>
        </View>
    );
};

//https://youtu.be/ZBCUegTZF7M?si=Z8Bbmks2TrWmtB7E&t=3051

const TabsLayout = () => {
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: '#964adb',
                    tabBarInactiveTintColor: '#CDCDE0',
                    tabBarStyle: {
                        backgroundColor: '#161622',
                        borderTopWidth: 1,
                        borderTopColor: '#964adb',
                        height: 84,
                    },
                }}
            >
                <Tabs.Screen 
                    name="home" 
                    options={{
                        title: 'Home',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.home}
                                color={color}
                                name="Home"
                                focused={focused}
                            />
                        ),
                    }} 
                />
                <Tabs.Screen 
                    name="bookmark" 
                    options={{
                        title: 'bookmark',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.bookmark}
                                color={color}
                                name="bookmark"
                                focused={focused}
                            />
                        ),
                    }} 
                />
                <Tabs.Screen 
                    name="profile" 
                    options={{
                        title: 'profile',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.profile}
                                color={color}
                                name="profile"
                                focused={focused}
                            />
                        ),
                    }} 
                />
            </Tabs>
        </>
    );
};

export default TabsLayout;
