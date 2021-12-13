import { assert, expect } from 'chai';
import "mocha";
import { testFunction } from '../src/testFunction'

describe('Test testFunction', () =>{

    it('should work', () => {
        var result = testFunction("yo");
        expect(result).to.equal("yo");
    })
});