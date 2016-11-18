import React, {Component, PropTypes} from 'react'
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native'

import Checkbox from './Checkbox';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: 'whitesmoke',
    },
    completed: {
        backgroundColor: 'whitesmoke',
    },
    controls: {
        flexDirection: 'row',
    },
    removeShell: {
        width: 29,
    },
    remove: {
        position: 'absolute',
        bottom: -4,
        left: 5,
        color: '#CD5C5C',
        fontSize: 26,
    }
})

export default class ListItem extends React.Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
        completed: PropTypes.bool.isRequired,
        onToggleCompleted: PropTypes.func.isRequired,
        onRemove: PropTypes.func.isRequired,
    }
    render() {
        let {
            children,
            completed,
            onToggleCompleted,
            onRemove
        } = this.props;
        let containerStyle = [styles.container];

        if (completed) {
            containerStyle = [...containerStyle, styles.completed];
        }

        return (
            <View style={containerStyle}>
                <Text>{children}</Text>
                <View style={styles.controls}>
                    <Checkbox
                        isChecked={completed}
                        onToggle={onToggleCompleted}
                    />
                    <TouchableOpacity
                        style={styles.removeShell}
                        onPress={onRemove}
                    >
                        <Text style={styles.remove}>
                            &times;
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
