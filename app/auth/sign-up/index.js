import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet,TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import { useNavigation,useRouter } from 'expo-router';
import { Colors } from './../../../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../configs/FirebaseConfig'; // Import the auth object from FirebaseConfig


export default function SignUp() {
  
  const navigation = useNavigation();
  const router = useRouter();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [fullName, setFullName] = useState();

  useEffect(()=>{
    navigation.setOptions({
      headerShown:false // This hides the header
    })
  },[]);

  const onCreateAccount = () => {
    // Check if the email and password are not empty
    if (!email || !password) {
      ToastAndroid.show('Please enter all fields',ToastAndroid.BOTTOM) 
      return;
    }
      createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      // ..
    });
  }

  return (
    <View style={{
      padding:25,
      paddingTop:50,
      backgroundColor:Colors.WHITE,
      height:'100%',
    }}>
      <TouchableOpacity onPress={()=>router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />  
      </TouchableOpacity>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:30,
        marginTop:30,
      }}>Create new Account</Text>
      
      {/* Enter the full name */}
      <View style={{
            marginTop:50
          }}>
            <Text style={{
              fontFamily:'outfit',
            }}>FullName</Text>
            <TextInput style={styles.input} placeholder='Enter Full Name'
            onChangeText={(value)=>setFullName(value)}/>
          </View>
          
      {/* Enter the email */}
          <View style={{
            marginTop:20
          }}>
            <Text style={{
              fontFamily:'outfit',
            }}>Email</Text>
            <TextInput style={styles.input} placeholder='Enter Email'
            onChangeText={(value)=>setEmail(value)}/>
          </View>

     {/* Enter the password */}
          <View style={{
            marginTop:20
          }}>
            <Text style={{
              fontFamily:'outfit',
            }}>Password</Text>
            <TextInput 
            secureTextEntry={true}
            style={styles.input} placeholder='Enter Password'
            onChangeText={(value)=>setPassword(value)}/>
        </View>

        {/* Create new account button */}
        <TouchableOpacity
          onPress={onCreateAccount}
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
                  Create New Account
                </Text>
              </TouchableOpacity>
        
        {/* Sign in button */}
              <TouchableOpacity
                onPress={()=>router.replace('../../auth/sign-in')}
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
                }}>Sign In
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