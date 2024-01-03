import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

export default function ButtonGroup() {
  const [value, setValue] = React.useState(0);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.tabs}>
            {[{name: 'All Tasks'}, {name: 'Habits'}, {name: 'To-Do List'}].map(
              ({name}, index) => {
                const isActive = index === value;

                return (
                  <TouchableOpacity
                    key={name}
                    onPress={() => {
                      setValue(index);
                    }}
                    style={styles.tabsItemWrapper}>
                    <View style={styles.tabsItem}>
                      <Text
                        style={[
                          styles.tabsItemText,
                          isActive && {color: '#1c2939'},
                        ]}>
                        {name}
                      </Text>
                    </View>

                    {isActive && <View style={styles.tabsItemLine} />}
                  </TouchableOpacity>
                );
              },
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: -10,
    paddingHorizontal: 12,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  tabs: {
    flexDirection: 'row',
    paddingHorizontal: 12,
  },
  tabsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 4,
  },
  tabsItemLine: {
    width: 20,
    height: 3,
    backgroundColor: '#1c2939',
    borderRadius: 24,
  },
  tabsItemWrapper: {
    marginRight: 28,
  },
  tabsItemText: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 20,
    color: '#7b7c7e',
  },
});
