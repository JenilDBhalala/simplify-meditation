import beachImage from "@/assets/meditation-images/beach.webp";
import AppGradient from "@/components/AppGradient";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, SafeAreaView, Text, View } from "react-native";

const App = () => {
  const router = useRouter();
  return (
    <View className="flex-1">
      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}>
          <SafeAreaView className="flex-1 mx-7 my-12 justify-between">
            <View>
              <Text className="text-center text-white font-bold text-3xl">
                Simple Meditation
              </Text>
              <Text className="text-center text-white text-regular mt-2 text-lg">
                Simplifying meditation for everyone
              </Text>
            </View>
            <View>
              <CustomButton
                onPress={() => router.push("/nature-meditate")}
                title="Get Started"
              ></CustomButton>
            </View>
            <StatusBar />
          </SafeAreaView>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default App;
