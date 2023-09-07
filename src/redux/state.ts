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
            {name: "Diana", id: 1, avatar: 'https://img.freepik.com/free-psd/3d-illustration-of-person-with-sunglasses_23-2149436180.jpg?w=826&t=st=1694099085~exp=1694099685~hmac=d389989d78c403a6905eca92aada703897b90b0537fdd3e3e666eaeac387896b'},
            {name: "Alice", id: 2, avatar: 'https://img.freepik.com/free-photo/horizontal-portrait-of-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-and-stylish-glasses-with-straight-blonde-hair-expresses-positiveness-poses_176420-13176.jpg?w=1380&t=st=1694099291~exp=1694099891~hmac=bb7e879a1487888489ec756ad2ff24df0f2f5a51c04697ef027862b707dd9817'},
            {name: "Dmitry", id: 3, avatar: 'https://img.freepik.com/free-psd/3d-illustration-of-bald-person-with-glasses_23-2149436184.jpg?w=826&t=st=1694099169~exp=1694099769~hmac=398156473f1bfd4d4eb4abed1349e8681aa22c614e366351e28038d34d157bbd'},
            {name: "Boris", id: 4, avatar: 'https://img.freepik.com/premium-vector/man-character_665280-46967.jpg?w=826'},
            {name: "Igor", id: 5, avatar: 'https://img.freepik.com/premium-psd/avatar-3d-illustration_235528-2114.jpg?w=826'},
            {name: "Mary", id: 6, avatar: 'https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?w=1380&t=st=1694099265~exp=1694099865~hmac=974d8d37969ead912acc55ddc9c6bc77764a10039d02f05c8eaafd1344bd2e8d'},
        ],
        messages: [
            {id: 1, message: 'Hello bro'},
            {id: 2, message: 'love you'},
            {id: 3, message: ':C'},
            {id: 4, message: '...'},
            {id: 5, message: 'what are you..?'},
            {id: 6, message: ':DD'},
        ],
    },
    sidebar: {}


}

export default state
console.log(state)