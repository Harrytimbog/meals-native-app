import React from "react";
import { Text } from "react-native";

const MealDetailScreen = ({ route }) => {
  const mealID = route.params.mealId;

  return <Text>This is the Meal Detail Screen {mealID}</Text>;
};

export default MealDetailScreen;
