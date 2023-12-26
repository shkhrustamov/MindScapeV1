import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {styled} from '@ui-kitten/components';

const PictureDay = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Picture of the Day</Text>
      <Text style={styles.p}>From Wikimedia Commons</Text>
      <View style={styles.box}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://images.unsplash.com/photo-1703002917693-e51692232c81?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
        />
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
    marginTop: 10,
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

export default PictureDay;
