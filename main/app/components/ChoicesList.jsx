import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import uidata from "../constants/uidata";

const ChoicesList = ({setSelectedChoice , setSelectedSection}) => {
  const [selected, setSelected] = React.useState(null);

  const handlePress = () => {
    if (selected === item.value) {
      setSelected(null);
      setSelectedChoice(null);
      setSelectedSection(null);
    } else {
      setSelected(item.value);
      setSelectedChoice(item.value);
      setSelectedSection('restaurants');
    }
  };
  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          marginVertical: 8,
          fontSize: 18,
          fontFamily: "bold",
        }}
      >
        Pick Restaurants
      </Text>

      <FlatList
        data={uidata.choiceList}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        horizontal
        scrollEnabled
        style={{ marginTop: 5 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              backgroundColor:
                selected === item.value
                  ? VideoColorSpace.secondary
                  : VideoColorSpace.lightWhite,
              height: 40,
              borderRadius: 12,
              marginHorizontal: 8,
              justifyContent: "center",
            }}
            onPress={handlePress(item)}
          >
            <Text
              style={{
                fontSize: 16,
                marginHorizontal: 16,
                fontFamily: "bold",
                color:
                  selected === item.value
                    ? VideoColorSpace.lightWhite
                    : COLORS.gray
              }}
            >
              {item.value}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ChoicesList;

const styles = StyleSheet.create({});
