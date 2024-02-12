// Input:
//  - url
// Output:
//  - Promise that resolves into an object with:
//   - json method that returns an object
//   - status field that is a number
function fetch(url) {
  const exampleResponse = {
    status: 200,
    json() {
      return {
        myData: 'goes here',
        thisIsReturned: 'from invoked json()'
      }
    }
  };

  // Commenting this out so tests show whether it was mocked properly or not
  // return Promise.resolve(exampleResponse);
  throw new Error('You didn\'t properly mock the fetch dependency');
}

module.exports = fetch;
