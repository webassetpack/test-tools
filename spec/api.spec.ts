
import * as api from '../src/api';
import {WAPTestFactory} from '../src/WAPTestFactory';
import {TestWAP} from '../src/TestWAP';
import {WAPTestTools} from '../src/WAPTestTools';

describe('Public API', () => {
    it('WAPTestTools', () => {
        expect(api.WAPTestTools).toBe(WAPTestTools);
    });
    it('WAPTestFactory', () => {
        expect(api.WAPTestFactory).toBe(WAPTestFactory);
    });
    it('TestWAP', () => {
        expect(api.TestWAP).toBe(TestWAP);
    });
});
