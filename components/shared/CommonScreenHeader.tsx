import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";

import { Ionicons } from "@expo/vector-icons";

const CommonScreenHeader = () => {
  return (
    <View className="h-14 flex-row items-center px-5">
      <TouchableOpacity onPress={() => router.back()} className="pr-7 py-3">
        <Ionicons name="arrow-back" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default CommonScreenHeader;
