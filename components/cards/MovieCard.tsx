import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

// Icons
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { image500 } from "@/api/tmdb";
import { router } from "expo-router";
import { useRootContext } from "@/context/RootContext";

const MovieCard = (props: object) => {
  // Props destructuring
  const { movie }: any = props;

  // Context Variables
  const { selectedMovie, setSelectedMovie }: any = useRootContext();

  const movieSelectionHandler = () => {
    setSelectedMovie(movie);

    router.push("/movie-details");
  };

  return (
    <View className="flex-1 justify-center px-6 rounded overflow-hidden">
      <TouchableOpacity className="flex-1" onPress={movieSelectionHandler}>
        <ImageBackground
          source={{ uri: image500(movie?.poster_path) }}
          className="flex-1 justify-end"
        >
          <LinearGradient
            // Background Linear Gradient
            colors={["transparent", "rgba(23,23,23,0.8)", "rgba(23,23,23,1)"]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            className="w-full h-72 absolute bottom-0"
          />
          <View className="w-full px-5 py-4 flex-row justify-between items-center">
            <View>
              <Text className="text-white font-psemibold text-3xl">
                {movie?.title}
              </Text>
              <View className="flex-row justify-start items-center">
                <MaterialIcons name="local-movies" size={24} color="white" />
                <Text className="text-white font-pmedium text-xs px-2">
                  {movie?.release_date}
                </Text>
              </View>
            </View>
            <View className="flex-row items-center justify-between">
              <AntDesign name="star" size={16} color="white" />
              <Text className="text-white px-2">
                {movie?.vote_average.toFixed(1)}
              </Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

export default MovieCard;

const styles = StyleSheet.create({});
