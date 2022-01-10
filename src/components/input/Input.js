import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';

export default function Input({ label, secure = false }) {
    return (
        <View style={styles.formGroup}>
            {label && <Text style={styles.label}>{label}</Text>}
            <TextInput style={styles.input} secureTextEntry={secure ? true : false} />
        </View>
    )
}
