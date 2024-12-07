import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { fetchPostDetails } from '../../services/postService';

const PostDetails = () => {
    const {postId}=useLocalSearchParams();
    console.log('got post Id :',postId);

    const [post, setPost] = useState(null);

    useEffect(()=>{
        getPostDetails();
    },[]);

    const getPostDetails=async()=>{
        //fetch post details here
        let res=await fetchPostDetails(postId);
        console.log('got post details:',res);
    }

  return (
    <View>
      <Text>PostDetails</Text>
    </View>
  )
}

export default PostDetails

const styles = StyleSheet.create({})