import { Image, Text, View } from '@/components/atoms';
import { SelectBox } from '@/components/organisms';
import { useState } from 'react';

const PlatformSelectBox = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('YOUTUBE');

  return (
    <SelectBox
      selectedValue={selectedPlatform}
      options={[
        {
          value: 'YOUTUBE',
          selectedElement: <Image src="youtube" width={28} height={20} />,
          element: (
            <View flexDirection="row" gap={12} alignItems="flex-start">
              <Image src="youtube" width={28} height={20} marginBottom={12} />
              <Text>Youtube</Text>
            </View>
          ),
          handleSelect: () => setSelectedPlatform('YOUTUBE'),
        },
        {
          value: 'INSTAGRAM',
          selectedElement: <Image src="instagram" width={20} height={20} />,
          element: (
            <View flexDirection="row" gap={12} alignItems="flex-start">
              <Image src="instagram" width={20} height={20} />
              <Text>Instagram</Text>
            </View>
          ),
          handleSelect: () => setSelectedPlatform('INSTAGRAM'),
        },
      ]}
    />
  );
};

export default PlatformSelectBox;
