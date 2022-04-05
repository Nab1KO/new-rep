

let state = {
  ProfilePage: {
    postsData: [
      { id: 1, post: 'hi', like: 10 },
      { id: 2, post: 'how are you', like: 20 }
    ]
  },
  dialogsPage: {
    dialogsData: [
      { id: 'luka', name: 'luka' },
      { id: 'zaza', name: 'zaza' },
      { id: 'dato', name: 'dato' },
      { id: 'dima', name: 'dima' },
      { id: 'achiko', name: 'achiko' }
    ],
    massages: [
      { id: '1', massage: 'you' },
      { id: '2', massage: 'im good' },
      { id: '3', massage: 'and you' },
      { id: '4', massage: 'im fine' }
    ]
  }
}

 export let addPost = (firsPost) => {
  let newPost = {
    id: 5,
    post: firsPost,
    like: 0
  }

  state.ProfilePage.postsData.push(newPost);
}


export default state;