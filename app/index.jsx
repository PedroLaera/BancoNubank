import { StyleSheet, Image, View, Text } from "react-native";

export default function Index() {
  return (
    <View style={style.container}>
      <Image
        source={require("./components/iconAccount.png")}
        style={style.iconAccount}
      />
      <Image
        source={require("./components/eyeClosed.png")}
        style={style.eyeClosed}
      />
      <Image
        source={require("./components/iconHelp.png")}
        style={style.iconHelp}
      />
      <Image
        source={require("./components/iconMensagem.png")}
        style={style.iconMensagem}
      />
      <Text style={style.text}>Olá, Pedro Henrique Laera...</Text>
      <View style={style.header} />
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
  eyeClosed: {
    width: 30,
    height: 30,
    position: "absolute",
    top: 90,
    right: 135,
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
});
