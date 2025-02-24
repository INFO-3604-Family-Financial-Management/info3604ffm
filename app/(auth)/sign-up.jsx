import { View, Text, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '../../constants/images'
import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'
import { Link } from 'expo-router'

const SignUp = () => {

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = () => {

  }

  return (
    <SafeAreaView className='bg-black h-full'>
      <ScrollView>
        <View className='w-full justify-center items-center min-h-[85vh] px-4 my-6'>
          <Image source={images.logo}
            resizeMode='contain'
            className='w-[215px] h-[135px]'
          />

          <Text className='text-white text-2xl text-semibold mt-1'>
            Sign up to TFR Finance
          </Text>

          <FormField
            title='Username'
            value={form.username}
            handleChangeText={(e) => setForm({...form, username: e})}
            otherStyles='mt-7'
          />
          <FormField
            title='Email'
            value={form.email}
            handleChangeText={(e) => setForm({...form, email: e})}
            otherStyles='mt-7'
            keyboardType='email-address'
          />
          <FormField
            title='Password'
            value={form.password}
            handleChangeText={(e) => setForm({...form,
              password: e
            })}
            otherStyles='mt-7'
          />

          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className='justify-center pt-5 flex-row gap-2'>
            <Text className='text-white text-base'>
              Already have an account?
            </Text>
            <Link className="text-primary text-bold" href='/sign-in'>Sign In</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp