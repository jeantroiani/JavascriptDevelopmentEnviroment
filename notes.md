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
#Structure
    #Demo App
        - directory structure and file naming.
        - Framework usage.
        - Testing.
        - Mock api.
        - Automated deployment.
    #Project Structure
        - Put JS in .js file (no script tags).
        - Consider organising by feature instead of file type.
        - Extract logic into POJOs.
#Production Build
# Minification
    Tackles speed load and saving bandwith.
    
# Sourcemaps
# Dynamic HTML
    With webpack you can dinamically generate index.html and inject dependencies like <script src="bundle.js"></script>
    - import HtmlWebpackPlugin.
    - add the plugin.
# Cache busting
    - save http request
    - force request for lastest version
    How:
        - import the plugin webpackMd5Hash
        - add it to the plugin list
        - change the output file name to '[name].[chunkhash].js'
    Do the same for CSS:
        - Import the ExtractTextPlugin 
        - Add the plugin 
        - replace the loader: loader: ExtractTextPlugin.extract('css?sourceMap')}
# Bundle Splinting
    - Speed initial payload.
    - Avoid re-downloading all libraries.
    How:
    -add on the entry point an object with key you wants.
    - on plugins you can use webpack CommonChunkPlugins
    - and change the output file name to '[name].js'
# Error Logging
    names:
        - track js
            How:
                - create account
                - paste code in your html
        - Sentry
        - New relic
        - Raygun
    Condiditonal to run only on prod:
        By default html template on webpack is EJS
        Use EJS <%  tags to put a conditional if token exist
#Production deployment
    #Separate UI and API
        - Cheap UI Hosting
        - Serve UI via CDN
        - Use the API tech you like
        - Separate concerns
        - low risk UI only deploys
    #Cloud Hosting
        names:
            - Amazon web services
            - Microsoft Azure
            - Heroku
            - Firebase
            - Google Cloud Platform
            - Pubstorm
            - Github (only static files)
    #Automated API deployment
    Add to heroku
        - type from repository $heroku create
        - then $git push heroku master
            

    

