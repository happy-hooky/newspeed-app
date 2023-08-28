import { apiKey } from '@/constants/apiKey';
import { SearchParam } from '@/models/request/SearchParam';
import { YoutubeContentsResponse } from '@/models/request/YoutubeContentsResponse';
import api from '@/util/api';
import { useQuery } from 'react-query';

export const useSearch = (params: SearchParam) => {
  return useQuery([apiKey.SEARCH], async () => {
    const response = await api.get<YoutubeContentsResponse[]>('/contents', {
      params,
    });

    return response.data;
  });
};
