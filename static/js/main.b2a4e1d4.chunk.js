(this["webpackJsonpmake-badges"]=this["webpackJsonpmake-badges"]||[]).push([[0],{37:function(e,t,a){e.exports=a.p+"static/media/logo-white.759f6c70.svg"},42:function(e,t,a){e.exports=a(63)},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},54:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(36),i=a.n(o);a(47),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(9),l=a(7),c=(a(48),a(49),a(37)),u=a.n(c);var d=function(){return r.a.createElement("header",{className:"Header"},r.a.createElement("img",{src:u.a,className:"nav-logo",alt:"logo"}),r.a.createElement("div",{className:"nav-items"},r.a.createElement(s.c,{className:"nav-link",activeClassName:"nav-link-active",exact:!0,to:"/badges"},"List"),r.a.createElement(s.c,{className:"nav-link",activeClassName:"nav-link-active",to:"/about"},"About"),r.a.createElement(s.c,{className:"nav-link",activeClassName:"nav-link-active",exact:!0,to:"/account"},"My Account"),r.a.createElement(s.c,{className:"nav-link",activeClassName:"nav-link-active",exact:!0,to:"/signin"},"Sign in")))};a(54);var m=function(){var e=(new Date).getFullYear();return r.a.createElement("div",{className:"Footer"},r.a.createElement("footer",null,r.a.createElement("div",{className:"Footer-Subtitle"},r.a.createElement("h3",null,"Make School A-Team Copyright ",e))))},p=a(8),h=a(6),g=a(2),f=a(3),b=a(4),v=a(5),E=a(10),y=r.a.createContext(null),w=function(e){return function(t){return r.a.createElement(y.Consumer,null,(function(a){return r.a.createElement(e,Object.assign({},t,{firebase:a}))}))}},S=y,C=a(13),O=a.n(C),k=(a(56),a(58),{apiKey:"AIzaSyBpxbPor7YSFc5J6q0lw79CVXYYAjLvlos",authDomain:"makeschoolbadges.firebaseapp.com",databaseURL:"https://makeschoolbadges.firebaseio.com",projectId:"makeschoolbadges",storageBucket:"makeschoolbadges.appspot.com",messagingSenderId:"360872796104",appId:"1:360872796104:web:7692a1e1e0c89e77c16afd",measurementId:"G-0F7RZM57QH"}),j=function e(){var t=this;Object(g.a)(this,e),this.doCreateUserWithEmailAndPassword=function(e,a){return t.auth.createUserWithEmailAndPassword(e,a)},this.doSignInWithEmailAndPassword=function(e,a){return t.auth.signInWithEmailAndPassword(e,a)},this.doSignInWithGoogle=function(){return t.auth.signInWithPopup(t.googleProvider)},this.doSignInWithFacebook=function(){return t.auth.signInWithPopup(t.facebookProvider)},this.doSignInWithTwitter=function(){return t.auth.signInWithPopup(t.twitterProvider)},this.doSignOut=function(){return t.auth.signOut()},this.doPasswordReset=function(e){return t.auth.sendPasswordResetEmail(e)},this.doSendEmailVerification=function(){return t.auth.currentUser.sendEmailVerification({url:Object({NODE_ENV:"production",PUBLIC_URL:"/make-badges",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_CONFIRMATION_EMAIL_REDIRECT||"http://localhost:3000/"})},this.doPasswordUpdate=function(e){return t.auth.currentUser.updatePassword(e)},this.onAuthUserListener=function(e,a){return t.auth.onAuthStateChanged((function(n){n?t.user(n.uid).once("value").then((function(t){var a=t.val();a.roles||(a.roles={}),n=Object(h.a)({uid:n.uid,email:n.email,emailVerified:n.emailVerified,providerData:n.providerData},a),e(n)})):a()}))},this.user=function(e){return t.db.ref("users/".concat(e))},this.users=function(){return t.db.ref("users")},this.badge=function(e){return t.db.ref("badges/".concat(e))},this.badges=function(){return t.db.ref("badges")},O.a.initializeApp(k),this.serverValue=O.a.database.ServerValue,this.emailAuthProvider=O.a.auth.EmailAuthProvider,this.auth=O.a.auth(),this.db=O.a.database(),this.googleProvider=new O.a.auth.GoogleAuthProvider,this.facebookProvider=new O.a.auth.FacebookAuthProvider,this.twitterProvider=new O.a.auth.TwitterAuthProvider},B={username:"",email:"",passwordOne:"",passwordTwo:"",isAdmin:!1,error:null},N=function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){var t=n.state,a=t.username,r=t.email,o=t.passwordOne,i=t.isAdmin,s={};i&&(s.Priority="ADMIN"),n.props.firebase.doCreateUserWithEmailAndPassword(r,o).then((function(e){return e.user.updateProfile({displayName:a,photoURL:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fctorthopaedic.com%2Fhome%2Fprofile-silhouette%2F&psig=AOvVaw030D0jVKxOxcwnfD2cJLwD&ust=1601667943801000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOCK1ZiUlOwCFQAAAAAdAAAAABAD"}),n.props.firebase.user(e.user.uid).set({username:a,email:r,roles:s})})).then((function(){return n.props.firebase.doSendEmailVerification()})).then((function(){n.setState(Object(h.a)({},B)),n.props.history.push("/")})).catch((function(e){"auth/email-already-in-use"===e.code&&(e.message="\n  An account with this E-Mail address already exists.\n  Try to login with this account instead. If you think the\n  account is already used from one of the social logins, try\n  to sign in with one of them. Afterward, associate your accounts\n  on your personal account page.\n"),n.setState({error:e})})),e.preventDefault()},n.validate=function(e){return/\S+@makeschool.com/.test(String(e).toLowerCase())?(n.isAdmin=!0,!0):/\S+@students.makeschool.com/.test(String(e).toLowerCase())||/\S+@students.dominican.edu/.test(String(e).toLowerCase())},n.onChange=function(e){n.setState(Object(p.a)({},e.target.name,e.target.value))},n.onChangeCheckbox=function(e){n.setState(Object(p.a)({},e.target.name,e.target.checked))},n.state=Object(h.a)({},B),n}return Object(f.a)(a,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.email,n=e.passwordOne,o=e.passwordTwo,i=e.validEmail,s=void 0===i?this.validate(a):i,l=e.error,c=n!==o||""===n||""===a||!s||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"username",autoComplete:"username",value:t,onChange:this.onChange,type:"text",placeholder:"Full Name"}),r.a.createElement("input",{name:"email",autoComplete:"email",value:a,onChange:this.onChange,type:"text",placeholder:"Email Address"}),r.a.createElement("input",{name:"passwordOne",autoComplete:"new-password",value:n,onChange:this.onChange,type:"password",placeholder:"Password"}),r.a.createElement("input",{name:"passwordTwo",autoComplete:"new-password",value:o,onChange:this.onChange,type:"password",placeholder:"Confirm Password"}),r.a.createElement("button",{disabled:c,type:"submit"},"Sign Up"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),l&&r.a.createElement("p",null,l.message))}}]),a}(n.Component),A=function(){return r.a.createElement("p",null,"Don't have an account? ",r.a.createElement(s.b,{to:"/signUp"},"Sign Up"))},I=Object(E.a)(l.f,w)(N),P=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"SignUp"),r.a.createElement(I,null))},M={email:"",error:null},U=function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){var t=n.state.email;n.props.firebase.doPasswordReset(t).then((function(){n.setState(Object(h.a)({},M))})).catch((function(e){n.setState({error:e})})),e.preventDefault()},n.onChange=function(e){n.setState(Object(p.a)({},e.target.name,e.target.value))},n.state=Object(h.a)({},M),n}return Object(f.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.error,n=""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"email",autoComplete:"email",value:this.state.email,onChange:this.onChange,type:"text",placeholder:"Email Address"}),r.a.createElement("button",{disabled:n,type:"submit"},"Reset My Password"),a&&r.a.createElement("p",null,a.message))}}]),a}(n.Component),L=function(){return r.a.createElement("p",null,r.a.createElement(s.b,{to:"/forgotPassword"},"Forgot Password?"))},x=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"PasswordForget"),r.a.createElement(D,null))},D=w(U),T={email:"",password:"",error:null},R="\n  An account with an E-Mail address to\n  this social account already exists. Try to login from\n  this account instead and associate your social accounts on\n  your personal account page.\n",W=function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){var t=n.state,a=t.email,r=t.password;n.props.firebase.doSignInWithEmailAndPassword(a,r).then((function(){n.setState(Object(h.a)({},T)),n.props.history.push("/")})).catch((function(e){n.setState({error:e})})),e.preventDefault()},n.onChange=function(e){n.setState(Object(p.a)({},e.target.name,e.target.value))},n.state=Object(h.a)({},T),n}return Object(f.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,n=e.error,o=""===a||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"email",value:t,autoComplete:"email",onChange:this.onChange,type:"text",placeholder:"Email Address"}),r.a.createElement("input",{name:"password",autoComplete:"current-password",value:a,onChange:this.onChange,type:"password",placeholder:"Password"}),r.a.createElement("button",{disabled:o,type:"submit"},"Sign In"),n&&r.a.createElement("p",null,n.message))}}]),a}(n.Component),F=function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){n.props.firebase.doSignInWithGoogle().then((function(e){return n.props.firebase.user(e.user.uid).set({username:e.user.displayName,email:e.user.email,roles:{}})})).then((function(){n.setState({error:null}),n.props.history.push("/")})).catch((function(e){"auth/account-exists-with-different-credential"===e.code&&(e.message=R),n.setState({error:e})})),e.preventDefault()},n.state={error:null},n}return Object(f.a)(a,[{key:"render",value:function(){var e=this.state.error;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("button",{type:"submit"},"Sign In with Google"),e&&r.a.createElement("p",null,e.message))}}]),a}(n.Component),V=function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){n.props.firebase.doSignInWithFacebook().then((function(e){return n.props.firebase.user(e.user.uid).set({username:e.additionalUserInfo.profile.name,email:e.additionalUserInfo.profile.email,roles:{}})})).then((function(){n.setState({error:null}),n.props.history.push("/")})).catch((function(e){"auth/account-exists-with-different-credential"===e.code&&(e.message=R),n.setState({error:e})})),e.preventDefault()},n.state={error:null},n}return Object(f.a)(a,[{key:"render",value:function(){var e=this.state.error;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("button",{type:"submit"},"Sign In with Facebook"),e&&r.a.createElement("p",null,e.message))}}]),a}(n.Component),_=function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){n.props.firebase.doSignInWithTwitter().then((function(e){return n.props.firebase.user(e.user.uid).set({username:e.additionalUserInfo.profile.name,email:e.additionalUserInfo.profile.email,roles:{}})})).then((function(){n.setState({error:null}),n.props.history.push("/")})).catch((function(e){"auth/account-exists-with-different-credential"===e.code&&(e.message=R),n.setState({error:e})})),e.preventDefault()},n.state={error:null},n}return Object(f.a)(a,[{key:"render",value:function(){var e=this.state.error;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("button",{type:"submit"},"Sign In with Twitter"),e&&r.a.createElement("p",null,e.message))}}]),a}(n.Component),Y=Object(E.a)(l.f,w)(W),J=(Object(E.a)(l.f,w)(F),Object(E.a)(l.f,w)(V),Object(E.a)(l.f,w)(_),function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"SignIn"),r.a.createElement(Y,null),r.a.createElement(L,null),r.a.createElement(A,null))}),K={passwordOne:"",passwordTwo:"",error:null},G=function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){var t=n.state.passwordOne;n.props.firebase.doPasswordUpdate(t).then((function(){n.setState(Object(h.a)({},K))})).catch((function(e){n.setState({error:e})})),e.preventDefault()},n.onChange=function(e){n.setState(Object(p.a)({},e.target.name,e.target.value))},n.state=Object(h.a)({},K),n}return Object(f.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.passwordOne,n=e.passwordTwo,o=e.error,i=a!==n||""===a;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{hidden:!0,name:"email",autoComplete:"email",value:t,type:"text",placeholder:"Email Address"}),r.a.createElement("input",{name:"passwordOne",autoComplete:"new-password",value:a,onChange:this.onChange,type:"password",placeholder:"New Password"}),r.a.createElement("input",{name:"passwordTwo",autoComplete:"new-password",value:n,onChange:this.onChange,type:"password",placeholder:"Confirm New Password"}),r.a.createElement("button",{disabled:i,type:"submit"},"Reset My Password"),o&&r.a.createElement("p",null,o.message))}}]),a}(n.Component),H=w(G),Q=a(15),q=a(17),z=w((function(e){var t=e.firebase;return r.a.createElement("button",{type:"button",className:"btn btn-primary nav-item nav-link",onClick:t.doSignOut},r.a.createElement(q.a,{icon:Q.b}))}));var Z=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"About MakeBadges"),r.a.createElement("p",null,"First Project of the Make School A-Team to provide achievement awards/badges to students to help gain interest in a variety of topics."))},X=r.a.createContext(null),$=function(e){var t=function(t){Object(v.a)(n,t);var a=Object(b.a)(n);function n(e){var t;return Object(g.a)(this,n),(t=a.call(this,e)).state={authUser:JSON.parse(localStorage.getItem("authUser"))},t}return Object(f.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.listener=this.props.firebase.onAuthUserListener((function(t){localStorage.setItem("authUser",JSON.stringify(t)),e.setState({authUser:t})}),(function(){localStorage.removeItem("authUser"),e.setState({authUser:null})}))}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){return r.a.createElement(X.Provider,{value:this.state.authUser},r.a.createElement(e,this.props))}}]),n}(r.a.Component);return w(t)},ee=function(e){return function(t){var a=function(a){Object(v.a)(o,a);var n=Object(b.a)(o);function o(){return Object(g.a)(this,o),n.apply(this,arguments)}return Object(f.a)(o,[{key:"componentDidMount",value:function(){var t=this;this.listener=this.props.firebase.onAuthUserListener((function(a){e(a)||t.props.history.push("/signIn")}),(function(){return t.props.history.push("/signIn")}))}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){var a=this;return r.a.createElement(X.Consumer,null,(function(n){return e(n)?r.a.createElement(t,a.props):null}))}}]),o}(r.a.Component);return Object(E.a)(l.f,w)(a)}},te=a(41),ae=function(e){var t=function(t){Object(v.a)(n,t);var a=Object(b.a)(n);function n(e){var t;return Object(g.a)(this,n),(t=a.call(this,e)).onSendEmailVerification=function(){t.props.firebase.doSendEmailVerification().then((function(){return t.setState({isSent:!0})}))},t.state={isSent:!1},t}return Object(f.a)(n,[{key:"render",value:function(){var t=this;return r.a.createElement(X.Consumer,null,(function(a){return function(e){return e&&!e.emailVerified&&e.providerData.map((function(e){return e.providerId})).includes("password")}(a)?r.a.createElement("div",null,t.state.isSent?r.a.createElement("p",null,"E-Mail confirmation sent: Check your E-Mails (Spam folder included) for a confirmation E-Mail. Refresh this page once you confirmed your E-Mail."):r.a.createElement("p",null,"Verify your E-Mail: Check your E-Mails (Spam folder included) for a confirmation E-Mail or send another confirmation E-Mail."),r.a.createElement(te.a,{type:"button btn-primary",onClick:t.onSendEmailVerification,disabled:t.state.isSent},"Send confirmation E-Mail")):r.a.createElement(e,t.props)}))}}]),n}(r.a.Component);return w(t)},ne=[{id:"password",provider:null},{id:"google.com",provider:"googleProvider"},{id:"facebook.com",provider:"facebookProvider"},{id:"twitter.com",provider:"twitterProvider"}],re=function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this,e)).fetchSignInMethods=function(){n.props.firebase.auth.fetchSignInMethodsForEmail(n.props.authUser.email).then((function(e){return n.setState({activeSignInMethods:e,error:null})})).catch((function(e){return n.setState({error:e})}))},n.onSocialLoginLink=function(e){n.props.firebase.auth.currentUser.linkWithPopup(n.props.firebase[e]).then(n.fetchSignInMethods).catch((function(e){return n.setState({error:e})}))},n.onDefaultLoginLink=function(e){var t=n.props.firebase.emailAuthProvider.credential(n.props.authUser.email,e);n.props.firebase.auth.currentUser.linkAndRetrieveDataWithCredential(t).then(n.fetchSignInMethods).catch((function(e){return n.setState({error:e})}))},n.onUnlink=function(e){n.props.firebase.auth.currentUser.unlink(e).then(n.fetchSignInMethods).catch((function(e){return n.setState({error:e})}))},console.log(e.authUser),n.state={activeSignInMethods:[],error:null},n}return Object(f.a)(a,[{key:"componentDidMount",value:function(){this.fetchSignInMethods()}},{key:"render",value:function(){var e=this,t=this.state,a=t.activeSignInMethods,n=t.error;return r.a.createElement("div",null,"Sign In Methods:",r.a.createElement("ul",null,ne.map((function(t){var n=1===a.length,o=a.includes(t.id);return r.a.createElement("li",{key:t.id},"password"===t.id?r.a.createElement(ie,{onlyOneLeft:n,isEnabled:o,signInMethod:t,onLink:e.onDefaultLoginLink,onUnlink:e.onUnlink}):r.a.createElement(oe,{onlyOneLeft:n,isEnabled:o,signInMethod:t,onLink:e.onSocialLoginLink,onUnlink:e.onUnlink}))}))),n&&n.message)}}]),a}(n.Component),oe=function(e){var t=e.onlyOneLeft,a=e.isEnabled,n=e.signInMethod,o=e.onLink,i=e.onUnlink;return a?r.a.createElement("button",{type:"button",className:"btn btn-primary btn-social",onClick:function(){return i(n.id)},disabled:t},"Deactivate ",n.id):r.a.createElement("button",{type:"button",className:"btn btn-primary btn-social",onClick:function(){return o(n.provider)}},"Link ",n.id)},ie=function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){e.preventDefault(),n.props.onLink(n.state.passwordOne),n.setState({passwordOne:"",passwordTwo:""})},n.onChange=function(e){n.setState(Object(p.a)({},e.target.name,e.target.value))},n.state={passwordOne:"",passwordTwo:""},n}return Object(f.a)(a,[{key:"render",value:function(){var e=this.props,t=e.onlyOneLeft,a=e.isEnabled,n=e.signInMethod,o=e.onUnlink,i=this.state,s=i.email,l=i.passwordOne,c=i.passwordTwo,u=l!==c||""===l;return a?r.a.createElement("button",{type:"button",className:"btn btn-danger btn-social  disabled",onClick:function(){return o(n.id)},disabled:t},"Deactivate ",n.id):r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{hidden:!0,name:"email",autoComplete:"email",value:s,type:"text",placeholder:"Email Address"}),r.a.createElement("input",{name:"passwordOne",autoComplete:"new-password",value:l,onChange:this.onChange,type:"password",placeholder:"New Password"}),r.a.createElement("input",{name:"passwordTwo",autoComplete:"new-password",value:c,onChange:this.onChange,type:"password",placeholder:"Confirm New Password"}),r.a.createElement("button",{className:"btn btn-primary",disabled:u,type:"submit"},"Link ",n.id))}}]),a}(n.Component),se=w(re),le=Object(E.a)(ae,ee((function(e){return!!e})))((function(){return r.a.createElement(X.Consumer,null,(function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"Account: ",e.email),"Forgot Your Password?  ",r.a.createElement(D,null),"Reset Your Password.   ",r.a.createElement(H,null),r.a.createElement(se,{authUser:e}),r.a.createElement(z,null))}))})),ce=(a(62),a(20)),ue=function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this,e)).onToggleEditMode=function(){n.setState((function(e){return{editMode:!e.editMode,editBadgeCategory:n.props.badge.category,editBadgeDescription:n.props.badge.description,editBadgeImage:n.props.badge.image,editBadgeLink:n.props.badge.link,editBadgeName:n.props.badge.name}}))},n.onChangeEditBadge=function(e){n.setState(Object(p.a)({},e.target.name,e.target.value))},n.onSaveEditBadge=function(){n.props.onEditBadge(n.props.badge,n.state.editBadgeCategory,n.state.editBadgeDescription,n.state.editBadgeImage,n.state.editBadgeLink,n.state.editBadgeName),n.setState({editMode:!1})},n.state={editMode:!1,editBadgeCategory:n.props.badge.category,editBadgeDescription:n.props.badge.description,editBadgeImage:n.props.badge.image,editBadgeLink:n.props.badge.link,editBadgeName:n.props.badge.name},n}return Object(f.a)(a,[{key:"render",value:function(){var e=this.props,t=e.authUser,a=e.badge,n=e.onRemoveBadge,o=this.state,i=o.editMode,l=o.editBadgeCategory,c=o.editBadgeDescription,u=o.editBadgeImage,d=o.editBadgeLink,m=o.editBadgeName;return r.a.createElement("li",{key:a.uid,className:"row"},i?r.a.createElement("div",{className:"text-center"},r.a.createElement("input",{type:"text",className:"form-control form-input col-10",placeholder:"Name Your Badge!",value:m,name:"editBadgeName",onChange:this.onChangeEditBadge}),r.a.createElement("input",{type:"text",className:"form-control form-input col-10",placeholder:"Badge's Category?",value:l,name:"editBadgeCategory",onChange:this.onChangeEditBadge}),r.a.createElement("input",{type:"text",className:"form-control form-input col-10",placeholder:"Badge's Description?",value:c,name:"editBadgeDescription",onChange:this.onChangeEditBadge}),r.a.createElement("input",{type:"text",className:"form-control form-input col-10",placeholder:"Badge's Image URL?",value:u,name:"editBadgeImage",onChange:this.onChangeEditBadge}),r.a.createElement("input",{type:"text",className:"form-control form-input col-10",placeholder:"Badge's Badgr Link?",value:d,name:"editBadgeLink",onChange:this.onChangeEditBadge})):r.a.createElement("div",{className:"Badge col-10"},r.a.createElement("strong",null,"category: ")," ",a.category,r.a.createElement("br",null),r.a.createElement("strong",null,"name: ")," ",a.name,r.a.createElement("br",null),r.a.createElement("strong",null,"description: ")," ",a.description,r.a.createElement("br",null),r.a.createElement("img",{className:"Badge-image",src:"".concat("/make-badges","images/").concat(a.image),alt:"badge"}),r.a.createElement("br",null),r.a.createElement(s.b,{to:{pathname:"".concat("/badges","/").concat(a.uid),state:{badge:a}}},"Details"),r.a.createElement("p",{className:"comp-item"},r.a.createElement("sub",null,a.editedAt&&r.a.createElement("span",null,"(Edited)"))),r.a.createElement("hr",null)),t.uid===a.ownerID&&r.a.createElement("div",{className:""},i?r.a.createElement("div",{className:"justify-me"},r.a.createElement("button",{className:"btn btn-secondary btn-bot",onClick:this.onSaveEditBadge},"Save Changes"),r.a.createElement("button",{className:"btn btn-secondary btn-bot",onClick:this.onToggleEditMode},"Cancel Edit")):r.a.createElement("div",null,r.a.createElement("button",{className:"btn-li",onClick:this.onToggleEditMode},r.a.createElement(q.a,{icon:Q.a})),r.a.createElement("button",{className:"btn-li",onClick:function(){return n(a.uid)}},r.a.createElement(q.a,{icon:Q.c})))))}}]),a}(n.Component),de=function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this,e)).onEditBadge=function(e,t,a,r,o,i){e.uid;var s=Object(ce.a)(e,["uid"]);n.props.firebase.badge(e.uid).set(Object(h.a)({},s,{category:t,description:a,image:r,link:o,name:i,editedAt:n.props.firebase.serverValue.TIMESTAMP}))},n.onRemoveBadge=function(e){n.props.firebase.badge(e).remove()},n.state={loading:!1,badges:[]},n}return Object(f.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),this.props.firebase.badges().on("value",(function(t){var a=t.val();if(a){var n=Object.keys(a).map((function(e){return Object(h.a)({},a[e],{uid:e})}));e.setState({badges:n,loading:!1})}else e.setState({badges:null,loading:!1})}))}},{key:"componentWillUnmount",value:function(){this.props.firebase.badges().off()}},{key:"render",value:function(){var e=this,t=this.state,a=t.badges,n=t.loading;return r.a.createElement(X.Consumer,null,(function(t){return r.a.createElement("div",null,r.a.createElement("h2",null,"Badge List"),n&&r.a.createElement("div",null,"Loading ..."),a&&r.a.createElement("ul",{className:"BadgeList"},a.map((function(a){return r.a.createElement(ue,{authUser:t,key:a.uid,badge:a,onEditBadge:e.onEditBadge,onRemoveBadge:e.onRemoveBadge})}))),!a&&r.a.createElement("div",null,"There are no badges ..."))}))}}]),a}(n.Component),me=w(de),pe=function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this,e)).state=Object(h.a)({loading:!1,badge:null},e.location.state),n}return Object(f.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.state.badge||(this.setState({loading:!0}),this.props.firebase.badge(this.props.match.params.id).on("value",(function(t){e.setState({badge:t.val(),loading:!1})})))}},{key:"componentWillUnmount",value:function(){this.props.firebase.badge(this.props.match.params.id).off()}},{key:"render",value:function(){var e=this.state,t=e.badge,a=e.loading;return r.a.createElement("div",null,a&&r.a.createElement("div",null,"Loading ..."),t&&r.a.createElement("div",{className:"Badge"},r.a.createElement("h2",null,"Badge (",this.props.match.params.id,")"),r.a.createElement("div",null,r.a.createElement("img",{className:"Badge-image",src:"".concat("/make-badges","images/").concat(t.image),alt:"badge"}),r.a.createElement("br",null)),r.a.createElement("strong",null,"Badge Name:")," ",t.name,r.a.createElement("br",null),r.a.createElement("strong",null,"Badge Description:")," ",t.description,r.a.createElement("br",null),r.a.createElement("strong",null,"Badge Category:")," ",t.category,r.a.createElement("br",null),r.a.createElement("a",{href:t.link},"Badgr Page for this Badge"),r.a.createElement("br",null)))}}]),a}(n.Component),he=w(pe),ge=function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this,e)).onListenForBadges=function(){n.setState({loading:!0}),n.props.firebase.badges().orderByChild("createdAt").limitToLast(n.state.limit).on("value",(function(e){var t=e.val();if(t){var a=Object.keys(t).map((function(e){return Object(h.a)({},t[e],{uid:e})}));n.setState({badges:a,loading:!1})}else n.setState({badges:null,loading:!1})}))},n.onChange=function(e){n.setState(Object(p.a)({},e.target.name,e.target.value))},n.onCreateBadge=function(e,t){n.props.firebase.badges().push({createdAt:n.props.firebase.serverValue.TIMESTAMP,category:n.state.category,description:n.state.description,image:n.state.image,link:n.state.link,name:n.state.name,ownerID:t.uid}),n.setState({category:"",description:"",image:"",link:"",name:""}),e.preventDefault()},n.onEditBadge=function(e,t,a,r,o,i){e.uid;var s=Object(ce.a)(e,["uid"]);n.props.firebase.badge(n.state.companyID,e.uid).set(Object(h.a)({},s,{category:t,description:a,image:r,link:o,name:i,editedAt:n.props.firebase.serverValue.TIMESTAMP}))},n.onRemoveBadge=function(e){n.props.firebase.badge(e).remove()},n.onNextPage=function(){n.setState((function(e){return{limit:e.limit+5}}),n.onListenForBadges)},n.state={editMode:!1,loading:!1,limit:25,category:"",description:"",image:"",link:"",name:""},n}return Object(f.a)(a,[{key:"componentDidMount",value:function(){this.onListenForBadges()}},{key:"componentWillUnmount",value:function(){this.props.firebase.badges().off()}},{key:"render",value:function(){var e=this,t=this.state,a=t.category,n=t.description,o=t.image,i=t.link,s=t.name,l=t.badges,c=t.loading;return r.a.createElement(X.Consumer,null,(function(t){return r.a.createElement("div",{className:"text-center"},r.a.createElement("h1",null,"Create A New Badge"),r.a.createElement("form",{onSubmit:function(a){return e.onCreateBadge(a,t)}},r.a.createElement("div",{className:""},r.a.createElement("div",{className:"form-group "},r.a.createElement("input",{className:"form-control form-input col-10",type:"text",placeholder:"Badge Name",value:s,name:"name",onChange:e.onChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control form-input col-10",type:"text",placeholder:"Badge Category",value:a,name:"category",onChange:e.onChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control form-input col-10",type:"text",placeholder:"Badge Description",value:n,name:"description",onChange:e.onChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control form-input col-10",type:"text",placeholder:"Badge Image URL",value:o,name:"image",onChange:e.onChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control form-input col-10",type:"text",placeholder:"Badge Link",value:i,name:"link",onChange:e.onChange}))),r.a.createElement("div",{className:"text-center"},r.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Add Badge"))),c&&r.a.createElement("div",null,"Loading ..."),l&&r.a.createElement(me,{authUser:t,badges:l,onEditBadge:e.onEditBadge,onRemoveBadge:e.onRemoveBadge}),!c&&l&&r.a.createElement("button",{className:"btn btn-secondary",type:"button",onClick:e.onNextPage},"Show More"),!l&&r.a.createElement("div",null,"There are no badges ..."))}))}}]),a}(n.Component),fe=w(ge),be=Object(E.a)(ae,ee((function(e){return!!e})))((function(){return r.a.createElement("div",null,r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/badges",component:me}),r.a.createElement(l.a,{exact:!0,path:"/badges/new",component:fe}),r.a.createElement(l.a,{exact:!0,path:"/badges/:id",component:he})))}));var ve=$((function(){return r.a.createElement(s.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(d,null),r.a.createElement(l.a,{exact:!0,path:"/",component:J}),r.a.createElement(l.a,{exact:!0,path:"/signup",component:P}),r.a.createElement(l.a,{exact:!0,path:"/signin",component:J}),r.a.createElement(l.a,{exact:!0,path:"/signout",component:z}),r.a.createElement(l.a,{exact:!0,path:"/account",component:le}),r.a.createElement(l.a,{exact:!0,path:"/pw-forget",component:x}),r.a.createElement(l.a,{exact:!0,path:"/pw-reset",component:H}),r.a.createElement(l.a,{exact:!0,path:"/about",component:Z}),r.a.createElement(l.a,{path:"/badges",component:be}),r.a.createElement(m,null)))}));i.a.render(r.a.createElement(S.Provider,{value:new j},r.a.createElement(r.a.StrictMode,null,r.a.createElement(ve,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.b2a4e1d4.chunk.js.map