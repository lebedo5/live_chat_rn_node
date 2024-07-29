import { EndPointService } from '../api-handlers/axios';

const login = (payload: any) => {
    console.log('payload', payload)
    return EndPointService.post('/users/login', JSON.stringify(payload), {
        headers: {
            "Content-Type": 'application/json'
        }
    })
};

const signup = (payload: any) => {
    console.log('payload', payload)
  return EndPointService.post('/users/register', JSON.stringify(payload), {
      headers: {
          "Content-Type": 'application/json'
      }
  })
};

export default {
    signup,
    login
};
