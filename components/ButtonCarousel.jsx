import React from "react";
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const Buttons = [
  require("../assets/images/ButtonPix.png"),
  require("../assets/images/ButtonBoleto.png"),
  require("../assets/images/ButtonTransfer.png"),
  require("../assets/images/ButtonDeposit.png"),
  require("../assets/images/ButtonRecharge.png"),
  require("../assets/images/ButtonCharge.png"),
  require("../assets/images/ButtonInternationalTransfer.png"),

  //botões duplicados para testar se o carrousssel funcionaria com um maior número de botões
  require("../assets/images/ButtonPix.png"),
  require("../assets/images/ButtonBoleto.png"),
  require("../assets/images/ButtonTransfer.png"),
  require("../assets/images/ButtonDeposit.png"),
  require("../assets/images/ButtonRecharge.png"),
  require("../assets/images/ButtonCharge.png"),
  require("../assets/images/ButtonInternationalTransfer.png"),
];

export default function ButtonCarousel() {
  return (
    <View>
      <View style={styles.Space} />
      <View style={styles.container}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {Buttons.map((img, index) => (
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
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ButtonContainer: {
    zIndex: 1,
  },
  buttonImage: {
    width: 70,
    height: 90,
    left: 29,

    marginRight: 10,
    zIndex: 1,
  },
  Space: {
    width: 20,
    height: 35,
  },
});
