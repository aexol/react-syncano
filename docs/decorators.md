## Decorators
Decorators are useful and simple way to connect the store to components. Usage is very similar to redux connect.

### withSyncano
This decorator connects the compnent to whole redux state. How to use it ?
```js
@withSyncano()
class MyComponent extends React.Component{

}
```
If you want to pass extra actions

```js
import myActions from '../actions'

@withSyncano({actions:myActions})
class MyComponent extends React.Component{

}
```
If you dont want to pass the whole state to props

```js
import myActions from '../actions'

@withSyncano({
    actions:myActions,
    state: state => ({
        valid:state.valid
    })
})
class MyComponent extends React.Component{

}
```