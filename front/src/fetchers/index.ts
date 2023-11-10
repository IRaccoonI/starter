import axios from 'axios';
import { Taxios } from '@simplesmiler/taxios';
import { API } from '@/src/types/API';

export const client = new Taxios<API>(
  axios.create({
    headers: {
      Accept: '*/*',
    },
    baseURL: '/api',
  }),
);
