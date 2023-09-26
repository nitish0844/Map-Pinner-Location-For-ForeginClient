import React, {useState, useEffect, useRef} from 'react';
import {GiftedChat, Send} from 'react-native-gifted-chat';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Platform,
  Text,
  SafeAreaView,
} from 'react-native';
import {screenWidth} from '../../Utils/Utils';

import {useDispatch, useSelector} from 'react-redux';
import dayjs from 'dayjs';

import {handleChatBotPrompt} from '../../API/ChatGPTAPI';

import AICustomMessage from './AICustomMessage';
import {normalize} from '../../Helpers/ResponsiveFonts';
import FastImage from 'react-native-fast-image';
import {addMessagesAction} from '../../Redux/Actions/ChatAction';

var relativeTime = require('dayjs/plugin/relativeTime');
var localizedFormat = require('dayjs/plugin/localizedFormat');
dayjs.extend(localizedFormat);
dayjs.extend(relativeTime);

const messageCreatedTime = created_at => {
  return dayjs(created_at).format('LT');
};

const Chat = ({navigation}) => {
  const chatData = useSelector(state => state?.ChatReducer);

  const [messages, setMessages] = useState(
    Object.values(chatData?.chatMessages),
  );

  const [text, setText] = useState('');

  const giftedChatRef = useRef();

  const giftedChatInputRef = useRef();

  const [loaderModal, setLoaderModal] = useState(false);

  const handleSend = async message => {
    const text = message[0].text;

    setLoaderModal(true);

    const response = await handleChatBotPrompt(text);

    setLoaderModal(false);

    const finalValue =
      messages?.length >= 1
        ? [
            ...messages,
            {
              text,
              createdAt: new Date().getTime() - 5,
              name: 100,
              uid: 100,
              user: {
                _id: 100,
                name: 100,
              },
              reactions: [],
              _id: Math.random(),
            },
            {
              text: response,
              createdAt: new Date().getTime(),
              name: 'AI',
              uid: 'AI',
              user: {
                _id: 'AI',
                name: 'AI',
              },
              reactions: [],
              system: true,
              customField: 'custom',
              customFieldType: 'AI',
              // typed: false,
              typed: true,
              newType: 'AI',
              _id: Math.random(),
            },
          ]
        : [
            {
              text,
              createdAt: new Date().getTime() - 5,
              name: 100,
              uid: 100,
              user: {
                _id: 100,
                name: 100,
              },
              reactions: [],
              _id: Math.random(),
            },
            {
              text: response,
              createdAt: new Date().getTime(),
              name: 'AI',
              uid: 'AI',
              user: {
                _id: 'AI',
                name: 'AI',
              },
              reactions: [],
              system: true,
              customField: 'custom',
              customFieldType: 'AI',
              // typed: false,
              typed: true,
              newType: 'AI',
              _id: Math.random(),
            },
          ];

    setMessages(finalValue);

    dispatch(addMessagesAction(finalValue));
  };

  const NormalChatMessage = ({props}) => {
    return (
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'flex-end',
          marginBottom: 50,
        }}>
        <View
          style={{
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
            flexDirection: 'row',
          }}>
          <View
            style={{
              backgroundColor: '#4169E1',
              borderRadius: 20,
              borderBottomRightRadius: 0,
              borderBottomLeftRadius: 20,
              margin: 10,
              padding: 25,
              width: screenWidth * 0.9,
              maxWidth: screenWidth * 0.9,
            }}>
            <Text
              style={{
                fontFamily: 'Pangram-Regular',
                lineHeight: 30,
                fontSize: normalize(4),
              }}>
              {props?.currentMessage?.text}
            </Text>
            <Text
              style={{
                textAlign: 'right',
                marginTop: 5,
                fontFamily: 'Pangram-Regular',
                lineHeight: 30,
                fontSize: normalize(3),
              }}>
              {messageCreatedTime(props?.currentMessage?.createdAt)}{' '}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const renderBubble = props => {
    return <NormalChatMessage props={props} />;
  };

  const renderLoading = () => {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={'#4169E1'} />
      </View>
    );
  };

  function renderSend(props) {
    return (
      <Send {...props}>
        <View></View>
      </Send>
    );
  }

  const dispatch = useDispatch();

  const onTextChange = value => {
    setText(value);
  };

  const [inputHeight, setInputHeight] = useState(0);

  const renderComposer = props => {
    return (
      <View
        style={{
          backgroundColor: '#161621',
        }}>
        <>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              width: screenWidth,
            }}>
            <>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <TextInput
                  {...props}
                  ref={giftedChatInputRef}
                  placeholder={'Ask about communities...'}
                  onChangeText={onTextChange}
                  style={{
                    borderWidth: 0,
                    width: screenWidth * 0.75,
                    padding: 0,
                    paddingHorizontal: 10,
                    paddingTop: 10,
                    borderRadius: 10,
                    borderColor: '#4169E1',
                    fontFamily: 'Pangram-Medium',
                    alignItems: 'center',
                    fontSize: 18,
                    textAlignVertical: 'center',
                    minHeight: 70,
                    maxHeight: 120,
                    color: 'white',
                    backgroundColor: '#1E1E2E',
                    marginVertical: 10,
                  }}
                  value={text}
                  multiline={true}
                  numberOfLines={Platform.OS === 'ios' ? 4 : 1}
                  keyboardShouldPersistTaps="never"
                  placeholderTextColor={'#777777'}
                  onContentSizeChange={e =>
                    setInputHeight(e.nativeEvent.contentSize.height)
                  }
                />

                <Send {...props}>
                  <View
                    style={{
                      marginBottom: 15,
                      marginLeft: 10,
                    }}>
                    <Image
                      source={require('../../Icons/MessageInputIcons/GptSend.png')}
                      style={{
                        width: 35,
                        height: 35,
                        resizeMode: 'stretch',
                      }}
                    />
                  </View>
                </Send>
              </View>
            </>
          </View>
        </>
      </View>
    );
  };

  function renderSystemMessage(props) {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: screenWidth,
        }}>
        {
          {
            AI: <AICustomMessage message={props?.currentMessage} />,
          }[props?.currentMessage?.customFieldType]
        }
      </View>
    );
  }

  return (
    <View style={{flex: 1, backgroundColor: '#161621'}}>
      <StatusBar hidden={true} />
      <>
        <SafeAreaView>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: 20,
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}>
                <FastImage
                  source={require('../../Icons/MessageInputIcons/Back.png')}
                  style={{
                    width: 12,
                    height: 12,
                  }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <Text
                style={{
                  marginHorizontal: 10,
                  fontFamily: 'Pangram-Medium',
                  fontSize: normalize(4.5),
                  color: 'white',
                }}>
                Helper Bot
              </Text>
            </View>
          </View>
        </SafeAreaView>

        <GiftedChat
          isLoadingEarlier={true}
          ref={giftedChatRef}
          messages={messages?.sort((a, b) => b?.createdAt - a?.createdAt)}
          onSend={handleSend}
          showUserAvatar={false}
          text={text}
          onInputTextChanged={text => setText(text)}
          listViewProps={{
            scrollEventThrottle: 2000,
          }}
          renderAvatar={null}
          user={{
            _id: 100,
            name: 100,
          }}
          alwaysShowSend={true}
          scrollToBottom={false}
          keyboardShouldPersistTaps={'never'}
          renderBubble={renderBubble}
          renderLoading={renderLoading}
          renderSend={renderSend}
          showAvatarForEveryMessage={false}
          renderComposer={renderComposer}
          renderSystemMessage={renderSystemMessage}
          bottomOffset={20}
          renderFooter={() => (
            <View>
              {loaderModal && (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 10,
                    marginLeft: 10,
                    marginBottom: 60,
                  }}>
                  <View
                    style={{
                      position: 'relative',
                      width: 50,
                    }}>
                    <View>
                      <FastImage
                        source={require('../../Screens/Admin.png')}
                        style={{
                          resizeMode: 'contain',
                          width: 45,
                          height: 45,
                          borderRadius: 100,
                        }}
                      />
                    </View>
                  </View>
                  <ActivityIndicator
                    size={'small'}
                    color={'#4169E1'}
                    style={{marginLeft: 10}}
                  />
                </View>
              )}
            </View>
          )}
          renderChatEmpty={() => (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                selected={true}
                style={{
                  transform: [{scaleY: -1}],
                  textAlign: 'center',
                  fontFamily: 'Pangram-Regular',
                  lineHeight: 30,
                  fontSize: normalize(4),
                  color: 'white',
                }}>
                Chat directly with Helper BOT! {`\n`} Start by asking a
                question.{' '}
              </Text>

              <FastImage
                source={require('../../Screens/Admin.png')}
                style={{
                  width: 80,
                  height: 80,
                  transform: [{scaleY: -1}],
                  marginVertical: 10,
                }}
                resizeMode="contain"
              />
              <View
                style={{
                  transform: [{scaleY: -1}],
                }}>
                <View></View>
              </View>
            </View>
          )}
        />
      </>

      {Platform.OS === 'ios' && (
        <View style={{height: inputHeight > 90 ? 90 : inputHeight + 20}}></View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  systemMessageWrapper: {
    backgroundColor: '#6646ee',
    borderRadius: 4,
    padding: 5,
  },
  systemMessageText: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
  },
  emoji: {
    width: 30,
    height: 30,
    marginHorizontal: 5,
    resizeMode: 'contain',
  },
  bottomComponentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Chat;
