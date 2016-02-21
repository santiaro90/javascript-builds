import {expect} from 'chai';
import Cypher from '../cypher';

describe('Cypher', () => {
    context('.cypher', () => {
        it('should change vowels for numbers in any text', () => {
            let text = 'Santiago Alvarez Rodriguez';
            let expected = 'S4nt14g0 4lv4r3z R0dr1gu3z';

            expect(Cypher.cypher(text)).to.eq(expected);
        });
    });
});
