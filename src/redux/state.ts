export type PostsType = {
    id: number
    message: string
    likeCount: number
}

export type DialogsType = {
    name: string
    id: number
    avatar: string
}

export type MessagesType = {
    id: number
    message: string
}

export type profilePageType = {
    posts: PostsType[]
}
export type dialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}

export type RootStateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
}

let state = {

    profilePage: {
        posts: [{id: 1, message: 'Hello guys, how are you?', likeCount: 1},
            {id: 1, message: 'Its my first post', likeCount: 3},
            {id: 1, message: 'Hello world', likeCount: 12},],
    },

    dialogsPage: {
        dialogs: [
            {name: "Vlad", id: 1, avatar: ''},
            {name: "Alice", id: 2, avatar: ''},
            {name: "Dmitry", id: 3, avatar: ''},
            {name: "Boris", id: 4, avatar: ''},
            {name: "Igor", id: 5, avatar: ''},
            {name: "Diana", id: 6, avatar: ''},
        ],
        messages: [
            {id: 1, message: 'Hello bro'},
            {id: 2, message: 'love you'},
            {id: 3, message: ':C'},
            {id: 4, message: '...'},
            {id: 5, message: 'what are you..?'},
            {id: 6, message: ':DD'},
        ],
    }


}

export default state
console.log(state)