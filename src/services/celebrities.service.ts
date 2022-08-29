import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../plugins/firebase';
import type { Celebrity } from '../types';

export async function getCelebrities() {
  const data: Celebrity[] = [];
  const querySnapshot = await getDocs(collection(firestore, 'celebrities'));
  querySnapshot.forEach((doc) => data.push(doc.data() as Celebrity));

  return data;
}
