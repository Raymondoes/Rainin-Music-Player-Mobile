import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { Link } from "expo-router";

export function Rainindefault() {
  return (
    <Link style={carddesign.background} href="/rainin-default">
      <View>
        <Image
          source={require("@/assets/images/rainin-default.gif")}
          style={{
            width: 150,
            height: 100,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        />
        <Text style={carddesign.text}>Rainin&apos; Default</Text>
      </View>
    </Link>
  );
}

// Meant for the Card Design, this is the StyleSheet
const carddesign = StyleSheet.create({
  background: {
    width: 150,
    height: 190,
    backgroundColor: "rgba(74, 74,  74, 0.30)",
    borderRadius: 10,
    transform: [{ translateY: 30 }],
    margin: 10,
  },

  text: {
    color: "#fff",
    textAlign: "center",
  },
});
