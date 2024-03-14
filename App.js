import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { DittoProvider, DittoComponent } from "ditto-react";
import source from "./ditto";

export default function App() {
  return (
    <View style={styles.container}>
      <DittoProvider source={source}>
        <Text>
          <DittoComponent componentId="example-component" />
        </Text>
        <StatusBar style="auto" />
      </DittoProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
