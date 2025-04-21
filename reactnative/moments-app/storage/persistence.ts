import AsyncStorage from '@react-native-async-storage/async-storage';
import {Gratitude } from '../models/Gratitude'

const GRATITUDES_KEY = 'gratitudes';

export async function saveGratitudes(gratitudes: Gratitude[]) {
  const json = JSON.stringify(gratitudes);
  await AsyncStorage.setItem(GRATITUDES_KEY, json);
}

export async function loadGratitudes(): Promise<Gratitude[]> {
  const json = await AsyncStorage.getItem(GRATITUDES_KEY);
  if (!json) return [];
  return JSON.parse(json);
}