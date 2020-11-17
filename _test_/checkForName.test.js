import {checkForName} from "../src/client/js/nameChecker"

describe("Test user input validity", () => {

  test("Test the checkForName() function", () => {
      expect(checkForName("http://www.google.com")).toEqual(true);
      expect(checkForName("www.google.com")).toEqual(true);
      expect(checkForName("Random Text String")).toEqual(false);
  });

});
