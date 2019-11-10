import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import SearchBar from '../components/SearchBar';

import yelp from '../api/yelp'

const SearchScreen  = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        console.log('Hi there' + searchTerm);
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
        } catch(err) {
            setErrorMessage('Something went wrong');
            console.log(err);
        }
    }

    // searchApi('pasta')

    return (
        <View>
            <SearchBar 
                term={term}
                onTermChange={newValue => setTerm(newValue)}
                onTermSubmit={() => searchApi(term)}
            />
            { errorMessage ? <Text>{errorMessage}</Text>: null }
            <Text>We have found {results.length} results</Text>
        </View>
    )
}

const styles = StyleSheet.create({

});

export default SearchScreen;