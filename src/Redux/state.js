
const ADD_POST = 'ADD-POST';
const CHANGETEXT = 'CHANGETEXT';

const onMassageChange = 'onMassageChange';
const onMassageSend = 'onMassageSend';



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
    }
  },

  getState() {
    return this._state
  },
  Subscribe(observer) {
    this._rerenderEntireTree = observer;
  },


  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        post: this._state.ProfilePage.newPostText,
        like: 0
      };
      this._state.ProfilePage.postsData.push(newPost);
      this._state.ProfilePage.newPostText = '';
      this._rerenderEntireTree(this._state);
    } else if (action.type === CHANGETEXT) {
        this._state.ProfilePage.newPostText = action.newText;
        this._rerenderEntireTree(this._state);
    } else if (action.type === onMassageChange) {
        this._state.dialogsPage.newBodyText = action.body;
        this._rerenderEntireTree(this._state);
    }else if (action.type === onMassageSend) {
      let body = this._state.dialogsPage.newBodyText;
          this._state.dialogsPage.newBodyText = '';
        this._state.dialogsPage.massages.push({id: 6, massage: body});
        this._rerenderEntireTree(this._state);
    }
  }

}


export const addPostActionCreatore = () => ({type: ADD_POST});
export const ChangeTextActionCreatore = (text) =>({type: CHANGETEXT, newText: text});
export const newMassageChangeCreatore = (body) => ({type: onMassageChange, body: body});
export const onMassageSendCreator = () => ({type: onMassageSend});

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