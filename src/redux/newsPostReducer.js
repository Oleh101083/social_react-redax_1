const NEWS_ADD_POST = 'NEWS-ADD-POST'
const UPDATA_NEWS_NEW_POST = 'UPDATA-NEWS-NEW-POST'

let initialState ={
    posts:[
        {id:1,message:'HelloNews', countLike:33},
        {id:2,message:'Hello2News', countLike:66},
        {id:3,message:'Hello,GoodByNEws!!!', countLike:88}
    ],
    newPostText: 'Hello from newsReduser!!!',
}

const newPostReduser = (state=initialState,action) => {
    switch (action.type) {
        case NEWS_ADD_POST:
            let newPost = {
                id:5,
                message: state.newPostText,
                countLike: 5
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATA_NEWS_NEW_POST:
            state.newPostText = action.newText;
            return state;

        default:
            return state;
    }
}

export const addNewsCreator = () => ({type: NEWS_ADD_POST})
export const upNewsPostCreator = text =>
({type: UPDATA_NEWS_NEW_POST,newText:text })

export default newPostReduser