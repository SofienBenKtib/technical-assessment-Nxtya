import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FAB as MyFab } from "react-native-paper";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/AppNavigator";
import { useNavigation } from "@react-navigation/native";

const FAB = () => {
  const navigation = useNavigation();
  return (
    <MyFab
      icon="heart"
      style={styles.fab}
      onPress={() => navigation.navigate("LikedImages")}
    />
  );
};

export default FAB;

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
