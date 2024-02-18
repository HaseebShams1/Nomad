import React, { useState } from 'react';
import { View,Image, Text, StyleSheet, TouchableOpacity, TextInput, Modal } from 'react-native';

const TripPage = () => {
  const [tripData, setTripData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newTrip, setNewTrip] = useState({
    name: '',
    location: '',
    startDate: '',
    endDate: '',
    description: '',
  });

  const handleAddTrip = () => {
    const tripToAdd = { ...newTrip }; // Create a new object with the newTrip data
    setTripData([...tripData, tripToAdd]); // Add the new trip to the tripData array
    setModalVisible(false);
    setNewTrip({
      name: '',
      location: '',
      startDate: '',
      endDate: '',
      description: '',
    });
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
            <TextInput
              style={styles.input}
              placeholder="Location"
              value={newTrip.location}
              onChangeText={(text) => setNewTrip({...newTrip, location: text})}
            />
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
            <Text style={styles.tripLocation}>{trip.location}</Text>
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
    marginTop:10, // Adjusted margin to prevent overlapping
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
    //backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  tripList: {
    flex: 1,
  },
  tripItem: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: 'rgb(234,242,215)',
  },
  tripName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  tripLocation: {
    fontSize: 16,
  },
  tripDates: {
    fontSize: 16,
    fontStyle: 'italic',
  },
  tripDescription: {
    marginTop: 5,
    fontSize: 16,

  },
  cancelButton: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  cancelButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default TripPage;
