import { request } from 'api/apiClient';
import { IStorage } from 'upcloud';

async function getStorages() {
  const response = await request({ method: 'get', url: '/storage/private' });
  const storages: IStorage[] = response.data.storages.storage;
  return { data: storages, error: null, status: response.status };
}

export { getStorages };