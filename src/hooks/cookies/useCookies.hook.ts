import Cookies from 'universal-cookie'

const useCookies = () => {
  const cookies: Cookies = new Cookies();

  const  setItem = (key: string, value: string) => {
    return cookies.set(key, value);
  }
  const getItem = (key: string) => {
    return cookies.get(key);
  }
  const removeItem = (key: string) => {
    cookies.remove(key);
  }
  const clear = () => {
    const allKeys = cookies.getAll();
    cookies.remove(allKeys);
  }

  return {setItem, getItem, removeItem, clear};
}

export default useCookies;