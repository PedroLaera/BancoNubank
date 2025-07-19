// app/Index.jsx
import { StyleSheet, ScrollView } from "react-native";
import Header from "../components/Header";
import ButtonCarousel from "../components/ButtonCarousel";
import MyCards from "../components/MyCards";
import FramesInformation from "../components/FramesInformation";
import Space from "../components/Space";
import CardRequest from "../components/CardRequest";
import CardFinal from "../components/CardFinal";

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header />
      <ButtonCarousel />
      <MyCards />
      <FramesInformation />
      <Space />
      <CardRequest />
      <Space />
      <CardFinal />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 0,
    paddingBottom: 50,
  },
});
