import * as SecureStore from 'expo-secure-store';

const Secure = () => {
  const save = async (key: string, value: string) => {
    await SecureStore.setItemAsync(key, value);
  };

  const getValueFor = async (key: string) => {
    const result = await SecureStore.getItemAsync(key);

    if (result) return result;
    else return undefined;
  };

  return {
    save,
    getValueFor,
  };
};

export default Secure;
