import { router, useSegments } from 'expo-router';
import { useEffect, useState } from 'react';
import * as SecureStore from 'expo-secure-store';

const useAuth = () => {
  const segments = useSegments();
  const inAuthGroup = segments[0] === '(auth)';
  const [session, setSession] = useState<string | null>(null);

  if (inAuthGroup && !session) {
    console.log('require session');
  }

  useEffect(() => {
    SecureStore.getItemAsync('session')
      .then((value) => {
        setSession(value);
      })
      .catch((err) => console.log(err));
  }, []);
};

export default useAuth;
