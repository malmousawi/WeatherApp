import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import WeatherCard from '../components/WeatherCard';

export default function ForecastScreen({ route }) {
  const { data } = route.params;

  return (
    <View style={styles.container}>
      <FlatList
        data={data.list}
        renderItem={({ item }) => <WeatherCard weather={item} />}
        keyExtractor={(item) => item.dt.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
