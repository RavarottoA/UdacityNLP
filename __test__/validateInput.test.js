import { validateInput } from "../src/client/js/validateInput"

describe("Testing the checking functionality", () => {
    test("Testing the validateInput() function", () => {
    function validateInput(data) {
        try {
            expect(validateInput).toBeDefined();
          done();
        } catch (error) {
          done(error);
        }
      }
})})