import ProfileReducer from "./Profile-reducer";
import DialogsReducer from "./Dialog-reducer";
import NewsReducer from "./News-reducer";

let store = {
  _state: {
    ProfilePage: {
      postsData: [
        { id: 1, post: 'hi', like: 10 },
        { id: 2, post: 'how are you', like: 20 }
      ],
      newPostText: "luka"
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
      ],
      newBodyText: ''
    },
    newsPage: {
        newsMassagesData: [
          {id: '1', massage: 'sup brooo'},
          {id: '2', massage: 'sup brooo'},
          {id: '3', massage: 'sup brooo'},
          {id: '4', massage: 'sup brooo'},
        ],
        newsMassageBody: ''
    }

  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this.Subscribe = observer;
  },


  dispatch(action) {
    this._state.ProfilePage =  ProfileReducer(this._state.ProfilePage, action);
    this._state.dialogsPage =  DialogsReducer(this._state.dialogsPage, action);
    this._state.newsPage =  NewsReducer(this._state.newsPage, action);

    this.subscribe(this._state);
  }
}
export default store;
window.state = store;



  // addPost() {
  //   let newPost = {
  //     id: 5,
  //     post: this._state.ProfilePage.newPostText,
  //     like: 0
  //   }

  //   this._state.ProfilePage.postsData.push(newPost);
  //   this._state.ProfilePage.newPostText = '';
  //   this._rerenderEntireTree(this._state);
  // },

  // ChangeText(newText) {
  //   this._state.ProfilePage.newPostText = newText;
  //   this._rerenderEntireTree(this._state);
  // },