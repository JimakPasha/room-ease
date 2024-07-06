interface FakeServerRequestParams<T> {
  response: T;
  withError?: boolean;
  delay?: number;
}

export const fakeServerRequest = <T,>({
  response,
  withError,
  delay = 1500,
}: FakeServerRequestParams<T>): Promise<T> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (withError) {
        reject("some fake error");
      } else {
        resolve(response);
      }
    }, delay);
  });
};
