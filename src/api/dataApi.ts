import { useMutation, useQueryClient } from 'react-query';
import { Element } from '../components/FormBuilder/FormBuilder.types';

const KEY = 'forms';

export function useGetData() {
  return useQueryClient().getQueryData(KEY);
}

export function useSaveData() {
  const queryClient = useQueryClient();

  return useMutation<void, unknown, Element[]>(
    (newData: Element[]) =>
      new Promise<void>((resolve) => {
        const updatedData = JSON.stringify(newData);
        localStorage.setItem(KEY, updatedData);
        queryClient.setQueryData(KEY, newData);
        resolve();
      })
  );
}
