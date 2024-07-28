import React, { useEffect, useState } from "react";
import { Dimensions, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel from "react-native-reanimated-carousel";

// Components
import MovieCard from "@/components/cards/MovieCard";

// API
import { fetchNowPlayingMovies } from "@/api/tmdb";
import { useRootContext } from "@/context/RootContext";

const { width, height } = Dimensions.get("window");

export default function NowPlaying() {
  // Context Variables
  const { nowPlayingList, setNowPlayingList } = useRootContext();

  // State Variables
  const [loading, setLoading] = useState(true);

  // Mounting Phase
  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  const getNowPlayingMovies = async () => {
    try {
      const moviesList = await fetchNowPlayingMovies();

      setNowPlayingList(moviesList?.results);
    } catch (err) {
      console.log(
        "Some issue while getting now-playing movies (now-playing.tsx) - ",
        err
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView className="flex flex-1 items-center justify-center">
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <Carousel
          loop
          mode="parallax"
          width={width}
          // height={height / 1.5}
          autoPlay={true}
          data={nowPlayingList}
          scrollAnimationDuration={1500}
          // onSnapToItem={(index) => console.log("current index:", index)}
          renderItem={({ item }) => <MovieCard movie={item} />}
        />
      )}
    </SafeAreaView>
  );
}
