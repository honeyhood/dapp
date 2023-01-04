import { ApolloClient, ApolloLink, from, HttpLink, InMemoryCache, gql } from '@apollo/client'
import { getAuthenticationToken } from './state';
import fetch from 'cross-fetch';
import { onError } from '@apollo/client/link/error';

<<<<<<< HEAD
// const API_URL = 'https://api.lens.dev'
const API_URL = 'https://api-mumbai.lens.dev/'
=======
const API_URL = 'https://api.lens.dev'
// const API_URL = 'https://api-mumbai.lens.dev/'
>>>>>>> 276f0dbf73e812f690ad43a4869465281de8c0b7

const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
};

const httpLink = new HttpLink({
  uri: API_URL,
  fetch,
});

<<<<<<< HEAD
=======
export const PROFILE_ID = "0x05"

>>>>>>> 276f0dbf73e812f690ad43a4869465281de8c0b7
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const authLink = new ApolloLink((operation, forward) => {
  const token = getAuthenticationToken();
  console.log('jwt token:', token);

  // Use the setContext method to set the HTTP headers.
  operation.setContext({
    headers: {
      'x-access-token': token ? `Bearer ${token}` : '',
    },
  });

  // Call the next link in the middleware chain.
  return forward(operation);
});

export const apolloClient = new ApolloClient({
  link: from([errorLink, authLink, httpLink]),
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,
});

export const challenge = gql`
  query Challenge($address: EthereumAddress!) {
    challenge(request: { address: $address }) {
      text
    }
  }
`

export const authenticate = gql`
  mutation Authenticate(
    $address: EthereumAddress!
    $signature: Signature!
  ) {
    authenticate(request: {
      address: $address,
      signature: $signature
    }) {
      accessToken
      refreshToken
    }
  }
`
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> aface4f (:sparkles: GetDefaultProfile, GetProfiles and CreateProfile helpers connected)
=======

>>>>>>> 276f0dbf73e812f690ad43a4869465281de8c0b7
export const getDefaultProfile = gql`
  query DefaultProfile($request: DefaultProfileRequest!) {
    defaultProfile(request: $request) {
      id
      handle
    }
  }
`;

export const getFollowing = gql`
  query Profile($request: FollowingRequest!) {
    following(request: $request) {
      items {
        profile {
          id
        }
      }
    }
  }
<<<<<<< HEAD
<<<<<<< HEAD
`
=======
=======
>>>>>>> 276f0dbf73e812f690ad43a4869465281de8c0b7
`

export const createProfileMutation = gql`
  mutation CreateProfile($request: CreateProfileRequest!) {
    createProfile(request: $request) {
      ... on RelayerResult {
        txHash
      }
      ... on RelayError {
        reason
      }
      __typename
    }
  }
`

export const getProfiles = gql`
  query Profiles($request: ProfileQueryRequest!) {
    profiles(request: $request) {
      items {
        id
        handle
      }
    }
  }
`
<<<<<<< HEAD
>>>>>>> aface4f (:sparkles: GetDefaultProfile, GetProfiles and CreateProfile helpers connected)
=======

export const profileFeed = gql`
query Feed($request: FeedRequest!) {
  feed(request: $request) {
    items {
      root {
        __typename
        ... on Post {
          metadata {
            name
            description
            image
            content
          }
        }
      }
    }
    pageInfo {
      prev
      next
      totalCount
    }
  }
}
`
>>>>>>> 276f0dbf73e812f690ad43a4869465281de8c0b7
