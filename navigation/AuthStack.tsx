import React, { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";

import Hello from "../screens/Hello";
import { UserDashboard } from "./InitialScreenOnStart";
import Confirm from "../screens/Confirm";
import Admin from "../screens/Admin";
import AllUsers from "../screens/AllUsers";
import UserComplaint from "../screens/UserComplaint";
import AdminLogin from "../screens/AdminLogin";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Hello"
        component={Hello}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="UserDashboard"
        component={UserDashboard}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Confirm"
        component={Confirm}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Admin"
        component={Admin}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AdminLogin"
        component={AdminLogin}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AllUsers"
        component={AllUsers}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="UserComplaints"
        component={UserComplaint}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
