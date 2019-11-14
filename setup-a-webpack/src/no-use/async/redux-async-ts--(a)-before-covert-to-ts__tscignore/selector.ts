import {
  asyncActions,
} from './action'



function getIsoStringFromDatestamp(
  receivedAt
) {
  return (typeof receivedAt === 'number')
    ? (new Date(receivedAt)).toISOString() : undefined
}

const mapStoreToProps = (store) => {
  const subreddit = store && store.subreddit
  const receivedAt = subreddit && subreddit.receivedAt
  const date = getIsoStringFromDatestamp(receivedAt)

  return {
    date,
    posts: subreddit && subreddit.posts,
    isLoading: subreddit && subreddit.isLoading,
    errorMsg: subreddit && subreddit.errorMsg
  }
}


const mapDispatchToProps = (dispatch) => {
  const dispatch_fetchSubredditPosts = () => {
    dispatch(asyncActions.thunk_fetchSubreddit())
  }

  return {
    dispatch_fetchSubredditPosts,
  }
}

export {
  mapStoreToProps,
  mapDispatchToProps,

  getIsoStringFromDatestamp
}
