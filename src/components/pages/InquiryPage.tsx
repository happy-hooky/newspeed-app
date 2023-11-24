import React, { useState } from 'react';
import { Button, Text, View, TextInput } from '@/components/atoms';
import { color } from '@/constants';

const InquiryPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const inquirySubmit = () => {
    if (content.length > 300) {
      alert('문의 내용은 300자를 초과할 수 없습니다.');
      return;
    }
    // TODO : api 호출
  };

  return (
    <View flex={1} paddingTop={50} padding={30} backgroundColor={color.white}>
      <View marginBottom={40}>
        <Text>제목</Text>
        <TextInput
          value={title}
          onChangeText={setTitle}
          marginTop={10}
          borderBottomWidth={1}
          height={20}
          paddingHorizontal={5}
          paddingBottom={5}
        />
      </View>
      <View marginBottom={40} flex={2 / 3}>
        <Text>내용</Text>
        <TextInput
          value={content}
          onChangeText={setContent}
          flex={1}
          marginTop={10}
          borderWidth={1}
          borderRadius={4}
          padding={10}
          multiline
        />
        <Text alignSelf="flex-end">{content.length} / 300</Text>
      </View>
      <View>
        <Button
          onPress={inquirySubmit}
          backgroundColor={color.cheese}
          height={50}
          padding={10}
          alignItems="center"
          borderRadius={5}
        >
          <Text fontSize={16}>등록하기</Text>
        </Button>
      </View>
    </View>
  );
};

export default InquiryPage;
