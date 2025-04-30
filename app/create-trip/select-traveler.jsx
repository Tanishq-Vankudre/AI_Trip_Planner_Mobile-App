import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { React,useEffect,useState,useContext } from 'react';
import { useNavigation } from 'expo-router'
import { Colors } from '../../constants/Colors';
import { SelectTravelesList } from '../../constants/Options';
import OptionCard from '../../components/CreateTrip/OptionCard';
import { CreateTripContext } from '../../context/CreateTripContext';
import { useRouter } from 'expo-router';

export default function SelectTraveler() {

    const navigation = useNavigation();
    const router=useRouter();
    const [selectedTraveler,setSelectedTraveler]= useState();

    const {tripdata,setTripData} = useContext(CreateTripContext);
    useEffect(()=>{
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: '',
        })
    },[])

    useEffect(()=>{
      setTripData({...tripdata,
        traveler:selectedTraveler
      })
    },[selectedTraveler]);

    useEffect(()=>{
      console.log(tripdata);
    },[tripdata])

  return (
    <View style={{
        padding:25,
        paddingTop:60,
        backgroundColor:Colors.WHITE,
        height:'100%',
    }}>
      <Text style={{
        fontSize:35,
        fontFamily:'outfit-bold',
      }}>Who's Travelling</Text>
      <View style={{
        marginTop:20,
      }}>
        <Text style={{
            fontSize:23,
            fontFamily:'outfit-bold',
        }}>Choose your traveles</Text>
        <FlatList
          data={SelectTravelesList}
          renderItem={({item,index})=>(
            <TouchableOpacity 
            onPress={()=>setSelectedTraveler(item)}
            style={{
              marginVertical:10,
            }}>
              <OptionCard option={item} selectedTraveler={selectedTraveler}/>
            </TouchableOpacity>
          )}
        />
      </View>
      <TouchableOpacity 
      onPress={()=>router.push('/create-trip/select-dates')}
        style={{
        padding:20,
        backgroundColor:Colors.PRIMARY,
        borderRadius:15,
        marginTop:20,    
      }}
>
        <Text style={{
          textAlign:'center',
          color:Colors.WHITE,
          fontFamily:'outfit-medium',
          fontSize:20,
        }}>Continue</Text>
      </TouchableOpacity>
    </View>
  )
}