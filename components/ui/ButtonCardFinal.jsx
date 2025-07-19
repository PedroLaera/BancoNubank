import { View, Text, Pressable, StyleSheet } from "react-native";

export default function ButtonCardFinal() {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => console.log("Button Pressed")}>
        <Text style={styles.buttonContainer}>Conhecer</Text>
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
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  buttonContainer: {
    width: 100,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#8A19D6",
    color: "#fff",
    textAlign: "center",
    lineHeight: 50,
    fontSize: 15,
    fontFamily: "Roboto",
    fontWeight: "bold",
  },
});
