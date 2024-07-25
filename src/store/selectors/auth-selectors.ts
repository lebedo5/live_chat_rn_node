import { StoreState } from '../configure-store';

export const getSelectedAuthToken = ({ auth }: StoreState) => auth.authToken;
