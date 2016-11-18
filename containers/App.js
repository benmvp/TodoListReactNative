import React, {Component} from 'react'
import {StyleSheet, View, TextInput} from 'react-native'

import Title from '../components/Title'
import Footer from '../components/Footer'
import List from '../components/List'
import Input from '../components/Input'

export default class App extends Component {
    state = {
        items: []
    }

    _handleAddItem = (title) => {
        this.setState({
            items: [
                ...this.state.items,
                {
                    title,
                    completed: false
                }
            ]
        })
    }

    _handleItemToggleCompleted = (indexToComplete) => {
        let {items: prevItems} = this.state;
        let items = prevItems.map((item, i) => {
            if (indexToComplete === i) {
                return {
                    ...item,
                    completed: !newItem.completed
                }
            }

            return item
        });

        this.setState({items});
    }

    _handleItemRemove = (indexToRemove) => {
        let {items: prevItems} = this.state
        let items = prevItems.filter((item, i) => (
            indexToRemove !== i
        ))

        this.setState({items})
    }

    _handleRemoveCompleted = () => {
    }

    render() {
        let {items} = this.state;

        return (
            <View style={styles.container}>
                <Title>Todo List</Title>
                <Input
                    placeholder="Enter an item"
                    onSubmit={this._handleAddItem}
                />
                <View style={styles.divider} />
                <List
                    items={items}
                    onItemToggleCompleted={this._handleItemToggleCompleted}
                    onItemRemove={this._handleItemRemove}
                />
                <View style={styles.divider} />
                <Footer
                    onRemoveCompleted={this._handleRemoveCompleted}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'stretch',
      marginTop: 20
    },
    divider: {
        backgroundColor: 'whitesmoke',
        height: 1
    }
})
