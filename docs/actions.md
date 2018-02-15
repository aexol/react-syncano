# Built-in actions
React-syncano comes with a plenty of built-in actions to use with rest-framework.

## Generic

### Socket
This is the only function you should use. It brings all your syncano backend functions into front.
First of all import pregenerated functions:
```js
import * as actions from '../syncano/generator/generated'
```

As you see you have all your backend functions exposed to front-end!

```js
  socket(
    actions.restFrameworkList({
      model: 'dummy',
    }).then(dummy => ({
      dummy
    }))
  )
```
As you see it takes function from your syncano backend and in success it mutates store injecting the response to it.

## Schema

### Syncano Get Models
This action get schema of your classes connected with your instance. Gets data from public rest-framework socket endpoint.

```js
  syncanoSetModels()
```

## Authorization

### syncanoLogin
Logins user with given username and password
```js
syncanoLogin({
  username:'me',
  password:'my secret password'
})
```
### syncanoLogout
Logs out user
```js
syncanoLogout()
```
### syncanoValid
This action is used to validate token stored in local storage or cookies
```js
syncanoValid()
```
### syncanoValidate
This action is used to validate token stored in local storage or cookies with you having control over username and token
```js
syncanoValidate({
  username:'me',
  token:'daj87dsayh87dsahsa8'
})
```
### syncanoRefreshToken
Refresh your token 
```js
syncanoRefreshToken({
  username:'me',
  token:'daj87dsayh87dsahsa8'
})
```

## Rest CRUD

### syncanoList

```js
syncanoList({
  model:'book'
})
```
### syncanoAdd

```js
syncanoAdd({
  model:'book',
  data:{
    title:'Henry Portier',
    author:'JK Mikk'
  }
})
```
### syncanoUpdate

```js
syncanoUpdate({
  model:'book',
  id:3,
  data:{
    author:'KJ'
  }
})
```
### syncanoDelete

```js
syncanoDelete({
  model:'book',
  id:3,
})
```
