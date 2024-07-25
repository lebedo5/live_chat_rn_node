import { EnumerableAbstract } from './enumerable.abstract';

class UserRole extends EnumerableAbstract {
    public readonly ROLE_VENUE = 'ROLE_VENUE';
    public readonly ROLE_CUSTOMER = 'ROLE_CUSTOMER';

    public getName = () => 'UserRole';

    public defaultChoices = () => ({
        [this.ROLE_VENUE]: 'Venue',
        [this.ROLE_CUSTOMER]: 'Customer',
    });
}

const userRole = new UserRole();

export default userRole;
