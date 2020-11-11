import React, { useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

export default function Human_games({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://arcane-earth-32186.herokuapp.com/human_games/')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <View style={globalStyles.container}>
            {isLoading ? <ActivityIndicator /> : (
                <FlatList data={data} keyExtractor={({ id }, index) => id.toString()} renderItem={({ item }) => (

                        <Card>
                            <Text style={globalStyles.titleText}>{item.name}</Text>
                            <Text style={globalStyles.titleText}>{item.gameid}</Text>
                            <Text style={globalStyles.titleText}>{item.score}</Text>
                            <Text style={globalStyles.titleText}>{item.email}</Text>
                        </Card>
           
                )}
                />
            )}
        </View>
    );
}