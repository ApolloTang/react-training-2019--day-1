import React, {
  useEffect
} from 'react'
import {connect} from 'react-redux'
import {
  mapStoreToProps,
  mapDispatchToProps
} from './selector'


const Post = ({post}) => {
  return(
    <div>
      {post.author} : {post.title}
    </div>
  )
}

const App = ({
  date,
  posts,
  isLoading,
  errorMsg,
  dispatch_fetchSubredditPosts,
}) => {
  const handle_refresh = () => {
    dispatch_fetchSubredditPosts()
  }

  useEffect(()=>{
    const busy = false
    if (!busy) {
      dispatch_fetchSubredditPosts()
    }
    return () => {
    }
  }, [])

    return(
      <div>
        <div>fetching list of posts from https://www.reddit.com/r/reactjs/</div>
        <div>
          <button onClick={handle_refresh} disabled={isLoading} >refresh</button>
          <span>{ isLoading ? '... Loading':''}</span>
        </div>
        {
          date
          ? (<div><span>last updated at: </span><span data-testid="last-update">{date}</span></div>)
          : null
        }
        <div>
        {
          Array.isArray(posts) ? posts.map((post)=><Post key={post.id} post={post} />) : null
        }
        </div>
        { errorMsg ? <div data-testid="error-msg">{errorMsg}</div> : null}
      </div>
    )

}


const ConnectedApp = connect(mapStoreToProps, mapDispatchToProps)(App)
export {ConnectedApp}




