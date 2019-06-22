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
      ]
    }
  },
  getState() {
    return this._state
  },
  _callSubscriber() {
    console.log("State was changed")
  },
  addPost() {
    let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
    };

    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) { 

    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  }
}

window.store = store;

export default store;
