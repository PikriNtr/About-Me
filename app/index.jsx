import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';


//"npx pikrintr" to start
export default function App() {
  return (
    <SafeAreaView className="bg-indigo-950 h-full">
      <ScrollView contentContainerStyle={{height: '100%'}}>
        <View className="w-full justify-center items-center h-full px-4">
          <View className="relative mt-5">
            <Text className="text-1xl text-white font-pmedium text-center">Ini cuma beta test dari app yg gw bikin</Text>
            <Link href="/home" className="text-yellow-500 text-center font-pregular">Click ini buat ke menu sebelah</Link>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
