import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AppEventEmitter from "@utils/AppEventEmitter";
import { Router, Actions } from "react-native-router-flux";
import Drawer from "react-native-drawer";

export default class MenuWide extends Component {
  componentDidMount() {
    AppEventEmitter.addListener(
      "hamburger.click",
      this.openSideMenu.bind(this)
    );
  }

  closeSideMenu() {
    if (typeof this.refs.drawer != "undefined") {
      this.refs.drawer.close();
    }
  }

  openSideMenu() {
    this.refs.drawer.open();
  }

  render() {
    return (
      <Drawer
        ref="drawer"
        type="static"
        tweenHandler={Drawer.tweenPresets.parallax}
        tapToClose={true}
        backgroundColor="rgba(45, 47, 59, 1)"
        panCloseMask={0.2}
        panThreshold={0.2}
        openDrawerOffset={0.2}
        content={
          <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.8)" }}>
            <Text
              style={{
                color: "#fff",
                margin: 10,
                borderBottomWidth: 1,
                borderBottomColor: "#fff",
                padding: 10,
              }}
            >
              {" "}
              Register
            </Text>
            <TouchableOpacity onPress={Actions.auth}>
              <Text
                style={{
                  color: "#fff",
                  margin: 10,
                  padding: 10,
                  borderBottomWidth: 1,
                  borderBottomColor: "#fff",
                }}
              >
                {" "}
                Auth
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                color: "#fff",
                margin: 10,
                padding: 10,
                borderBottomWidth: 1,
                borderBottomColor: "#fff",
              }}
            >
              {" "}
              Login
            </Text>
            <Text
              style={{
                color: "#fff",
                margin: 10,
                padding: 10,
                borderBottomWidth: 1,
                borderBottomColor: "#fff",
              }}
            >
              {" "}
              COmponent 1
            </Text>
            <Text
              style={{
                color: "#fff",
                margin: 10,
                padding: 10,
                borderBottomWidth: 1,
                borderBottomColor: "#fff",
              }}
            >
              {" "}
              component2
            </Text>
          </View>
        }
      >
        <Router
          hideNavBar={true}
          dispatch={this.closeSideMenu.bind(this)}
          scenes={this.props.scenes}
        />
      </Drawer>
    );
  }
}
