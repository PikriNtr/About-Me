import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const home = () => {
  return (
    <SafeAreaView className="bg-indigo-950 h-full">
      <ScrollView>
        <View className="flex flex-col gap-4 items-center">
          <Text className="text-white text-2xl font-bold font-psemibold">Home</Text>
          <Text className="text-white font-pmedium">Welcome to Aduhai!</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default home


//https://youtu.be/ZBCUegTZF7M?si=H6NpjDtkJ2KJTew4&t=3563