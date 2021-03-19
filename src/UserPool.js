import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'sa-east-1_xiOcyFG4a',
  ClientId: '2u2eb3osp6s1n7o2ebl4v5kp1r',
};

export default new CognitoUserPool(poolData);
