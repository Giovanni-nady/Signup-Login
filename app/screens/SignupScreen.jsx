import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import Colors from '../utils/Colors.js'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function SignupScreen() {
  const navigation = useNavigation()
  return (
    <View className="flex-1" style={{ backgroundColor: Colors.bg2 }}>
      <SafeAreaView className="flex">
        <View className="flex-row justify-start">
          <TouchableOpacity
            style={{ backgroundColor: Colors.headers }}
            className="p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
            onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={20} color="white" />
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-center">
          <Image source={require('./../assets/signupnew-removebg-preview.png')} className="w-[200] h-[200] rounded-2xl" />
        </View>
      </SafeAreaView>
      <View style={{ backgroundColor: Colors.bg }}
        className="flex-1 bg-white rounded-t-[50px] pt-8 px-8">
        <View className="form space-y-2">
          <Text className="text-gray-700 text-lg ml-4">Full Name</Text>
          <TextInput
            className="bg-gray-200 text-gray-700 rounded-2xl p-3 mb-3"
            value='Giovanni Nady'
            placeholder='Enter Name'
          />
          
          <Text className="text-gray-700 text-lg ml-4">Email Address</Text>
          <TextInput
            className="bg-gray-200 text-gray-700 rounded-2xl p-3 mb-3"
            value='giovanni@emaxple.com'
            placeholder='Enter Email'
          />

          <Text className="text-gray-700 text-lg ml-4">Password</Text>
          <TextInput
            className="bg-gray-200 text-gray-700 rounded-2xl p-3 mb-6"
            secureTextEntry
            placeholder='Enter Password'
            value='Test@1234'
          />

          <TouchableOpacity style={{ backgroundColor: Colors.headers }}
            className="py-3 rounded-xl mt-5">
            <Text className="text-white text-center text-xl font-bold">Sign Up</Text>
          </TouchableOpacity>
        </View>
        <Text className="text-center text-xl text-gray-700 font-bold py-5">Or</Text>

        <View className="flex-row justify-center space-x-12">
          <TouchableOpacity className="p-2 rounded-xl">
            <Image source={require('./../assets/google.png')}
              className="w-10 h-10"
              resizeMode='contain'
            />
          </TouchableOpacity>

          <TouchableOpacity className="p-2 rounded-xl">
            <Image source={require('./../assets/facebook.png')} className="w-10 h-10" />
          </TouchableOpacity>

          <TouchableOpacity className="p-2 rounded-xl">
            <Image source={require('./../assets/apple-logo.png')}
              className="w-10 h-10"
            />
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-center pt-4 gap-2">
          <Text className="text-gray-500 font-semibold">Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{ color: Colors.headers }}
              className="font-bold">Log In</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}