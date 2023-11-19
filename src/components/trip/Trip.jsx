import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import styles from "./Trip.Style";
import { SIZES } from "../../constants/theme";

const Trip = () => {
  const [departureStation, setDepartureStation] = useState("abuja");
  const [destination, setDestination] = useState("");
  const [spacecraft, setSpacecraft] = useState("");

  const categories = [
    { key: "abuja", value: "Abuja" },
    { key: "spock", value: "Spock" },
    { key: "iss", value: "International Space Station" },
    { key: "moon", value: "Moon" },
  ];

  const subcategories = {
    abuja: [
      { key: "1", value: "Spock" },
      { key: "2", value: "International Space Station" },
      { key: "3", value: "Moon" },
    ],
    spock: [
      { key: "1", value: "Abuja" },
      { key: "2", value: "International Space Station" },
      { key: "3", value: "Moon" },
    ],
    iss: [
      { key: "1", value: "Abuja" },
      { key: "2", value: "Spock" },
      { key: "3", value: "Moon" },
    ],
    moon: [
      { key: "1", value: "Abuja" },
      { key: "2", value: "Spock" },
      { key: "3", value: "International Space Station" },
    ],
  };

  const spacecrafts = [
    { key: "F1", value: "Falcon 1" },
    { key: "F9", value: "Falcon 9" },
  ];

  return (
    <View>
      <Text style={styles.header}>Book a trip</Text>
      <View style={styles.selectView}>
        <SelectList
          setSelected={(val) => setDepartureStation(val)}
          data={categories}
          placeholder="Select Departure Station"
        />
        <SelectList
          setSelected={(val) => setDestination(val)}
          data={subcategories[departureStation]}
          placeholder="Choose Destination"
          boxStyles={{ marginTop: SIZES.medium }}
        />
        <SelectList
          setSelected={(val) => setSpacecraft(val)}
          data={spacecrafts}
          placeholder="Select Desired Spacecraft"
          boxStyles={{ marginTop: SIZES.medium }}
        />
      </View>
      <View style={styles.fareView}>
        <Text style={styles.fare}>Fare: 100 btc</Text>
        <Pressable style={styles.button}>
          <Text>Book Trip</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Trip;
