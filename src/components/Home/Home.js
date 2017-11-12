import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Actions } from "react-native-router-flux";
import Header from "../../components/Header";
import AppEventEmitter from "@utils/AppEventEmitter";
class Home extends Component {
  open() {
    AppEventEmitter.emit("hamburger.click");
  }

  render() {
    const self = this;
    return (
      <View style={styles.container}>
        <Header />
        <TouchableOpacity>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text style={styles.text}> hello world</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  text: {
    fontSize: 20,
    color: "#fff",
  },
};
export default Home;
