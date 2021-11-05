const MUSIC_ADD_POST = 'MUSIC-ADD-POST'
const UPDATA_MUSIC_NEW_POST = 'UPDATA_MUSIC_NEW_POST'

let initialState = {
    posts:[
        {id:1,message:'music', countLike:33},
        {id:2,message:'U2', countLike:66},
        {id:3,message:'Beatles', countLike:77}
    ],
    newPostText: 'Hello from profileReduser!!!',
}

const musicPostReduser = (state=initialState,action) => {
    switch (action.type) {
        case MUSIC_ADD_POST:
            let newPost = {
                id:7,
                message: state.newPostText,
                countLike: 7
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATA_MUSIC_NEW_POST:
            state.newPostText = action.newText;
                return state;    
    
        default:
            return state;
    }
}

export default musicPostReduser

export const addMusicPostCreator = () => ({type:MUSIC_ADD_POST})
export const upNewMusicPostCreator = text =>
({type: UPDATA_MUSIC_NEW_POST,newText:text})