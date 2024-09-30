import React from "react";

import { SafeAreaView } from "react-native";
import WebView from "react-native-webview";

const HomeScreen: React.FC = () => {
    return (
        <SafeAreaView style={{ flex: 1 }} >
            <WebView
                source={{ uri: "https://smartservice.texta.world/" }}>
            </WebView>
        </SafeAreaView>
    );
};

export default HomeScreen;
