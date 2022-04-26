import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { Asset } from "expo-asset";
import { AppLoading } from "expo";
import Login from "./screens/Login";
import LoginScreen from "./screens/LoginScreen";

// function cacheImages(images) {
//   return images.map((image) => {
//     if (typeof image === "string") {
//       return Image.prefetch(image);
//     } else {
//       return Asset.fromModule(image).downloadAsync();
//     }
//   });
// }

export default function App() {
  // const [isReady, setIsReady] = useState(false);

  // const handleOpt = async () => {
  //   loadAssetsAsync();
  //   // const imageAssets = cacheImages([require("./assets/bg.jpg")]);
  //   const imageAssets = cacheImages([
  //     require("./assets/background/costa_verde.jpg"),
  //   ]);

  //   await Promise.all([...imageAssets]);
  // };
  // return <Login />;
  return <LoginScreen />;
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
});
