import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";

// Icons
import { AntDesign } from "@expo/vector-icons";

const TabScreenHeader = () => {
  return (
    <View className="h-14 flex-row items-center justify-between px-2">
      <View></View>
      <View>
        <Text className="text-white font-pmedium text-2xl pl-5">Movie App</Text>
      </View>
      <View>
        <TouchableOpacity
          className="pr-3"
          onPress={() => router.push("/liked-movies")}
        >
          <AntDesign name="heart" size={24} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TabScreenHeader;
