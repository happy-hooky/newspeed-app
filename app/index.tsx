import { Button, Text } from '@/components/atoms';
import { color } from '@/constants';

export default () => {
  return (
    <>
      <Button size="basic" design="primary" width={64} marginBottom={24}>
        <Text color={color.goldenGrow}>샘플</Text>
      </Button>
      <Button size="basic" design="primaryBorder" width={24} marginBottom={24}>
        <Text>X</Text>
      </Button>
      <Button size="big" design="primary" width={64} marginBottom={24}>
        <Text fontSize={18}>샘플3</Text>
      </Button>
      <Button size="big" design="primaryBorder" width={64}>
        <Text>샘플4</Text>
      </Button>
    </>
  );
};
