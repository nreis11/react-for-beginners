# Notes

- Use {} to run JS

- CSS can be imported like usual or within the main js file.
Ex.
```javascript
import './css/style.css'
```

- To debug a component in the console, select the component in the React dev tools and access it using the console
with '$r'

- Example of router

```javascript
const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={StorePicker} />
        <Match pattern="/store/:storeId" component={App} />
        {/* If there's no match */} 
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}
```

- When using variables within html attributes, string formatting is unnecessary. Just use curly brackets.
Ex. <li class={this.props.className}>Hello</li>

- Can use Object.keys() to iterate over an object. Turns objects into array.


