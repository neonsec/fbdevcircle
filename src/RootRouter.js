import React, { Component } from "react";
import { View, Text } from "react-native";
import { Router, Scene, Actions } from "react-native-router-flux";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import AppEventEmitter from "@utils/AppEventEmitter";
import Drawer from "./common/drawer/Drawer";
class RootRouter extends Component {
  constructor(props) {
    super(props);
    this.state = { menuStyle: 0 };
  }

  changeMenuStyle(data) {
    this.setState({ menuStyle: data.menuId });
  }

  componentDidMount() {
    AppEventEmitter.addListener(
      "app.changeMenuStyle",
      this.changeMenuStyle.bind(this)
    );
  }
  render() {
    const scenes = Actions.create(
      <Scene key="root">
        <Scene key="auth" component={Auth} hideNavBar />
        <Scene key="home" component={Home} hideNavBar initial />
      </Scene>
    );
    return <Drawer ref="menuDefault" scenes={scenes} />;
  }
}

export default RootRouter;
