import { View, StyleSheet, Text, Pressable, Image } from "react-native";
import ButtonCard from "./ui/ButtonCard";
export default function CardRequest() {
  return (
    <View style={styles.containerItens}>
      {/* Card Invisivel */}
      <View>
        <Image
          source={require("../assets/images/iconCard.jpg")}
          style={styles.IconCard}
        ></Image>
      </View>
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
    width: 20,
    height: 26,
    backgroundColor: "#fff",
    position: "absolute",
    zIndex: 1,
  },
  Text1: {
    fontSize: 28,
    fontFamily: "Roboto",
    fontWeight: "medium",
    marginBottom: 10,
    marginTop: 45,
  },
  Text2: {
    fontSize: 17,
    fontFamily: "Roboto",
    fontWeight: "medium",
  },
});
