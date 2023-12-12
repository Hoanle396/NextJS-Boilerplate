import { request } from '../axios'
import { IExampleTypeRequest } from './types'

export const getExample = async (params: IExampleTypeRequest) => {
  const res = await request({
    method: 'get',
    url: `/example`,
    params: params
  })

  return res.data
}
