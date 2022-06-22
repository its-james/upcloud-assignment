import { request } from 'api/apiClient';
import { IServer } from 'upcloud';


async function getServers() {
  const response = await request({ method: 'get', url: '/server' });
  const servers: IServer[] = response.data.servers.server;
  return { data: servers, error: null, status: response.status };
}

export { getServers };
