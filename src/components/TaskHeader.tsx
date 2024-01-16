import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const TasksTopLayout = ({children}) => {
  const {navigate} = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        {/*<TouchableOpacity*/}
        {/*  onPress={() => {*/}
        {/*    Haptic.trigger('rigid');*/}
        {/*  }}*/}
        {/*  style={{alignItems: 'flex-start', paddingLeft: 20}}>*/}
        {/*  <MaterialCommunityIcons name="menu" color="#1c2939" size={35} />*/}
        {/*</TouchableOpacity>*/}
        {/*<Text*/}
        {/*  style={{*/}
        {/*    justifyContent: 'center',*/}
        {/*    textAlign: 'center',*/}
        {/*    fontSize: 20,*/}
        {/*    fontWeight: 'bold',*/}
        {/*    color: '#1C2939',*/}
        {/*  }}>*/}
        {/*  Tasks*/}
        {/*</Text>*/}
        {/*<TouchableOpacity*/}
        {/*  onPress={() => {*/}
        {/*    Haptic.trigger('rigid');*/}
        {/*  }}*/}
        {/*  style={{alignItems: 'flex-end', paddingRight: 20}}>*/}
        {/*  <MaterialCommunityIcons name="plus" color="#1c2939" size={26} />*/}
        {/*</TouchableOpacity>*/}
      </View>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  view: {
    backgroundColor: '#fff',
    paddingVertical: 8,
  },
});
export default TasksTopLayout;
