import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

export default class Footer extends Component {

    render() {
        let {onRemoveCompleted} = this.props;

        return (
            <TouchableOpacity
                style={styles.container}
                onPress={onRemoveCompleted}
            >
                <Text style={styles.remove}>Remove completed items</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingVertical: 15
    },
    remove: {
        color: '#CD5C5C'
    }
})
