import { useFocusEffect } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text, StatusBar, SafeAreaView, StyleSheet, Image, Dimensions } from "react-native";

interface SplashScreenProps {
    navigation: any;
}
const SplashScreen: React.FC<SplashScreenProps> = ({
    navigation
}) => {

    useFocusEffect(
        React.useCallback(() => {
            setTimeout(() => {
                navigation.navigate("Home");
            }, 3000);
        }, [])
    );

    return (
        <>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="#fff"
            />
            <SafeAreaView style={[styles.container]}>

                <Image style={[styles.logo]} source={require("../../assets/images/texta.jpg")} />

            </SafeAreaView>
        </>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
    },
    logo: {
        width: 150,
        height: 150,
    }
});