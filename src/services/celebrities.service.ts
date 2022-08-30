import { collection, getDocs } from 'firebase/firestore';
import omit from 'lodash.omit';
import { CELEBRITIES_COLLECTION } from '../constants';
import { firestore } from '../plugins/firebase';
import type { Celebrity, CelebrityStorageData } from '../types';

export async function getCelebrities() {
  const data: Celebrity[] = [];
  const querySnapshot = await getDocs(
    collection(firestore, CELEBRITIES_COLLECTION)
  );

  for (const doc of querySnapshot.docs) {
    const origin = doc.data() as CelebrityStorageData;
    const celebrity: Celebrity = {
      id: doc.id,
      lastUpdated: origin.lastUpdated.toDate(),
      ...omit(origin, ['lastUpdated']),
    };

    data.push(celebrity);
  }

  return data;
}
