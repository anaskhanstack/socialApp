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
            <Text>
                Loading...
            </Text>
            <ActivityIndicator size={'large'}></ActivityIndicator>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})