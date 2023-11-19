import React from "react";
import { View, Text, Pressable } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Trip.Style";
import { SIZES } from "../../constants/theme";
import { tripActions } from "../../store/tripSlice";

const Trip = () => {
  const dispatch = useDispatch();
  const { departureStation, destination, spacecraft, fare } = useSelector(
    (state) => state.trip
  );

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
        fare += 250; // Anytime you cross from one orbit to another on Falcon 1 = 250btc
      } else {
        fare += 50; // Journey between two points in an orbit on Falcon 1 = 50btc
      }

      if (spacecraft === "F9") {
        fare *= 2; // Falcon 9 is a luxury spacecraft with better experience. Its passengers pay twice the fare of the Falcon 1.
      }
    }

    if (type[destination] === "manmade") {
      fare += 200; // Royalty when landing on man-made stations (satellites) on any rocket = 200btc
    }

    if (sameStation) {
      fare = 0;
    }

    dispatch(tripActions.setFare(fare));
  };

  const bookTrip = () => {
    // Perform any necessary actions to book the trip
    // You can dispatch additional actions or make API calls here
    // For now, just reset the trip
    dispatch(tripActions.resetTrip());
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
          setSelected={(val) => dispatch(tripActions.setDepartureStation(val))}
          data={categories}
          placeholder="Select Departure Station"
          onSelect={tripFare}
        />
        <SelectList
          setSelected={(val) => dispatch(tripActions.setDestination(val))}
          data={subcategories[departureStation]}
          placeholder="Choose Destination"
          boxStyles={{ marginTop: SIZES.medium }}
          onSelect={tripFare}
        />
        <SelectList
          setSelected={(val) => dispatch(tripActions.setSpacecraft(val))}
          data={spacecrafts}
          placeholder="Select Desired Spacecraft"
          boxStyles={{ marginTop: SIZES.medium }}
          onSelect={tripFare}
        />
      </View>
      <View style={styles.noteView}>
        <Text style={styles.note}>
          Choose departure, destination and spacecraft to see fare
        </Text>
      </View>
      <View style={styles.fareView}>
        <Text style={styles.fare}>Fare: {fare} btc</Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText} onPress={bookTrip}>
            Book Trip
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Trip;
