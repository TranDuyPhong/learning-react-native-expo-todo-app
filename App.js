import React, { useState } from 'react';
import { StyleSheet, Alert, View, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';

import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

export default function App() {
    const [todos, setTodos] = useState([
        { text: 'Todo 1', key: '1' },
        { text: 'Todo 2', key: '2' },
        { text: 'Todo 3', key: '3' },
    ]);

    pressHandler = key => {
        setTodos(previousTodos => {
            return previousTodos.filter(p => p.key !== key);
        });
    }

    submitHandler = text => {
        if (text.length > 3) {
            setTodos(previousTodos => {
                return [
                    { text: text, key: Math.random().toString() },
                    ...previousTodos
                ]
            });
        } else {
            Alert.alert('OOP !', 'Todos must be over 3 char long', [
                {
                    text: 'Understood', onPress: () => console.log('alert closed')
                }
            ]);
        }
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
            console.log('keyboard dismiss');
        }}>
            <View style={styles.container}>
                <Header />
                <View style={styles.content}>
                    <AddTodo submitHandler={submitHandler} />
                    <View style={styles.list}>
                        <FlatList 
                            data={todos}
                            renderItem={({ item }) => (
                                <TodoItem item={item} pressHandler={pressHandler} />
                            )}
                        />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    content: {
        flex: 1,
        padding: 40
    },
    list: {
        flex: 1,
        marginTop: 20
    }
});
