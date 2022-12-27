// import { BigNumber, utils } from 'ethers';
import { apolloClient, createProfileMutation } from '../api';
// import { pollUntilIndexed } from '../indexer/has-transaction-been-indexed';

const createProfileRequest = async (request, token) => {
  const result = await apolloClient.mutate({
    mutation: createProfileMutation,
    variables: {
      request,
    }
  });

  return result.data.createProfile;
};

export const createProfile = async (address, token) => {
  console.log('create profile: address', address);

  const createProfileResult = await createProfileRequest({
    handle: new Date().getTime().toString(),
  });

  console.log('create profile: result', createProfileResult);

  if (createProfileResult.__typename === 'RelayError') {
    console.error('create profile: failed');
    return;
  }

  console.log('create profile: poll until indexed');
  // const result = await pollUntilIndexed({ txHash: createProfileResult.txHash });

  // console.log('create profile: profile has been indexed', result);

  // const logs = result.txReceipt.logs;

  // console.log('create profile: logs', logs);

  // const topicId = utils.id(
  //   'ProfileCreated(uint256,address,address,string,string,address,bytes,string,uint256)'
  // );
  // console.log('topicid we care about', topicId);

  // const profileCreatedLog = logs.find((l) => l.topics[0] === topicId);
  // console.log('profile created log', profileCreatedLog);

  // let profileCreatedEventLog = profileCreatedLog.topics;
  // console.log('profile created event logs', profileCreatedEventLog);

  // const profileId = utils.defaultAbiCoder.decode(['uint256'], profileCreatedEventLog[1])[0];

  // console.log('profile id', BigNumber.from(profileId).toHexString());
};
