export interface Celebrity {
  id: string;
  name: string;
  imageURL: string;
  description: string;
  votes: {
    up: number;
    down: number;
  };
}

export interface BaseState<T> {
  data: T;
  isLoading: boolean;
  errorMessages: string[];
}
