import { Platform } from '@/models/Common';

export interface YoutubeContentsResponse {
  platform: Platform;
  host: {
    profileImgUrl: string;
    nickName: string;
  };
  youtube: {
    thumnailUrl: string;
    title: string;
    url: string;
    views: string;
    todayBefore: string;
  };
}
