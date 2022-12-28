const client = new Web3Storage({
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDE2ZjIzODc3MWM5QjFmYzVBMDgxQWIwZjk4ZTlEYThiRUQwQzIzNTYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzAyODEzMzg3OTUsIm5hbWUiOiJ3ZWIzLWJsb2cifQ.9yuIjoKD14JyfFRxaqA6asFe0c--dcDCh7MUZCgzV6E',
});

export const uploadIpfs = async (data) => {
  try {
    const blob = new Blob([JSON.stringify(data)], {
      type: 'application/json',
    });
    const filePost = [new File([blob], 'post')];
    const added = await client.put(filePost, { wrapWithDirectory: false });
    console.log('stored files with cid:', added);
    return added;
  } catch (err) {
    console.log('error: ', err);
  }
};
