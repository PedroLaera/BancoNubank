import { View, StyleSheet } from "react-native";
export default function Space() {
  return <View style={styles.Space}></View>;
}
const styles = StyleSheet.create({
  Space: {
    width: "100%",
    marginTop: 50,
    height: 3,
    backgroundColor: "#F0F1F5",
  },
});
