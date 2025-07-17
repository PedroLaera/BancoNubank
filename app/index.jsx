import { StyleSheet, Image, View, Text, Pressable } from "react-native";
import { useState } from "react";

export default function Index() {
  const [isVisible, setIsVisible] = useState(true);

  const alternarVisibilidade = () => {
    setIsVisible((setIsVisible) => !setIsVisible);
  };

  const saldo = "5.555.555";

  return (
    <View style={style.container}>
      <Image
        source={require("./components/iconAccount.jpg")}
        style={style.iconAccount}
      />

      <Pressable
        onPress={alternarVisibilidade}
        style={style.buttonValorVisivel}
      >
        <Image
          source={
            isVisible
              ? require("./components/eyeOpen.jpg")
              : require("./components/eyeClosed.jpg")
          }
          style={style.eyeValue}
        />
      </Pressable>
      <Image
        source={require("./components/iconHelp.jpg")}
        style={style.iconHelp}
      />
      <Image
        source={require("./components/iconMensagem.jpg")}
        style={style.iconMensagem}
      />
      <Text style={style.text}>Olá, Pedro Henrique Laera...</Text>
      <View style={style.header} />
      <Text style={style.textSaldo}>Conta</Text>
      <Text style={style.numConta}>{isVisible ? saldo : "*"}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  text: {
    color: "#ffffffff",
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
    left: 35,
    textAlign: "center",
    zIndex: 1,
  },
});
