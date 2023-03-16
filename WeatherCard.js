import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function WeatherCard({ weather }) {
  const date = new Date(weather.dt * 1000);

  return (
    <View style={styles.card}>
      <Text style={styles.date}>{date.toLocaleDateString()}</Text>
      <Image
        style={styles.icon}
        source={{
          uri: `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`,
        }}
      />
      <Text style={styles.temperature}>{Math.round(weather.temp.day)}°C</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
  },
  date: {
    fontSize: 18,
  },
  icon: {
    width: 50,
    height: 50,
  },
  temperature: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  });
  
   
