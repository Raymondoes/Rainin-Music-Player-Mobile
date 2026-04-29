/*
Plans for this app:
RAININ' MOBILE

Rainin' Audio Player on the mobile phone, we'll give the user 4 choices of music.
Each choice will provide a different background designed to soothe stress and relax the user.

What will be used: Express (for Backend), SQlite (database, will be implemented if possible)

Written in: 11/03/2026

CARDS:
Planned outcome:

display: flex-wrap (for the first ones, then we'll wrap it in order to fit the resolution..)
comfortable dark theme.

Written on: Thuesday, 03, 2026, 2:00 AM

once a music is clicked, redirect, raining background fades into existence, audio plays.

(COMMENTS WILL BE REMOVED ONCE IMPLEMENTED)

Plans for the future:
We could probably add a components and place them in here.
*/

import { SafeAreaView } from "react-native-safe-area-context";
import { Rainindefault } from "@/components/rainin-default-card";
import { StyleSheet, StatusBar } from "react-native";
import { Credits } from "@/components/ui/creds";

export default function HomeScreen() {
  return (
    <SafeAreaView style={bg.background}>
      <StatusBar
        barStyle="light-content"
        translucent={true}
        backgroundColor="rgba(0,0,0,0.0)"
      />
      <Rainindefault />
      <Credits />
    </SafeAreaView>
  );
}

const bg = StyleSheet.create({
  background: {
    flex: 1,
    flexWrap: "wrap",
    backgroundColor: "#222222",
  },
});
