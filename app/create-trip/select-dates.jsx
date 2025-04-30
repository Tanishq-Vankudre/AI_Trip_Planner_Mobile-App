import { View, Text, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useEffect, useState,useContext } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from '../../constants/Colors'
import CalendarPicker from 'react-native-calendar-picker'
import moment from 'moment'
import { CreateTripContext } from '../../context/CreateTripContext'

export default function SelectDates() {
  const navigation = useNavigation();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const {tripdata,setTripData} = useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: '',
    });
  }, []);

  const onDateChange = (date, type) => {
    console.log(date, type);
    if (type === 'START_DATE') {
      setStartDate(moment(date));
    }
    else {
      setEndDate(moment(date));
    }
  };

  const OnDateSelectionContinue = () =>{
    if(!startDate && !endDate) {
      ToastAndroid.show('Please select a date', ToastAndroid.SHORT);
      return;
    }
    const totalNoOfDays = endDate.diff(startDate, 'days') + 1;
    console.log('Total number of days:', totalNoOfDays);
    setTripData({
      ...tripdata,
      startDate:startDate,
      endDate:endDate,
      totalNoOfDays:totalNoOfDays,
    });
  }

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 75,
        height: '100%',
        backgroundColor: Colors.WHITE,
      }}
    >
      <Text
        style={{
          fontFamily: 'outfit-bold',
          fontSize: 35,
          marginTop: -20,
        }}
      >
        Travel Dates
      </Text>

      <View
        style={{
          marginTop: 20,
        }}
      >
        <CalendarPicker
          onDateChange={onDateChange}
          allowRangeSelection={true}
          minDate={new Date()}
          maxRangeDuration={5}
          selectedRangeStyle={{
            backgroundColor: Colors.PRIMARY,
          }}
          selectedDayTextStyle={{
            color: Colors.WHITE,
          }}
        />
      </View>

      <TouchableOpacity
       onPress={OnDateSelectionContinue}
        style={{
          padding: 20,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          marginTop: 40,
        }}
      >
        <Text
          style={{
            textAlign: 'center',
            color: Colors.WHITE,
            fontFamily: 'outfit-medium',
            fontSize: 20,
          }}
        >
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
}