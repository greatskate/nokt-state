# Nokt State

Nokt State is a Singleton State you can acces in all of your project

## Instalation
  >`>npm install nokt-state`

## How to use it

### Import
  >`import State from 'nokt-state';`

### Create your instance
 You need to create your instance for your first use

  >`State.createInstance();`

### Get your instance
 You can acces your instance in all your files by importing it in. Then you can get your instance by:

  >`State.getInstance()`

 ### If you want to delete your instance

  >`State.deleteInstance()`


## Example

#### index.js
>`var State =  require('nokt-state');`

>`const {example} = require('./example');`

>`State.createInstance();`

>`State.getInstance().test = 'This is an example of Nokt State'`

>`example();`


#### example.js
>`var State =  require('nokt-state');`

>`function example(){`

 >`console.log(State.getInstance().test)`

>`}`

>`module.exports.example = example;`


#### Test

>`>node index.js`
>This is an example of Nokt State
