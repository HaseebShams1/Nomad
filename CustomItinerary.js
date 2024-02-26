import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Modal, Image } from 'react-native'; // Import Image from react-native

// Sample data for countries and cities
const countryList = [
  { code: 'US', name: 'United States', cities: ['New York', 'Los Angeles', 'Chicago'] },
  { code: 'CA', name: 'Canada', cities: ['Toronto', 'Vancouver', 'Montreal'] },
  { code: 'GB', name: 'United Kingdom', cities: ['London', 'Manchester', 'Birmingham'] },
  // Add more countries as needed
];

const TripPage = () => {
  const [tripData, setTripData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newTrip, setNewTrip] = useState({
    name: '',
    country: '',
    city: '',
    startDate: '',
    endDate: '',
    description: '',
  });
  const [showCountries, setShowCountries] = useState(false);
  const [showCities, setShowCities] = useState(false); // State to control visibility of cities list

  const handleAddTrip = () => {
    const tripToAdd = { ...newTrip };
    setTripData([...tripData, tripToAdd]);
    setModalVisible(false);
    setNewTrip({
      name: '',
      country: '',
      city: '',
      startDate: '',
      endDate: '',
      description: '',
    });
  };

  const handleCountryChange = (countryCode) => {
    const selectedCountry = countryList.find(country => country.code === countryCode);
    setNewTrip({ ...newTrip, country: countryCode, city: '', cities: selectedCountry?.cities });
    setShowCountries(false); // Hide countries list after selection
  };

  const handleCityChange = (selectedCity) => {
    setNewTrip({ ...newTrip, city: selectedCity });
    setShowCities(false); // Hide cities list after selection
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Trip</Text>
      <View style={styles.CreateItineraryLogo}>
       <Image source={require("./Assets/itineraryL.png")} style={styles.logoCreate} />
      </View>
      <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.addButtonText}>Add New Itinerary</Text>
      </TouchableOpacity>

      <Modal
  animationType="slide"
  transparent={true}
  visible={modalVisible}
  onRequestClose={() => setModalVisible(false)}
>
  <View style={styles.modalContainer}>
    <View style={styles.modalContent}>
      <Text style={styles.modalHeading}>Add New Itinerary</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={newTrip.name}
        onChangeText={(text) => setNewTrip({...newTrip, name: text})}
      />
      {newTrip.country !== '' ? (
        <Text>Country: {countryList.find(country => country.code === newTrip.country)?.name}</Text>
      ) : (
        <View style={styles.input}>
          <TouchableOpacity
            style={styles.countryButton}
            onPress={() => setShowCountries(!showCountries)}
          >
            <Text>Select a country:</Text>
          </TouchableOpacity>
          {showCountries && (
            <View>
              {countryList.map(country => (
                <TouchableOpacity
                  key={country.code}
                  style={styles.countryItem}
                  onPress={() => handleCountryChange(country.code)}
                >
                  <Text>{country.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
      )}
      {newTrip.city !== '' && <Text>City: {newTrip.city}</Text>}
      {newTrip.city === '' && newTrip.country !== '' && (
        <View style={styles.input}>
          <TouchableOpacity
            style={styles.cityButton}
            onPress={() => setShowCities(!showCities)}
          >
            <Text>Select a city:</Text>
          </TouchableOpacity>
          {showCities && (
            <View>
              {newTrip.cities.map(city => (
                <TouchableOpacity
                  key={city}
                  style={styles.cityItem}
                  onPress={() => handleCityChange(city)}
                >
                  <Text>{city}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
      )}
      <TextInput
        style={styles.input}
        placeholder="Start Date"
        value={newTrip.startDate}
        onChangeText={(text) => setNewTrip({...newTrip, startDate: text})}
      />
      <TextInput
        style={styles.input}
        placeholder="End Date"
        value={newTrip.endDate}
        onChangeText={(text) => setNewTrip({...newTrip, endDate: text})}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={newTrip.description}
        onChangeText={(text) => setNewTrip({...newTrip, description: text})}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddTrip}>
        <Text style={styles.addButtonText}>Add Itinerary</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
        <Text style={styles.cancelButtonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  </View>
</Modal>


      <View style={styles.tripList}>
        {tripData.map((trip, index) => (
          <View key={index} style={styles.tripItem}>
            <Text style={styles.tripName}>{trip.name}</Text>
            <Text style={styles.tripLocation}>{trip.country}, {trip.city}</Text>
            <Text style={styles.tripDates}>{trip.startDate} - {trip.endDate}</Text>
            <Text style={styles.tripDescription}>{trip.description}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  CreateItineraryLogo: {
    // flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: 'white',
     height:200,
     marginTop:5,
     marginBottom:-30,
   },
   logoCreate: {
    backgroundColor:'white',
    height: 100,
    width: 100,
    marginTop:-90,
    paddingBottom:5,
  },
  
  addButton: {
    padding: 15,
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: 'rgb(102,204,153)',
    borderRadius:10,
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(183,244,216)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    marginBottom: 10,
  },
  countryButton: {
   
