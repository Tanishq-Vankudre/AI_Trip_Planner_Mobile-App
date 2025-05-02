import { View, Text, TouchableOpacity, ToastAndroid } from 'react-native'
import {React,useContext,useEffect,useState} from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from '../../constants/Colors';
import { FlatList } from 'react-native';
import OptionCard from '../../components/CreateTrip/OptionCard';
import {SelectBudgetOptions} from '../../constants/Options';
import { CreateTripContext } from '../../context/CreateTripContext';
import { useRouter } from 'expo-router';

export default function SelectBudget() {
  
    const navigation = useNavigation();
    const [selectedOption, setSelectedOption] = useState();
    const {tripData,setTripData}=useContext(CreateTripContext);
    const router=useRouter();
    useEffect(()=>{
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: '',
        })
    },[]);

    useEffect(()=>{
        selectedOption&&setTripData({
            ...tripData,
            budget: selectedOption?.title

        })
    },[selectedOption]);

    const onClickContinue=()=>{
        if(!selectedOption){
            ToastAndroid.show('Please select a budget option',ToastAndroid.LONG);
            return;
        }

        router.push('/create-trip/review-trip');
    }
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
        }}>Budget</Text>
            
            <View style={{
            marginTop:20,
            }}>
            <Text style={{
            fontSize:20,
            fontFamily:'outfit-bold',
            }}>Choose spending habbits for your trip</Text>
        
        <FlatList
        data={SelectBudgetOptions}
        renderItem={({item,index})=>(
            <TouchableOpacity style={{
                marginVertical:10,}}
                onPress={()=>setSelectedOption(item)}>
                <OptionCard 
                option={item} 
                selectedOption={selectedOption}
                />
            </TouchableOpacity>)}
        />
      </View>

      <TouchableOpacity 
      onPress={()=>onClickContinue()}
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