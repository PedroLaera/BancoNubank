import { View, Text, StyleSheet } from "react-native";
import CardFinalContainer from "./ui/CardFinalContainer";

export default function CardFinal() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Descubra mais</Text>
      <CardFinalContainer />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 300,
  },
  text: {
    fontSize: 24,
    top: 15,
    left: 44,
    fontWeight: "bold",

    marginBottom: 10,
  },
});
