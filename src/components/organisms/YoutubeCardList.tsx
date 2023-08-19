import YoutubeCard from '@/components/organisms/YoutubeCardItem';
import { ScrollView } from 'react-native';

const YoutubeCardList = () => {
  //api call

  return (
    <ScrollView>
      <YoutubeCard />
      <YoutubeCard />
      <YoutubeCard />
    </ScrollView>
  );
};

export default YoutubeCardList;
