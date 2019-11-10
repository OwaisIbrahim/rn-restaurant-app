import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen  = () => {
    const [term, setTerm] = useState('');
    return (
        <View>
            <SearchBar 
                term={term}
                onTermChange={newValue => setTerm(newValue)}
                onTermSubmit={newValue => console.log('submitted')}
            />
            <Text>SearchScreen</Text>
            <Text>{term}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

});

export default SearchScreen;