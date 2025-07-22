import {
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

const frame = [
  require("../assets/images/FrameInformation.jpg"),
  require("../assets/images/FrameInformation.jpg"),
  require("../assets/images/FrameInformation.jpg"),
];

export default function FramesIformation() {
  return (
    <View style={styles.FrameContainer}>
      <View style={styles.Space} />
      <View style={styles.container}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {frame.map((img, index) => (
            <TouchableOpacity key={index} activeOpacity={0.7}>
              <Image
                source={img}
                style={styles.FrameImage}
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
  FrameContainer: {
    zIndex: 1,
    width: "100%",
  },
  FrameImage: {
    width: 280,
    height: 120,
    marginRight: 20,
    left: "15%",
    zIndex: 1,
  },
  Space: {
    width: 20,
    height: 35,
  },
});
