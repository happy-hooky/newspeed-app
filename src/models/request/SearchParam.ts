import { Platform } from '@/models/Common';

export interface SearchParam {
  platform: Platform;
  order: 'views';
  publishedAfter: string;
  size: number;
}
