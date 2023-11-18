import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/screens/home/Home";
import { store } from "./src/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <View>
        <Home />
      </View>
    </Provider>
  );
}
