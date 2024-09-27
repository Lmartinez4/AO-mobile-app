import { Dimensions, Text, StyleSheet, Platform, View } from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { WebView } from 'react-native-webview';

import emotions from "../../../constants/emotions";
import styles from '../../../styles/page';
import PageWrapper from '../../../components/Wrappers/SubPage';

const { width } = Dimensions.get('window');


export default function EmotionWheelSelection() {
  const { selection } = useLocalSearchParams();
  
  const findTertiaryEmotion = () => {
    for (let primaryEmotion of emotions) {
      for (let secondaryEmotion of primaryEmotion.secondary) {
        const tertiaryEmotion = secondaryEmotion.tertiary.find(tertiary => tertiary.text === selection);
        if (tertiaryEmotion) {
          return tertiaryEmotion;
        }
      }
    }
    return null; // Return null if not found
  };

  const emotion = findTertiaryEmotion()

  return(
    <PageWrapper> 
      {Platform.OS === 'web' ? (
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.title}>Emotional Intelligence</Text>
        <Text style={styles.subtitle}>You selected {selection}.</Text>
        <Link href="/AONest/content">See available content here</Link>
        <Link href={"https://go.aonest.com/courses/153"}>See available lesson worksheets here</Link>
        
          <div style={{ ...styles.iframeContainer, paddingTop: 20 }}>
            <iframe
              src={emotion?.video}
              style={{
                  width: width / 2,
                  height: width * 0.5625 / 2,
                  border: "0px",
              }}
              allowFullScreen
            />
          </div>
          </View>
        ) : (
          <View style={{flex: 0.75, alignItems: 'center'}}>
            <Text style={styles.title}>Emotional Intelligence</Text>
            <Text style={styles.subtitle}>You selected {selection}.</Text>
            <Link href="/AONest/content">See available content here</Link>
            <WebView
              style={{
                top: '10%',
                flex: 0.8,
                width: width,
                height: width * 0.5625,
                border: "0px",
              }}
              source={{ uri: emotion?.video }}
            />
          </View>
        )}
      
    </PageWrapper>
  );
}
