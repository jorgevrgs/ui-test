import type { Timestamp } from 'firebase/firestore';

export interface Celebrity {
  id: string;
  name: string;
  category: string;
  picture: string;
  description: string;
  votes: {
    positive: number;
    negative: number;
  };
  lastUpdated: Date;
}

export type CelebrityStorageData = Omit<Celebrity, 'id'> & {
  lastUpdated: Timestamp;
};

export interface BaseState<T> {
  data: T;
  isLoading: boolean;
  errorMessages: string[];
}
