export const logIn = (name: string) => {
    window.localStorage.setItem('name', name)
}

export const user = () => {
    if (!isAuth()) return null
    return window.localStorage.getItem('name')
}

export const isAuth = () => {
    return !!window.localStorage.getItem('name')
}

export const logOut = (name: string) => {
    window.localStorage.removeItem('name')
}

(window as any).logout = logOut;
