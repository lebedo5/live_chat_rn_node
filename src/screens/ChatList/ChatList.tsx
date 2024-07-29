import {FlatList, Pressable, View} from 'react-native';
import {Text} from '../../components/text/Text';
import Layout from '../../components/Layout';
import {useSelector} from 'react-redux';
import {
  getAllUsersSelector,
  getUserSelector,
} from '../../store/selectors/user-selector';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useCallback} from 'react';
import {getAllUsers, getUser} from '../../store/thunks/user-thunk';
import {useDispatch} from '../../hooks/dispatch';
import routes from '../../navigations/routes';

const ChatList = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();

  const currentUser = useSelector(getUserSelector);
  const users = useSelector(getAllUsersSelector);

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

  const createChat = async () => {
    try {
    } catch (error) {
      console.log('error', error);
    }
    navigation.navigate(routes.userFlow.Chat);
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
                onPress={() => {}}>
                <Text style={{color: 'black'}}>{item.name}</Text>
              </Pressable>
            );
          }}
        />
      </View>
    </Layout>
  );
};

export default ChatList;
