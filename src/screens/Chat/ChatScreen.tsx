import { FlatList, ScrollView, TextInput, View } from 'react-native';
import {Text} from '../../components/text/Text';
import {Button} from '../../components/buttons/Button';
import {useDispatch} from '../../hooks/dispatch';
import {logout} from '../../store/thunks/auth-thunks';
import {
    useFocusEffect,
    useNavigation,
    useRoute,
} from '@react-navigation/native';
import routes from '../../navigations/routes';
import { useCallback, useEffect, useState } from 'react';
import {getAllUsers, getUser} from '../../store/thunks/user-thunk';
import {useSelector} from 'react-redux';
import {getUserSelector} from '../../store/selectors/user-selector';
import Layout from '../../components/Layout';
import {
    createMessage,
    getAllMessageFromChat,
} from '../../store/thunks/message-thunks';
import { getSelectedAuthToken } from '../../store/selectors/message-selectors';
import { clearChatMessage } from '../../store/reducers/message-reducer';
import socketService from '../../utils/socketService';

export const ChatScreen = () => {
    const dispatch = useDispatch();
    const { params } = useRoute();
    const navigation = useNavigation<any>();
    const chatMessage = useSelector(getSelectedAuthToken);
    const user = useSelector(getUserSelector);
    const [message, setMessage] = useState('');
    const [data, setData] = useState<any>([]);

    useEffect(() => {
        socketService.on('received_message', msg => {
            let cloneArr = [...data];
            setData(cloneArr.concat({ text: msg }));
        });
    }, [data]);

    const onLogout = async () => {
        try {
            await dispatch(logout());
            navigation.navigate(routes.registration.Login);
        } catch (e) {
            console.log('error', e);
        }
    };

    useFocusEffect(
        useCallback(() => {
            loadAllMessageThisChat();
            return () => {
                dispatch(clearChatMessage());
                setMessage('');
                setData([]);
            };
        }, [params]),
    );

    const loadAllMessageThisChat = async () => {
        if (params?.chatId) {
            try {
                await dispatch(getAllMessageFromChat({ chatId: params?.chatId }));
            } catch (error) {
                console.log('error', error);
            }
        }
    };

    const loadFriendDetail = async () => {
        // params.friendId
        await dispatch()
    }

    useFocusEffect(
        useCallback(() => {
            (async () => {
                await dispatch(getUser());
            })();
            (async () => {
                await dispatch(getAllUsers());
            })();
        }, []),
    );

    const onSendMessage = async () => {
        if (!message) {
            return;
        }
        try {
            await dispatch(
                createMessage({
                    chatId: params?.chatId,
                    senderId: user?._id,
                    text: message,
                }),
            ).unwrap();
            setMessage('');
            socketService.emit('send_message', message);
        } catch (error) {
            console.log('error', error);
        }
    };

    return (
        <Layout>
            <View style={{ alignItems: 'center'}}>
                <View>
                    <Text style={{ fontSize: 22 }}>
                        Chat between: {user?.name}
                    </Text>
                    {/*<Button title={'logout'} onPress={onLogout} />*/}

                    <FlatList
                        data={[...chatMessage, ...data]}
                        style={{ flex: 1 }}
                        renderItem={({ item }) => {
                            return (
                                <View
                                    style={{
                                        height: 40,
                                        marginBottom: 8,
                                        width: '100%',
                                        alignItems: item?.senderId === user._id || !item?._id ? 'flex-end' : 'flex-start',
                                        paddingHorizontal: 10,
                                    }}>
                                    <View
                                        style={{ backgroundColor: 'lightblue', paddingHorizontal: 15, paddingVertical: 6, borderRadius: 10 }}>
                                        <Text
                                            style={{ color: 'black', right: 0 }}>
                                            {item.text}
                                        </Text>
                                    </View>
                                </View>
                            );
                        }}
                    />
                    <View>
                        <TextInput
                            value={message}
                            onChangeText={val => setMessage(val)}
                            style={{
                                borderColor: 'black',
                                borderStyle: 'solid',
                                borderWidth: 1,
                                height: 40,
                                paddingHorizontal: 15,
                            }}
                        />
                        <Button
                            title={'Send Message'}
                            onPress={() => onSendMessage()}
                        />
                    </View>
                </View>
            </View>
        </Layout>
    );
};
