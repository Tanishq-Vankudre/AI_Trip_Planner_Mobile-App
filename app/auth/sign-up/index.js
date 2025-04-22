import React, { useEffect } from 'react';
import { Text, View, StyleSheet,TextInput, TouchableOpacity } from 'react-native';
import { useNavigation,useRouter } from 'expo-router';
import { Colors } from './../../../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function SignUp() {
  const navigation = useNavigation();
  const router = useRouter();
  useEffect(()=>{
    navigation.setOptions({
      headerShown:false // This hides the header
    })
  })
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
      
      <View style={{
            marginTop:50
          }}>
            <Text style={{
              fontFamily:'outfit',
            }}>FullName</Text>
            <TextInput style={styles.input} placeholder='Enter Full Name'/>
          </View>
          
          <View style={{
            marginTop:20
          }}>
            <Text style={{
              fontFamily:'outfit',
            }}>Email</Text>
            <TextInput style={styles.input} placeholder='Enter Email'/>
          </View>
          
          <View style={{
            marginTop:20
          }}>
            <Text style={{
              fontFamily:'outfit',
            }}>Password</Text>
            <TextInput 
            secureTextEntry={true}
            style={styles.input} placeholder='Enter Password'/>
        </View>
        <TouchableOpacity style={{
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