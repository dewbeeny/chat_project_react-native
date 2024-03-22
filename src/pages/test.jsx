import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const Test = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'friend', text: '정식 만나서 친구인가?', timestamp: '2022년 2월 7일 12:03PM' },
    { id: 2, sender: 'me', text: '아니 아직 인연없어, 나는 만난 적 없어', timestamp: '2022년 2월 7일 12:03PM' },
    { id: 3, sender: 'me', text: '알바인데 길이 막혔거든 먼 길로 갔어', timestamp: '2022년 2월 7일 12:03PM' },
    { id: 4, sender: 'friend', text: '나는 물건도 갖겨야 너도 스캔 받아 확인 해졌다는 거 알고 있다니까', timestamp: '2022년 2월 7일 12:03PM' },
    { id: 5, sender: 'me', text: '후후후', timestamp: '2022년 2월 7일 12:03PM' },
    { id: 6, sender: 'me', text: '그럴일은 없겠구~', timestamp: '2022년 2월 7일 12:03PM' },
  ]);

  const renderMessage = ({ item }) => (
    <View style={[styles.messageContainer, item.sender === 'me' ? styles.myMessage : styles.friendMessage]}>
      <Text style={styles.messageText}>{item.text}</Text>
      <Text style={styles.timestampText}>{item.timestamp}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id.toString()}
        inverted
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  messageContainer: {
    maxWidth: '70%',
    padding: 12,
    borderRadius: 8,
    marginVertical: 4,
  },
  myMessage: {
    backgroundColor: '#DCF8C6',
    alignSelf: 'flex-end',
  },
  friendMessage: {
    backgroundColor: '#E2E2E2',
    alignSelf: 'flex-start',
  },
  messageText: {
    fontSize: 16,
    color: '#333',
  },
  timestampText: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
});

export default Test;