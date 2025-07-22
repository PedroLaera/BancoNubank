import React from "react";
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const Buttons = [
  require("../assets/images/ButtonPix.jpg"),
  require("../assets/images/ButtonBoleto.jpg"),
  require("../assets/images/ButtonTransfer.jpg"),
  require("../assets/images/ButtonDeposit.jpg"),
  require("../assets/images/ButtonRecharge.jpg"),
  require("../assets/images/ButtonCharge.jpg"),
  require("../assets/images/ButtonInternationalTransfer.jpg"),

  //botões duplicados para testar se o carrousssel funcionaria com um maior número de botões
  require("../assets/images/ButtonPix.jpg"),
  require("../assets/images/ButtonBoleto.jpg"),
  require("../assets/images/ButtonTransfer.jpg"),
  require("../assets/images/ButtonDeposit.jpg"),
  require("../assets/images/ButtonRecharge.jpg"),
  require("../assets/images/ButtonCharge.jpg"),
  require("../assets/images/ButtonInternationalTransfer.jpg"),
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
    width: 90,
    height: 100,
    left: "30%",

    marginRight: 10,
    zIndex: 1,
  },
  Space: {
    width: 20,
    height: 35,
  },
});
