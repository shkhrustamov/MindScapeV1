import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

const items = [
  {
    title: 'Currencies',
    data: [
      {
        icon: 'euro-sign',
        name: 'Euro',
        symbol: 'EUR',
        change: 1.04,
        price: 16242,
      },
      {
        icon: 'yen-sign',
        name: 'Japanese Yen',
        symbol: 'YEN',
        change: -7.15,
        price: 0.0072,
      },
      {
        icon: 'pound-sign',
        name: 'Pound Sterling',
        symbol: 'GBP',
        change: 2.88,
        price: 1.21,
      },
      {
        icon: 'lira-sign',
        name: 'Turkish Lira',
        symbol: 'TRY',
        change: -5.25,
        price: 0.054,
      },
      {
        icon: 'rupee-sign',
        name: 'Indian Rupee',
        symbol: 'INR',
        change: -22.17,
        price: 0.012,
      },
      {
        icon: 'won-sign',
        name: 'South Korean Won',
        symbol: 'KRW',
        change: 11.62,
        price: 0.00075,
      },
    ],
  },
  {
    title: 'Cryptocurrencies',
    data: [
      {
        icon: 'bitcoin',
        name: 'Bitcoin',
        symbol: 'BTC',
        change: 14.92,
        price: 16242,
      },
      {
        icon: 'ethereum',
        name: 'Ethereum',
        symbol: 'ETH',
        change: -7.15,
        price: 1150,
      },
    ],
  },
];

export default function Test() {
  return (
    <SafeAreaView style={{backgroundColor: '#05121b'}}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Exchange</Text>
        </View>

        {items.map(({title, data}) => (
          <View style={styles.section} key={title}>
            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>{title}</Text>
                <FeatherIcon name="chevron-right" size={22} color="#fff" />
              </View>
            </TouchableOpacity>
            <View style={styles.sectionItems}>
              {data.map(({icon, name, symbol, change, price}, index) => {
                return (
                  <View key={index} style={styles.cardWrapper}>
                    <TouchableOpacity
                      onPress={() => {
                        // handle onPress
                      }}>
                      <View style={styles.card}>
                        <View style={styles.cardIcon}>
                          <FontAwesome color="#007bff" name={icon} size={20} />
                        </View>

                        <View style={styles.cardBody}>
                          <Text style={styles.cardTitle}>{name}</Text>

                          <View style={styles.cardSubtitle}>
                            <Text style={styles.cardSymbol}>{symbol}</Text>

                            <Text
                              style={[
                                styles.cardChange,
                                {color: change > 0 ? '#31d158' : '#ff463a'},
                              ]}>
                              {change > 0 ? '+' : '-'}
                              {Math.abs(change)}%
                            </Text>
                          </View>
                        </View>

                        <Text style={styles.cardPrice}>
                          ${price.toLocaleString('en-US')}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 24,
  },
  section: {
    marginTop: 12,
    marginBottom: 16,
    paddingLeft: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ffffff',
  },
  sectionItems: {
    marginTop: 8,
  },
  container: {
    paddingVertical: 24,
    paddingHorizontal: 0,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 12,
  },
  card: {
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  cardWrapper: {
    borderBottomWidth: 1,
    borderColor: '#26343d',
  },
  cardIcon: {
    width: 46,
    height: 46,
    borderRadius: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  cardBody: {
    marginRight: 'auto',
    marginLeft: 12,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#fff',
  },
  cardSubtitle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  cardSymbol: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '500',
    color: '#5b6a73',
  },
  cardChange: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '500',
    marginLeft: 12,
  },
  cardPrice: {
    marginLeft: 'auto',
    paddingRight: 16,
    fontSize: 17,
    fontWeight: '600',
    color: '#0389ff',
  },
});
