import { api } from './api'


const actionNames = {
  fetchSubreddit_start: 'fetchSubreddit_start',
  fetchSubreddit_success: 'fetchSubreddit_success',
  fetchSubreddit_fail: 'fetchSubreddit_fail',
}


const action_fetchSubreddit_start = () => ({
  type: actionNames.fetchSubreddit_start
})
const action_fetchSubreddit_success = (payload_subreaddit) => ({
  type: actionNames.fetchSubreddit_success,
  payload: payload_subreaddit
})
const action_fetchSubreddit_fail = (payload_subreddit_error)=> ({
  type: actionNames.fetchSubreddit_fail,
  error: payload_subreddit_error
})



const thunk_fetchSubreddit =
  () => async ( dispatch
  ) => {
    dispatch( action_fetchSubreddit_start() )
    let payload_subreaddit = undefined
    try {
      payload_subreaddit = await api.getPosts()
      dispatch( action_fetchSubreddit_success(payload_subreaddit) )
    } catch (error) {
      dispatch( action_fetchSubreddit_fail(error.toString()))
    }
    return payload_subreaddit
}


const asyncActions = {
  thunk_fetchSubreddit,
  // thunk_postSubreddit    //<-- can have more thunk or action
}

export {
  actionNames,
  asyncActions,
}
