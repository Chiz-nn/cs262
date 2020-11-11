import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '../shared/header';
import human_games from '../screens/human_games';
import ReviewDetails from '../screens/reviewDetails';

const Stack = createStackNavigator();
export default function human_gamesStack({ navigation }) {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: '#ddd' }
        }}>
            <Stack.Screen
                name="GameZone"
                component={human_games}
                options={{
                    headerTitle: () => <Header navigation={navigation} />
                }}
            />

        </Stack.Navigator>
    );
};
