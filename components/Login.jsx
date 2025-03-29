import { View, Text, Image, StyleSheet } from 'react-native'
import { Colors } from '@/constants/Colors'

export default function Login() {
  return (
    <View>
      <Image  source={require('./../assets/images/Login.png')}  
      style={{
        width: '100%', 
        height: 520}}
      />
      <View style={styles.container}>
        <Text style={{
          fontSize:28,
          fontFamily:'outfit-bold',
          textAlign:'center',
          marginTop:10
        }}>AI Travel Planner</Text>
        <Text style={{
          fontSize:19,
          fontFamily:'outfit-Regular',
          textAlign:'center',
          color:Colors.GRAY,
          marginTop:20,
        }}>Discover your next adventure effortlessly. Personlaized itineraries at your fingertips. Travel smarter with AI driven-insights</Text>
        <View style={styles.button}>
          <Text style={{color:Colors.WHITE,
            textAlign:'center',
            fontFamily:'outfit',
            fontSize:17
          }}>Sign in with Google</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:Colors.WHITE,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 15,
    marginTop:-20,
    height: '100%',
    padding:25
  },
  button:{
    padding: 15,
    backgroundColor:Colors.PRIMARY,
    borderRadius: 99,
    marginTop:'10%'
  }
})