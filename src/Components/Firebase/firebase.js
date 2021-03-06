import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/analytics';
import 'firebase/performance';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
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
    this.performance = app.performance();

    /* Social Sign In Method Provider */
    this.googleProvider = new app.auth.GoogleAuthProvider();
    this.facebookProvider = new app.auth.FacebookAuthProvider();
    this.twitterProvider = new app.auth.TwitterAuthProvider();
  }

  // *** Auth API ***
  doCreateUserWithEmailAndPassword = (email, password) => {
    this.analytics.logEvent("Created A New User Using Email & Pass");
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  doSignInWithEmailAndPassword = (email, password) => {
    this.analytics.logEvent("User Logged In Using Email & Pass");
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  doSignInWithGoogle = () => {
    this.analytics.logEvent("User Logged In Using Google");
    return this.auth.signInWithPopup(this.googleProvider);
  }

  doSignInWithFacebook = () => this.auth.signInWithPopup(this.facebookProvider);

  doSignInWithTwitter = () => this.auth.signInWithPopup(this.twitterProvider);

  doSignOut = () => {
    this.analytics.logEvent("User Logged Out");
    return this.auth.signOut();
  }

  doPasswordReset = (email) => {
    this.analytics.logEvent("User Tried To Rest Their Password");
    return this.auth.sendPasswordResetEmail(email);
  }

  doPasswordUpdate = (password) => {
    this.analytics.logEvent("User Changed Their Password");
    return this.auth.currentUser.updatePassword(password);
  }

  doSendEmailVerification = () =>{
    this.analytics.logEvent("Email Verification Sent");
    return this.auth.currentUser.sendEmailVerification({
      url: process.env.REACT_APP_CONFIRMATION_EMAIL_REDIRECT || "http://localhost:3000/",
    });
  }

  // *** Merge Auth and DB User API *** //
  onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged((authUser) => {
      // console.log(authUser)
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
  user = (uid) => {
    this.analytics.logEvent("Referencing A User's Data");
    return this.db.ref(`users/${uid}`);
  }
  users = () => {
    this.analytics.logEvent("Referencing List Of Users");
    this.db.ref("users");
  }

  // *** Badge API ***
  badge = (uid) => {
    this.analytics.logEvent("Referencing A Badge's Data");
    return this.db.ref(`badges/${uid}`);
  }
  badges = () => {
    this.analytics.logEvent("Referencing List Of Badges");
    return this.db.ref("badges");
  }

  doAwardBadge = (userID, userName, badgeID, badgeName) => {
    console.log(`User: ${userID} Submitted a Badge Request for ${badgeName} ID: ${badgeID}`);

    return this.db
      .ref("users/" + userID + "/badges/")
      .child(badgeName)
      .set(badgeID);
    // this.badge(badgeID).child("winners").child(userName).set(userID);
    // this.db.ref('badges/' + badgeID + '/winners/').child(userName).set({userID});
  };

  // *** Analytics API ****
  doAnalyzeNotification = () => this.analytics.logEvent("notification_received");
}

export default Firebase;
