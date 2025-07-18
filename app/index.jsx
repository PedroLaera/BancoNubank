// app/Index.jsx
import { View, StyleSheet } from "react-native";
import Header from "../components/Header";
import ButtonCarousel from "../components/ButtonCarousel";

export default function Index() {
  return (
    <View style={styles.container}>
      <Header />
      <ButtonCarousel />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
