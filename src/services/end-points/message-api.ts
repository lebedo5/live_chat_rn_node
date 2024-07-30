import {EndPointService} from '../api-handlers/axios';

const createMessage = ({ chatId, senderId, text }) => {
  const params = {
    chatId,
    senderId,
    text
  }
  return EndPointService.post('/messages', JSON.stringify(params), {
    headers: {
      "Content-Type": 'application/json'
    }
  });
};

const getAllMessageFromChat = (chatId: string) => {
  return EndPointService.get(`/messages/${chatId}`);
};
export default {
  createMessage,
  getAllMessageFromChat
};
