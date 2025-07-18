import { View, StyleSheet, Text, Pressable, Image } from "react-native";
export default function CardRequest() {
  return (
    <View>
      <View style={styles.containerItens}>
        {/* Card Invisivel */}
        <Text style={styles.Text1}>Cartão de crédito</Text>
        <Text style={styles.Text2}>
          Peca seu cartão de crédito sem anuidade e tenha mais controle da sua
          vida financeira.
        </Text>
        <Pressable onPress={() => console.log("Pedir Cartão")}>
          <Image
            source={require("../assets/images/ButtonGetCard.jpg")}
            style={styles.ButtonGetCard}
          ></Image>
        </Pressable>
      </View>
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
    backgroundColor: "red",
  },
  IconCard: {
    //ultimo editado
  },
  Text1: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  Text2: {},
  ButtonGetCard: {
    width: 300,
    height: 50,
    borderRadius: 25,
    zIndex: 1,
    marginTop: 60,
  },
});
