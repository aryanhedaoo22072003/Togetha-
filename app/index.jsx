import { View,Text, Button} from "react-native";
import react from 'react';
import { router, useRouter } from "expo-router";
import ScreenWrapper from "../components/ScreenWrapper";

const index=()=>{
    const router=useRouter();
    return(
        <ScreenWrapper>
        <Text>Index</Text>
        <Button title="welcome" onPress={()=>router.push('welcome')}/>
        </ScreenWrapper>
    )
}

export default index