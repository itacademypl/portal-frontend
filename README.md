# portal-frontend

Here is the it-academy poltal frontend repository.

## Tools used

This is based one the mutliple tools to preserve some code styles as well as the formatting.
Tools that are included are:

* ESLint - check the code agains the rules defined in its config
* Jest - tool for running unit tests
* Prettier - tool that automatically formats the code so you don't need to care about it anymore
* Stylelint - same thing as ESLint but it checks the CSS files
* Parcel - it's zero configuration bundler
* Babel - it's tool that helps us writing code using the latest features of the JS, while it then
  compiles it down to JS that is compatible with older browsers. Also it has some plugins that are
  usually attached to some libraries to reduce some manual writing, we have one - babel-lodash-plugin

## Get started

1. Install Node JS.
   Google for nodejs and install latest version of the node.js from the website
2. Go to the root of the repository using command line tool your choice.
3. Run `npm install -g yarn`
4. Run `yarn install`
5. Run `yarn start`
6. Open browser with address: `localhost:1234`

## Scripts

Here is the list of possible scirpts and what they are do.

### `yarn start`

Runs the server and serves the application on `localhost:1234`
Automatically detects changes to your code and CSS and refreshes the page

### `yarn test` and `yarn test:watch`

Runs all unit tests. With `:watch` watches for the test changes and automatically
reruns changed tests.

### `yarn lint` adn `yarn lint:fizx`

Checks the code for wrong formatting, possible bugs and bad practices etc.
`:fix` same thing but it first try to fix issues, that automatically fixable
and then show issues which are left afterwards.

### `yarn build`

Runs build process to produce production ready bundles. Also before that it checks code for issues,
and runs the tests.

## FAQ

### What it bundler?

It's tool that make possible to use ES6 Imports in the project.
Basically it takes some entry JS file and then follows al imports, and then
all imports in the imported files and so on untill it finally resolves all the
files, modules, styles imported.
After that it's merge them all together in the one big JS, CSS file and attaches
them to our html.

In development it's also takes a look at the files we change and automatically
reload our page for the changes to be applied.

In production it eleminates dead code (code that is not used), also makes all
code a one loooooong line, and also make our functions and variable names short like
a1, a2 etc so they take less space and could be compressed in the more effective way.

It's all reduces resulted bundle size, which means that browser will be able to
download, parse and execute it way faster which is for sure a good reason to
continute to use bundlers.

### What is unit test?

Unit test is a short isolated function that gets called to check correctness of the
functions. Very short explanation is: Code that tests code against some constrains.
If constrains are not matched it means that our code is broken and code should be fixed.
Important thing about unit tests is that they shouldn't do any requests like endpoi
nts etc. Means that
if you are in the Mount Everest and you will run them, they should all succeed,
if they are not, and they rely on some internet connection etc then it's
not unit test and you need to rewrite it.

### More questions?

Please Google for Jest, Parcel, Babel, ESLint, Prettier, Stylelint documentation to find an answers.
