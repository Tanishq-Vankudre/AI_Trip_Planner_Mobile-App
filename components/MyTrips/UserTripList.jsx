import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import moment from 'moment';
import { Colors } from '../../constants/Colors';
import UserTripCard from './UserTripCard';

export default function UserTripList({ userTrips }) {
  if (!userTrips || userTrips.length === 0) return null;

  const latestTrip = JSON.parse(userTrips[0].tripData);
  const remainingTrips = userTrips.slice(1);

  return (
    <View>
      <View>
        {latestTrip?.locationInfo?.photoRef?
        <Image source={{uri:'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='+latestTrip.locationInfo?.photoRef+'&key='+process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}}
        style={{
            width: '100%',
            height: 250,
            objectFit: 'cover',
            borderRadius: 15,
            marginTop: 20,
        }}/>
        :
        <Image
          source={require('../../assets/images/Login.png')}
          style={{
            width: '100%',
            height: 250,
            objectFit: 'cover',
            borderRadius: 15,
            marginTop: 20,
          }}
        />}
        <View style={{ marginTop: 10 }}>
          <Text
            style={{
              fontFamily: 'outfit-medium',
              fontSize: 20,
            }}
          >
            {latestTrip.locationInfo?.name}
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}
          >
            <Text
              style={{
                fontFamily: 'outfit',
                fontSize: 17,
                color: Colors.GRAY,
              }}
            >
              {moment(latestTrip.startDate).format('DD MMM yyyy')}
            </Text>
            <Text
              style={{
                fontFamily: 'outfit',
                fontSize: 17,
                color: Colors.GRAY,
              }}
            >
              {latestTrip.traveler.title}
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.PRIMARY,
              padding: 15,
              borderRadius: 15,
              marginTop: 10,
              width: '100%',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                fontFamily: 'outfit-medium',
                fontSize: 15,
                color: Colors.WHITE,
                textAlign: 'center',
              }}
            >
              See your plan
            </Text>
          </TouchableOpacity>
        </View>

        {remainingTrips.map((trip, index) => {
          const parsedTrip = JSON.parse(trip.tripData);
          return <UserTripCard trip={parsedTrip} key={index} />;
        })}
      </View>
    </View>
  );
}
