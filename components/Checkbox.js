import React, {Component, PropTypes} from 'react'
import {StyleSheet, TouchableOpacity, View} from 'react-native'

const styles = StyleSheet.create({
    container: {

    },
    box: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderColor: 'rgba(0, 0, 0, .8)',
    },
    checked: {
        backgroundColor: '#222'
    }
})

export default class Checkbox extends Component {
    static propTypes = {
        isChecked: PropTypes.bool.isRequired,
        onToggle: PropTypes.func.isRequired
    }

    _handleToggle = () => {
        let {isChecked, onToggle} = this.props
        console.log(!isChecked)
        onToggle(!isChecked)
    }

    render() {
        let {isChecked} = this.props
        let boxStyle = [styles.box]

        if (isChecked) {
            boxStyle = [...boxStyle, styles.checked]
        }

        return (
            <TouchableOpacity
                style={styles.container}
                onPress={this._handleToggle}
            >
                <View style={boxStyle} />
            </TouchableOpacity>
        )
    }
}
