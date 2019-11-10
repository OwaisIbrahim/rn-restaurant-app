import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';

import useResults from '../hooks/useResults';

const SearchScreen  = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    console.log(results);

    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$'
        return results.filter(result => {
            return result.price === price;
        })
    }

    return (
        <View>
            <SearchBar 
                term={term}
                onTermChange={newValue => setTerm(newValue)}
                onTermSubmit={() => searchApi(term)}
            />
            { errorMessage ? <Text>{errorMessage}</Text>: null }
            <Text>We have found {results.length} results</Text>
            
            <ResultsList 
                results={filterResultsByPrice('$')}
                title="Cost Effective"
            />
            <ResultsList 
                results={filterResultsByPrice('$$')}
                title="Big Pricier"
            />
            <ResultsList 
                results={filterResultsByPrice('$$$')}
                title="Big Spender!"
            />
        </View>
    )
}

const styles = StyleSheet.create({

});

export default SearchScreen;