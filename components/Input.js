import React, {Component, PropTypes} from 'react'
import {StyleSheet, TextInput} from 'react-native'

const styles = StyleSheet.create({
    container: {
        height: 50,
        padding: 15,
    }
})

export default class Input extends Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
        placeholder: PropTypes.string,
    }

    state = {
        value: ''
    }

    _handleChange = (value) => {
        this.setState({value})
    }

    _handleSubmit = () => {
        let {onSubmit} = this.props;
        let {value} = this.state;

        if (!value) {
            return;
        }

        onSubmit(value);

        this.setState({value: ''});
    }

    render() {
        let {placeholder} = this.props;
        let {value} = this.state;

        return (
            <TextInput
                style={styles.container}
                placeholder={placeholder}
                value={value}
                onChangeText={this._handleChange}
                onSubmitEditing={this._handleSubmit}
            />
        )
    }
}
