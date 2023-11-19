import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import styles from "./Trip.Style";
import { SIZES } from "../../constants/theme";

const Trip = () => {
  const [departureStation, setDepartureStation] = useState("");
  const [destination, setDestination] = useState("");
  const [spacecraft, setSpacecraft] = useState("");
  const [fare, setFare] = useState(0);

  const categories = [
    { key: "abuja", value: "Abuja" },
    { key: "spock", value: "Spock" },
    { key: "iss", value: "International Space Station" },
    { key: "moon", value: "Moon" },
  ];

  const subcategories = {
    abuja: [
      { key: "spock", value: "Spock" },
      { key: "iss", value: "International Space Station" },
      { key: "moon", value: "Moon" },
    ],
    spock: [
      { key: "abuja", value: "Abuja" },
      { key: "iss", value: "International Space Station" },
      { key: "moon", value: "Moon" },
    ],
    iss: [
      { key: "abuja", value: "Abuja" },
      { key: "spock", value: "Spock" },
      { key: "moon", value: "Moon" },
    ],
    moon: [
      { key: "abuja", value: "Abuja" },
      { key: "spock", value: "Spock" },
      { key: "iss", value: "International Space Station" },
    ],
  };

  const type = {
    abuja: "natural",
    spock: "natural",
    iss: "manmade",
    moon: "natural",
  };

  const orbit = {
    abuja: "earth",
    spock: "moon",
    iss: "earth",
    moon: "earth",
  };

  const spacecrafts = [
    { key: "F1", value: "Falcon 1 (Regular)" },
    { key: "F9", value: "Falcon 9 (Luxury)" },
  ];

  const tripFare = () => {
    let fare = 0;
    const sameStation = departureStation === destination;

    // Check if departure station, destination, and spacecraft are selected
    if (departureStation && destination && spacecraft) {
      const isCrossOrbit = orbit[departureStation] !== orbit[destination];

      if (isCrossOrbit) {
        setFare((fare += 250)); // Anytime you cross from one orbit to another on Falcon 1 = 250btc
      } else {
        setFare((fare += 50)); // Journey between two points in an orbit on Falcon 1 = 50btc
      }

      if (spacecraft === "F9") {
        setFare((fare *= 2)); // Falcon 9 is a luxury spacecraft with better experience. Its passengers pay twice the fare of the Falcon 1.
      }
    }

    if (type[destination] === "manmade") {
      setFare((fare += 200)); // Royalty when landing on man-made stations (satellites) on any rocket = 200btc
    }

    if (sameStation) {
      setFare((fare = 0));
    }

    setFare(fare);
  };

  return (
    <View>
      <Text style={styles.header}>Book a trip</Text>
      <View style={styles.noteView}>
        <Text style={styles.note}>
          Kindly note, Falcon 9 is twice the price of Falcon 1, and landing on
          International Space Station will cost you a landing fee of 200btc
        </Text>
      </View>
      <View style={styles.selectView}>
        <SelectList
          setSelected={(val) => setDepartureStation(val)}
          data={categories}
          placeholder="Select Departure Station"
          onSelect={tripFare}
        />
        <SelectList
          setSelected={(val) => setDestination(val)}
          data={subcategories[departureStation]}
          placeholder="Choose Destination"
          boxStyles={{ marginTop: SIZES.medium }}
          onSelect={tripFare}
        />
        <SelectList
          setSelected={(val) => setSpacecraft(val)}
          data={spacecrafts}
          placeholder="Select Desired Spacecraft"
          boxStyles={{ marginTop: SIZES.medium }}
          onSelect={tripFare}
        />
      </View>
      <View style={styles.fareView}>
        <Text style={styles.fare}>Fare: {fare} btc</Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Book Trip</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Trip;
