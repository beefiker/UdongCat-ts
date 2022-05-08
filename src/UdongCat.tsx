import TestComp from "components/TestComp";
import { StyleSheet, Text, View } from "react-native";

const UdongCat = () => {
  return (
    <View style={styles.container}>
      <Text>[Test] UdongCat</Text>
      <TestComp />
    </View>
  );
};

export default UdongCat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
