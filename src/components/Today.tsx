import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import * as url from 'url';

const Today = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.today}>Today</Text>
      <View style={styles.article}>
        <Text style={styles.artc}>Feautured Article</Text>
        <Text style={styles.source}>From English Wikipedia</Text>
        <View style={styles.box}>
          <Image
            style={styles.image}
            source={require('../assets/warsaw.jpeg')}
          />
          <View style={styles.textContainer}>
            <Text style={styles.theme}>
              Coventry City 2-2 Bristol City (1977)
            </Text>
            <Text style={styles.tag}>Football match in England</Text>
            <Text style={styles.description}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 30,
  },
  today: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  article: {
    marginVertical: 15,
  },
  artc: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  source: {
    marginVertical: 5,
    color: 'grey',
    fontSize: 14,
    fontWeight: '500',
  },
  box: {
    marginTop: 10,
    height: 400,
    borderRadius: 16,
    backgroundColor: '#262626',
  },
  image: {
    width: '100%',
    height: '50%',
    resizeMode: 'cover',
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
  },
  textContainer: {
    justifyContent: 'flex-start',
    marginHorizontal: 15,
    marginVertical: 20,
  },
  theme: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  tag: {
    fontSize: 14,
    fontWeight: '500',
    color: 'grey',
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
  },
});
export default Today;
