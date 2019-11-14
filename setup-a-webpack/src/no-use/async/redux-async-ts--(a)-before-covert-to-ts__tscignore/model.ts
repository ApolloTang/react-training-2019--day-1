//
// file: model.js
//
// In this file we transform data from api to data the a shape
// that is consumable by reducer.


// ========================================
// Example of subreddit data shape from API
// ========================================
const exampleData_apiSubreddit = {
  data: {
    children: [
      {
        data: {
          author: 'author1', title: 'title1', id: '1'
        }
      },
      {
        data: {
          author: 'author2', title: 'title2', id: '2'
        }
      },
    ]
  }
}

// ==========================================
// Example of subreddit data shape in reducer
// ==========================================
const exampleData_reducerSubrediddit = {
  posts: [
      {
        author: 'author1', title: 'title1', id: '1'
      },
      {
        author: 'author2', title: 'title2', id: '2'
      }
  ],
  receivedAt: 1569818341066
}




// ==========================================================
// Here were transform (serialize) api data to the shape that
// is digestable by reducer:
//
//    Tsubreddit_api ===> Tsubreddit_serialized
//
// ==========================================================
const apiSerializer_subreddit = (json) => {
  const receivedAt = Date.now()

  let subreddit_serialized = {
    posts:[],
    receivedAt
  }

  if (json && json.data && json.data.children && json.data.children.length !== 0) {
    const posts = json.data.children.map(
      (child) => {
        const data = child.data
        const post = {
          author: data && data.author,
          title: data && data.title,
          id: data && data.id
        }
        return post
      }
    )

    subreddit_serialized = {
      posts,
      receivedAt
    }
  }

  return subreddit_serialized
}


export {
  exampleData_apiSubreddit,
  exampleData_reducerSubrediddit,

  apiSerializer_subreddit,
}
