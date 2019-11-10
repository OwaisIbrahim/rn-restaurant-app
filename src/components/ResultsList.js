import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'; 
import { withNavigation } from 'react-navigation';

import ResultDetails from '../components/ResultDetails';

const ResultsList = ({ title, results, navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>
                {title}
            </Text>
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('ResultsShow')}>
                            <ResultDetails result={item}/>
                        </TouchableOpacity>
                    )
                }}
            />
            <Text>Results: {results.length}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5,
    }
});

export default withNavigation(ResultsList);