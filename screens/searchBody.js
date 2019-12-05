import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import {List, ListItem} from 'react-native-elements';
import axios from 'axios';



class SearchBody extends Component {
  static navigationOptions = {
    header: null,
    
}
constructor(props) {
  super(props);
  this.state = {
    searchInput: this.props.navigation.state.params.value.toLowerCase(),
    filteredData: [],
    page: 1,
   
  };
}

componentDidMount (){
  this.getData()
}

getData = async () => {
        const url = 'https://jsonplaceholder.typicode.com/photos?_limit=20&_page='+this.state.page;
        var self = this;
        axios.get(url)
        .then(function(response){
          
          var filtered = response.data.filter((item) => {
            for (key in item){
              if(item.title.includes(`${self.state.searchInput}`)){
                return item;
              }
            }
            
          })
          self.setState({filteredData: self.state.filteredData.concat(filtered)});
        })
  
  
}

renderItem = ({ item,index }) => {
  return(
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.id}</Text>
      <Image source={{uri:item.thumbnailUrl}} style={styles.itemImage}/>
      <Text style={styles.itemText}>{item.title}</Text>
    </View>
  )
}
handleLoadMore = () => {
  this.setState(
    {page: this.state.page + 1},
    this.getData
    )
}

render() {
    console.log(this.state.filteredData );

    return (

       <FlatList
        style={styles.container}
        data={this.state.filteredData}
        renderItem={this.renderItem}
        keyExtractor={(item,index)=>index.toString()}
        onEndReached={this.handleLoadMore}
        onEndReachedThreshold={1}
       />

 
    );
  }
}

export default SearchBody;

const styles = StyleSheet.create({
  container: {
    
    marginTop: 20,
  },
  item: {
    backgroundColor: '#c7ecee',
    alignItems: 'center',
   
    marginBottom: 2,
    height: 170,
    width:422
  },
  itemText: {
    color: 'black',
  },
  itemImage: {
    height: 100,
    width: 100,
    resizeMode: 'cover'
  }

})
