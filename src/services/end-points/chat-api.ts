import {EndPointService} from '../api-handlers/axios';

const createChat = ({
  firstId,
  secondId,
}: {
  firstId: string;
  secondId: string;
}) => {
  return EndPointService.post('/chats', JSON.stringify({firstId, secondId}), {
    header: {
      'Content-Type': 'application/json',
    },
  });
};

const findCurrentUserChats = (userId: string | null) => {
  return EndPointService.get(`/chats/${userId}`);
};

const findUserChatMessage = ({firstId, secondId}: any) => {
  return EndPointService.get(`/chats/find/${firstId}/${secondId}`);
};

export default {
  createChat,
  findCurrentUserChats,
  findUserChatMessage,
};
