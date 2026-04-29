import { View, Text } from "react-native";

export function Credits() {
  return (
    <View>
      <Text
        style={{
          textAlign: "center",
          color: "white",
          fontSize: 15,
          marginTop: 400,
        }}
      >
        You&apos;re currently viewing an Alpha Version of an application created
        by{"\n"}
        <Text
          style={{
            color: "#42A5FF",
            textShadowColor: "#42A5FF",
            textShadowOffset: { width: 0, height: 0 },
            textShadowRadius: 10,
          }}
        >
          Rainin&apos; Software Technologies{"\n"}
        </Text>
        <Text>with the version of{"\n"}v0.1a</Text>
      </Text>
    </View>
  );
}
