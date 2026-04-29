import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useAudioPlayer } from "expo-audio";
import Svg, { Path, G, Rect } from "react-native-svg";

const Play20SolidIcon = ({
  size = 24,
  color = "#000000",
  strokeWidth = 2,
  background = "transparent",
  opacity = 1,
  rotation = 0,
  flipHorizontal = false,
  flipVertical = false,
  padding = 0,
}) => {
  const viewBoxSize = 24 + padding * 2;
  const viewBox = `${-padding} ${-padding} ${viewBoxSize} ${viewBoxSize}`;

  const transform = [];
  if (rotation !== 0) transform.push(`rotate(${rotation}deg)`);
  if (flipHorizontal) transform.push("scale(-1, 1)");
  if (flipVertical) transform.push("scale(1, -1)");

  const svgStyle = {
    opacity,
    transform: transform.length ? transform.join(" ") : undefined,
  };

  return (
    <View style={{ backgroundColor: background }}>
      <Svg
        width={size}
        height={size}
        viewBox={viewBox}
        style={svgStyle}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path
          fill={color}
          d="M6.3 2.84A1.5 1.5 0 0 0 4 4.11v11.78a1.5 1.5 0 0 0 2.3 1.27l9.344-5.891a1.5 1.5 0 0 0 0-2.538z"
        />
      </Svg>
    </View>
  );
};

interface PauseIconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  background?: string;
  opacity?: number;
  rotation?: number;
  shadow?: number;
  flipHorizontal?: boolean;
  flipVertical?: boolean;
  padding?: number;
}

const PauseIcon: React.FC<PauseIconProps> = ({
  size,
  color = "#000000",
  strokeWidth = 2,
  background = "transparent",
  opacity = 1,
  rotation = 0,
  shadow = 0,
  flipHorizontal = false,
  flipVertical = false,
  padding = 0,
}) => {
  const transforms = [];
  if (rotation !== 0) transforms.push(`rotate(${rotation}deg)`);
  if (flipHorizontal) transforms.push("scaleX(-1)");
  if (flipVertical) transforms.push("scaleY(-1)");

  const viewBoxSize = 24 + padding * 2;
  const viewBoxOffset = -padding;
  const viewBox = `${viewBoxOffset} ${viewBoxOffset} ${viewBoxSize} ${viewBoxSize}`;

  return (
    <Svg
      width={size}
      height={size}
      viewBox={viewBox}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        opacity,
        transform: transforms.length ? transforms.join(" ") : undefined,
        backgroundColor: background !== "transparent" ? background : undefined,
      }}
    >
      <G>
        <Rect x="14" y="3" width="5" height="18" rx="1" />
        <Rect x="5" y="3" width="5" height="18" rx="1" />
      </G>
    </Svg>
  );
};

const audioSource = require("@/assets/music/rainin-default.mp3");

export function Bottombar({
  onPlayStateChange,
}: {
  onPlayStateChange?: (isPlaying: boolean) => void;
}) {
  const player = useAudioPlayer(audioSource);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (player) {
      const playing = player.playing;
      setIsPlaying(playing);
      setIsReady(true);
      onPlayStateChange?.(playing);
    }
  }, [player?.playing]);

  const togglePlayPause = async () => {
    try {
      if (isPlaying) {
        await player.pause();
        setIsPlaying(false);
        onPlayStateChange?.(false);
      } else {
        await player.play();
        setIsPlaying(true);
        onPlayStateChange?.(true);
      }
    } catch (error) {
      Alert.alert("Audio Error", "Could not play/pause the audio file.");
    }
  };

  if (!isReady) return null;

  return (
    <View style={[styles.background, styles.positions]}>
      <TouchableOpacity style={styles.button} onPress={togglePlayPause}>
        {isPlaying ? (
          <PauseIcon size={48} color="#FFFFFF" strokeWidth={2} />
        ) : (
          <Play20SolidIcon size={48} color="#FFFFFF" strokeWidth={2} />
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#0A0A0A80",
    height: 112,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  positions: {
    position: "absolute",
    bottom: 0,
  },
  button: {
    marginBottom: 10,
    marginLeft: 10,
  },
});

export default Bottombar;
