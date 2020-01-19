import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My todos</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {   
        height: 80,
        paddingTop: 38,
        backgroundColor: 'coral'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fff',
        textAlign: 'center'
    }
});