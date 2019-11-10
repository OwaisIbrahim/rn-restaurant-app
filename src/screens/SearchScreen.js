import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';

import useResults from '../hooks/useResults';
import Loader from '../components/Loader';

const SearchScreen  = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    // console.log(results);

    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$'
        return results.filter(result => {
            return result.price === price;
        })
    }

    

    return (
        <View style={{ flex: 1 }}>
            <SearchBar 
                term={term}
                onTermChange={newValue => setTerm(newValue)}
                onTermSubmit={() => searchApi(term)}
            />
            {/* <Text>We have found {results.length} results</Text> */}
            {
                !results.length
                  ? <Loader />
                  : 
            <ScrollView>
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
            </ScrollView>
            }
        </View>
    )
}

const styles = StyleSheet.create({
});

export default SearchScreen;