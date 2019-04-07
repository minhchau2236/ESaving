
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { auth } from '../../firebase';
import userService from '../../services/user.service';
import {
    LOGIN_USER,
    REGISTER_USER,
    LOGOUT_USER
} from 'Constants/actionTypes';

import {
    loginUserSuccess,
    registerUserSuccess
} from './actions';

const loginWithUsernamePasswordAsync = async (username, password) =>
    await userService.login(username, password);
        // .then(authUser => { 
        //   return authUser; })
        // .catch(error => error);



function* loginWithUsernamePassword({ payload }) {
    const { username, password } = payload.user;
    const { history } = payload;
    try {
        const loginUser = yield call(loginWithUsernamePasswordAsync, username, password);
        if (loginUser.token) {
            localStorage.setItem('user',  JSON.stringify(loginUser));
            yield put(loginUserSuccess(loginUser));
            history.push('/');
        } else {
            // catch throw
            console.log('login failed :', loginUser.message)
        }
    } catch (error) {
        // catch throw
        console.log('login error : ', error)
    }
}

const registerWithUsernamePasswordAsync = async (username, password) =>
    await auth.createUserWithUsernameAndPassword(username, password)
        .then(authUser => authUser)
        .catch(error => error);

function* registerWithUsernamePassword({ payload }) {
    const { username, password } = payload.user;
    const { history } = payload
    try {
        const registerUser = yield call(registerWithUsernamePasswordAsync, username, password);
        if (!registerUser.message) {
            localStorage.setItem('user_id', registerUser.user.uid);
            yield put(registerUserSuccess(registerUser));
            history.push('/')
        } else {
            // catch throw
            console.log('register failed :', registerUser.message)
        }
    } catch (error) {
        // catch throw
        console.log('register error : ', error)
    }
}



const logoutAsync = async (history) => {
    await auth.signOut().then(authUser => authUser).catch(error => error);
    history.push('/')
}

function* logout({payload}) {
    const { history } = payload
    try {
        yield call(logoutAsync,history);
        localStorage.removeItem('user_id');
    } catch (error) {
    }
}



export function* watchRegisterUser() {
    yield takeEvery(REGISTER_USER, registerWithUsernamePassword);
}

export function* watchLoginUser() {
    yield takeEvery(LOGIN_USER, loginWithUsernamePassword);
}

export function* watchLogoutUser() {
    yield takeEvery(LOGOUT_USER, logout);
}


export default function* rootSaga() {
    yield all([
        fork(watchLoginUser),
        fork(watchLogoutUser),
        fork(watchRegisterUser)
    ]);
}