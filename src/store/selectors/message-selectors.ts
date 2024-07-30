import { StoreState } from '../configure-store';

export const getSelectedAuthToken = ({ message }: StoreState) => message.chatMessages;
