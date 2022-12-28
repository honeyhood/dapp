// import { BigNumber, utils } from 'ethers';
import { v4 as uuidv4 } from 'uuid';
import { useAccount } from 'wagmi';
import { apolloClient, createPostMutation } from '../api';
// import { login } from '../authentication/login';
// import {
//   getAddressFromSigner,
//   signedTypeData,
//   splitSignature,
// } from '../ethers.service';
// import { pollUntilIndexed } from '../indexer/has-transaction-been-indexed';
import { uploadIpfs } from '../ipfs';
import { getAuthenticationToken } from '../state';
import getLensHandle from './get-lens-handle';

const { address, connector } = useAccount();

export const createPostTypedData = async (request) => {
  const result = await apolloClient.mutate({
    mutation: createPostMutation,
    variables: {
      request,
    },
  });

  return result.data.createPostTypedData;
};

export const signCreatePostTypedData = async (request) => {
  const result = await createPostTypedData(request);
  console.log('create post: createPostTypedData', result);

  const typedData = result.typedData;
  console.log('create post: typedData', typedData);

  const signature = await signedTypeData(
    typedData.domain,
    typedData.types,
    typedData.value
  );
  console.log('create post: signature', signature);

  return { result, signature };
};

const createPost = async () => {
  const profileId = await getLensHandle(address); // need a handle here
  if (!profileId) {
    throw new Error('Get your handle first!');
  }

  //   const address = getAddressFromSigner();
  //   console.log('create post: address', address);

  //   await login(address);

  const token = await getAuthenticationToken();
  if (!token) {
    throw new Error('Login first!');
  }

  const ipfsResult = await uploadIpfs({
    version: '2.0.0',
    mainContentFocus: 'idk',
    metadata_id: uuidv4(),
    description: 'Description',
    locale: 'en-US',
    content: 'Content',
    external_url: null,
    image: null,
    imageMimeType: null,
    name: 'Name',
    attributes: [],
    tags: ['using_api_examples'],
    appId: 'api_examples_github',
  });
  console.log('create post: ipfs result', ipfsResult);

  const createPostRequest = {
    profileId,
    contentURI: `ipfs://${ipfsResult.path}`,
    collectModule: {
      freeCollectModule: { followerOnly: true },
    },
    referenceModule: {
      followerOnlyReferenceModule: false,
    },
  };
};

const signedResult = await signCreatePostTypedData(createPostRequest); // idk why it doesnt see createPostRequest, maybe because async
console.log('create post: signedResult', signedResult);

//   const typedData = signedResult.result.typedData;

//   const { v, r, s } = splitSignature(signedResult.signature);

//   const tx = await lensHub.postWithSig({
//     profileId: typedData.value.profileId,
//     contentURI: typedData.value.contentURI,
//     collectModule: typedData.value.collectModule,
//     collectModuleInitData: typedData.value.collectModuleInitData,
//     referenceModule: typedData.value.referenceModule,
//     referenceModuleInitData: typedData.value.referenceModuleInitData,
//     sig: {
//       v,
//       r,
//       s,
//       deadline: typedData.value.deadline,
//     },
//   });
//   console.log('create post: tx hash', tx.hash);

//   console.log('create post: poll until indexed');
//   const indexedResult = await pollUntilIndexed({ txHash: tx.hash });

//   console.log('create post: profile has been indexed');

//   const logs = indexedResult.txReceipt!.logs;

//   console.log('create post: logs', logs);

//   const topicId = utils.id(
//     'PostCreated(uint256,uint256,string,address,bytes,address,bytes,uint256)'
//   );
//   console.log('topicid we care about', topicId);

//   const profileCreatedLog = logs.find((l: any) => l.topics[0] === topicId);
//   console.log('create post: created log', profileCreatedLog);

//   let profileCreatedEventLog = profileCreatedLog!.topics;
//   console.log('create post: created event logs', profileCreatedEventLog);

//   const publicationId = utils.defaultAbiCoder.decode(
//     ['uint256'],
//     profileCreatedEventLog[2]
//   )[0];

//   console.log(
//     'create post: contract publication id',
//     BigNumber.from(publicationId).toHexString()
//   );
//   console.log(
//     'create post: internal publication id',
//     profileId + '-' + BigNumber.from(publicationId).toHexString()
//   );
// };

(async () => {
  await createPost();
})();
