import { faker } from '@faker-js/faker';
import { sample } from 'lodash';
// utils
import { mockImgAvatar } from '../utils/mockImages';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: mockImgAvatar(index + 1),
  name: sample(['Accounts', 'Orders', 'Statements', 'Users']),
  updated: sample(['Feb 20 2022', 'Feb 25 2022', 'March 30 2022']),
  status: sample(['production', 'staging', 'deprecated']),
  version: sample([
    'v1.0 u871qw5 (Sagar Batchu)',
    'v2.0 hd784xk (Simon Yu)',
    'v2.0 7yxh3sz (Nolan Sullivan)'
  ]),
  docsversion: sample(['1.1.0', '1.0.1', '1.2.1']),
  sdkversion: sample(['1.1.0', '1.0.1', '1.2.1'])
}));

export default users;
