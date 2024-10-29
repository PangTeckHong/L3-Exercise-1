import React, {useState}from "react";
import { StyleSheet, Text, View,TextInput, Button, Alert, TouchableOpacity, ToastAndroid } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const MyApp = () => {
    const [userType, setUserType] = useState('');
    const [userName, setUserName] = useState('');

    const handleLogin = () => {
        if (userType && userName) {
            const message = `Welcome ${userType === 'admin' ? 'Admin' : 'User'} ${userName}`;
            ToastAndroid.show(message, ToastAndroid.LONG);
        } else {
            ToastAndroid.show("Please fill in all fields", ToastAndroid.SHORT);
        }
    };

  return (
    <View>
        <Text></Text>
        <Text></Text>
      <Text>User Type:</Text>
        <RNPickerSelect
            onValueChange={(value) => setUserType(value)}
            items={[
                { label: 'User', value : 'user'},
                { label: 'Admin', value : 'admin'},
            ]}
        />

        <Text>User Name:</Text>
        <TextInput style={{borderWidth:1}} onChangeText={(text) => setUserName(text)}/>

        <Text>Password:</Text>
      <TextInput style={{borderWidth: 1}} />

        <Text></Text>
        <Text></Text>

        {/*### 1D ###*/}
        {/*<Button*/}
        {/*    onPress={() => {Alert.alert("Welcome!")}}*/}
        {/*    title="Log In"*/}
        {/*/>*/}

        {/*### 1E ###*/}
        {/*<TouchableOpacity onPress={() => Alert.alert("Welcome!")}>*/}
        {/*    <Text>Log In</Text>*/}
        {/*</TouchableOpacity>*/}

        <TouchableOpacity onPress={handleLogin}>
            <Text>Log In</Text>
        </TouchableOpacity>
    </View>

  );
};

export default MyApp;
