import React, { Component } from "react";

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Switch,
  TextInput,
} from "react-native";

import AccountKit, {
  LoginButton,
  Color,
  StatusBarStyle,
} from "react-native-facebook-account-kit";

class Auth extends Component {
  state = {
    authToken: null,
    loggedAccount: null,
  };

  componentWillMount() {
    this.configureAccountKit();

    AccountKit.getCurrentAccessToken()
      .then(token => {
        if (token) {
          AccountKit.getCurrentAccount().then(account => {
            this.setState({
              authToken: token,
              loggedAccount: account,
            });
          });
        } else {
          console.log("No user account logged");
        }
      })
      .catch(e => console.log("Failed to get current access token", e));
  }

  configureAccountKit() {
    AccountKit.configure({
      theme: {},

      initialEmail: this.state.email ? this.state.email : "fahidroid@gmail.com",
      initialPhoneCountryPrefix: "+91",
      initialPhoneNumber: this.state.phone ? this.state.phone : "9578006633",
    });
  }

  onLogin(token) {
    if (!token) {
      console.warn("User canceled login");
      this.setState({});
    } else {
      AccountKit.getCurrentAccount().then(account => {
        this.setState({
          authToken: token,
          loggedAccount: account,
        });
      });
    }
  }

  onLoginError(e) {
    console.log("Failed to login", e);
  }

  onEmailLoginPressed() {
    AccountKit.loginWithEmail()
      .then(token => {
        this.onLogin(token);
      })
      .catch(e => this.onLoginError(e));
  }

  onLogoutPressed() {
    AccountKit.logout()
      .then(() => {
        this.setState({
          authToken: null,
          loggedAccount: null,
        });
      })
      .catch(e => console.log("Failed to logout"));
  }

  renderUserLogged() {
    const { id, email, phoneNumber } = this.state.loggedAccount;

    return (
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.onLogoutPressed()}
        >
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>

        <Text style={styles.label}>Account Kit Id</Text>
        <Text style={styles.text}>{id}</Text>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.text}>{email}</Text>
        <Text style={styles.label}>Phone Number</Text>
        <Text style={styles.text}>
          {phoneNumber ? (
            `${phoneNumber.countryCode} ${phoneNumber.number}`
          ) : (
            ""
          )}
        </Text>
      </View>
    );
  }

  renderLogin() {
    return (
      <View>
        <LoginButton
          style={styles.button}
          type="phone"
          onLogin={token => this.onLogin(token)}
          onError={e => this.onLogin(e)}
        >
          <Text style={styles.buttonText}>Verify by SMS</Text>
        </LoginButton>

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.onEmailLoginPressed()}
        >
          <Text style={styles.buttonText}>Verify By Email</Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.loggedAccount ? (
          this.renderUserLogged()
        ) : (
          this.renderLogin()
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  button: {
    height: 50,
    width: 300,
    backgroundColor: "#eee",
    marginBottom: 10,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  label: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 20,
    color: "#eee",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "#fff",
  },
});

export default Auth;
