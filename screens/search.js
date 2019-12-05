import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


class Search extends Component {

    static navigationOptions = {
        header: null,
        
    }

    state = {
        searchData: "",
        data: []
    }


  render() {
    return (
      <View style = {styles.container}>
         <View style = {styles.header}>
                    <Icon name = "search" size = {25}/>
                    <TextInput
                        style = {styles.inputStyle}
                        value= {this.state.searchData}
                        placeholder = "Search for a Charecter"
                        returnKeyType = "search"
                        onChangeText = {(searchData) => {this.setState({searchData})}}
                        onSubmitEditing = {() => this.props.navigation.navigate('SearchBody',{value: this.state.searchData})}
                        
                    />
         </View>
      </View>
    );
  }
}

export default Search;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#c7ecee',
    },
    header: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 40,
        backgroundColor: 'white',     
        width: 400,
        borderRadius: 7,
        elevation: 5,
        paddingHorizontal: 10
    },
    inputStyle: {
        width: 300,
        height: 40,
        textAlign: 'center',
        
    },

})
