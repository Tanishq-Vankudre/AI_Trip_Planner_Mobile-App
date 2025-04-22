import { View, Text, TextInput, StyleSheet, TouchableOpacity,ToastAndroid } from 'react-native'
import React, { useEffect,useState } from 'react'
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from './../../../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../configs/FirebaseConfig'; // Import the auth object from FirebaseConfig


export default function SignIn() {
  const navigation = useNavigation();
  const router = useRouter();

  const[email, setEmail] = useState();
  const[password, setPassword] = useState();

  useEffect(()=>{
    navigation.setOptions({
      headerShown:false // This hides the header
    })
  },[]);

  const onSignIn=()=>{
    if(!email || !password){
      ToastAndroid.show('Please enter all fields',ToastAndroid.BOTTOM) 
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
    if(errorCode === 'auth/invalid-credential'){
      ToastAndroid.show('invalid-credential',ToastAndroid.BOTTOM)
    }
  });
  }

  return (
    <View style={{
      padding:25,
      paddingTop:40,
      backgroundColor:Colors.WHITE,
      height:'100%', 
    }}>
      <TouchableOpacity onPress={()=>router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />  
      </TouchableOpacity>
      <Text style={{
        fontSize:30,
        fontFamily:'outfit-bold',
        marginTop:30,
      }}>Let's Sign You In</Text>
      <Text style={{
        fontSize:30,
        color:Colors.GRAY,
        fontFamily:'outfit',
        marginTop:20,
      }}>Welcome Back</Text>
      <Text style={{
        fontSize:30,
        color:Colors.GRAY,
        fontFamily:'outfit',
        marginTop:10,
      }}>You've been missed!</Text>
      
      <View style={{
        marginTop:50
      }}>
        <Text style={{
          fontFamily:'outfit',
        }}>Email</Text>
        <TextInput
        onChangeText={(value)=>setEmail(value)}
        style={styles.input} placeholder='Enter Email'/>
      </View>
      <View style={{
        marginTop:20
      }}>
        <Text style={{
          fontFamily:'outfit',
        }}>Password</Text>
        <TextInput 
        secureTextEntry={true}
        onChangeText={(value)=>setPassword(value)}
        style={styles.input} placeholder='Enter Password'/>
      </View>

      <TouchableOpacity
      onPress={onSignIn}
       style={{
        padding:20,
        backgroundColor:Colors.PRIMARY, 
        borderRadius:15,
        marginTop:30,
      }}>
        <Text style={{
          color:Colors.WHITE,
          textAlign:'center',
        }}>
          SignIn
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={()=>router.replace('../../auth/sign-up')}
        style={{
        padding:20,
        backgroundColor:Colors.WHITE, 
        borderRadius:15,
        marginTop:20,
        borderWidth:1,
      }}>
        <Text style={{
          color:Colors.PRIMARY,
          textAlign:'center',
        }}>Create Account
        </Text>
      </TouchableOpacity>  
    </View>
  )
}

const styles = StyleSheet.create({
  input:{
    borderColor:Colors.GRAY,
    padding:15,
    borderRadius:15,
    marginTop:10,
    borderWidth:1,
  },
})