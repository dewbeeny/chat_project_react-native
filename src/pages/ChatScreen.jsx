import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import LeftBubble from '../components/LeftBubble';
import RightBubble from '../components/RightBubble';
const leftArrow = require('../assets/icons/leftArrow.png');
const plusIcon = require('../assets/icons/plus.png');

const dummy_data = [
  {
    id: 1,
    name: '꽃심',
    content: '웅니야 뭐행?',
    created_date: '12:29PM',
    position: 'left',
    profileImgUrl: require('../assets/images/KakaoTalk_20240311_152130331.jpg'),
    isOpen: true,
  },
  {
    id: 2,
    name: '나',
    content: '수업중...',
    created_date: '12:29PM',
    position: 'right',
    profileImgUrl: require('../assets/images/KakaoTalk_20240311_152130331.jpg'),
    isOpen: true,
  },
  {
    id: 3,
    name: '나',
    content: '집에 가고 싶어ㅠㅠ 심아 보고 싶어ㅠㅠ',
    created_date: '12:29PM',
    position: 'right',
    profileImgUrl: require('../assets/images/KakaoTalk_20240311_152130331.jpg'),
    isOpen: true,
  },
  {
    id: 4,
    name: '심이',
    content: '웅니야 빨리와~~',
    created_date: '12:29PM',
    position: 'left',
    profileImgUrl: require('../assets/images/KakaoTalk_20240311_152130331.jpg'),
    isOpen: true,
  },
  {
    id: 5,
    name: '나',
    content: '나도 그러고 싶어 심아',
    created_date: '12:29PM',
    position: 'right',
    profileImgUrl: require('../assets/images/KakaoTalk_20240311_152130331.jpg'),
    isOpen: true,
  },
];

const ChatScreen = () => {
  return (
    <SafeAreaView style={styles.SafeAreaViewStyle}>
      <View style={styles.mainContainer}>
        <View style={styles.headerWrapper}>
          <TouchableOpacity>
            <Image source={leftArrow} style={styles.backButton} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>우래깅이</Text>
          <View style={styles.backButton}></View>
        </View>
        <View style={styles.chattingScreen}>
          <FlatList
            data={dummy_data}
            renderItem={({item}) =>
              item.position === 'left' ? (
                <LeftBubble data={item} />
              ) : (
                <RightBubble data={item} />
              )
            }
            keyExtractor={item => item.id.toString()}
            ListHeaderComponent={() => (
              <View style={styles.chatDayWrapper}>
                <Text style={styles.chatDay}>2022년 2월 7일</Text>
              </View>
            )}
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TouchableOpacity style={styles.plusButton}>
            <Image source={plusIcon} style={styles.plusIcon} />
          </TouchableOpacity>
          <TextInput placeholder="메세지 입력하기" style={styles.inputField} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SafeAreaViewStyle: {
    flex: 1,
    backgroundColor: '#FFF',
  },

  mainContainer: {
    flex: 1,
  },

  headerWrapper: {
    backgroundColor: '#FFF',
    paddingHorizontal: 16,
    paddingVertical: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EAEAEA',
  },
  chatDay: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 17.47,
    color: '#828282',
    textAlign: 'center',
  },
  chatDayWrapper: {
    paddingVertical: 15,
  },
  backButton: {
    width: 40,
    height: 40,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 19.97,
    textAlign: 'center',
    color: '#000',
  },
  chattingScreen: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 16,
    //paddingTop: 16, //내가 추가함
  },

  inputContainer: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#EAEAEA',
  },
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EFEFEF',
    borderRadius: 20,
    marginRight: 8,
  },
  plusButton: {
    borderWidth: 1,
    borderColor: '#EFEFEF',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  plusIcon: {
    width: 12,
    height: 12,
  },
  inputField: {
    flex: 1,
    paddingHorizontal: 12,
  },
});

export default ChatScreen;
