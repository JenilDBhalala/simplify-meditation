import { View, Text, FlatList, Pressable, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import AppGradient from "@/components/AppGradient";
import { MEDITATION_DATA } from "@/constants/meditationData";
import meditationImages from "@/constants/meditation-images";
import { LinearGradient } from "expo-linear-gradient";

const NatureMeditate = () => {
  return (
    <View className="flex-1">
      <AppGradient colors={["#161b2e", "#0a4d4e", "#766e67"]}>
        <View className="ml-4 mt-12">
          <Text className="text-gray-200 mb-2 font-bold text-3xl">
            Welcome Jenil
          </Text>
          <Text className="text-indigo-100 text-lg font-medium">
            Start your meditation practice today
          </Text>
        </View>
        <View className="mx-4">
          <FlatList
            data={MEDITATION_DATA}
            className="mb-20"
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 50 }} // Ensures last item is visible
            renderItem={({ item }) => (
              <Pressable
                onPress={() => console.log("press")}
                className="h-48 my-2 rounded-md overflow-hidden"
              >
                <ImageBackground
                  source={meditationImages[item.id - 1]}
                  resizeMode="cover"
                  className="flex-1 rounded-lg justify-center"
                >
                  <LinearGradient
                    colors={["transparent", "rgba(0,0,0,0.8)"]}
                    className="flex-1 justify-center items-center"
                  >
                    <Text className="text-gray-100 text-2xl font-bold text-center">
                      {item.title}
                    </Text>
                  </LinearGradient>
                </ImageBackground>
              </Pressable>
            )}
          />
        </View>
      </AppGradient>
      <StatusBar />
    </View>
  );
};

export default NatureMeditate;
