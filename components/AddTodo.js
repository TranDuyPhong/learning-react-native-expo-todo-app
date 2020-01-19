import React, { useState } from 'react';
import {
    TextInput,
    Button,
    StyleSheet,
    View
} from 'react-native';

export default function AddTodo(props) {
    const [text, setText] = useState('');

    changeHandler = val => {
        setText(val);
    };

    return (
        <View>
            <TextInput 
                style={styles.input} 
                placeholder='new todo...'
                onChangeText={changeHandler}
            />
            <Button onPress={() => props.submitHandler(text)} title='add todo' color='coral' />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
});