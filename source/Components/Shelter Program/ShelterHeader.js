// import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
// import React from 'react';
// import Octicons from 'react-native-vector-icons/Octicons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons.js';
// import {useNavigation} from '@react-navigation/native';

// const ShelterHeader = () => {
//   const navigation = useNavigation();
//   return (
//     <View style={styles.container}>
//       <View style={styles.headerContainer}>
//         <TouchableOpacity
//           style={styles.iconContainer}
//           onPress={() => navigation.goBack()}>
//           <Octicons name="chevron-left" color={'#000'} size={32} />
//         </TouchableOpacity>
//         <Text style={styles.title}>Crisis</Text>
//         <View style={styles.iconContainerRight}></View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     // backgroundColor: '#fff',
//   },
//   title: {
//     color: '#000',
//     fontSize: 18,
//     fontWeight: '700',
//   },
//   headerContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'flex-start', // Center the title horizontally
//     paddingVertical: 10, // Add padding for spacing
//   },
//   iconContainer: {
//     marginLeft: 10,
//   },
//   iconContainerRight: {
//     right: 20,
//     top: 20,
//     position: 'absolute', // Position it absolutely on the right side
//   },
// });

// export default ShelterHeader;

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons.js';
import {useNavigation} from '@react-navigation/native';

const ShelterHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.TitleContainer}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => navigation.goBack()}>
          <Octicons name="chevron-left" color={'#000'} size={32} />
        </TouchableOpacity>
        <View
          style={{
            // flex: 1,
            alignItems: 'center',
          }}>
          <Text style={styles.title}>Shelter Programs</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    paddingBottom: 20,
  },
  title: {
    color: '#000',
    fontSize: 18,
    // fontWeight: '700',
    fontFamily: 'Pangram-Medium',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', // Center the title horizontally
    paddingVertical: 10, // Add padding for spacing
  },
  iconContainer: {
    marginLeft: 10,
    top: '50%',
  },
});

export default ShelterHeader;
