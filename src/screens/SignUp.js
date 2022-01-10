import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useForm } from 'react-hook-form';

import FormInput from '../components/input/Input'
import Button from '../components/button/Button';

export default function SignUpScreen({ navigation }) {
    const { register, handleSubmit } = useForm()
    return (
        <View style={styles.container}>
            <Text style={styles.greeting}>
                {`Hello.\nSign up tp get started.`}
            </Text>
            <View style={styles.form}>
                <FormInput label={"Full Name"} />
                <FormInput label={"Email Address"} />
                <FormInput label={"Password"} secure={true} />
            </View>

            <Button title="Sign Up" />

            <TouchableOpacity style={styles.helper} onPress={() => navigation.push("Login")}>
                <Text>Already have account?{" "}<Text style={styles.helperText}>Sign In</Text></Text>
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