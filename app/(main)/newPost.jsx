import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../../components/ScreenWrapper'
import Header from '../../components/Header'
import { hp, wp } from '../../helpers/common'
import { theme } from '../../constants/theme'

const NewPost = () => {
  return (
    <ScreenWrapper>
      <Header title="Create Post" />
    </ScreenWrapper>
  )
}

export default NewPost

const styles = StyleSheet.create({
  container:{
    flex:1,
    //backgroundColor:'red',
    marginBottom:30,
    paddingHorizontal:wp(4),
    gap:15,
  },
  title:{
    //marginBottom:10,
    fontSize:hp(2.5),
    fontWeight:theme.fonts.semibold,
    color:theme.colors.text,
    textAlign:'center'
  },
  header:{
    flexDirection:'row',
    alignItems:'center',
    gap:12,
  },
  username:{
    fontSize:hp(2.2),
    color:theme.colors.text,
    fontWeight:theme.fonts.semibold,
  },
  avatar:{
    height:hp(6.5),
    width:hp(6.5),
    borderRadius:theme.radius.xl,
    borderCurve:'continuous',
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.1)'
  },
  publicText:{
    fontSize:hp(1.7),
    fontWeight:theme.fonts.medium,
    color:theme.colors.textLight,
  },
  textEditor:{
    //marginTop:10,
  },
  media:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    borderWidth:1.5,
    padding:12,
    paddingHorizontal:18,
    borderRadius:theme.radius.xl,
    borderCurve:'continuous',
    borderColor:theme.colors.gray
  },
  mediaIcons:{
    flexDirection:'row',
    gap:15,
    alignItems:'center'
  },
  addImageText:{
    fontSize:hp(1.9),
    color:theme.colors.text,
    fontWeight:theme.fonts.semibold,
  },
  imageIcon:{
    //backgroundColor:theme.collors.gray,
    borderRadius:theme.radius.md,
    //padding:6,
  },
  file:{
    height:hp(30),
    width:'100%',
    borderRadius:theme.radius.xl,
    overflow:'hidden',
    borderCurve:'continuous'
  },
  video:{

  },

  closeIcon:{
    position:'absolute',
    top:10,
    right:10,
  //   shadowColor:theme.colors.textLight,
  //   shadowOffset:{width:0, height:3},
  //   shadowOpacity:0.6,
  //   shadowRadius:8,
  }
})