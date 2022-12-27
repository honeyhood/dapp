import { apolloClient, getProfiles } from '../api';

const getProfilesRequest = async (request) => {
  const result = await apolloClient.query({
    query: getProfiles,
    variables: {
      request,
    },
  });

  return result.data.profiles;
};

export const profiles = async (address) => {
  console.log('profiles: address', address);

  const ownedBy = [address];

  const profilesFromOwnedBy = await getProfilesRequest({ ownedBy });

  console.log('profiles: result', profilesFromOwnedBy);

  return profilesFromOwnedBy;
};
