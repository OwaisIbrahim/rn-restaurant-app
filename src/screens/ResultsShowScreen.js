import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Flatlist, Image } from 'react-native';
import yelp from '../api/yelp';
import { FlatList } from 'react-native-gesture-handler';
import Loader from '../components/Loader';

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    // console.log(result);

    const getResult = async id => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }

    //will call getResult only once, if useEffect is remove getResult will call infinite b/c it will start calling whenever the state changes
    useEffect(() => {
        getResult(id);
    }, []);

    if(!result) return <Loader />;

    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList 
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return (
                        <Image 
                            style={styles.image}
                            source={{ uri: item }}
                        />
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300,
    }
});

export default ResultsShowScreen;