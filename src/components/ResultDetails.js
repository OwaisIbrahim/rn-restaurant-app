import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultDetails = ({ result }) => {
    return (
        <View>
            <Image 
                style={styles.imageStyle}
                source={{ uri: result.image_url }}
            />
            <Text style={styles.nameStyle}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    imageStyle: {
        borderRadius: 5,
        width: 250,
        height: 120,
    },
    nameStyle: {
        fontWeight: 'bold',
    }
});

export default ResultDetails;