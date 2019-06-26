import dialogsReducer from './dialogs-reducer'
import profileReducer from './profile-reducer'
import sidebarReducer from './sidebar-reducer'

let store = {
  _state: {
    profilePage: {
      posts: [
      {id: 1, message: 'Hi, How are you?', likesCount: 12},
      {id: 2, message: 'It\'s my first post', likesCount: 11},
      {id: 3, message: 'Blablabla', likesCount: 10},
      {id: 4, message: 'Dadada', likesCount: 19}
    ],
    newPostText: 'Path samurai'
    },

    dialogsPage: {
      dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'}
      ],
      messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your project?'},
        {id: 3, message: 'Yoy'},
        {id: 4, message: 'Yoy'},
        {id: 5, message: 'Yoy'}
      ],
      newMessageBody: ""
    },

    sidebar: {}
  },

  _callSubscriber() {
    console.log("State was changed")
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  }
}

window.store = store;

export default store;
