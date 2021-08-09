# REACT APP TEMPLATE

## Goal

This project is a template for building react-app with all my favorite tools already configured.

Obviously, the app is using the latest version of `react`. For avoiding the relative path, I modified the webpack and allowing the import with an alias. I also added the support for sass files.

In addition, I added `prettier` and configured it for working well with `esLint`. Finally, I added the basic usefull package such as the router and the helmet.  

## Plan of the presentation

I explain with all the details how I build the project and my way of working.

- [Experiences](#experiences)
- [Links](#links)
- [Documentation](#documentation)
- [Organization](#organization)
- [Development](#development)
- [Running](#running)
- [Commands](#commands)

## Experiences

- **Experience0**: Template experience

- **Experience1**: Creating an hook useObservable
- **Experience2**: Calling an observable with synchronous and asynchronous data
- **Experience3**: Unsubscribing an infinite subscription
- **Experience4**: Creating an observer
- **Experience5**: Using pipe and map operators (creating a custom operator with pipe)
- **Experience6**: Unsubscribe multiple subscription at the same time with add
- **Experience7**: Multiple Observer using Subject
- **Experience8**: Hot multicasting (A0 - B0 - CC - 0D - 0E)
- **Experience9**: Hot Multiple Observer using BehaviorSubject
- **Experience10**: Hot Multiple Observer using ReplaySubject
- **Experience11**: Scheduler vs normal subscribe
- **Experience12**: Manage observable sequentially with concat
- **Experience13**: Manage observable concurrently with concat


## Links

- [RXJS Official documentation](https://rxjs.dev/guide/)

## Documentation
#### Code documentation

The jsdoc can be generated locally with the following command :

```
npm run build:docs
```

## Organization
#### Organization of the global folder

| Folder's Name | Description of the folder                               |
| :------------ | :------------------------------------------------------ |
| out           | The documentation generated by jsdoc                    |
| public        | Regroup the images and public files                     |
| src           | Regroup the source code                                 |

#### Organization of the src folder

| Folder's Name | Description of the folder                               |
| :------------ | :------------------------------------------------------ |
| components    | Regroup the components used inside the pages            |
| constants     | Regroup the exported constants                          |
| pages         | Regroup the components representing the pages           |
| services      | Regroup the services of the app                         |
| styles        | Regroup the scss files                                  |


## Development
#### Packages

- **react-app-rewired**: Allow us to rewrite the config of React without ejecting the app
- **customize-cra**: Allow us to rewrite the config of webpack and create module alias
- **eslint**: For linting the code with EsLint
- **@babel/eslint-parser**: Changing the parser for having access to eslint in babel
- **eslint-config-airbnb**: For having the set of rules airbnb for eslint
- **eslint-plugin-import**: For managing the alias import with eslint
- **eslint-plugin-react**: For managing the react rules
- **prettier**: For formating the style of the code
- **eslint-plugin-prettier**: For using the prettier package with esLint
- **sass**: For using the SASS css preprocessor (scss)
- **jsdoc**: For managing the dev documentation of the project
- **react-router-dom**: For managing the router and the path to the differents pages
- **react-helmet**: For managing the meta of the differents page

## Running

For running the API, a single command is needed.

```
npm run start
```

## Commands

- **npm run start**: Run the build version on a local server
- **npm run dev**: Run the linter and then the project in Devlopment mode
- **npm run build**: Build the project
- **npm run test**: Run the test of the project
- **npm run eject**: Eject the application (sometimes necessary)
- **npm run linter:fix**: Run the linter and fix the errors
- **npm run build:docs**: Build the documentation from the comments in the code
- **npm run check-update**: Check if the package are up to date (for now, everything is except the testing and webvital)
