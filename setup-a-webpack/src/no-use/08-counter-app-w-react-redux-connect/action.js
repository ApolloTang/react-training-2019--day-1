const actionNames = {
  counter_increase: 'counter_increase',
  counter_decrease: 'counter_decrease'
}


const counter_increase = () => ({
  type: actionNames.counter_increase
})
const counter_decrease = () => ({
  type: actionNames.counter_decrease
})



const actions = {
  counter_increase,
  counter_decrease
}




export {
  actionNames,
  actions
}

