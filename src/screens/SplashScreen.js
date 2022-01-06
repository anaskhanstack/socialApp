import React, { useEffect } from 'react';
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native';

export default function LoadingScreen({ navigation }) {
    useEffect(() => {
        setTimeout(() => {
            navigation.push('Login')
        }, 500)
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.socialText}>
                Be Social
            </Text>
            <ActivityIndicator size={'large'}></ActivityIndicator>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    socialText: {
        fontWeight: "bold",
        fontSize: 30,
        marginBottom: 20,
        color: 'crimson'
    }
})