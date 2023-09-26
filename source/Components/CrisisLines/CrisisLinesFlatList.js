import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {ShelterData} from '../../assets/Data/Data';

const CrisisLinesFlatList = () => {
  const handlePhoneNumberPress = phoneNumber => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  const handleWebsitePress = website => {
    if (website) {
      // Check if the URL starts with http:// or https://
      if (!website.startsWith('http://') && !website.startsWith('https://')) {
        website = 'https://' + website; // Add https:// if it's missing
      }
      Linking.openURL(website);
    }
  };

  return (
    <FlatList
      data={ShelterData}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => (
        <View style={styles.cardContainer}>
          <Text
            style={[
              styles.cardText,
              {fontFamily: 'Pangram-Medium', fontSize: 18},
            ]}>
            {item.name}
          </Text>
          <TouchableOpacity onPress={() => handlePhoneNumberPress(item.number)}>
            <Text style={styles.phoneText}>Phone: {item.number}</Text>
          </TouchableOpacity>
          {item.address && <Text style={styles.cardText}>{item.address}</Text>}
          {item.website && (
            <TouchableOpacity onPress={() => handleWebsitePress(item.website)}>
              <Text style={[styles.cardText, {color: 'blue'}]}>
                {item.website}
              </Text>
            </TouchableOpacity>
          )}
          {item.additionalInfo && (
            <Text style={styles.cardText}>{item.additionalInfo}</Text>
          )}
        </View>
      )}
      contentContainerStyle={styles.flatListContentContainer}
    />
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    padding: 12,
    marginBottom: 16,
    borderRadius: 8,
    width: '95%',
    alignSelf: 'center',
    borderColor: '#6B46E4',
    borderWidth: 2,
    // top: '20%',
  },
  cardText: {
    color: '#000',
    fontSize: 16,
    marginBottom: 8,
    fontFamily: 'Pangram-Regular',
  },
  phoneText: {
    color: 'blue', // Change the phone number color to blue for indicating it's clickable
    fontSize: 16,
    marginBottom: 8,
    fontFamily: 'Pangram-Regular',
  },
  flatListContentContainer: {
    paddingBottom: 100, // Add extra bottom height here (adjust as needed)
  },
});

export default CrisisLinesFlatList;
