import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

export default function Button({ title }) {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}
