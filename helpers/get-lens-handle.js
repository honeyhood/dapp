import { apolloClient, getDefaultProfile } from '../api'

export default async function getLensHandle(address) {
  try {
    const response = await apolloClient.query({
      query: getDefaultProfile,
      variables: {
        request: {
          ethereumAddress: address
        }
      }
    })

    console.log(response)

    if (response.data.defaultProfile) {
      return response.data.defaultProfile.handle
    }

    return null
  }
  catch (err) {
    console.log(err);
  }
}