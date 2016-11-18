import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'skyblue',
        padding: 15,
    },
    text: {
        textAlign: 'center',
        color: 'white',
    }
})

export default class Title extends Component {

    render() {
        let {children} = this.props;

        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    {children}
                </Text>
            </View>
        );
    }
}
