# source-map-support 
Minimal reproduction for ts-jest/source-map-support bug.

Running `yarn test` will run two tests, one with `import 'source-map-support/register';` and one without.

Both files `source-map.ts` and `no-source-map.ts` throw errors to produce a stack trace. The line numbers in the trace for `no-source-map.ts` are correct and those in `source-map.ts` are incorrect (i.e. removing `import 'source-map-support/register';` fixes the issue).

In the `source-map.ts` the line number points to the line of the compiled source in `dist/source-map.js` even though it claims to be in the source of the typescript file.

I have observed this in a larger codebase too. I want to include source-map-support in my production files to get nice stack traces.

The output is:

```shell
/usr/bin/node /usr/lib/node_modules/yarn/bin/yarn.js test
yarn run v1.22.10
$ tsc --build && jest
 FAIL  src/source-map.test.ts
  ● tests › foo

    bah

       8 |   return {a: 1}
       9 | }
    > 10 |
         | ^
      11 | export function blah() {
      12 |   throw new Error('bah')
      13 | }

!!! line below is incorrect (should be line 12) !!!
      at Object.blah (src/source-map.ts:10:11)
      at src/source-map.test.ts:8:26
      at Object.<anonymous> (src/source-map.test.ts:6:46)

 FAIL  src/no-source-map.test.ts
  ● tests › foo

    bah

      12 |
      13 | export function blah() {
    > 14 |   throw new Error('bah')
         |         ^
      15 | }
      16 |

!!! line below is correct !!!
      at Object.blah (src/no-source-map.ts:14:9)
      at src/no-source-map.test.ts:5:5
      at Object.<anonymous> (src/no-source-map.test.ts:4:15)

Test Suites: 2 failed, 2 total
Tests:       2 failed, 2 total
Snapshots:   0 total
Time:        0.877 s, estimated 2 s
Ran all test suites.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

Process finished with exit code 1
```
