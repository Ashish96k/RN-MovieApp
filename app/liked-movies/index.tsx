import React from "react";
import { View, FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Context
import { useRootContext } from "@/context/RootContext";

// Components
import MovieCard from "@/components/cards/MovieCard";
import CommonScreenHeader from "@/components/shared/CommonScreenHeader";

const LikedMovies = () => {
  // Context Variables
  const { likedList } = useRootContext();

  return (
    <SafeAreaView className="flex flex-1">
      <CommonScreenHeader />

      <FlatList
        data={likedList}
        // horizontal
        // numColumns={2}
        renderItem={({ item }) => (
          <View key={item?.id} className="h-80 my-3 ">
            <MovieCard movie={item} />
          </View>
        )}
        ListEmptyComponent={() => (
          <View className="flex-1 items-center justify-center h-1/3">
            <Text className="text-white font-psemibold text-2xl py-24">
              No Movies Liked Yet !
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default LikedMovies;
