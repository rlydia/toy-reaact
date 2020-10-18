import {createElement, Component, render} from './toy-react.js' 

class MyComponent extends Component {
  render() {
    return <div>
      <h1>my component</h1>
      {this.children}
    </div>
  }
}

// <MyComponent></MyComponent> 会被编译为 
// creactElement("MyComponent", {
//   id="a",
//   "class" = "c"
// }, createElement("div", null, "abc"), createElement("div", null), createElement("div", null))
render(<MyComponent id="a" class="c">
  <div>abc</div>
  <div></div>
  <div></div>
</MyComponent>, document.body)