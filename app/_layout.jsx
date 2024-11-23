import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Stack } from 'expo-router'
import { AuthProvider, useAuth } from '../contexts/AuthContext'
import { supabase } from '../lib/supabase'

const _layout=()=>{
  return(
    <AuthProvider>
      <MainLayout/>
    </AuthProvider>
  )
}
const MainLayout = () => {
  const {setAuth}=useAuth();

  useEffect(()=>{
      supabase.auth.onAuthStateChange((_event, session) => {
          console.log('session user:',session?.user);

          if(session){
        //move to home screen
        //set auth
          }else{
        //set auth null
        //move to welcome screen
          }
      })
  })
  return (
    <Stack
        screenOptions={{
            headerShown:false
        }}
    />
  )
}

export default _layout