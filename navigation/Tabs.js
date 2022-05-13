import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ClubList = ({ navigation: { navigate } }) => (
  <View 
  onPrese={() => navigate()}
  style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>동아리 리스트 페이지</Text>
  </View>
);

const ClubRanking = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>동아리 랭킹 페이지</Text>
  </View>
);

const MyPage = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>마이페이지 페이지</Text>
  </View>
);

const BottomTab = createBottomTabNavigator();

const Tabs = () => (
  <BottomTab.Navigator
    screenOptions={{
      headerTitleAlign: 'center',
    }}>
    <BottomTab.Screen
      name="동아리 리스트"
      component={ClubList}
      options={{
        tabBarIcon: () => (
          <MaterialCommunityIcons
            name="format-list-bulleted"
            size={24}
            color="black"
          />
        ),
      }}
    />
    <BottomTab.Screen
      name="동아리 랭킹"
      component={ClubRanking}
      options={{
        tabBarIcon: () => (
          <MaterialCommunityIcons name="chess-king" size={24} color="black" />
        ),
      }}
    />
    <BottomTab.Screen
      name="마이페이지"
      component={MyPage}
      options={{
        tabBarIcon: () => (
          <MaterialCommunityIcons name="account" size={24} color="black" />
        ),
      }}
    />
  </BottomTab.Navigator>
);


const styles = StyleSheet.create({

})

export default Tabs;
