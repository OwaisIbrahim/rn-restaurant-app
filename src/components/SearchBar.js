import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

const SearchBar  = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.container}>
            <Ionicons 
                name='ios-search' 
                style={styles.iconStyle}/>
            <TextInput 
                style={styles.inputStyle}
                autoCapitalize='none'
                autoCorrect={false}
                placeholder='Search'
                value={term}
                onChangeText={newTerm => onTermChange(newTerm)}
                onEndEditing={() => onTermSubmit()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F5',
        borderRadius: 5,
        margin: 15,
        height: 50,
        flexDirection: 'row',
        // alignItems: 'center',

        //Shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    iconStyle: {
        fontSize: 28,
        marginHorizontal: 15,
        alignSelf: 'center',
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
    }
});

export default SearchBar;