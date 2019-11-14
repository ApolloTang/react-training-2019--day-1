const reactContainer = document.getElementById('react-container')

const MyApp = () => {
  const [choice, updateChoice] = React.useState('1')
  const handle_checkBoxChange = e => {
    const value = e.target.value
    updateChoice(value)
  }
  return(
    <div>
      <div> These radio button are control form </div>
      <form >
        <label htmlFor="one">
          one: <input onChange={handle_checkBoxChange}  type="radio" id="one" name="choice" value="1" checked={choice==='1'}/>
        </label><br/>
        <label htmlFor="two">
          two: <input onChange={handle_checkBoxChange}  type="radio" id="two" name="choice" value="2" checked={choice==='2'}/>
        </label><br/>
        <label htmlFor="three">
          three: <input onChange={handle_checkBoxChange}  type="radio" id="three" name="choice" value="3" checked={choice==='3'}/>
        </label><br/>
      </form>

      <div> your choice: {choice} </div>
    </div>
  )
}


ReactDOM.render(<MyApp />, reactContainer)

