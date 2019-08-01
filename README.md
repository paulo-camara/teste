# Teste - TradersClub 

## Built With

* [React](https://github.com/facebook/react) - JavaScript library
* [Reat-Router](https://github.com/ReactTraining/react-router) - JavaScript library
* [Reflux](https://github.com/reflux/refluxjs) - JavaScript library
* [Axios](https://github.com/axios/axios) - JavaScript library

## Server

Para rodar o servidor basta especificar o `env` e rodar o comando `start`

## Build

Para rodar o build basta especificar o `env` e rodar o comando `build`

## Ambiente

    Para rodar em produção: [env] = production
    Para rodar em mock: [env] = mock

### Windows (cmd.exe)

    set "REACT_APP_ENV=[env]" && yarn [start/build]

### Windows (Powershell)

    ($env:REACT_APP_ENV = "[env]") -and (yarn [start/build])

### Linux, macOS (Bash)

    REACT_APP_ENV="[env]" yarn [start/build]

#### Exemplo

##### Server (Powershell)

    ($env:REACT_APP_ENV = "production") -and (yarn start)

##### Build (Powershell)

    ($env:REACT_APP_ENV = "mock") -and (yarn build)

## Host

    d2p2v5rq0kgknt.cloudfront.net - Deploy em ambiente de mock