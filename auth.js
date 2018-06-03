import { AsyncStorage } from "react-native";

    let state = {};

export const onSignIn = async (username, userId, token) => {
    console.log("+++ 6 auth.js Here")
    AsyncStorage.setItem('username', username.toString());
    AsyncStorage.setItem('token', token.toString());
    AsyncStorage.setItem('userId', userId.toString());
    AsyncStorage.setItem('signedIn', 'true');
    state = {
        username: username,
        userId: userId,
        token: token
    }
    return true;
};

export const onSignOut = () => {
    AsyncStorage.removeItem('username');
    AsyncStorage.removeItem('token');
    AsyncStorage.removeItem('userId');
    AsyncStorage.removeItem('signedIn');
    return true;
};

export const isSignedIn = () => {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem('signedIn')
            .then(res => {
                if (res !== null) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            })
            .catch(err => reject(err));
    });
};

export const fetchData = async () => {
    return {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        userid: state.userId,
    }
}
