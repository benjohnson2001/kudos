import React, { Component } from 'react';
import styles from './WelcomeComponentStyle';
import { Image, Text, TouchableOpacity, View } from "react-native";
import PendingTransactionCount from "../../../util/PendingTransactionCount";
import Navigator from "../../../util/Navigator";

class WelcomeComponent extends Component {

  constructor(args) {
    super(args);
    PendingTransactionCount.reset();
  }

  onClickOfCreateAccountButton() {
    Navigator.init(this).goToCreateAccountPage();
  }

  onClickOfImportAccountButton() {
    Navigator.init(this).goToImportAccountPage();
  }

  render() {

    return (

      <View style={styles.container}>

        <Image style={styles.logo} source={require("../../../../assets/images/kudos.png")}/>
        <Text style={styles.welcomeMessage}>Welcome to Kudos</Text>

        <TouchableOpacity
          style={styles.createAccountButtonContainer}
          onPress={this.onClickOfCreateAccountButton.bind(this)}>
          <Text style={styles.createAccountButton}>Start a new account</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.importAccountButtonContainer}
          onPress={this.onClickOfImportAccountButton.bind(this)}>
          <Text style={styles.importAccountButton}>I already have an account</Text>
        </TouchableOpacity>

        <Text style={styles.version}>K U D O S - v 1 . 0</Text>
      </View>
    );
  }
}

export default WelcomeComponent;