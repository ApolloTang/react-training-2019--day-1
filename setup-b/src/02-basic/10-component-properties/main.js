const reactContainer = document.getElementById('react-container')

//
// Jsx attribute are simple argumets pass to function
// and became properties of 'props'
//
//
// [Activity]
// 1. inspect properties with React devtool
// 2. Change ChildComponent1 to ChildComponent2 in MyApp
//


const ChildComponent1 = props => {
  for (let k in props) {
    console.log(k)
  }

  return (
    <div title={props.title}>
      <code>
        <pre>
          {stringifyWithFunctions(props)}
        </pre>
      </code>
    </div>
  )
}


const ChildComponent2 = ({myString, myNum,  ...rest}) => (
  <div title={rest.title}>
    <code>
      <pre>
        {myString + '\n'}
        {myNum + '\n'}
        {stringifyWithFunctions(rest)}
      </pre>
    </code>
  </div>
)


const MyApp = () => (
  <>
    <ChildComponent1  /* <---- try ChildComponent2 */
      className="css-class"
      title="title pop up"
      myString="foo"
      myNum={1}           /* number type */
      myObject={{a:'a'}}  /* object type */
      myArray={[1,2,3]}   /* array type */
      myFn={()=>'foo'}    /* function type */
    />
  </>
)


ReactDOM.render(<MyApp />, reactContainer)




// Because you can not JSON stringify a function, hack it:
//  https://stackoverflow.com/a/40139908/3136861
function stringifyWithFunctions(object) {
  return JSON.stringify(object, (key, val) => {
    if (typeof val === 'function') {
      return `(${val})`
    }
    return val
  }, 2)
}
