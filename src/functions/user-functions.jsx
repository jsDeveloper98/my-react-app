import firebase from "../config/firebase";
const db = firebase.firestore();

const createUser = (email, password, fistName, lastName, country) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      createFirestoreUser(email, fistName, lastName, country);
      console.log(user);
    })
    .catch((err) => {
      console.log(err);
    });
};

const createFirestoreUser = (email, fistName, lastName, country) => {
  db.collection("users").add({
    email,
    fistName,
    lastName,
    country,
    createdAt: new Date(),
  });
};

export { createUser };
