import ProfileReducer from "./Profile-reducer";
import DialogsReducer from "./Dialog-reducer";
import NewsReducer from "./News-reducer";

const ADD_POST = 'ADD-POST';
const CHANGETEXT = 'CHANGETEXT';

const onMassageChange = 'onMassageChange';
const onMassageSend = 'onMassageSend';

const ON_NEWS_MASSAGE_CHANGE = 'ON_NEWS_MASSAGE_CHANGE';
const ON_NEWS_MASSAGE_SAND = 'ON_NEWS_MASSAGE_SAND';

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
  Subscribe(observer) {
    this._rerenderEntireTree = observer;
  },


  dispatch(action) {
    this._state.ProfilePage =  ProfileReducer(this._state.ProfilePage, action);
    this._state.dialogsPage =  DialogsReducer(this._state.dialogsPage, action);
    this._state.newsPage =  NewsReducer(this._state.newsPage, action);

    this._rerenderEntireTree(this._state);
  }
}


export const addPostActionCreatore = () => ({type: ADD_POST});
export const ChangeTextActionCreatore = (text) =>({type: CHANGETEXT, newText: text});
export const newMassageChangeCreatore = (body) => ({type: onMassageChange, body: body});
export const onMassageSendCreator = () => ({type: onMassageSend});
export const onNewsMassageSandCreator = () => ({type: ON_NEWS_MASSAGE_SAND});
export const onNewsMassageChangeCreator = (body) => ({type: ON_NEWS_MASSAGE_CHANGE, body: body});

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