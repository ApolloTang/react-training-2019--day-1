const reactContainer = document.getElementById('react-container')


const HorizontalRule = () => <div><br /><hr/><br /></div>


const MyApp = () => {
  const [name, updateName] = React.useState('Apollo Tang')

  const  handle_inputChange = e => {
    const value = e.target.value
    updateName(value)
  }

  return (
    <div>
      <HorizontalRule />

      <div>name: {name}</div>

      <HorizontalRule />

      <div>
        <div>Control component, call handle_inputChange()  onChange</div>
        <pre><code>{`
          <input
            value={name}
            onChange={handle_inputChange}
          />
        `}</code></pre>
        <input
          value={name}
          onChange={handle_inputChange}
        />
      </div>

      <HorizontalRule />

      <div>
        <div>UnControl with Place holder, call handle_inputChange() onChange</div>
        <pre><code>{`
         <input
          placeholder={'enter your name here'}
          onChange={handle_inputChange}
         />
        `}</code></pre>
        <input
          placeholder={'enter your name here'}
          onChange={handle_inputChange}
        />
      </div>

      <HorizontalRule />

      <div>
        <div>UnControl with defaultValue, call handle_inputChange() onChange</div>
        <pre><code>{`
          <input
            defaultValue={name}
            onChange={handle_inputChange}
          />
        `}</code></pre>
        <input
          defaultValue={name}
          onChange={handle_inputChange}
        />
      </div>

      <HorizontalRule />
    </div>
  )
}


ReactDOM.render(<MyApp />, reactContainer)

