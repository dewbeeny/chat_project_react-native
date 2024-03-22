import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
const dummyProfile = require('../assets/images/KakaoTalk_20240311_152130331.jpg');
const rightBubbleTriangle = require('../assets/icons/right.png');

const RightBubble = ({data}) => {
  return (
    <View style={[styles.chatRowWrapper, {marginLeft: 'auto'}]}>
      <View style={styles.chatInfoWrapper}>
        {data.isOpen ? (
          <View style={styles.chatTimeWrapper}>
            <Text style={styles.chatTime}>읽음</Text>
            <View style={styles.microBar}></View>
            <Text style={styles.chatTime}>{data.created_date}</Text>
          </View>
        ) : (
          <Text style={styles.chatTime}>{data.created_date}</Text>
        )}
      </View>
      <View style={styles.myBubbleWrapper}>
        <Text style={styles.myChat}>{data.content}</Text>
      </View>
      <Image
        source={rightBubbleTriangle}
        style={{
          width: 8,
          height: 8,
          marginTop: 6,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  chatRowWrapper: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  chatInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 4,
    marginBottom: 8,
  },
  chatTimeWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
  },
  chatTime: {
    fontSize: 12,
    fontWeight: '500',
    color: '#737373',
    lineHeight: 14.98,
  },
  myBubbleWrapper: {
    backgroundColor: '#6297FF',
    borderRadius: 8,
    padding: 8,
    maxWidth: 232,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  myChat: {
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 22.5,
    color: '#FFF',
    marginRight: 4,
  },
  microBar: {
    width: 1,
    height: 4,
    backgroundColor: '#D5D5D5',
    marginRight: 4,
  },
});

export default RightBubble;
