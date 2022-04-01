import { faker } from '@faker-js/faker';
import { sample } from 'lodash';
// utils
import { mockImgAvatar } from '../utils/mockImages';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: mockImgAvatar(index + 1),
  name: sample(['Users', 'Accounts', 'Orders', 'Users']),
  updated: sample(['March 22 2022', 'March 22 2022', 'March 22 2022']),
  status: sample(['live', 'deprecated']),
  version: sample(['v1.0 u871qw5 (Sagar Batchu)', 'v2.0 hd784xk (Simon Yu)']),
  docsversion: sample(['2.0.0', '1.0.1', '1.0.1']),
  sdkversion: sample(['2.0.0', '1.0.1', '1.0.1'])
}));

export default users;
