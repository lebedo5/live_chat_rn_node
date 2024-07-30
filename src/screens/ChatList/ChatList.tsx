import {FlatList, Pressable, View} from 'react-native';
import {Text} from '../../components/text/Text';
import Layout from '../../components/Layout';
import {useSelector} from 'react-redux';
import {
    getAllUsersSelector,
} from '../../store/selectors/user-selector';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from "react";
import {getAllUsers, getUser} from '../../store/thunks/user-thunk';
import {useDispatch} from '../../hooks/dispatch';
import routes from '../../navigations/routes';
import { createChat } from '../../store/thunks/chat-thunks';
import { Button } from "../../components/buttons/Button";

const ChatList = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation<any>();
    const users = useSelector(getAllUsersSelector);

    useEffect(() => {
        (async () => {
            await dispatch(getUser());
        })();
        (async () => {
            await dispatch(getAllUsers());
        })();
    }, []);

    const onCreateChat = async (friendId: string) => {
        try {
            const result = await dispatch(
                createChat({ secondId: friendId }),
            ).unwrap();
            navigation.navigate(routes.userFlow.Chat, { chatId: result._id, friendId  });
        } catch (error) {
            console.log('error', error);
        }
    };

    return (
        <Layout>
            <View style={{marginHorizontal: 15}}>
                <View style={{marginTop: 20}}>
                    <Text>All Users</Text>
                </View>
                <FlatList
                    data={users}
                    style={{width: '100%', marginTop: 20}}
                    renderItem={({item}) => {
                        return (
                            <Pressable
                                style={{
                                    paddingVertical: 10,
                                    paddingHorizontal: 10,
                                    backgroundColor: 'lightblue',
                                    marginBottom: 20,
                                }}
                                onPress={() => onCreateChat(item._id)}>
                                <Text style={{ color: 'black' }}>
                                    {item.name}
                                </Text>
                            </Pressable>
                        );
                    }}
                />
                <Button title={'Create group'} />

            </View>
        </Layout>
    );
};

export default ChatList;
