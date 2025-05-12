import { View, Text } from 'react-native'
import React, { useEffect,useState } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { he } from 'date-fns/locale';

export default function TripDetails() {
  const {trip}=useLocalSearchParams();
  const navigation = useNavigation(); 
  const [tripDetails, setTripDetails] = useState([]);
  useEffect(()=>{
    navigation.setOptions({
        headerShown: true,
        headerTitle: '',
        headerTransparent: true,
    });

    setTripDetails(JSON.parse(trip)); 
  },[])
    return (
    <View>
      
    </View>
  )
}