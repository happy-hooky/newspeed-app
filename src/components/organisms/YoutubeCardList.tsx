import YoutubeCard from '@/components/organisms/YoutubeCardItem';
import { ScrollView } from 'react-native';
import { useSearch } from '@/hook/query/search';
import { format } from 'date-fns';
import { View } from '@/components/atoms';

const YoutubeCardList = () => {
  const now = new Date();
  const publishedAfter = encodeURIComponent(format(now, 'yyyy-MM-dd HH:mm:ss'));

  const { data: youtubeData } = useSearch({
    platform: 'YOUTUBE',
    order: 'views',
    publishedAfter,
    size: 9,
  });

  return (
    <ScrollView>
      <View paddingHorizontal={12}>
        {youtubeData?.map((item) => {
          const hash = Math.random().toString(36).substring(2, 11) + `${new Date().getTime()}`;
          return <YoutubeCard key={hash} data={item} />;
        })}
      </View>
    </ScrollView>
  );
};

export default YoutubeCardList;
