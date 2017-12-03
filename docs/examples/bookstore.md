## Socket
After creating your own socket, define classes in socket.yml file:
```yaml
classes:
  author:
    - name: name
      type: string
      filter_index: true
  book:
    - name: title
      type: string
      filter_index: true
    - name: description
      type: text
  comment:
    - name: text
      type: text
    - name: book
      type: reference
      target: book
      filter_index: true
    - name: user
      type: reference
      target: user
      filter_index: true
    
```
As this is super simple framework you dont have to define any endpoints at all

## Panel
Navigate to [admin panel](localhost:8080/#/admin/config) config section
1. In everybody 1st section enter:
```
comment:r
```
click enter
```
book:r
```
click enter
```
author:r
```
click enter
1. In logged in user permissions section enter:
```
comment:c
```
So everybody can read comments but only logged in users are allowed to create
2. In object_level section enter:
```
comment:ud:user
```
So logged in user can delete or update comment belonging to him

## Frontend
For now in admin panel you can create, update, delete objects. Let's add some user frontend and fuctionalities.
Navigate to Home component:
```
path-to-repo/src/containers/Home.jsx
```
And change the code of this component to look like this
```js
@connect(
  state => ({
    valid: state.valid,
    book: state.book
  }),
  {
    // Put actions here
  }
)
class Home extends React.Component {
  componentWillMount(){
    const
  }
  render () {
    const {
      book =[]
    } = this.props
    return (
      <div className='Home'>
        <div className="Books">
          {book.map( b=> (
            <div className="Book">
              {b.title}
            </div>
          ))}
        </div>
      </div>
    )
  }
}
```
So we have a list of books but its empty, because we need to gather it from backend somehow.
```js
import * as syncanoActions from '../syncano/actions'
```
Add this at the top of Home.jsx file. Now we need to gather data from backend

```js
@connect(
  state => ({
    valid: state.valid,
    book: state.book
  }),
  {
    syncanoList:syncanoActions.syncanoList
  }
)
class Home extends React.Component {
  componentWillMount(){
    const { syncanoList } = this.props
    syncanoList("book")
  }
  //.... rest of code
}
```

Voila we have working backend together with front-end
