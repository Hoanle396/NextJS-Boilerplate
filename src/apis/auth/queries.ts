import { useQuery, UseQueryOptions } from 'react-query'
import { getExample } from './request'
import { IExampleTypeResponse } from './types'

export const useFeatured = (option?: UseQueryOptions<IExampleTypeResponse, Error>) => {
  return useQuery<IExampleTypeResponse, Error>('/example-key', getExample, option)
}
