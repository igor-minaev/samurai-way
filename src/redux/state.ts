export type PostType = {
    id?: string
    message: string
    likesCount: number
}
export type DialogItemType = {
    id: string
    name: string
}

export type MessageType = {
    id?: string
    message: string
}
export type ProfilePageType = {
    posts: PostType[]
}
export type DialogsPageType = {
    dialogs: DialogItemType[]
    messages: MessageType[]
}
export type SideBarType = {
    friends: DialogItemType[]
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sideBar: SideBarType
}

export const state: StateType = {
    profilePage: {
        posts: [
            {id: '1', message: 'Hi, how are you', likesCount: 10},
            {id: '2', message: 'It\'s my first post', likesCount: 4}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: '1', name: 'Dimych'},
            {id: '2', name: 'Andrey'},
            {id: '3', name: 'Sveta'},
            {id: '4', name: 'Sasha'},
            {id: '5', name: 'Viktor'},
            {id: '6', name: 'Valera'}
        ],
        messages: [
            {id: '1', message: 'Hi'},
            {id: '2', message: 'Hello, friend'},
            {id: '3', message: 'Yo'}
        ]
    },
    sideBar: {
        friends: [
            {id: '1', name: 'Dimych'},
            {id: '2', name: 'Andrey'},
            {id: '3', name: 'Sveta'}
        ]
    }
}

export const addPost = (message: string) => {
    const newPost: PostType = {
        id: '5',
        message,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
}