import { View, Text, Image } from 'react-native';
import React from 'react';
import moment from 'moment';
import { Colors } from '../../constants/Colors';

export default function UserTripCard({ trip }) {
  return (
    <View style={{
         marginTop: 20,
         display: 'flex',
         flexDirection: 'row',
         gap: 10,
         alignItems: 'center',}}>
      {/* <Image
        source={require('../../assets/images/Login.png')}
        style={{
          width: 100,
          height: 100,
          borderRadius: 15,
        }}
      /> */}
      <Image source={{uri:'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='+trip.locationInfo?.photoRef+'&key='+process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}}
              style={{
                width: 100,
                height: 100,
                borderRadius: 15,
              }}/>
      <View>
        <Text style={{
            fontFamily: 'outfit-medium',
            fontSize: 18,
        }}>{trip.locationInfo?.name}</Text>
        <Text style={{
            fontFamily:'outfit',
            fontSize: 16,
            color:Colors.GRAY, 
        }}>{moment(trip.startDate).format('DD MMM yyyy')}</Text>
        <Text style={{
            fontFamily:'outfit',
            fontSize: 16,
            color:Colors.GRAY, 
        }}>Traveling:{trip.traveler?.title}</Text>
      </View>
    </View>
  );
}
