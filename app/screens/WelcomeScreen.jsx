import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../utils/Colors.js'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {

  const navigation = useNavigation()

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: Colors.headers }}>
      <LinearGradient colors={['#9F77AF', '#112D4E']}
        className="w-full flex-1"
      >
        <View className="flex-1 flex justify-around items-center py-4">

          <Text className="font-bold text-4xl" style={{ color: Colors.bg }}>
            Let's Get started!
          </Text>

          <View className="flex-row justify-center">
            <Image source={require('./../assets/welcome.png')} className="w-[350] h-[350]" />
          </View>

          <View className="space-y-4 w-full">
            <TouchableOpacity onPress={() => navigation.navigate('Signup')} style={{ backgroundColor: Colors.secondary }} className="py-3 bg-yellow-400 rounded-2xl mx-7">
              <Text className="text-center font-bold text-xl" style={{ color: Colors.text }}>Sign Up</Text>
            </TouchableOpacity>
            <View className="flex-row justify-center gap-2">
              <Text className="text-white font-semibold">Already have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={{ color: Colors.headers }} className="font-bold">Log In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  )
}