##Linting
#warning or errors
#plugins
    eslint-plugin-react
#presets
    from scratch
    Recommended
    airbnb
#notes:
    ESlint does not watch files.
    you can use eslint-watch
    $npm install --save-dev eslint-watch
    babel-eslint allows you to use stage-0
#Automated Build PRocess
 one place to checkout
 universal configuration
 part of continuos integration
#demo
#notation
    0 Off
    1 Warning
    2 errors

##Testing and continuos integration
    #Testing Styles
        - Unit testing (single function or module)
            Single function
        - Integration Testing (Interaction between modules)
            Involves clicking and waiting
        - UI (Automate interaction with UI, like selenium)
#key decisions
    - Framework
    - Assertion Library
    - Helper libraries
    - Where to run tests
    - Where to place tests
    - When to run tests

    Framework names:
        - Mocha 
        - Jasmine (very similar to mocha but has its own assertion library)
        - Tape
        - QUnit
        - AVA
        - Jest
    Assertion library:
        Declares what you expect.
        names:
            - Chai
            - Should
            - expect
    Helper Library:
        names:
            - JSDOM (run DOM related tests without a browser)
            - Cheerio (Query DOM using JQuery selectors)
    Where to run tests:
        - Browser
            - Karma
            - Testem
        - Headless browser
            -PhantomJS
        - In-memory DOM
            - JSDOM
    Where to place tests:
        - Centralised
        - Alongside
    When to run:
        Unit tests:
            - Everytime you hit save.
#Continuos integration
    Helps when commiting from different machine.
    - Run automateds build when commiting
    - Run your test suite
    - Check code coverage
    - Automate deployment to prod if all before pass
    #Names
        - Travis (Linux)
            - sign in with Github
            - add .travis.yml file to the root
            - commit 
        - Appveyor (Windows)
        - Jenkins
#HTTP
    -Node
        names:
            - HTTP
            - Request
    -Browser
        names:
            - XMLHttpRequest
            - JQuery
            - Fetch
    -Node&Browser
        names:
            - isomorphic-fetch
            - xhr
            - Axios
            - SuperAgent
    -mock HTTP:
        names: 
            - nock (unit test)
            - static JSON
            -create development webserver
                names:
                    -api-mock
                    -JSON server
                    -JSON schema faker (fakes random data)
