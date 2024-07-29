import { StoreState } from '../configure-store';


export const getUserSelector = ({ user }: StoreState) => user.currentUser;
export const getAllUsersSelector = ({ user }: StoreState) => user.users;
