// app/components/Header.jsx
import { StyleSheet, Image, View, Text, Pressable } from "react-native";
import { useState } from "react";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);

  const alternarVisibilidade = () => {
    setIsVisible((prev) => !prev);
  };

  const saldo = "5.555.555";

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/iconAccount.jpg")}
        style={styles.iconAccount}
      />

      <Pressable
        onPress={alternarVisibilidade}
        style={styles.buttonValorVisivel}
      >
        <Image
          source={
            isVisible
              ? require("../assets/images/eyeOpen.jpg")
              : require("../assets/images/eyeClosed.jpg")
          }
          style={styles.eyeValue}
        />
      </Pressable>

      <Image
        source={require("../assets/images/iconHelp.jpg")}
        style={styles.iconHelp}
      />
      <Image
        source={require("../assets/images/iconMensagem.jpg")}
        style={styles.iconMensagem}
      />

      <Text style={styles.text}>Olá, Pedro Henrique Laera...</Text>
      <View style={styles.header} />
      <Text style={styles.textSaldo}>Conta</Text>
      <Text style={styles.numConta}>{isVisible ? saldo : "*"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 330,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text: {
    color: "#FFFFFF",
    position: "absolute",
    top: 155,
    left: 25,
    zIndex: 1,
    fontSize: 18,
    fontFamily: "Roboto",
    fontWeight: "bold",
  },
  header: {
    width: "100%",
    height: 200,
    position: "absolute",
    top: 0,
    backgroundColor: "#8A19D6",
  },
  iconAccount: {
    width: 50,
    height: 50,
    borderRadius: 50,
    position: "absolute",
    top: 80,
    left: 25,
    zIndex: 1,
  },
  eyeValue: {
    width: 35,
    height: 35,
    zIndex: 1,
  },
  iconHelp: {
    width: 35,
    height: 34,
    position: "absolute",
    top: 88,
    right: 75,
    zIndex: 1,
  },
  iconMensagem: {
    width: 28,
    height: 28,
    position: "absolute",
    top: 90,
    right: 25,
    zIndex: 1,
  },
  buttonValorVisivel: {
    position: "absolute",
    top: 88,
    right: 135,
    zIndex: 1,
  },
  textSaldo: {
    color: "#000000ff",
    position: "absolute",
    top: 240,
    left: 30,
    zIndex: 1,
    fontSize: 28,
    fontFamily: "Roboto",
    fontWeight: "bold",
  },
  numConta: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#333",
    position: "absolute",
    top: 280,
    left: 30,
    textAlign: "center",
    zIndex: 1,
  },
});
