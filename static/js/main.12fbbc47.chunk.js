(this["webpackJsonpmake-badges"]=this["webpackJsonpmake-badges"]||[]).push([[0],{37:function(e,t,a){e.exports=a.p+"static/media/logo-white.759f6c70.svg"},42:function(e,t,a){e.exports=a(63)},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},54:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(36),i=a.n(o);a(47),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(9),l=a(7),c=(a(48),a(49),a(37)),u=a.n(c);var m=function(){return r.a.createElement("header",{className:"Header"},r.a.createElement("a",{href:"https://makeschool.com/portal"},r.a.createElement("img",{src:u.a,className:"nav-logo",alt:"logo"})),r.a.createElement("div",{className:"nav-items"},r.a.createElement(s.c,{className:"nav-link",activeClassName:"nav-link-active",to:"/about"},"About"),r.a.createElement(s.c,{className:"nav-link",activeClassName:"nav-link-active",exact:!0,to:"/account"},"Account"),r.a.createElement(s.c,{className:"nav-link",activeClassName:"nav-link-active",exact:!0,to:"/badges"},"List")))};a(54);var d=function(){var e=(new Date).getFullYear();return r.a.createElement("div",{className:"Footer"},r.a.createElement("footer",null,r.a.createElement("div",{className:"Footer-Subtitle"},r.a.createElement("h3",null,"Make School A-Team Copyright ",e))))},p=a(8),h=a(6),g=a(2),f=a(3),b=a(4),E=a(5),v=a(10),w=r.a.createContext(null),y=function(e){return function(t){return r.a.createElement(w.Consumer,null,(function(a){return r.a.createElement(e,Object.assign({},t,{firebase:a}))}))}},S=w,C=a(14),O=a.n(C),k=(a(56),a(58),a(64),{apiKey:"AIzaSyBpxbPor7YSFc5J6q0lw79CVXYYAjLvlos",authDomain:"makeschoolbadges.firebaseapp.com",databaseURL:"https://makeschoolbadges.firebaseio.com",projectId:"makeschoolbadges",storageBucket:"makeschoolbadges.appspot.com",messagingSenderId:"360872796104",appId:"1:360872796104:web:7692a1e1e0c89e77c16afd",measurementId:"G-0F7RZM57QH"}),j=function e(){var t=this;Object(g.a)(this,e),this.doCreateUserWithEmailAndPassword=function(e,a){return t.auth.createUserWithEmailAndPassword(e,a)},this.doSignInWithEmailAndPassword=function(e,a){return t.auth.signInWithEmailAndPassword(e,a)},this.doSignInWithGoogle=function(){return t.auth.signInWithPopup(t.googleProvider)},this.doSignInWithFacebook=function(){return t.auth.signInWithPopup(t.facebookProvider)},this.doSignInWithTwitter=function(){return t.auth.signInWithPopup(t.twitterProvider)},this.doSignOut=function(){return t.auth.signOut()},this.doPasswordReset=function(e){return t.auth.sendPasswordResetEmail(e)},this.doSendEmailVerification=function(){return t.auth.currentUser.sendEmailVerification({url:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN:""}).REACT_APP_CONFIRMATION_EMAIL_REDIRECT||"http://localhost:3000/"})},this.doPasswordUpdate=function(e){return t.auth.currentUser.updatePassword(e)},this.onAuthUserListener=function(e,a){return t.auth.onAuthStateChanged((function(n){n?t.user(n.uid).once("value").then((function(t){var a=t.val();a.roles||(a.roles={}),n=Object(h.a)({uid:n.uid,email:n.email,emailVerified:n.emailVerified,providerData:n.providerData},a),e(n)})):a()}))},this.user=function(e){return t.db.ref("users/".concat(e))},this.users=function(){return t.db.ref("users")},this.badge=function(e){return t.db.ref("badges/".concat(e))},this.badges=function(){return t.db.ref("badges")},O.a.initializeApp(k),this.serverValue=O.a.database.ServerValue,this.emailAuthProvider=O.a.auth.EmailAuthProvider,this.auth=O.a.auth(),this.db=O.a.database(),this.storage=O.a.storage(),this.googleProvider=new O.a.auth.GoogleAuthProvider,this.facebookProvider=new O.a.auth.FacebookAuthProvider,this.twitterProvider=new O.a.auth.TwitterAuthProvider},N={username:"",email:"",passwordOne:"",passwordTwo:"",isAdmin:!1,error:null},B=function(e){Object(E.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){var t=n.state,a=t.username,r=t.email,o=t.passwordOne,i=t.isAdmin,s={};i&&(s.Priority="ADMIN"),n.props.firebase.doCreateUserWithEmailAndPassword(r,o).then((function(e){return e.user.updateProfile({displayName:a,photoURL:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fctorthopaedic.com%2Fhome%2Fprofile-silhouette%2F&psig=AOvVaw030D0jVKxOxcwnfD2cJLwD&ust=1601667943801000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOCK1ZiUlOwCFQAAAAAdAAAAABAD"}),n.props.firebase.user(e.user.uid).set({username:a,email:r,roles:s})})).then((function(){return n.props.firebase.doSendEmailVerification()})).then((function(){n.setState(Object(h.a)({},N)),n.props.history.push("/badges")})).catch((function(e){"auth/email-already-in-use"===e.code&&(e.message="\n  An account with this E-Mail address already exists.\n  Try to login with this account instead. If you think the\n  account is already used from one of the social logins, try\n  to sign in with one of them. Afterward, associate your accounts\n  on your personal account page.\n"),n.setState({error:e})})),e.preventDefault()},n.validate=function(e){return/\S+@makeschool.com/.test(String(e).toLowerCase())?(n.isAdmin=!0,!0):/\S+@students.makeschool.com/.test(String(e).toLowerCase())||/\S+@students.dominican.edu/.test(String(e).toLowerCase())},n.onChange=function(e){n.setState(Object(p.a)({},e.target.name,e.target.value))},n.onChangeCheckbox=function(e){n.setState(Object(p.a)({},e.target.name,e.target.checked))},n.state=Object(h.a)({},N),n}return Object(f.a)(a,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.email,n=e.passwordOne,o=e.passwordTwo,i=e.validEmail,s=void 0===i?this.validate(a):i,l=e.error,c=n!==o||""===n||""===a||!s||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"username",autoComplete:"username",value:t,onChange:this.onChange,type:"text",placeholder:"Full Name"}),r.a.createElement("input",{name:"email",autoComplete:"email",value:a,onChange:this.onChange,type:"text",placeholder:"Email Address"}),r.a.createElement("input",{name:"passwordOne",autoComplete:"new-password",value:n,onChange:this.onChange,type:"password",placeholder:"Password"}),r.a.createElement("input",{name:"passwordTwo",autoComplete:"new-password",value:o,onChange:this.onChange,type:"password",placeholder:"Confirm Password"}),r.a.createElement("button",{disabled:c,type:"submit"},"Sign Up"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),l&&r.a.createElement("p",null,l.message))}}]),a}(n.Component),A=function(){return r.a.createElement("p",null,"Don't have an account? ",r.a.createElement(s.b,{to:"/signUp"},"Sign Up"))},I=Object(v.a)(l.f,y)(B),P=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"SignUp"),r.a.createElement(I,null))},U={email:"",error:null},M=function(e){Object(E.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){var t=n.state.email;n.props.firebase.doPasswordReset(t).then((function(){n.setState(Object(h.a)({},U))})).catch((function(e){n.setState({error:e})})),e.preventDefault()},n.onChange=function(e){n.setState(Object(p.a)({},e.target.name,e.target.value))},n.state=Object(h.a)({},U),n}return Object(f.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.error,n=""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"email",autoComplete:"email",value:this.state.email,onChange:this.onChange,type:"text",placeholder:"Email Address"}),r.a.createElement("button",{disabled:n,type:"submit"},"Reset My Password"),a&&r.a.createElement("p",null,a.message))}}]),a}(n.Component),x=function(){return r.a.createElement("p",null,r.a.createElement(s.b,{to:"/forgotPassword"},"Forgot Password?"))},L=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"PasswordForget"),r.a.createElement(D,null))},D=y(M),T={email:"",password:"",error:null},R="\n  An account with an E-Mail address to\n  this social account already exists. Try to login from\n  this account instead and associate your social accounts on\n  your personal account page.\n",F=function(e){Object(E.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){var t=n.state,a=t.email,r=t.password;n.props.firebase.doSignInWithEmailAndPassword(a,r).then((function(){n.setState(Object(h.a)({},T)),n.props.history.push("/badges")})).catch((function(e){n.setState({error:e})})),e.preventDefault()},n.onChange=function(e){n.setState(Object(p.a)({},e.target.name,e.target.value))},n.state=Object(h.a)({},T),n}return Object(f.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,n=e.error,o=""===a||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"email",value:t,autoComplete:"email",onChange:this.onChange,type:"text",placeholder:"Email Address"}),r.a.createElement("input",{name:"password",autoComplete:"current-password",value:a,onChange:this.onChange,type:"password",placeholder:"Password"}),r.a.createElement("button",{disabled:o,type:"submit"},"Sign In"),n&&r.a.createElement("p",null,n.message))}}]),a}(n.Component),W=function(e){Object(E.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){n.props.firebase.doSignInWithGoogle().then((function(e){return n.props.firebase.user(e.user.uid).set({username:e.user.displayName,email:e.user.email,roles:{}})})).then((function(){n.setState({error:null}),n.props.history.push("/")})).catch((function(e){"auth/account-exists-with-different-credential"===e.code&&(e.message=R),n.setState({error:e})})),e.preventDefault()},n.state={error:null},n}return Object(f.a)(a,[{key:"render",value:function(){var e=this.state.error;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("button",{type:"submit"},"Sign In with Google"),e&&r.a.createElement("p",null,e.message))}}]),a}(n.Component),V=function(e){Object(E.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){n.props.firebase.doSignInWithFacebook().then((function(e){return n.props.firebase.user(e.user.uid).set({username:e.additionalUserInfo.profile.name,email:e.additionalUserInfo.profile.email,roles:{}})})).then((function(){n.setState({error:null}),n.props.history.push("/")})).catch((function(e){"auth/account-exists-with-different-credential"===e.code&&(e.message=R),n.setState({error:e})})),e.preventDefault()},n.state={error:null},n}return Object(f.a)(a,[{key:"render",value:function(){var e=this.state.error;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("button",{type:"submit"},"Sign In with Facebook"),e&&r.a.createElement("p",null,e.message))}}]),a}(n.Component),_=function(e){Object(E.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){n.props.firebase.doSignInWithTwitter().then((function(e){return n.props.firebase.user(e.user.uid).set({username:e.additionalUserInfo.profile.name,email:e.additionalUserInfo.profile.email,roles:{}})})).then((function(){n.setState({error:null}),n.props.history.push("/")})).catch((function(e){"auth/account-exists-with-different-credential"===e.code&&(e.message=R),n.setState({error:e})})),e.preventDefault()},n.state={error:null},n}return Object(f.a)(a,[{key:"render",value:function(){var e=this.state.error;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("button",{type:"submit"},"Sign In with Twitter"),e&&r.a.createElement("p",null,e.message))}}]),a}(n.Component),K=Object(v.a)(l.f,y)(F),G=Object(v.a)(l.f,y)(W),J=(Object(v.a)(l.f,y)(V),Object(v.a)(l.f,y)(_),function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"SignIn"),r.a.createElement(K,null),r.a.createElement(G,null),r.a.createElement(x,null),r.a.createElement(A,null))}),Y={passwordOne:"",passwordTwo:"",error:null},H=function(e){Object(E.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){var t=n.state.passwordOne;n.props.firebase.doPasswordUpdate(t).then((function(){n.setState(Object(h.a)({},Y))})).catch((function(e){n.setState({error:e})})),e.preventDefault()},n.onChange=function(e){n.setState(Object(p.a)({},e.target.name,e.target.value))},n.state=Object(h.a)({},Y),n}return Object(f.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.passwordOne,n=e.passwordTwo,o=e.error,i=a!==n||""===a;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{hidden:!0,name:"email",autoComplete:"email",value:t,type:"text",placeholder:"Email Address"}),r.a.createElement("input",{name:"passwordOne",autoComplete:"new-password",value:a,onChange:this.onChange,type:"password",placeholder:"New Password"}),r.a.createElement("input",{name:"passwordTwo",autoComplete:"new-password",value:n,onChange:this.onChange,type:"password",placeholder:"Confirm New Password"}),r.a.createElement("button",{disabled:i,type:"submit"},"Reset My Password"),o&&r.a.createElement("p",null,o.message))}}]),a}(n.Component),Q=y(H),q=a(17),z=a(19),Z=y((function(e){var t=e.firebase;return r.a.createElement("button",{type:"button",className:"btn btn-primary nav-item nav-link",onClick:t.doSignOut},r.a.createElement(z.a,{icon:q.b}))}));var X=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"About MakeBadges"),r.a.createElement("p",null,"First Project of the Make School A-Team to provide achievement awards/badges to students to help gain interest in a variety of topics."))},$=r.a.createContext(null),ee=function(e){var t=function(t){Object(E.a)(n,t);var a=Object(b.a)(n);function n(e){var t;return Object(g.a)(this,n),(t=a.call(this,e)).state={authUser:JSON.parse(localStorage.getItem("authUser"))},t}return Object(f.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.listener=this.props.firebase.onAuthUserListener((function(t){localStorage.setItem("authUser",JSON.stringify(t)),e.setState({authUser:t})}),(function(){localStorage.removeItem("authUser"),e.setState({authUser:null})}))}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){return r.a.createElement($.Provider,{value:this.state.authUser},r.a.createElement(e,this.props))}}]),n}(r.a.Component);return y(t)},te=function(e){return function(t){var a=function(a){Object(E.a)(o,a);var n=Object(b.a)(o);function o(){return Object(g.a)(this,o),n.apply(this,arguments)}return Object(f.a)(o,[{key:"componentDidMount",value:function(){var t=this;this.listener=this.props.firebase.onAuthUserListener((function(a){e(a)||t.props.history.push("/signIn")}),(function(){return t.props.history.push("/signIn")}))}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){var a=this;return r.a.createElement($.Consumer,null,(function(n){return e(n)?r.a.createElement(t,a.props):null}))}}]),o}(r.a.Component);return Object(v.a)(l.f,y)(a)}},ae=a(41),ne=function(e){var t=function(t){Object(E.a)(n,t);var a=Object(b.a)(n);function n(e){var t;return Object(g.a)(this,n),(t=a.call(this,e)).onSendEmailVerification=function(){t.props.firebase.doSendEmailVerification().then((function(){return t.setState({isSent:!0})}))},t.state={isSent:!1},t}return Object(f.a)(n,[{key:"render",value:function(){var t=this;return r.a.createElement($.Consumer,null,(function(a){return function(e){return e&&!e.emailVerified&&e.providerData.map((function(e){return e.providerId})).includes("password")}(a)?r.a.createElement("div",null,t.state.isSent?r.a.createElement("p",null,"E-Mail confirmation sent: Check your E-Mails (Spam folder included) for a confirmation E-Mail. Refresh this page once you confirmed your E-Mail."):r.a.createElement("p",null,"Verify your E-Mail: Check your E-Mails (Spam folder included) for a confirmation E-Mail or send another confirmation E-Mail."),r.a.createElement(ae.a,{type:"button btn-primary",onClick:t.onSendEmailVerification,disabled:t.state.isSent},"Send confirmation E-Mail")):r.a.createElement(e,t.props)}))}}]),n}(r.a.Component);return y(t)},re=[{id:"password",provider:null},{id:"google.com",provider:"googleProvider"},{id:"facebook.com",provider:"facebookProvider"},{id:"twitter.com",provider:"twitterProvider"}],oe=function(e){Object(E.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this,e)).fetchSignInMethods=function(){n.props.firebase.auth.fetchSignInMethodsForEmail(n.props.authUser.email).then((function(e){return n.setState({activeSignInMethods:e,error:null})})).catch((function(e){return n.setState({error:e})}))},n.onSocialLoginLink=function(e){n.props.firebase.auth.currentUser.linkWithPopup(n.props.firebase[e]).then(n.fetchSignInMethods).catch((function(e){return n.setState({error:e})}))},n.onDefaultLoginLink=function(e){var t=n.props.firebase.emailAuthProvider.credential(n.props.authUser.email,e);n.props.firebase.auth.currentUser.linkAndRetrieveDataWithCredential(t).then(n.fetchSignInMethods).catch((function(e){return n.setState({error:e})}))},n.onUnlink=function(e){n.props.firebase.auth.currentUser.unlink(e).then(n.fetchSignInMethods).catch((function(e){return n.setState({error:e})}))},n.state={activeSignInMethods:[],error:null},n}return Object(f.a)(a,[{key:"componentDidMount",value:function(){this.fetchSignInMethods()}},{key:"render",value:function(){var e=this,t=this.state,a=t.activeSignInMethods,n=t.error;return r.a.createElement("div",null,"Sign In Methods:",r.a.createElement("ul",{className:"social-links"},re.map((function(t){var n=1===a.length,o=a.includes(t.id);return r.a.createElement("li",{key:t.id},"password"===t.id?r.a.createElement(se,{onlyOneLeft:n,isEnabled:o,signInMethod:t,onLink:e.onDefaultLoginLink,onUnlink:e.onUnlink}):r.a.createElement(ie,{onlyOneLeft:n,isEnabled:o,signInMethod:t,onLink:e.onSocialLoginLink,onUnlink:e.onUnlink}))}))),n&&n.message)}}]),a}(n.Component),ie=function(e){var t=e.onlyOneLeft,a=e.isEnabled,n=e.signInMethod,o=e.onLink,i=e.onUnlink;return a?r.a.createElement("button",{type:"button",className:"btn btn-primary btn-social",onClick:function(){return i(n.id)},disabled:t},"Deactivate ",n.id):r.a.createElement("button",{type:"button",className:"btn btn-primary btn-social",onClick:function(){return o(n.provider)}},"Link ",n.id)},se=function(e){Object(E.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){e.preventDefault(),n.props.onLink(n.state.passwordOne),n.setState({passwordOne:"",passwordTwo:""})},n.onChange=function(e){n.setState(Object(p.a)({},e.target.name,e.target.value))},n.state={passwordOne:"",passwordTwo:""},n}return Object(f.a)(a,[{key:"render",value:function(){var e=this.props,t=e.onlyOneLeft,a=e.isEnabled,n=e.signInMethod,o=e.onUnlink,i=this.state,s=i.email,l=i.passwordOne,c=i.passwordTwo,u=l!==c||""===l;return a?r.a.createElement("button",{type:"button",className:"btn btn-danger btn-social  disabled",onClick:function(){return o(n.id)},disabled:t},"Deactivate ",n.id):r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{hidden:!0,name:"email",autoComplete:"email",value:s,type:"text",placeholder:"Email Address"}),r.a.createElement("input",{className:"form-input",name:"passwordOne",autoComplete:"new-password",value:l,onChange:this.onChange,type:"password",placeholder:"New Password"}),r.a.createElement("input",{className:"form-input",name:"passwordTwo",autoComplete:"new-password",value:c,onChange:this.onChange,type:"password",placeholder:"Confirm New Password"}),r.a.createElement("button",{className:"btn btn-primary",disabled:u,type:"submit"},"Link ",n.id))}}]),a}(n.Component),le=y(oe),ce=Object(v.a)(ne,te((function(e){return!!e})))((function(){return r.a.createElement($.Consumer,null,(function(e){return r.a.createElement("div",{className:"container text-center add-padding-bottom"},r.a.createElement("div",{className:"usercard"},r.a.createElement("div",{className:"mt-3"},r.a.createElement("img",{className:"profile-photo",src:"https://picsum.photos/200",width:"100",height:"100",alt:"Profile"})),r.a.createElement("h3",null,e.username,"'s Account"),r.a.createElement("p",null,r.a.createElement("strong",null,"Email: "),e.email,r.a.createElement("br",null))),r.a.createElement("hr",null),"Reset Your Password. ",r.a.createElement(Q,null),r.a.createElement(le,{authUser:e}),r.a.createElement(Z,null))}))})),ue=(a(62),a(22)),me=function(e){Object(E.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this,e)).onToggleEditMode=function(){n.setState((function(e){return{editMode:!e.editMode,editBadgeCategory:n.props.badge.category,editBadgeDescription:n.props.badge.description,editBadgeImage:n.props.badge.image,editBadgeLink:n.props.badge.link,editBadgeName:n.props.badge.name}}))},n.onChangeEditBadge=function(e){n.setState(Object(p.a)({},e.target.name,e.target.value))},n.onSaveEditBadge=function(){n.props.onEditBadge(n.props.badge,n.state.editBadgeCategory,n.state.editBadgeDescription,n.state.editBadgeImage,n.state.editBadgeLink,n.state.editBadgeName),n.setState({editMode:!1})},n.state={editMode:!1,editBadgeCategory:n.props.badge.category,editBadgeDescription:n.props.badge.description,editBadgeImage:n.props.badge.image,editBadgeLink:n.props.badge.link,editBadgeName:n.props.badge.name},n}return Object(f.a)(a,[{key:"render",value:function(){var e=this.props,t=e.authUser,a=e.badge,n=e.onRemoveBadge,o=this.state,i=o.editMode,l=o.editBadgeCategory,c=o.editBadgeDescription,u=o.editBadgeImage,m=o.editBadgeLink,d=o.editBadgeName;return r.a.createElement("li",{key:a.uid,className:"row"},i?r.a.createElement("div",{className:"text-center"},r.a.createElement("input",{type:"text",className:"form-control form-input col-10",placeholder:"Name Your Badge!",value:d,name:"editBadgeName",onChange:this.onChangeEditBadge}),r.a.createElement("input",{type:"text",className:"form-control form-input col-10",placeholder:"Badge's Category?",value:l,name:"editBadgeCategory",onChange:this.onChangeEditBadge}),r.a.createElement("input",{type:"text",className:"form-control form-input col-10",placeholder:"Badge's Description?",value:c,name:"editBadgeDescription",onChange:this.onChangeEditBadge}),r.a.createElement("input",{type:"text",className:"form-control form-input col-10",placeholder:"Badge's Image URL?",value:u,name:"editBadgeImage",onChange:this.onChangeEditBadge}),r.a.createElement("input",{type:"text",className:"form-control form-input col-10",placeholder:"Badge's Badgr Link?",value:m,name:"editBadgeLink",onChange:this.onChangeEditBadge})):r.a.createElement("div",{className:"Badge col-10"},r.a.createElement("strong",null,"category: ")," ",a.category,r.a.createElement("br",null),r.a.createElement("strong",null,"name: ")," ",a.name,r.a.createElement("br",null),r.a.createElement("strong",null,"description: ")," ",a.description,r.a.createElement("br",null),r.a.createElement("img",{className:"Badge-image",src:a.image,alt:"badge"}),r.a.createElement("br",null),r.a.createElement(s.b,{to:{pathname:"".concat("/badges","/").concat(a.uid),state:{badge:a}}},"Details"),r.a.createElement("p",{className:"comp-item"},r.a.createElement("sub",null,a.editedAt&&r.a.createElement("span",null,"(Edited)"))),r.a.createElement("hr",null)),t.uid===a.ownerID&&r.a.createElement("div",{className:""},i?r.a.createElement("div",{className:"justify-me"},r.a.createElement("button",{className:"btn btn-secondary btn-bot",onClick:this.onSaveEditBadge},"Save Changes"),r.a.createElement("button",{className:"btn btn-secondary btn-bot",onClick:this.onToggleEditMode},"Cancel Edit")):r.a.createElement("div",null,r.a.createElement("button",{className:"btn-li",onClick:this.onToggleEditMode},r.a.createElement(z.a,{icon:q.a})),r.a.createElement("button",{className:"btn-li",onClick:function(){return n(a.uid)}},r.a.createElement(z.a,{icon:q.c})))))}}]),a}(n.Component),de=function(e){Object(E.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this,e)).onEditBadge=function(e,t,a,r,o,i){e.uid;var s=Object(ue.a)(e,["uid"]);n.props.firebase.badge(e.uid).set(Object(h.a)({},s,{category:t,description:a,image:r,link:o,name:i,editedAt:n.props.firebase.serverValue.TIMESTAMP}))},n.onRemoveBadge=function(e){n.props.firebase.badge(e).remove()},n.state={loading:!1,badges:[]},n}return Object(f.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),this.props.firebase.badges().on("value",(function(t){var a=t.val();if(a){var n=Object.keys(a).map((function(e){return Object(h.a)({},a[e],{uid:e})}));e.setState({badges:n,loading:!1})}else e.setState({badges:null,loading:!1})}))}},{key:"componentWillUnmount",value:function(){this.props.firebase.badges().off()}},{key:"render",value:function(){var e=this,t=this.state,a=t.badges,n=t.loading;return r.a.createElement($.Consumer,null,(function(t){return r.a.createElement("div",null,r.a.createElement("h2",null,"Badge List"),n&&r.a.createElement("div",null,"Loading ..."),a&&r.a.createElement("ul",{className:"BadgeList"},a.map((function(a){return r.a.createElement(me,{authUser:t,key:a.uid,badge:a,onEditBadge:e.onEditBadge,onRemoveBadge:e.onRemoveBadge})}))),!a&&r.a.createElement("div",null,"There are no badges ..."))}))}}]),a}(n.Component),pe=y(de),he=function(e){Object(E.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this,e)).state=Object(h.a)({loading:!1,badge:null},e.location.state),n}return Object(f.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.state.badge||(this.setState({loading:!0}),this.props.firebase.badge(this.props.match.params.id).on("value",(function(t){e.setState({badge:t.val(),loading:!1})})))}},{key:"componentWillUnmount",value:function(){this.props.firebase.badge(this.props.match.params.id).off()}},{key:"render",value:function(){var e=this.state,t=e.badge,a=e.loading;return r.a.createElement("div",null,a&&r.a.createElement("div",null,"Loading ..."),t&&r.a.createElement("div",{className:"Badge"},r.a.createElement("h2",null,"Badge (",this.props.match.params.id,")"),r.a.createElement("div",null,r.a.createElement("img",{className:"Badge-image",src:t.image,alt:"badge"}),r.a.createElement("br",null)),r.a.createElement("strong",null,"Badge Name:")," ",t.name,r.a.createElement("br",null),r.a.createElement("strong",null,"Badge Description:")," ",t.description,r.a.createElement("br",null),r.a.createElement("strong",null,"Badge Category:")," ",t.category,r.a.createElement("br",null),r.a.createElement("a",{href:t.link},"Badgr Page for this Badge"),r.a.createElement("br",null)))}}]),a}(n.Component),ge=y(he),fe=function(e){Object(E.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this,e)).onListenForBadges=function(){n.setState({loading:!0}),n.props.firebase.badges().orderByChild("createdAt").limitToLast(n.state.limit).on("value",(function(e){var t=e.val();if(t){var a=Object.keys(t).map((function(e){return Object(h.a)({},t[e],{uid:e})}));n.setState({badges:a,loading:!1})}else n.setState({badges:null,loading:!1})}))},n.onChange=function(e){n.setState(Object(p.a)({},e.target.name,e.target.value))},n.onCreateBadge=function(e,t){n.props.firebase.badges().push({createdAt:n.props.firebase.serverValue.TIMESTAMP,category:n.state.category,description:n.state.description,image:n.state.image,link:n.state.link,name:n.state.name,ownerID:t.uid}),n.setState({category:"",description:"",image:"",link:"",name:""}),e.preventDefault()},n.onEditBadge=function(e,t,a,r,o,i){e.uid;var s=Object(ue.a)(e,["uid"]);n.props.firebase.badge(n.state.companyID,e.uid).set(Object(h.a)({},s,{category:t,description:a,image:r,link:o,name:i,editedAt:n.props.firebase.serverValue.TIMESTAMP}))},n.onRemoveBadge=function(e){n.props.firebase.badge(e).remove()},n.onNextPage=function(){n.setState((function(e){return{limit:e.limit+5}}),n.onListenForBadges)},n.state={editMode:!1,loading:!1,limit:25,category:"",description:"",image:"",link:"",name:""},n}return Object(f.a)(a,[{key:"componentDidMount",value:function(){this.onListenForBadges()}},{key:"componentWillUnmount",value:function(){this.props.firebase.badges().off()}},{key:"render",value:function(){var e=this,t=this.state,a=t.category,n=t.description,o=t.image,i=t.link,s=t.name,l=t.badges,c=t.loading;return r.a.createElement($.Consumer,null,(function(t){return r.a.createElement("div",{className:"text-center"},r.a.createElement("h1",null,"Create A New Badge"),r.a.createElement("form",{onSubmit:function(a){return e.onCreateBadge(a,t)}},r.a.createElement("div",{className:""},r.a.createElement("div",{className:"form-group "},r.a.createElement("input",{className:"form-control form-input col-10",type:"text",placeholder:"Badge Name",value:s,name:"name",onChange:e.onChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control form-input col-10",type:"text",placeholder:"Badge Category",value:a,name:"category",onChange:e.onChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control form-input col-10",type:"text",placeholder:"Badge Description",value:n,name:"description",onChange:e.onChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control form-input col-10",type:"text",placeholder:"Badge Link",value:i,name:"link",onChange:e.onChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control form-input col-10",type:"text",placeholder:"Badge Image URL",value:o,name:"image",onChange:e.onChange}))),r.a.createElement("div",{className:"text-center"},r.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Add Badge"))),c&&r.a.createElement("div",null,"Loading ..."),l&&r.a.createElement(pe,{authUser:t,badges:l,onEditBadge:e.onEditBadge,onRemoveBadge:e.onRemoveBadge}),!c&&l&&r.a.createElement("button",{className:"btn btn-secondary",type:"button",onClick:e.onNextPage},"Show More"),!l&&r.a.createElement("div",null,"There are no badges ..."))}))}}]),a}(n.Component),be=y(fe),Ee=function(e){Object(E.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this,e)).handleChange=function(e){if(e.target.files[0]){var t=e.target.files[0];n.setState((function(){return{image:t}}))}},n.handleUpload=function(){var e=n.state.image;n.props.firebase.storage.ref("images/".concat(e.name)).put(e).on("state_changed",(function(e){var t=Math.round(e.bytesTransferred/e.totalBytes*100);n.setState({progress:t})}),(function(e){console.log(e)}),(function(){n.props.firebase.storage.ref("images").child(e.name).getDownloadURL().then((function(e){n.setState({url:e})}))}))},n.state={image:null,url:"",progress:0},n}return Object(f.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"center"},r.a.createElement("br",null),r.a.createElement("h2",{className:"green-text"},"React Firebase Image Uploader"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"row"},r.a.createElement("progress",{value:this.state.progress,max:"100",className:"progress"})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"file-field input-field"},r.a.createElement("div",{className:"btn"},r.a.createElement("span",null,"File"),r.a.createElement("input",{type:"file",onChange:this.handleChange})),r.a.createElement("div",{className:"file-path-wrapper"},r.a.createElement("input",{className:"file-path validate",type:"text"}))),r.a.createElement("button",{onClick:this.handleUpload,className:"waves-effect waves-light btn"},"Upload"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("img",{src:this.state.url||"https://via.placeholder.com/400x300",alt:"Uploaded Images",height:"300",width:"400"}),r.a.createElement("span",null,"URL: ",this.state.url))}}]),a}(n.Component),ve=y(Ee),we=Object(v.a)(ne,te((function(e){return!!e})))((function(){return r.a.createElement("div",null,r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/badges",component:pe}),r.a.createElement(l.a,{exact:!0,path:"/badges/new-photo",component:ve}),r.a.createElement(l.a,{exact:!0,path:"/badges/new",component:be}),r.a.createElement(l.a,{exact:!0,path:"/badges/:id",component:ge})))}));var ye=ee((function(){return r.a.createElement(s.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(m,null),r.a.createElement(l.a,{exact:!0,path:"/",component:J}),r.a.createElement(l.a,{exact:!0,path:"/signup",component:P}),r.a.createElement(l.a,{exact:!0,path:"/signin",component:J}),r.a.createElement(l.a,{exact:!0,path:"/signout",component:Z}),r.a.createElement(l.a,{exact:!0,path:"/account",component:ce}),r.a.createElement(l.a,{exact:!0,path:"/pw-forget",component:L}),r.a.createElement(l.a,{exact:!0,path:"/pw-reset",component:Q}),r.a.createElement(l.a,{exact:!0,path:"/about",component:X}),r.a.createElement(l.a,{path:"/badges",component:we}),r.a.createElement(d,null)))}));i.a.render(r.a.createElement(S.Provider,{value:new j},r.a.createElement(r.a.StrictMode,null,r.a.createElement(ye,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.12fbbc47.chunk.js.map