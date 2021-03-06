import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useForm } from 'react-hook-form';

import FormInput from '../components/input/Input'
import Button from '../components/button/Button';

export default function LoginScreen({ navigation }) {
    const { register, handleSubmit } = useForm()
    return (
        <View style={styles.container}>
            <Text style={styles.greeting}>
                {`Hello again.\nWelcome back.`}
            </Text>
            <View style={styles.form}>
                <FormInput label={"Email Address"} />
                <FormInput label={"Password"} secure />
            </View>

            <Button title="Sign in" />

            <TouchableOpacity style={styles.helper} onPress={() => navigation.push("SignUp")}>
                <Text>New to SocialApp?{" "}<Text style={styles.helperText}>Sign Up</Text></Text>
            </TouchableOpacity>

        </View >
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