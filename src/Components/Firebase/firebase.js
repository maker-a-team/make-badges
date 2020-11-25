import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/analytics';


// const config = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
// };


const config = {
  apiKey: "AIzaSyBpxbPor7YSFc5J6q0lw79CVXYYAjLvlos",
  authDomain: "makeschoolbadges.firebaseapp.com",
  databaseURL: "https://makeschoolbadges.firebaseio.com",
  projectId: "makeschoolbadges",
  storageBucket: "makeschoolbadges.appspot.com",
  messagingSenderId: "360872796104",
  appId: "1:360872796104:web:7692a1e1e0c89e77c16afd",
  measurementId: "G-0F7RZM57QH",
};


class Firebase {
  constructor() {
    app.initializeApp(config);

    /* Helper */
    this.serverValue = app.database.ServerValue;
    this.emailAuthProvider = app.auth.EmailAuthProvider;

    /* Firebase APIs */
    this.auth = app.auth();
    this.db = app.database();
    this.storage = app.storage();
    this.analytics = app.analytics();

    /* Social Sign In Method Provider */
    this.googleProvider = new app.auth.GoogleAuthProvider();
    this.facebookProvider = new app.auth.FacebookAuthProvider();
    this.twitterProvider = new app.auth.TwitterAuthProvider();
  }


  // *** Auth API ***
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignInWithGoogle = () => this.auth.signInWithPopup(this.googleProvider);

  doSignInWithFacebook = () => this.auth.signInWithPopup(this.facebookProvider);

  doSignInWithTwitter = () => this.auth.signInWithPopup(this.twitterProvider);

  doSignOut = () => this.auth.signOut()

  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = (password) =>
    this.auth.currentUser.updatePassword(password);

  doSendEmailVerification = () =>
    this.auth.currentUser.sendEmailVerification({
      url:
        process.env.REACT_APP_CONFIRMATION_EMAIL_REDIRECT ||
        "http://localhost:3000/",
    });


  // *** Merge Auth and DB User API *** //
  onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        this.user(authUser.uid)
          .once("value")
          .then((snapshot) => {
            const dbUser = snapshot.val();

            // default empty roles
            if (!dbUser.roles) {
              dbUser.roles = {};
            }

            // merge auth and db user
            authUser = {
              uid: authUser.uid,
              email: authUser.email,
              emailVerified: authUser.emailVerified,
              providerData: authUser.providerData,
              ...dbUser,
            };

            next(authUser);
          });
      } else {
        fallback();
      }
    });


  // *** User API ***
  user = (uid) => this.db.ref(`users/${uid}`);
  users = () => this.db.ref("users");


  // *** Badge API ***
  badge = (uid) => this.db.ref(`badges/${uid}`);
  badges = () => this.db.ref("badges");

  doAwardBadge = (userID, badgeID, badgeName) => {
    // var updates = {};
    // updates["/users/" + userID + "/awardsEarned/"] = badgeID;
    // updates["/badges/" + badgeID + "/winners/"] = userID;

    console.log("User: " + userID + " Submitted a Badge Request for ID: " + badgeID);
    // return this.db.ref().update(updates);
    return this.db.ref("users/" + userID).child("awardsEarned").set("fuckt this shit");
  }
}

export default Firebase;
