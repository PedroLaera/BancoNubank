import ButtonCardFinal from "./ButtonCardFinal";
import {
  View,
  Image,
  Text,
  Pressable,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const Cards = [
  require("../../assets/images/WomanCardNubank.jpg"),
  require("../../assets/images/ManCardNubank.jpg"),
  require("../../assets/images/HandCardNubank.jpg"),
  require("../../assets/images/WomanCardNubank.jpg"),
  require("../../assets/images/ManCardNubank.jpg"),
  require("../../assets/images/HandCardNubank.jpg"),
  require("../../assets/images/WomanCardNubank.jpg"),
  require("../../assets/images/ManCardNubank.jpg"),
  require("../../assets/images/HandCardNubank.jpg"),
];

const Texts = [
  "Controle seu dinheiro com facilidade e segurança.",
  "Cartão sem anuidade, feito para você.",
  "Tenha seu banco na palma da mão, 24/7.",
  "Simplifique sua vida financeira com a Nu.",
  "Controle gastos e acompanhe tudo pelo app.",
  "A revolução do seu jeito de usar cartão.",
  "Transparência e agilidade que você merece.",
  "Mais benefícios, menos burocracia.",
  "Sua liberdade financeira começa aqui.",
];

export default function CardFinalContainer() {
  return (
    <View style={styles.ButtonContainer}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        style={styles.ScrollView}
        contentContainerStyle={{ paddingLeft: 45, paddingRight: 10 }}
      >
        {Cards.map((img, index) => (
          <TouchableOpacity
            key={index}
            style={styles.buttonContainer}
            activeOpacity={0.7}
          >
            <Image
              source={img}
              style={styles.buttonImage}
              resizeMode="contain"
            />
            <Text
              style={styles.buttonText}
              numberOfLines={3}
              ellipsizeMode="tail"
            >
              {Texts[index]}
            </Text>
            <Pressable style={styles.buttonFinal}>
              <ButtonCardFinal />
            </Pressable>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  ButtonContainer: {
    width: "100%",
    height: 320,
    paddingTop: 30,
  },
  ScrollView: {},
  buttonContainer: {
    marginRight: 20,
    alignItems: "center",
    width: 200,
  },
  buttonImage: {
    width: "100%",
    height: 110,
    zIndex: 1,
  },
  buttonText: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "left",
    height: 60,
  },
  buttonFinal: {
    marginTop: 10,
    width: "100%",
    height: 30,
    justifyContent: "center",
  },
});
