import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {styled} from '@ui-kitten/components';

const TopRead = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top Read</Text>
      <Text style={styles.p}>On English Wikipedia</Text>
      <View style={styles.box}>
        <Text style={styles.description}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 20,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  p: {
    marginVertical: 7,
    color: 'grey',
    fontSize: 14,
    fontWeight: '500',
  },
  box: {
    marginTop: 10,
    height: 350,
    borderRadius: 16,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: 'grey',
  },
  image: {
    width: '100%',
    height: 350,
    resizeMode: 'cover',
    borderRadius: 16,
  },
  description: {
    color: 'white',
    fontSize: 15,
    position: 'absolute',
    marginHorizontal: 15,
    paddingVertical: 15,
  },
});

export default TopRead;
