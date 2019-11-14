const reactContainer = document.getElementById('react-container')



const MyApp = () => {

  return (
    <div>

      <p /* this is how you add comment to a jsx tag */ > I am a paragraph </p>

      <p
        className="classfoo"
        /* [!] syntax: 'class' --> 'className' */
        > Foo </p>


      <p
        foo-attr={console.log('foo')}
        /* js expression in attribute  */
        > Foo </p>


      <p
        /* Inline style is an object literal, so value of properties are string */
        style={{backgroundColor:'blue', color:'#fff'}} >
        My blackground is blue, my text is white
      </p>


      <user-defined /* user define element*/ >
        I am a user-defined element
      </user-defined >


      {/* Here is an example of form in jsx */}
      <form submit="/your-end-point" target="_blank" >
        <input type="checkbox" name="fruit" id="checkbox1" value="apple" />
        <label htmlFor="checkbox1"
          /* [!] syntax: 'for' --> 'htmlFor' */
          > apple </label>

        <input type="checkbox" name="fruit" id="checkbox2" value="banana" />
        <label htmlFor="checkbox2"> banana </label>

        <button>Submit</button>
      </form>

    </div>
  )
}



ReactDOM.render(<MyApp />, reactContainer)
