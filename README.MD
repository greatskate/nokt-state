# Nokt State

Nokt State is a Singleton State you can acces in your all project

## Instalation
  >`>npm install nokt-state`

## How to use it

### Import
  >`import State from 'nokt-state';`

### Create your instance
 You need to create your instance for your first use
 
  >`State.createInstance();`
 
### Get your instance
 You can acces your instance in all your files by import it in. Then you can get your instance by:
 
  >`State.getInstance()`
 
 ### If you want to delete your instance
 
  >`State.deleteInstance()`
  
  
## Example

#### index.js
>`
import State from 'nokt-state';

import {example} from './example';

State.createInstance();

State.getInstance().test = 'This is an example of Nokt State'

example();
`

#### example.js
>`
import State from 'nokt-state';

function example(){

  console.log(State.getInstance().test)
  
}

module.exports.example = example;
`

#### return
>This is an example of Nokt State
