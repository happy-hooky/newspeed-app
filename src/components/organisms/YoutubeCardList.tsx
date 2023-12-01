import YoutubeCard from '@/components/organisms/YoutubeCardItem';
import { FlatList } from 'react-native';
import { useSearch } from '@/hook/query/search';
import { format } from 'date-fns';
import { color } from '@/constants';
import { Text, View } from '@/components/atoms';

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
    <FlatList
      contentContainerStyle={{
        paddingHorizontal: 12,
      }}
      key={Math.random().toString(36).substring(2, 11) + `${new Date().getTime()}`}
      renderItem={(item) => <YoutubeCard data={item.item} />}
      data={youtubeData}
      ListEmptyComponent={() => (
        <View width="100%" height="100%" alignItems="center" justifyContent="center">
          <Text>empty</Text>
        </View>
      )}
    />
  );
};

export default YoutubeCardList;
