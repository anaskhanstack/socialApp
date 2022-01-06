import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import FormInput from '../components/input/Input'
import Button from '../components/button/Button';

export default function LoginScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.greeting}>
                {`Hello again.\nWelcome back.`}
            </Text>
            <View style={styles.form}>
                <FormInput label={"Email Address"} />
                <FormInput label={"Password"} />
            </View>

            <Button title="Sign in" />

            <TouchableOpacity style={styles.helper}>
                <Text>New to SocialApp?{" "}<Text style={styles.helperText}>Sign Up</Text></Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    form: {
        margin: 30,
    },
    greeting: {
        fontSize: 25,
        marginTop: 32,
        fontWeight: "400",
        textAlign: 'center',
    },
    helper: {
        marginVertical: 20,
        alignItems: 'center'
    },
    helperText: {
        color: '#E9446A'
    }

})