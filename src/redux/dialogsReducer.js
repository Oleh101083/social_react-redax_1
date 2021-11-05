const ADD_DIALOG_POST = 'ADD-DIALOG-POST'
const UPDATA_DIALOG_NEW_POST = 'UPDATA-DIALOG-NEW-POST'

let initialState ={
    posts:[],
    messages: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ],
    newPostText: 'Hello from dialogReducer!!!',
}

const dialogsReducer = (state=initialState,action) =>{
switch (action.type) {
    case ADD_DIALOG_POST:
        let newPost = {
            id:1,
            message: state.newPostText,
            countLike: 5
            };
        state.posts.push(newPost);
        state.newPostText = '';
        return state;
    case UPDATA_DIALOG_NEW_POST:
        state.newPostText = action.newText;
        return state;

    default:
        return state;
}
}




export const upPostDialogCreator = () => ({type: ADD_DIALOG_POST })
export const upNewPostDialogCreator = text =>
({type: UPDATA_DIALOG_NEW_POST,newText:text})

export default dialogsReducer