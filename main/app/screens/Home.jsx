import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import { COLORS, SIZES } from "../constants/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import pages from './page.style'
import uidata from "../constants/uidata";

import { UserReversedGeoCode } from "../context/UserReversedGeoCode";
import { UserLocationContext } from "../context/UserLocationContext";
import HomeHeader from "../components/HomeHeader";
import CategoryList from "../components/CategoryList";
import ChoicesList from "../components/ChoicesList";
import Heading from "../components/Heading";

const Home = () => {

  
  const [SelectedCategory, setSelectedCategory] = useState(null);
  const [SelectedSelection, setSelectedSelection] = useState(null);
  const [SelectedValue, setSelectedValue] = useState(null);
  const [selectedChoice, setSelectedChoice] = useState(null);

  return (
    <SafeAreaView>
      <View style={pages.viewOne}>
        <View style={pages.viewTwo}>

        <HomeHeader/>

        <ScrollView style={{borderBottomEndRadius : 30, borderBottomLeftRadius : 30}}
         showsVerticalScrollIndicator>
          
        <CategoryList 
        setSelectedCategory={setSelectedCategory}
        setSelectedValue={setSelectedValue}
        setSelectedSelection={setSelectedSelection}
        />

        <ChoicesList setSelectedChoice={setSelectedChoice}  setSelectedSection={setSelectedSelection}/>
        <View>
          <Heading heading={'Nearby Restaurants'} onPress={()=>handl}/>
        </View>


        </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  
});
