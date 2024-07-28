import React from "react";
import { Text, View } from "react-native";
import { Tabs } from "expo-router";

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { SafeAreaView } from "react-native-safe-area-context";

// Components
import TabScreenHeader from "@/components/shared/TabScreenHeader";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";

interface TabIconProps {
  color: string;
  focused: boolean;
  icon: any;
  name: string;
}

const TabIcon: React.FC<TabIconProps> = ({ color, focused, icon, name }) => {
  return (
    <View className="items-center justify-center gap-1">
      <TabBarIcon name={focused ? icon : `${icon}-outline`} color={color} />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-[8px]`}
        style={{ color }}
      >
        {name}
      </Text>
    </View>
  );
};

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView className="flex-1">
      <TabScreenHeader />
      <Tabs
        screenOptions={{
          // tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          tabBarActiveTintColor: "#FF9C01",
          tabBarInactiveTintColor: "#FFE0B3",
          headerShown: false,
          tabBarShowLabel: false,
        }}
      >
        <Tabs.Screen
          name="now-playing"
          options={{
            title: "Now Playing",
            // tabBarIcon: ({ color, focused }) => (
            //   <TabBarIcon
            //     name={focused ? "play-circle" : "play-circle-outline"}
            //     color={color}
            //   />
            // ),
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                color={color}
                focused
                icon="play-circle"
                name={"Now Playing"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="popular"
          options={{
            title: "Popular",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                color={color}
                focused
                icon="trending-up"
                name={"Popular"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="upcoming"
          options={{
            title: "Upcoming",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                color={color}
                focused
                icon="calendar-number"
                name={"Upcoming"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="top-rated"
          options={{
            title: "Top Rated",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon color={color} focused icon="star" name={"Top Rated"} />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}
