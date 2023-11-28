import { useCallback, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import { useRecoilState } from 'recoil';
import { StorageState } from '@/recoil/atom/system';

export async function setStorageItemAsync(key: string, value: string | null) {
  if (value == null) {
    await SecureStore.deleteItemAsync(key);
  } else {
    await SecureStore.setItemAsync(key, value);
  }
}

const useStorageState = (key: string) => {
  const [storage, setStorage] = useRecoilState(StorageState);

  useEffect(() => {
    SecureStore.getItemAsync(key)
      .then((value) => {
        setStorage((prev) => {
          return { ...prev, [key]: value };
        });
      })
      .catch((err) => console.error('Read localstorage Fail: ', err));
  }, [key, setStorage]);

  const setValue = useCallback(
    (value: string | null) => {
      setStorageItemAsync(key, value)
        .then(() => {
          setStorage((prev) => {
            return { ...prev, [key]: value };
          });
        })
        .catch((err) => console.error('Set localstorage Fail', err));
    },
    [key, setStorage],
  );

  return [storage[key], setValue];
};

export default useStorageState;
