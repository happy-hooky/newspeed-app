import { Image, Text, View } from '@/components/atoms';
import { Link } from 'expo-router';
import { useState } from 'react';

interface SearchHistoryItemProps {
  id: number;
  text: string;
}

const SearchHistoryItem = ({ id, text }: SearchHistoryItemProps) => {
  const [isCatergory, setIsCategory] = useState(false);

  return (
    <View width="100%" height={54}>
      <Link
        href={{
          pathname: '/[category]',
          params: {
            category: 'sample',
          },
        }}
      >
        <View width="100%" flexDirection="row" alignItems="center" justifyContent="space-between">
          <View flexDirection="row" alignItems="center" justifyContent="center">
            <Text marginRight={8}>•</Text>
            <Text fontSize={16}>구루루</Text>
          </View>
          <View flexDirection="row" alignItems="center">
            <Text>09.21</Text>
            <View width={44} height={44} alignItems="flex-end" justifyContent="center">
              <Image src="delete" width={20} height={20} />
            </View>
          </View>
        </View>
      </Link>
    </View>
  );
};

export default SearchHistoryItem;
