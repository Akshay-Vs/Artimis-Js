import axios from 'axios';

const cache = new Map();

async function fetchData(url: string, method: 'get' | 'post', data?: any): Promise<any> {
  const cacheKey = `${method}:${url}`;

  if (cache.has(cacheKey)) {
    const cachedResponse = cache.get(cacheKey);
    const currentTime = Date.now();

    if (currentTime - cachedResponse.timestamp < 100000) {
      return cachedResponse.data;
    }
  }

  try {
    const response = await axios({
      url,
      method,
      data,
    });

    cache.set(cacheKey, {
      timestamp: Date.now(),
      data: response.data,
    });

    return response.data;
  } catch (error) {
    throw new Error("Error fetching data");
  }
}

export async function get(url: string): Promise<any> {
  return await fetchData(url, 'get');
}

export async function post(url: string, data: any): Promise<any> {
  return await fetchData(url, 'post', data);
}