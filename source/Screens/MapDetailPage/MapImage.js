import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const MapImage = ({locationData}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: locationData.image}}
        style={styles.image}
        resizeMode="contain" // Ensure the image fits within the view
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    top: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '90%', // Set the width to 90% of the container
    aspectRatio: 1, // Maintain aspect ratio (square image)
    borderRadius: 20,
  },
});

export default MapImage;
