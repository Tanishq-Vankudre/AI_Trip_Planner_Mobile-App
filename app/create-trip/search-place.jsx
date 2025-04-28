import { View, Text } from 'react-native'
import React, { useEffect,useContext } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {CreateTripContext} from '../../context/CreateTripContext'

export default function SearchPlace() {
    const {setTripData,tripData}=useContext(CreateTripContext);
    const navigation = useNavigation();
    const router=useRouter();
    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTitle:'Search',
            headerTransparent:true,
        })
    },[])

    useEffect(()=>{
        console.log(tripData);
    }),[tripData]

  return (
    <View style={{
        padding:25,
        paddingTop:75,
        backgroundColor:Colors.WHITE,
        height:'100%',
    }}>
      <GooglePlacesAutocomplete
      fetchDetails={true}
      placeholder='Search Place'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
        console.log(details?.geometry.location);
        console.log(details?.photos[0].photo_reference);
        console.log(details?.url);
        setTripData({
            locationInfo:{
                name:data.description,
                coordinates:details?.geometry.location,
                photoRef:details?.photos[0].photo_reference,
                url:details?.url,
            }
        });
        router.push('/create-trip/select-traveler');
      }}
      query={{
        key: process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY,
        language: 'en',
      }}

      styles={{
        textInputContainer:{
            borderWidth:1,
            borderRadius:5,
        }
      }}
    />
    </View>
  )
}