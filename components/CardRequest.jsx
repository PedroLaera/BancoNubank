import { View, StyleSheet, Text, Pressable } from "react-native";
import ButtonCard from "./ui/ButtonCard";
export default function CardRequest() {
  return (
    <View style={styles.containerItens}>
      {/* Card Invisivel */}
      <Text style={styles.Text1}>Cartão de crédito</Text>
      <Text style={styles.Text2}>
        Peça seu cartão de crédito sem anuidade e tenha {"\n"}mais controle da
        sua vida financeira.
      </Text>
      <Pressable onPress={() => console.log("Pedir Cartão")}>
        <ButtonCard />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 200,
  },
  containerItens: {
    alignItems: "left",
    height: 200,
    paddingTop: 20,
    zIndex: 1,
    left: "8%",
    top: 15,
  },
  IconCard: {
    //ultimo editado
  },
  Text1: {
    fontSize: 28,
    fontFamily: "Roboto",
    fontWeight: "medium",
    marginBottom: 10,
  },
  Text2: {
    fontSize: 17,
    marginTop: 5,
    fontFamily: "Roboto",
    fontWeight: "medium",
  },
  ButtonGetCard: {
    width: 300,
    height: 50,
    borderRadius: 25,
    marginTop: 20,
    zIndex: 1,
  },
});
