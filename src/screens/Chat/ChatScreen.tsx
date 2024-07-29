import {TextInput, View} from 'react-native';
import {Text} from '../../components/text/Text';
import {Button} from '../../components/buttons/Button';
import {useDispatch} from '../../hooks/dispatch';
import {logout} from '../../store/thunks/auth-thunks';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import routes from '../../navigations/routes';
import {useCallback} from 'react';
import {getAllUsers, getUser} from '../../store/thunks/user-thunk';
import {useSelector} from 'react-redux';
import {getUserSelector} from '../../store/selectors/user-selector';
import Layout from '../../components/Layout';

export const ChatScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();

  const user = useSelector(getUserSelector);

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
      (async () => {
        await dispatch(getUser());
      })();
      (async () => {
        await dispatch(getAllUsers());
      })();
    }, []),
  );
  return (
    <Layout>
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <Text style={{fontSize: 32}}>Chat</Text>
          <Text style={{fontSize: 22}}>Current User Name: {user?.name}</Text>
          {/*<Button title={'logout'} onPress={onLogout} />*/}
          <View style={{height: '70%', backgroundColor: 'grey'}}></View>
          <View>
            <TextInput />
            <Button title={'Send Message'} />
          </View>
        </View>
      </View>
    </Layout>
  );
};
