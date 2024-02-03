import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

const items = [
  {
    label: 'Whats on your mind?',
  },
];

export default function Journaling() {
  const [value, setValue] = React.useState(0);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.container}>
        {/*<Text style={styles.title}>Channels</Text>*/}

        {items.map(({label}, index) => {
          const isActive = value === index;
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                setValue(index);
              }}>
              <View style={[styles.radio, isActive && styles.radioActive]}>
                <View style={styles.radioTop}>
                  <Text style={styles.radioLabel}>{label}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 12,
  },
  /** Radio */
  radio: {
    position: 'relative',
    backgroundColor: '#1C2939',
    marginBottom: 12,
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  radioActive: {
    borderColor: '#1C2939',
  },
  radioTop: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  radioLabel: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
  },
  radioUsers: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2f2f2f',
  },
  radioDescription: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '400',
    color: '#848a96',
  },
});
