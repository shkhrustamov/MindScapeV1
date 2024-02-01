import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const items = [
  {
    icon: 'truck',
    label: 'Brush teeth',
    category: '2/2',
    color: '#ff9773',
    price: 64.4,
  },
];

// items.push(...items);

export default function HabitComponent() {
  return (
    <SafeAreaView style={{backgroundColor: '#fff'}}>
      <ScrollView contentContainerStyle={styles.container}>
        {/*<Text style={styles.title}>Transactions</Text>*/}
        {items.map(({icon, label, category, color, price}, index) => {
          return (
            <TouchableOpacity key={index} style={styles.card}>
              <View style={[styles.cardIcon, {backgroundColor: color}]}>
                <FeatherIcon color="#131313" name={icon} size={20} />
              </View>

              <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>{label}</Text>

                <Text style={styles.cardCategory}>{category}</Text>
              </View>

              <Text style={styles.cardPrice}>${price.toFixed(2)}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
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

  card: {
    borderWidth: 2,
    borderRadius: 20,
    padding: 12,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#1C2939',
  },
  cardIcon: {
    width: 56,
    height: 56,
    borderRadius: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardBody: {
    marginLeft: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 4,
  },
  cardCategory: {
    fontSize: 14,
    fontWeight: '500',
    color: '#7f7f7f',
  },
  cardPrice: {
    marginLeft: 'auto',
    fontSize: 17,
    fontWeight: '700',
    color: '#2c9d3b',
  },
});
