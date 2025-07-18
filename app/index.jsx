// app/Index.jsx
import { View, StyleSheet } from "react-native";
import Header from "./components/Header";

export default function Index() {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
});
