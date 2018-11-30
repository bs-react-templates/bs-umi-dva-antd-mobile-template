import request from '@/utils/request';

/**
 * 查询应用列表
 * @param params
 */
export function listApp(params) {
  return request('url', {
      method: 'GET',
      body: params,
  })
};