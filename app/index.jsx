import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';


//"npx pikrintr" to start
export default function App() {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerStyle={{height: '100%'}} className="bg-bg">
        <View className="w-full justify-center items-center h-full px-4">
          <Text className="relative font-psemibold text-3xl mb-[-50] top-0 left-0 text-white">PikriNtr</Text>
          <View className="bg-primary w-52 h-52 rounded-full relative top-52 right-40"></View>
          <View className="bg-accent w-52 h-52 rounded-full relative -bottom-72 left-40"></View>
          <View className="relative mb-[230]">
            <Text className="text-3xl text-white font-pmedium text-center">Ini cuma beta test dari app yg gw bikin</Text>
            <Link href="/home" className="text-yellow text-1xl text-center font-pregular">Click ini buat ke menu sebelah</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
