import {EndPointService} from '../api-handlers/axios';

const createMessage = () => {
  return EndPointService.get('/messages');
};

const getAllMessageFromChat = () => {
  return EndPointService.get('/messages');
};
export default {};
