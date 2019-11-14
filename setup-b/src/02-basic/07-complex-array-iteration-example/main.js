const reactContainer = document.getElementById('react-container')


// Complex nested array iteration


const MyApp = () => (
  <table>
    <tbody>
      {
        [ ['1a','1b', '1c'],
          ['2a','2b', '2c'],
          ['3a','3b', '3c'] ].map(
            row =>
              <tr key={_.uniqueId()}>
              {
                row.map(
                  cell =>
                    <td key={_.uniqueId()}>
                      {cell}
                    </td>
                )
              }
              </tr>
          )
      }
    </tbody>
  </table>
)



ReactDOM.render(<MyApp />, reactContainer)
