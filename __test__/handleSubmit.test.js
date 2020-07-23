import { handleSubmit } from "../src/client/js/formHandler"

describe("Testing the submit functionality", () => {
    test("Testing the handleSubmit() function", () => {
    function handleSubmit(data) {
        try {
            expect(handleSubmit).toBeDefined();
          done();
        } catch (error) {
          done(error);
        }
      }
})})