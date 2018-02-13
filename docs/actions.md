# Built-in actions
React-syncano comes with a plenty of built-in actions to use with rest-framework.

## Generic

### Syncano
This action is a generic action for gathering something from syncano socket and pushing the response to redux state

```js
  syncano('rest-framework/list',{model:'dummy'}, dummy => ({dummy}))
```

This function receive response and injects it to store with key name dummy

```js
  syncano('some-socket/func')
```
This function injects response to state with name provided in response. In this case our response must be an object.

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
