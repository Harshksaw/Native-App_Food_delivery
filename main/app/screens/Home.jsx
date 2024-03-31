import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { COLORS, SIZES } from "../constants/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import pages from './page.style'
import uidata from "../constants/uidata";

import { UserReversedGeoCode } from "../context/UserReversedGeoCode";
import { UserLocationContext } from "../context/UserLocationContext";
import HomeHeader from "../components/HomeHeader";

const Home = () => {

  // const {address , setAddress} = useContext(UserReversedGeoCode);
  // const {location , setLocation} = useContext(UserLocationContext);

  // console.log(address);
  // console.log(location);
  
  return (
    <SafeAreaView>
      <View style={pages.viewOne}>
        <View style={pages.viewTwo}>

        <HomeHeader/>

        <ScrollView style={{borderBottomEndRadius : 30, borderBottomLeftRadius : 30}}
         showsVerticalScrollIndicator>
          

        </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  
});
