import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Components
import MovieCard from "@/components/cards/MovieCard";

// Context
import { useRootContext } from "@/context/RootContext";

// API
import { fetchTopRatedMovies } from "@/api/tmdb";

export default function TopRated() {
  // Context Varibales
  const { topRatedList, setTopRatedList } = useRootContext();

  // State Variables
  const [loading, setLoading] = useState(true);

  // Mounting State
  useEffect(() => {
    getTopRatedMovies();
  }, []);

  const getTopRatedMovies = async () => {
    try {
      const fetchedTopRatedMovies = await fetchTopRatedMovies();
      setTopRatedList(fetchedTopRatedMovies?.results);
    } catch (err) {
      console.log(
        "Some issue while getting top-rated movies (top-rated.tsx) - ",
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
          data={topRatedList}
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
