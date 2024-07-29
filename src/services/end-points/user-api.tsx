import { EndPointService } from '../api-handlers/axios';


const getUser = ({ userId }: { userId: string | null }) => {
    return EndPointService.get(`/users/find/${userId}`)
}

const getAllUsers = () => {
    return EndPointService.get(`/users`)
}

export default {
    getUser,
    getAllUsers
}
