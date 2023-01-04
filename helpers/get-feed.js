import { apolloClient, profileFeed, PROFILE_ID } from '../api'

export default async function getProfileFeed() {
  try {
    const response = await apolloClient.query({
      query: profileFeed,
      variables: {
        request: {
          profileId: PROFILE_ID,
          limit: 50,
        }
      }
    })

    console.log(response.data.feed)

    console.log(response.data.feed.items[0].root.metadata)

    return response.data.feed
  }
  catch (err) {
    console.log(err);
  }
}