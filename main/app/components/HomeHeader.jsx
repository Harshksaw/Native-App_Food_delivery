import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AssetImage from './AssetImage';
import { SIZES } from '../constants/theme';



const HomeHeader = () => {

    const {address,setAddress} = useContext(UserReversedGeoCode);

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