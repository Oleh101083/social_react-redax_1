const ADD_POST ='ADD-POST'
const UPDATA_NEW_POST = 'UPDATA-NEW-POST'

let initialState ={
    posts:[
           {id:1, name:'Oleh', countLike:22},
            {id:2, name:'Lesy', countLike:22},
            {id:3, name: 'Ivan', countLike:22},
    ],
    newPostText: 'Hello from profirReduser!!!',
}
const profileReduser = (state=initialState,action) =>{
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id:1,
                message: state.newPostText,
                countLike:3
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case  UPDATA_NEW_POST:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}


export const addPostActionCreator = () => ({type: ADD_POST})
export const upDataNewPostActionCreatore = text =>
({type:UPDATA_NEW_POST,newText:text})

export default profileReduser