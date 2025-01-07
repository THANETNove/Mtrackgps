import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';
import { StatusBar } from "expo-status-bar";


export default function index() {
    return (

        <View style={styles.container}>
            <StatusBar />
            <WebView source={{ uri: 'http://track3g.com/mobile' }}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                startInLoadingState={true}
                cacheEnabled={true}
                allowFileAccess={true}
                allowUniversalAccessFromFileURLs={true}
                mixedContentMode="always" // อนุญาตเนื้อหาแบบ HTTP และ HTTPS
                style={{ flex: 1 }} />
        </View>



    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ECF0F1',
        marginTop: Constants.statusBarHeight,
    },
});
