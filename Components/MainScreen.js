import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'native-base';
//createBottomTabNavigator를 createMaterialTopNavigator 로 수정
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
// 하단 탭에 들어갈 컴포넌트들
import HomeTab from './AppTabNavigator/HomeTab'
import SearchTab from './AppTabNavigator/SearchTab'
import AddMediaTab from './AppTabNavigator/AddMediaTab'
import LikesTab from './AppTabNavigator/LikesTab'
import ProfileTab from './AppTabNavigator/ProfileTab'

// 하단 탭 네비게이터 생성
const AppTabNavigator = createMaterialTopTabNavigator({
    HomeTab: { screen: HomeTab },
    SearchTab: { screen: SearchTab },
    AddMediaTab: { screen: AddMediaTab },
    LikesTab: { screen: LikesTab },
    ProfileTab: { screen: ProfileTab }
}, {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
        style: {
            backgroundColor: 'white',
        },
        iconStyle: { height: 40 },
        activeTintColor: '#000',
        inactiveTintColor: '#d1cece',
        upperCaseLabel: false,
        showLabel: false,
        showIcon: true,
    }
});

const AppTabContainet = createAppContainer(AppTabNavigator);

export default class MainScreen extends Component {
    //navigationOptions 코드 추가
    static navigationOptions = {
        headerLeft: <Icon name='ios-camera' style={{ paddingLeft: 10 }} />,
        title: 'Instagram',
        headerRight: <Icon name='ios-send' style={{ paddingRight: 10 }} />,
    }

    render() {
        return <AppTabContainet />; //appTabContainet 컴포넡트를 리턴한다.
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});