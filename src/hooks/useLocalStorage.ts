export const useLocalStorage = () => {
  function isKeyInLocalStorage(key: string) {
    return key in localStorage;
  }

  function setLocalStorageItem(key: string, value: string) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  return {
    isKeyInLocalStorage,
    setLocalStorageItem,
  };
};
