import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
const dummyProfile = require('../assets/images/KakaoTalk_20240311_152130331.jpg');
const leftBubbleTriangle = require('../assets/icons/left.png');

const LeftBubble = ({data}) => {
  return (
    <View style={styles.chatRowWrapper}>
      <Image
        source={data.profileImgUrl}
        style={{width: 40, height: 40, borderRadius: 15}}></Image>
      <View style={{marginLeft: 8, marginRight: 4}}>
        <Text style={styles.userName}>{data.name}</Text>
        <View style={styles.bubbleContainer}>
          <Image
            source={leftBubbleTriangle}
            style={{width: 8, height: 8, marginTop: 6}}></Image>
          <View style={styles.bubbleWrapper}>
            <Text style={styles.chattingContents}>{data.content}</Text>
          </View>
        </View>
      </View>
      <View style={styles.chatTimeWrapper}>
        <Text style={styles.chatTime}>{data.created_date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chatRowWrapper: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  bubbleWrapper: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 8,
    maxWidth: 224,
  },
  bubbleContainer: {
    flexDirection: 'row',
    marginTop: 4,
  },
  chatTimeWrapper: {
    justifyContent: 'flex-end',
  },
  chatTime: {
    fontSize: 12,
    fontWeight: '500',
    color: '#737373',
    lineHeight: 14.98,
  },
  userName: {
    fontSize: 13,
    fontWeight: '400',
    color: '#000',
    lineHeight: 16.22,
  },
  chattingContents: {
    fontSize: 15,
    fontWeight: '500',
    color: '#414141',
    lineHeight: 22.5,
  },
});

export default LeftBubble;
