import {errorMsg} from '../src/client/js/formHandler'

describe("Test error messaging", () => {
  test("Test the errorMsg() function", () => {
      document.body.innerHTML = `<span id='error'></span>`;
      expect(errorMsg("404")).toEqual('404');
      expect(errorMsg("Unable to find server!")).toEqual('Unable to find server!');
  });

});
