import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useAssets } from "expo-asset";
import React from "react";
import { Link } from "expo-router";
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";

const Homescreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header1}>The First Descendent</Text>
        <Text style={styles.header2}>Inventory Lookup Tool</Text>
      </View>

      <View style={styles.buttons}>
        <Link
          href={"./lookup"}
          style={[
            defaultStyles.pillButtonSmall, 
            { fontSize: 22, fontWeight: "500", backgroundColor: "gray" },
          ]}
          asChild
        >
          <TouchableOpacity>
            <Text>Enter Here</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  header: {
    marginTop: 90,
    justifyContent: "center",
  },
  header1: {
    fontSize: 30,
    fontWeight: "800",
    textTransform: "uppercase",
    color: "black",
  },
  header2: {
    fontSize: 20,
    fontWeight: "600",
    textTransform: "uppercase",
    color: "black",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 60,
    paddingHorizontal: 20,
  },
});

export default Homescreen;
