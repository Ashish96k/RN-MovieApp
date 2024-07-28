import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Components
import MovieCard from "@/components/cards/MovieCard";

// API
import { fetchUpcomingMovies } from "@/api/tmdb";

// Context
import { useRootContext } from "@/context/RootContext";

export default function Upcoming() {
  // Context Variables
  const { upcomingList, setUpcomingList } = useRootContext();

  // State Variables
  const [loading, setLoading] = useState(true);

  // Mounting State
  useEffect(() => {
    getUpcomingMovies();
  }, []);

  const getUpcomingMovies = async () => {
    try {
      const fetchedUpcomingMoviesList = await fetchUpcomingMovies();
      setUpcomingList(fetchedUpcomingMoviesList?.results);
    } catch (err) {
      console.log(
        "Some issue while getting upcoming movies (upcoming.tsx) - ",
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
          data={upcomingList}
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
