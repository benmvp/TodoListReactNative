import React, {Component, PropTypes} from 'react'
import {StyleSheet, ScrollView, Text} from 'react-native'

import ListItem from './ListItem'

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default class List extends Component {
    static proptTypes = {
        items: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string.isRequired,
                done: PropTypes.bool.isRequired,
            })
        ),
        onItemToggleCompleted: PropTypes.func.isRequired,
        onItemRemove: PropTypes.func.isRequired
    }

    _renderItems = () => {
        let {items, onItemToggleCompleted, onItemRemove} = this.props;

        return items.map(({title, completed}, i) => (
            <ListItem
                key={i}
                completed={completed}
                onToggleCompleted={onItemToggleCompleted.bind(null, i)}
                onRemove={onItemRemove.bind(null, i)}
            >
                {title}
            </ListItem>
        ))
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                {this._renderItems()}
            </ScrollView>
        )
    }
}
