import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Platform,
  Dimensions,
  Alert

} from "react-native";
import React, { useState } from "react";
import Colors from "../constants/Colors";
import { Feather } from "@expo/vector-icons";
import { auth, db } from "../firebase/firebase";

export default function Dashboard({ navigation }: { navigation: any }) {
  const handleSignout = async () => {
    await auth.signOut();
  };
  const Modal = () => {
    Alert.alert("Auth App", "Do you really want to logout", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
      },
      { text: "Logout", onPress: handleSignout },
    ]);
  };
  return (
    <View style={styles.container}>
        <Text style={{fontSize: 25}}>Welcome Fam!</Text>
      <View>
        <TouchableOpacity style={styles.button} onPress={Modal}>
          <Text style={{color: Colors.white, fontSize: 20}}>Sign out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button:{
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 8,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    marginTop: 30,
  },
});