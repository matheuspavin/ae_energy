import { expectedInput, expectedInputWithBoolean, expectedOutput, expectedOutputWithBoolean } from "../fixtures/TransformationFixtures";
import { transform } from "../../src/server/services/TransformationService";


describe('TransformationService', () => {
    let transformationService;
    describe('transform function test', () => {
        it('should transform the input', () => {
            const output = transform(expectedInput);
            expect(output).toEqual(expectedOutput);
        });
        it('should transform the input', () => {
            const output = transform(expectedInputWithBoolean);
            expect(output).toEqual(expectedOutputWithBoolean);
        });
    });
});