export const AuthProvider = {
    authenticated: false,
    username: '',
    signIn: (username, password, callback) => {
        if (username === 'user' && password === 'password') {
            AuthProvider.authenticated = true
            AuthProvider.username = username;
            setTimeout(() => {
                callback('success')
            }, 500)
        } else {
            setTimeout(() => {
                callback('niepoprawne dane logowania')
            }, 500)
        }
    },
    signOut: (callback) => {
        AuthProvider.authenticated = false;
        setTimeout(callback, 500);
    }
}