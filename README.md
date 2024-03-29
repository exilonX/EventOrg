# event-org

This project was generated with the [Angular Full-Stack Generator](https://github.com/DaftMonk/generator-angular-fullstack) version 3.7.3.

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node ^4.2.3, npm ^2.14.7
- [Bower](bower.io) (`npm install --global bower`)
- [Ruby](https://www.ruby-lang.org) and then `gem install sass`
- [Gulp](http://gulpjs.com/) (`npm install --global gulp`)
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`

### Developing

1. Run `npm install` to install server dependencies.

2. Run `bower install` to install front-end dependencies.

3. Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running

4. Run `gulp serve` to start the development server. It should automatically open the client in your browser when ready.

## Build & development

Run `gulp build` for building and `gulp serve` for preview.

## Testing

Running `npm test` will run the unit tests with karma.

Running `gulp test` will run the client and server unit tests with karma and mocha.

Use grunt test:server to only run server tests.

Use grunt test:client to only run client tests.

### Protractor tests

To setup protractor e2e tests, you must first run

`npm run update-webdriver`

Use gulp test:e2e to have protractor go through tests located in the e2e folder.

### Code Coverage

Use gulp test:coverage to run mocha-istanbul and generate code coverage reports.

coverage/server will be populated with e2e and unit folders containing the lcov reports.

The coverage taget has 3 available options:

test:coverage:unit generate server unit test coverage
test:coverage:e2e generate server e2e test coverage
test:coverage:check combine the coverage reports and check against predefined thresholds

when no option is given test:coverage runs all options in the above order

### Debugging

Use grunt serve:debug for a more debugging-friendly environment.

## Adding new bower component 

Run `bower install --save new_dependency` 
Run `gulp build` to add the library into index.html


## Generators

Available generators:

* App
    - [angular-fullstack]
* Server Side
    - [angular-fullstack:endpoint](https://github.com/angular-fullstack/generator-angular-fullstack/blob/master/docs/generators/endpoint.md)
* Client Side
    - [angular-fullstack:route](https://github.com/angular-fullstack/generator-angular-fullstack/blob/master/docs/generators/route.md)
    - [angular-fullstack:controller](https://github.com/angular-fullstack/generator-angular-fullstack/blob/master/docs/generators/controller.md)
    - [angular-fullstack:filter](https://github.com/angular-fullstack/generator-angular-fullstack/blob/master/docs/generators/filter.md)
    - [angular-fullstack:directive](https://github.com/angular-fullstack/generator-angular-fullstack/blob/master/docs/generators/directive.md)
    - [angular-fullstack:service](https://github.com/angular-fullstack/generator-angular-fullstack/blob/master/docs/generators/service.md)
    - [angular-fullstack:provider](https://github.com/angular-fullstack/generator-angular-fullstack/blob/master/docs/generators/service.md)
    - [angular-fullstack:factory](https://github.com/angular-fullstack/generator-angular-fullstack/blob/master/docs/generators/service.md)
    - [angular-fullstack:decorator](https://github.com/angular-fullstack/generator-angular-fullstack/blob/master/docs/generators/decorator.md)
* Deployment
    - [angular-fullstack:openshift](https://github.com/angular-fullstack/generator-angular-fullstack/blob/master/docs/generators/openshift.md)
    - [angular-fullstack:heroku](https://github.com/angular-fullstack/generator-angular-fullstack/blob/master/docs/generators/heroku.md)


## Angular Translate 

https://angular-translate.github.io/ - with staticFilesLoader 

Static files location : /components/translate/locale-language.json
Default language: en

Language dropdown - navbar.controller.js 
this.languages = ['en', 'ro'];

To add more languages add a static file in /components/translate and a new language in the language object from navbar

### Make a translation

locale-language.json - 
{
  "TRANSLATION_ID": "This is a concrete translation for a specific language."
}

In a html file {{'TRANSLATION_ID' | translate}}
