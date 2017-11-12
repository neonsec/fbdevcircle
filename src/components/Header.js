import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Actions } from "react-native-router-flux";

import AppEventEmitter from "@utils/AppEventEmitter";
export default class Header extends Component {
  open() {
    AppEventEmitter.emit("hamburger.click");
  }
  render() {
    return (
      <View
        style={{
          backgroundColor: "#eee",
          height: 50,
          justifyContent: "center",
          display: "flex",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={this.open}>
            <Image
              source={{
                uri:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png",
              }}
              style={{ height: 30, width: 30 }}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 25, fontWeight: "800", color: "#000" }}>
            {" "}
            Facebook DevC
          </Text>
        </View>
      </View>
    );
  }
}
