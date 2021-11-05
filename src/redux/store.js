import dialogsReducer from "./dialogsReducer"
import musicPostReducer from "./musicPostReducer"
import newPostReducer from "./newsPostReducer"
import profileReducer from "./profileReducer"


let store = {
    
    _state : {
    profilePage : {
    posts:[],
    newPostText: 'Hello from state!!!',
},
    DialogData : {
    posts:[
            {id:1, name:'Oleh', countLike:22},
            {id:2, name:'Lesy', countLike:22},
            {id:3, name: 'Ivan', countLike:22},
            ],
    newPostText: 'DialogData',
},

    NewsPostData :{
    posts:[
            {id:1,message:'HelloNews', countLike:33},
            {id:2,message:'Hello2News', countLike:66},
            {id:3,message:'Hello,GoodByNEws!!!', countLike:88}
        ],
        newPostText: ' ',
    },
    NewPostAboutMusic : {
        posts:[
            {id:1,message:'music', countLike:33},
            {id:2,message:'U2', countLike:66},
            {id:3,message:'Beatles', countLike:77}
        ],
        newPostText: ' ',
    }
},

    _callSupscriber(){
    console.log('_callSupscriber')
},

    _subscribe(observer){
    this._callSupscriber = observer
},

    dispatch(action){
        
        this._state.profilePage = profileReducer(this._state.profilePage,action)
        this._state.DialogData = dialogsReducer( this._state.DialogData,action)
        this._state.NewsPostData = newPostReducer( this._state.NewsPostData,action)
        this._state.NewPostAboutMusic = musicPostReducer( this._state.NewPostAboutMusic,action)

        this._callSupscriber(this._state);
    },

    getState(){
        return this._state
    }
}

export default store














