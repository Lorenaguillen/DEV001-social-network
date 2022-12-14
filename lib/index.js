/* eslint-disable import/no-unresolved */
// funciones puras//
import {
  getAuth, createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider, signInWithPopup,
  onAuthStateChanged, updateProfile,
} from 'firebase/auth';

import {
  collection, addDoc, onSnapshot, deleteDoc, doc, updateDoc, getDoc,
} from 'firebase/firestore';
import { app, db } from './Firebase.js';
// updateDoc,
// GETUTH
export const auth = getAuth(app);
// eslint-disable-next-line max-len
export const formularioregistro = (email, password) => createUserWithEmailAndPassword(auth, email, password);
// eslint-disable-next-line max-len
export const formulariologin = (email, password) => signInWithEmailAndPassword(auth, email, password);

const provider = new GoogleAuthProvider(app);
export const formularioGoogle = () => signInWithPopup(auth, provider);

export const createPost = (postUs, idUs, nameUs, like) => addDoc(collection(db, 'postMusic'), {
  post: postUs,
  id: idUs,
  name: nameUs,
  like: [like],
});
export const onGetTasks = (callback) => onSnapshot(collection(db, 'postMusic'), callback);
export const deleteTasks = (id) => deleteDoc(doc(db, 'postMusic', id));
export const updateTask = (id, newFields) => updateDoc(doc(db, 'postMusic', id), newFields);
export const signOut = () => auth.signOut();
export const viewUser = (user) => onAuthStateChanged(auth, user);
export const updateUser = (nombre, imgPerfil) => updateProfile(auth.currentUser, {
  displayName: nombre, photoURL: imgPerfil,
});
export const onGetTask = (id) => getDoc(doc(db, 'postMusic', id));
