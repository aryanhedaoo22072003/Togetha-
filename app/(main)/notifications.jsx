import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { fetchNotifications } from '../../services/notificationService';
import { useAuth } from '../../contexts/AuthContext';
import { hp, wp } from '../../helpers/common';
import { theme } from '../../constants/theme';
import ScreenWrapper from '../../components/ScreenWrapper';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const {user}=useAuth();
  
  useEffect(()=>{
    getNotifications();
  },[])

  const getNotifications=async()=>{
    let res=await fetchNotifications(user.id);
    if(res.success) setNotifications(res.data);
  }
  return (
   <ScreenWrapper>
    
   </ScreenWrapper>
  )
}

export default Notifications

const styles = StyleSheet.create({
   container:{
    flex:1,
    paddingHorizontal:wp(4)
   },
   listStyle:{
    paddingVertical:20,
    gap:10
   },
   noData:{
    fontSize:hp(1.8),
    fontWeight:theme.fonts.medium,
    color:theme.colors.text,
    textAlign:'center',
   }
})