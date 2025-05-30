import { View,ScrollView, Text, ActivityIndicator, TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { auth, db } from '../../configs/FirebaseConfig';
import { collection, query, where, getDocs } from 'firebase/firestore';
import UserTripList from '../../components/MyTrips/UserTripList';
import StartNewTripCard from '../../components/MyTrips/StartNewTripCard';
import { useRouter } from 'expo-router';

export default function MyTrip() {
  const router = useRouter()
  const [userTrips, setUserTrips] = useState([]);
  const user=auth.currentUser;
  const [loading,setLoading] = useState(false);
  useEffect(()=>{
    user&&GetMyTrips();
  },[user])

  const GetMyTrips = async()=>{
    setLoading(true);
    setUserTrips([]);
    const q = query(collection(db,'UserTrips'), where('userEmail','==',user?.email));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      setUserTrips((prev)=>[...prev,doc.data()]);
    });
    setLoading(false);
  
  }
  
  return (
    <ScrollView style={{
      padding:25,
      paddingTop:5,
      backgroundColor:Colors.WHITE,
      height:'100%',
    }}>

      <View style={{
        display:'flex',
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'space-between',
      }}>
      <Text style={{
        fontSize: 35,
        fontFamily:'outfit-bold',
      }}>My Trips</Text>
      <TouchableOpacity 
      onPress={()=>router.push(`/create-trip/search-place`)}>
        <Ionicons name="add-circle" size={50} color="black" />
        </TouchableOpacity>
      </View>
     {loading&&<ActivityIndicator size={'large'} color={Colors.PRIMARY}/>}
      {userTrips?.length==0?
        <StartNewTripCard/>
        :
        <UserTripList userTrips={userTrips}/>
      }

    </ScrollView>
  )
}