import { View, Text, TouchableOpacity } from 'react-native';
import  React ,{ useEffect,useContext } from 'react';
import { useNavigation,useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';
import moment from 'moment'; 
import { CreateTripContext } from '../../context/CreateTripContext';


export default function ReviewTrip() {

  const navigation = useNavigation();
  const {tripData,setTripData} =useContext(CreateTripContext);
  const router=useRouter();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  },[])

  return (
    <View style={{
      padding: 25,
      paddingTop: 40,
      backgroundColor: Colors.WHITE,
      height: '100%',
    }}>
      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize: 35,
        marginTop: 20,
      }}>Review your trip</Text>
      <View style={{
        marginTop: 20,
      }}>
        <Text style={{
          fontFamily: 'outfit-bold',
          fontSize: 20,
        }}>Before generating your trip, please review your selection</Text>
        
        {/* Place Selection Info */}
        <View style={{
          marginTop: 20,
          display: 'flex',
          flexDirection: 'row',
          gap: 20,
        }}>
          <Text style={{
            fontSize:35,
          }}>📍</Text>
          <View>
            <Text style={{
              fontFamily: 'outfit',
              fontSize: 20,
              color: Colors.GRAY,
            }}>Destination</Text>
            <Text style={{
              fontFamily: 'outfit-medium',
              fontSize: 20,
            }}>{tripData?.locationInfo?.name ?? 'No destination selected'}</Text>
          </View>
        </View>

        {/* Date Selection Info */}
        <View style={{
          marginTop: 25,
          display: 'flex',
          flexDirection: 'row',
          gap: 20,
        }}>
          <Text style={{
            fontSize:35,
          }}>📅</Text>
          <View>
            <Text style={{
              fontFamily: 'outfit',
              fontSize: 20,
              color: Colors.GRAY,
            }}>Travel Dates</Text>
            <Text style={{
              fontFamily: 'outfit-medium',
              fontSize: 20,
            }}>{moment(tripData?.startDate).format('DD MMM')+" To "+ moment(tripData?.endDate).format('DD MMM')+"  "}({tripData?.totalNoOfDays} days)</Text>
          </View>
        </View>

        {/* No of Persons Selection Info */}
        <View style={{
          marginTop: 25,
          display: 'flex',
          flexDirection: 'row',
          gap: 20,
        }}>
          <Text style={{
            fontSize:30,
          }}>🚌</Text>
          <View>
            <Text style={{
              fontFamily: 'outfit',
              fontSize: 20,
              color: Colors.GRAY,
            }}>Who is traveling</Text>
            <Text style={{
              fontFamily: 'outfit-medium',
              fontSize: 20,
            }}>{tripData?.traveler?.title}</Text>
          </View>
        </View>
        {/* Budget Selection Info */}
        <View style={{
          marginTop: 25,
          display: 'flex',
          flexDirection: 'row',
          gap: 20,
        }}>
          <Text style={{
            fontSize:30,
          }}>💰</Text>
          <View>
            <Text style={{
              fontFamily: 'outfit',
              fontSize: 20,
              color: Colors.GRAY,
            }}>Budget</Text>
            <Text style={{
              fontFamily: 'outfit-medium',
              fontSize: 20,
            }}>{tripData?.budget}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity 
           onPress={()=>router.replace('/create-trip/generate-trip')}
              style={{
              padding:20,
              backgroundColor:Colors.PRIMARY,
              borderRadius:15,
              marginTop:80,    
            }}
      >
              <Text style={{
                textAlign:'center',
                color:Colors.WHITE,
                fontFamily:'outfit-medium',
                fontSize:20,
              }}>Build My Trip</Text>
            </TouchableOpacity>
    </View>
  )
}