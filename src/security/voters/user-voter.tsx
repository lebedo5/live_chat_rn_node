import { Voter } from '../voter.interface';

class UserVoter implements Voter {
    vote(action: string, subject?: {}): boolean {
        return true;
    }

    supports(action: string, subject: any) {
        // @ts-ignore
        return [].includes(action);
    }
}

export default UserVoter;
