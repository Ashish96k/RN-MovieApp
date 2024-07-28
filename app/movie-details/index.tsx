import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

// Icons
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";

// Context
import { useRootContext } from "@/context/RootContext";
import CommonScreenHeader from "@/components/shared/CommonScreenHeader";

// API
import { image500 } from "@/api/tmdb";

export default function MovieDetails(props: any) {
  // Prop Destructuring
  const {} = props;

  // Context Variables
  const { selectedMovie, likedList, setLikedList }: any = useRootContext();

  useLayoutEffect(() => {
    // navigation.setParams({ param: selectedMovie?.title });
  }, []);

  // Handleing the like functionality for movie
  const movieLikeHandler = () => {
    const alreadyLiked = likedList.find(
      (movie) => movie?.id === selectedMovie?.id
    );
    if (alreadyLiked?.id) {
      const filteredLikeList = likedList.filter(
        (movie) => movie?.id !== alreadyLiked?.id
      );
      setLikedList(filteredLikeList);
    } else {
      setLikedList((prevState) => [...prevState, selectedMovie]);
    }
  };

  return (
    <SafeAreaView className="flex-1">
      <CommonScreenHeader />

      <Image
        source={{ uri: image500(selectedMovie?.backdrop_path) }}
        className="w-full h-3/6"
        resizeMode="cover"
      />
      <LinearGradient
        // Background Linear Gradient
        colors={["transparent", "rgba(23,23,23,0.8)", "rgba(23,23,23,1)"]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        className="w-full h-3/6 absolute top-28"
      />
      <View className="absolute top-2/4 px-4">
        <View className="flex-row items-center justify-between">
          <Text className="text-white font-psemibold text-2xl">
            {selectedMovie?.title}
          </Text>
          <TouchableOpacity onPress={movieLikeHandler}>
            {likedList?.length &&
            likedList?.find((movie) => movie?.id === selectedMovie?.id) ? (
              <AntDesign name="heart" size={24} color="red" />
            ) : (
              <AntDesign name="hearto" size={24} color="red" />
            )}
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center ">
          <MaterialIcons name="local-movies" size={24} color="white" />
          <Text className="text-white font-pregular text-xs px-2">
            {selectedMovie?.release_date}
          </Text>
        </View>

        {/* Movie Description */}
        <View className="py-2">
          <View className="flex-row items-center justify-evenly py-9">
            <View className="flex-row items-center gap-2">
              <AntDesign name="heart" size={24} color="red" />
              <Text className="text-gray-300 font-pregular text-sm text-justify">
                {selectedMovie?.vote_count}
              </Text>
            </View>
            <View className="flex-row items-center gap-2">
              <Fontisto name="heart-eyes" size={24} color="yellow" />
              <Text className="text-gray-300 font-pregular text-sm text-justify">
                {selectedMovie?.popularity}
              </Text>
            </View>
            <View className="flex-row items-center gap-2">
              <FontAwesome6 name="people-group" size={24} color="cyan" />
              <Text className="text-gray-300 font-pregular text-sm text-justify">
                {selectedMovie?.vote_count}
              </Text>
            </View>
            <View className="flex-row items-center gap-2">
              <AntDesign name="star" size={24} color="gold" />
              <Text className="text-gray-300 font-pregular text-sm text-justify">
                {selectedMovie?.vote_average.toFixed(1)}
              </Text>
            </View>
          </View>

          <Text className="text-gray-300 font-pregular text-md text-justify">
            {selectedMovie?.overview}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
