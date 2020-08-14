import React, { useContext, useCallback } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import TrackForm from "../components/TrackForm";
import { AntDesign } from "@expo/vector-icons";

// import "../_mockLocation";

const TrackCreateScreen = ({ isFocused }) => {
  const {
    state: { recording },
    addLocation,
  } = useContext(LocationContext);
  const callback = useCallback(
    (location) => {
      addLocation(location, recording);
    },
    [recording]
  );
  const [err] = useLocation(isFocused || recording, callback);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2 style={styles.title}>
        Create a Track
      </Text>
      <Map />
      {err ? (
        <Text style={styles.errorMessage}>Please enable location services</Text>
      ) : null}
      <TrackForm />
    </SafeAreaView>
  );
};

TrackCreateScreen.navigationOptions = {
  title: "Add Track",
  tabBarIcon: <AntDesign name="pluscircleo" size={20} />,
};

const styles = StyleSheet.create({
  title: {
    marginHorizontal: 15,
    marginVertical: 5,
    fontSize: 48,
  },
  errorMessage: {
    alignSelf: "center",
    color: "red",
    marginVertical: 5,
    fontWeight: "400",
  },
});

export default withNavigationFocus(TrackCreateScreen);
