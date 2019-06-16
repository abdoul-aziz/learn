import React from 'react';
import { StyleSheet, View, TextInput, Button, FlatList, Text} from 'react-native';
import films from '../Helpers/filmsData'
import FilmItem from './FilmItem'


class Search extends React.Component {
    render() {
        return (
            <View style={styles.main_content}>
                <TextInput style={styles.textinput} placeholder = 'Titre du film'/>
                <Button title = 'Rechercher'onPress = {() => {}}/>
                <FlatList
                    data={films}
                    keyExtractor={(item)=> item.id.toString()}
                    renderItem={({item}) => <FilmItem film={item}/>}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
  textinput: {
    //marginTop:20,
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth:1,
    paddingLeft: 5,

  },
  main_content: {
    flex:1,
    marginTop:20
    //backgroundColor: 'blue'
  }

})

export default Search
