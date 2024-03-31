import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import AssetImage from './AssetImage';
import { SIZES } from '../constants/theme';
import { UserLocationContext } from '../context/UserLocationContext';
import * as Location from 'expo-location';


const HomeHeader = () => {
    const [time, setTime] = useState(null);
    const {address,setAddress} = useContext(UserReversedGeoCode);
    const {location, setLocation} = useContext(UserLocationContext);

    useEffect(()=>{
        if(location !== null){
            reverseGeoCode(location.coords.latitude, location.coords.longitude)
        }
    },[location])

    const reverseGeoCode = async(latitude, longitude)=>{
        const reversedGeoCodeAddress = await Location.reverseGeocodeAsync({
            longitude,
            latitude
        });


        setAddress(reversedGeoCodeAddress[0])
        setTime(getTimeOfData())

    }
    const getTimeOfData = ()=>{
        const now = new Date();
        const hour = now.getHours();

        if(hour>= 0 && hour < 12){
            return "🌞"
        }
        else if(hour >= 12 < 17){
            return '✨'

        }else{
            return '😴'

        }
    }
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.outerStyle}>
            <AssetImage data={require('../../assets/images/profile.jpg')}
            width={50}
            height={55}
            mode={'cover'}
            radius={99}
             />
            <View style={styles.headerStyle}>
                <Text style={styles.heading}>Delivering to </Text>
                <Text style={styles.location}>
                    {`${address.city} ${address.name}`}

                </Text>

            </View>


        </View>
        <Text style={{fontSize: 36}}>{time}</Text>

    </View>
  )
}

export default HomeHeader;

const styles = StyleSheet.create({
outerStyle:{
    marginBottom: 10,
    marginHorizontal: 20,
    flexDirection: 'row',

},
headerStyle:{
    marginLeft: 15,
    justifyContent: 'center'



},
heading: {
    fontFamily:'medium',
    fontSize: SIZES.medium,
    color: COLORS.black,
},
location:{
    fontFamily: 'regular',
    fontSize: SIZES.small,
    color: COLORS.gray,
    marginTop: 5
}

})