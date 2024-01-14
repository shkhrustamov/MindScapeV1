import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Haptic from 'react-native-haptic-feedback';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const items = [
  {
    icon: 'truck',
    label: 'Study',
    category: '12:30 pm',
    color: '#f6f6f6',
    isChecked: true,
  },
  {
    icon: 'github',
    label: 'Groceries',
    category: '02:40 pm',
    color: '#f6f6f6',
    isChecked: false,
  },
];

export default function TodoRev() {
  const [tasks, setTasks] = useState(items);
  const navigation = useNavigation();

  const handleToggleCheck = index => {
    const task = tasks[index];
    const newTask = [...items];
    task.isChecked = !task.isChecked;
    setTasks(newTask);
  };
  return (
    <View style={{backgroundColor: '#fff'}}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Today's Tasks</Text>

        {tasks.map(({icon, label, category, color, isChecked}, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={styles.card}
              onPress={() => {
                handleToggleCheck(index);
                Haptic.trigger('notificationSuccess');
              }}>
              <View style={[styles.cardIcon, {backgroundColor: color}]}>
                <FeatherIcon color="#1C2939" name={icon} size={26} />
              </View>

              <View style={styles.cardBody}>
                <Text
                  style={[
                    styles.cardTitle,
                    isChecked ? styles.completedText : null,
                  ]}>
                  {label}
                </Text>
                <Text style={styles.cardCategory}>{category}</Text>
              </View>
              {isChecked ? (
                <FeatherIcon
                  style={styles.cardIconRight}
                  color="#1C2939"
                  name="check-circle"
                  size={26}
                />
              ) : (
                <FeatherIcon
                  style={styles.cardIconRight}
                  color="#1C2939"
                  name="circle"
                  size={26}
                />
              )}
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <View style={{justifyContent: 'center', alignItems: 'flex-end'}}>
        <TouchableOpacity
          style={{
            bottom: 20,
            right: 20,
            backgroundColor: '#1C2939',
            borderRadius: 30,
            padding: 10,
          }}
          onPress={() => {
            navigation.navigate('MyModal');
            Haptic.trigger('rigid');
          }}>
          <MaterialCommunityIcons name="plus" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </View>
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
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  completedText: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
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
    color: '#131313',
    marginBottom: 4,
  },
  cardCategory: {
    fontSize: 14,
    fontWeight: '500',
    color: '#7f7f7f',
  },
  cardIconRight: {
    marginLeft: 'auto',
  },
});
