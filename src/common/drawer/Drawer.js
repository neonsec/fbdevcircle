import React, { Component } from "react";
import { View, Text } from "react-native";
import AppEventEmitter from "@utils/AppEventEmitter";
import { Router } from "react-native-router-flux";
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
          <View style={{ flex: 1, backgroundColor: "#0f0" }}>
            <Text>Hello WOrld</Text>
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
