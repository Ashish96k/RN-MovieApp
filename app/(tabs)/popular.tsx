import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Components
import MovieCard from "@/components/cards/MovieCard";

// API
import { fetchPopularMovies } from "@/api/tmdb";
import { useRootContext } from "@/context/RootContext";

export default function Popular() {
  // Context Variables
  const { popularList, setPopularList } = useRootContext();

  // State Variables
  const [loading, setLoading] = useState(true);

  // Mounting State
  useEffect(() => {
    getPopularMoviesList();
  }, []);

  const getPopularMoviesList = async () => {
    try {
      const fetchedPopularMovies = await fetchPopularMovies();
      setPopularList(fetchedPopularMovies?.results);
    } catch (err) {
      console.log(
        "Some issue while getting popular movies list (popular.tsx) - ",
        err
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView className="flex flex-1">
      {loading ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <FlatList
          data={popularList}
          // horizontal
          // numColumns={2}
          renderItem={({ item }) => (
            <View key={item?.id} className="h-80 my-3 ">
              <MovieCard movie={item} />
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
}
