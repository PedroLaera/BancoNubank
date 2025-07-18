import { View, Text, Pressable, StyleSheet } from "react-native";

export default function ButtonCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Button Card Component</Text>
      <Pressable onPress={() => console.log("Button Pressed")}>
        <Text style={styles.buttonContainer}>Pedir Cartão</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "left",
    justifyContent: "center",
    top: 15,
    backgroundColor: "#e60000ff",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  buttonContainer: {
    width: 200,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#8A19D6",
    color: "#fff",
    textAlign: "center",
    lineHeight: 50,
    fontSize: 22,
    fontFamily: "Roboto",
    marginTop: 10,
    fontWeight: "bold",
  },
});
