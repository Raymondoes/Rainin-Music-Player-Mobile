import { useState, useRef, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Bottombar } from "@/components/ui/bottombar";
import { StyleSheet, StatusBar, Animated } from "react-native";

export default function RaininDefaultPage() {
  const [isPlaying, setIsPlaying] = useState(false);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: isPlaying ? 1 : 0,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, [isPlaying]);

  return (
    <SafeAreaView style={bg.background}>
      <StatusBar
        barStyle="light-content"
        translucent={true}
        backgroundColor="rgba(0,0,0,0.0)"
      />

      <Animated.Image
        source={require("@/assets/images/raining.gif")}
        style={[bg.fullScreenImage, { opacity: fadeAnim }]}
        resizeMode="stretch"
        height={900}
      />

      <Bottombar onPlayStateChange={setIsPlaying} />
    </SafeAreaView>
  );
}

const bg = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#222222",
  },
  fullScreenImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
  },
});
