import { View, StyleSheet, Image } from "react-native";
export default function MyCards() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/ButtonMyCards.jpg")}
        style={styles.frame}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 48,
  },
  frame: {
    width: "85%",
    height: 60,
    borderRadius: 10,
  },
});
