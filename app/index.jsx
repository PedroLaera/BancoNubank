// app/Index.jsx
import { View, StyleSheet } from "react-native";
import Header from "../components/Header";
import ButtonCarousel from "../components/ButtonCarousel";
import MyCards from "../components/MyCards";
import FramesInformation from "../components/FramesInformation";
import Space from "../components/Space";
import CardRequest from "../components/CardRequest";

export default function Index() {
  return (
    <View style={styles.container}>
      <Header />
      <ButtonCarousel />
      <MyCards />
      <FramesInformation />
      <Space />
      <CardRequest />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
