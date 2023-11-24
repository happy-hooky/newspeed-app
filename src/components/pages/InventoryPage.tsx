import YoutubeCard from '@/components/organisms/YoutubeCardItem';
import { ScrollView } from 'react-native';

const InventoryPage = () => {
  return (
    <ScrollView>
      <YoutubeCard />
      <YoutubeCard />
      <YoutubeCard />
    </ScrollView>
  );
};

export default InventoryPage;
