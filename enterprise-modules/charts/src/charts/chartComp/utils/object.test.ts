import { deepMerge, set } from './object';

describe('object', () => {
    describe.each([
        { target: undefined, expression: 'a', value: 100, expected: undefined },
        { target: {}, expression: '', value: 100, expected: { '': 100 } },
        { target: {}, expression: 'a', value: undefined, expected: { a: undefined } },
        { target: { b: 50 }, expression: 'a', value: 100, expected: { a: 100, b: 50 } },
        { target: { a: 50 }, expression: 'a', value: 100, expected: { a: 100 } },
        { target: {}, expression: 'a', value: 100, expected: { a: 100 } },
        { target: {}, expression: 'a.b', value: 100, expected: { a: { b: 100 } } },
        { target: {}, expression: 'a.b.c', value: 100, expected: { a: { b: { c: 100 } } } },
        { target: { c: 50 }, expression: 'a.b', value: 100, expected: { a: { b: 100 }, c: 50 } },
    ])('set($target, $expression, $value)', ({ target, expression, value, expected }) => {
        test(`returns ${JSON.stringify(expected)}`, () => {
            set(target, expression, value);
            expect(target).toEqual(expected);
        });
    });

    // test prototype pollution
    test('deepMerge does not allow prototype pollution', () => {
        const BAD_JSON = JSON.parse('{"__proto__":{"polluted":true}}');
        const victim = {};
        try {
            deepMerge(victim, BAD_JSON);
        } catch (e) {
            console.error(e);
        }
        // @ts-expect-error polluted could be there
        expect(victim.polluted).toBeUndefined();
    });
});
