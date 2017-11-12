import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Actions } from "react-native-router-flux";
import AppEventEmitter from "@utils/AppEventEmitter";
class Home extends Component {
  open() {
    AppEventEmitter.emit("hamburger.click");
  }

  render() {
    const self = this;
    return (
      <View style={styles.container}>
        <View
          style={{
            backgroundColor: "#eee",
            height: 50,
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Image
            source={{
              uri:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png",
            }}
            style={{ height: 30, width: 30 }}
          />
          <Text> Facebook Testing</Text>
        </View>
        <TouchableOpacity onPress={self.open}>
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
