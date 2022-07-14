export type PostType = {
    id?: number
    message: string
    likesCount: number
}

export type DialogItemType = {
    id: number
    name: string
    link: string
}

export type MessageType = {
    id?: number
    message: string
}

export type FriendType = {
    id: number
    name: string
    link: string
}


export type ProfilePageType = {
    posts: Array<PostType>
}

export type DialogsPageType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: Array<FriendType>
}


let state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 11},
            {id: 3, message: 'Blabla', likesCount: 11},
            {id: 4, message: 'Dada', likesCount: 11}
        ]
    },
    dialogsPage: {
        dialogs: [
            {
                id: 1,
                name: 'Dimych',
                link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6vjzwZaBf6bKmbl7I00WbZ9RPOlriawksgQ&usqp=CAU"
            },
            {
                id: 2,
                name: 'Andrey',
                link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6vjzwZaBf6bKmbl7I00WbZ9RPOlriawksgQ&usqp=CAU"
            },
            {
                id: 3,
                name: 'Sveta',
                link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6vjzwZaBf6bKmbl7I00WbZ9RPOlriawksgQ&usqp=CAU"
            },
            {
                id: 4,
                name: 'Sasha',
                link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6vjzwZaBf6bKmbl7I00WbZ9RPOlriawksgQ&usqp=CAU"
            },
            {
                id: 5,
                name: 'Viktor',
                link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6vjzwZaBf6bKmbl7I00WbZ9RPOlriawksgQ&usqp=CAU"
            },
            {
                id: 6,
                name: 'Valera',
                link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6vjzwZaBf6bKmbl7I00WbZ9RPOlriawksgQ&usqp=CAU"
            }
        ],
        messages: [
            {id: 1, message: 'How is your it-kamasutra?'},
            {id: 2, message: 'Yo'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'}
        ]
    },
    sidebar: [
        {
            id: 1,
            name: 'Dimych',
            link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6vjzwZaBf6bKmbl7I00WbZ9RPOlriawksgQ&usqp=CAU"
        },
        {
            id: 2,
            name: 'Andrey',
            link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6vjzwZaBf6bKmbl7I00WbZ9RPOlriawksgQ&usqp=CAU"
        },
        {
            id: 3,
            name: 'Sveta',
            link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6vjzwZaBf6bKmbl7I00WbZ9RPOlriawksgQ&usqp=CAU"
        }
    ]
}

export const addPost = (postText: string) => {
    const newPost: PostType = {
        id: new Date().getTime(),
        message: postText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
}

export default state;