(this["webpackJsonpmake-badges"]=this["webpackJsonpmake-badges"]||[]).push([[0],{38:function(e,t,a){e.exports=a.p+"static/media/logo-white.759f6c70.svg"},44:function(e,t,a){e.exports=a(65)},49:function(e,t,a){},50:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(37),i=a.n(o);a(49),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(9),l=a(8),c="/badges",u=(a(50),a(38)),m=a.n(u);var d=function(){return r.a.createElement("header",{id:"Header"},r.a.createElement("a",{href:"https://makeschool.com/portal"},r.a.createElement("img",{src:m.a,id:"nav-logo",alt:"logo"})),r.a.createElement("div",{id:"nav-items"},r.a.createElement(s.c,{className:"nav-link",activeClassName:"nav-link-active",exact:!0,to:c},"Badges"),r.a.createElement(s.c,{className:"nav-link",activeClassName:"nav-link-active",exact:!0,to:"/account"},"Account")))};var p=function(){var e=(new Date).getFullYear();return r.a.createElement("footer",{id:"Footer"},r.a.createElement("h3",null,"Make School A-Team Copyright ",e))},g=a(2),h=a(4),f=a(5),b=a(6),E=(n.Component,a(16)),v=r.a.createContext(null),y=r.a.createContext(null),w=function(e){return function(t){return r.a.createElement(y.Consumer,null,(function(a){return r.a.createElement(e,Object.assign({},t,{firebase:a}))}))}},C=y,S=a(7),O=a(15),j=a.n(O),B=(a(56),a(58),a(66),a(67),a(60),{apiKey:"AIzaSyBpxbPor7YSFc5J6q0lw79CVXYYAjLvlos",authDomain:"makeschoolbadges.firebaseapp.com",databaseURL:"https://makeschoolbadges.firebaseio.com",projectId:"makeschoolbadges",storageBucket:"makeschoolbadges.appspot.com",messagingSenderId:"360872796104",appId:"1:360872796104:web:7692a1e1e0c89e77c16afd",measurementId:"G-0F7RZM57QH"}),k=function e(){var t=this;Object(g.a)(this,e),this.doCreateUserWithEmailAndPassword=function(e,a){return t.analytics.logEvent("Created A New User Using Email & Pass"),t.auth.createUserWithEmailAndPassword(e,a)},this.doSignInWithEmailAndPassword=function(e,a){return t.analytics.logEvent("User Logged In Using Email & Pass"),t.auth.signInWithEmailAndPassword(e,a)},this.doSignInWithGoogle=function(){return t.analytics.logEvent("User Logged In Using Google"),t.auth.signInWithPopup(t.googleProvider)},this.doSignInWithFacebook=function(){return t.auth.signInWithPopup(t.facebookProvider)},this.doSignInWithTwitter=function(){return t.auth.signInWithPopup(t.twitterProvider)},this.doSignOut=function(){return t.analytics.logEvent("User Logged Out"),t.auth.signOut()},this.doPasswordReset=function(e){return t.analytics.logEvent("User Tried To Rest Their Password"),t.auth.sendPasswordResetEmail(e)},this.doPasswordUpdate=function(e){return t.analytics.logEvent("User Changed Their Password"),t.auth.currentUser.updatePassword(e)},this.doSendEmailVerification=function(){return t.analytics.logEvent("Email Verification Sent"),t.auth.currentUser.sendEmailVerification({url:"http://localhost:3000/"})},this.onAuthUserListener=function(e,a){return t.auth.onAuthStateChanged((function(n){n?t.user(n.uid).once("value").then((function(t){var a=t.val();a.roles||(a.roles={}),n=Object(S.a)({uid:n.uid,email:n.email,emailVerified:n.emailVerified,providerData:n.providerData},a),e(n)})):a()}))},this.user=function(e){return t.analytics.logEvent("Referencing A User's Data"),t.db.ref("users/".concat(e))},this.users=function(){t.analytics.logEvent("Referencing List Of Users"),t.db.ref("users")},this.badge=function(e){return t.analytics.logEvent("Referencing A Badge's Data"),t.db.ref("badges/".concat(e))},this.badges=function(){return t.analytics.logEvent("Referencing List Of Badges"),t.db.ref("badges")},this.doAwardBadge=function(e,a,n,r){return console.log("User: ".concat(e," Submitted a Badge Request for ").concat(r," ID: ").concat(n)),t.db.ref("users/"+e+"/badges/").child(r).set(n)},this.doAnalyzeNotification=function(){return t.analytics.logEvent("notification_received")},j.a.initializeApp(B),this.serverValue=j.a.database.ServerValue,this.emailAuthProvider=j.a.auth.EmailAuthProvider,this.auth=j.a.auth(),this.db=j.a.database(),this.storage=j.a.storage(),this.analytics=j.a.analytics(),this.performance=j.a.performance(),this.googleProvider=new j.a.auth.GoogleAuthProvider,this.facebookProvider=new j.a.auth.FacebookAuthProvider,this.twitterProvider=new j.a.auth.TwitterAuthProvider},N=function(e){var t=function(t){Object(b.a)(n,t);var a=Object(f.a)(n);function n(e){var t;return Object(g.a)(this,n),(t=a.call(this,e)).state={authUser:JSON.parse(localStorage.getItem("authUser"))},t}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.listener=this.props.firebase.onAuthUserListener((function(t){localStorage.setItem("authUser",JSON.stringify(t)),e.setState({authUser:t})}),(function(){localStorage.removeItem("authUser"),e.setState({authUser:null})}))}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){return r.a.createElement(v.Provider,{value:this.state.authUser},r.a.createElement(e,this.props))}}]),n}(r.a.Component);return w(t)},A=function(e){return function(t){var a=function(a){Object(b.a)(o,a);var n=Object(f.a)(o);function o(){return Object(g.a)(this,o),n.apply(this,arguments)}return Object(h.a)(o,[{key:"componentDidMount",value:function(){var t=this;this.listener=this.props.firebase.onAuthUserListener((function(a){e(a)||t.props.history.push("/")}),(function(){return t.props.history.push("/signin")}))}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){var a=this;return r.a.createElement(v.Consumer,null,(function(n){return e(n)?r.a.createElement(t,a.props):null}))}}]),o}(r.a.Component);return Object(E.a)(l.g,w)(a)}},U=a(43),P=function(e){var t=function(t){Object(b.a)(n,t);var a=Object(f.a)(n);function n(e){var t;return Object(g.a)(this,n),(t=a.call(this,e)).onSendEmailVerification=function(){t.props.firebase.doSendEmailVerification().then((function(){return t.setState({isSent:!0})}))},t.state={isSent:!1},t}return Object(h.a)(n,[{key:"render",value:function(){var t=this;return r.a.createElement(v.Consumer,null,(function(a){return function(e){return e&&!e.emailVerified&&e.providerData.map((function(e){return e.providerId})).includes("password")}(a)?r.a.createElement("div",null,t.state.isSent?r.a.createElement("p",null,"E-Mail confirmation sent: Check your E-Mails (Spam folder included) for a confirmation E-Mail. Refresh this page once you confirmed your E-Mail."):r.a.createElement("p",null,"Verify your E-Mail: Check your E-Mails (Spam folder included) for a confirmation E-Mail or send another confirmation E-Mail."),r.a.createElement(U.a,{type:"button btn-primary",onClick:t.onSendEmailVerification,disabled:t.state.isSent},"Send confirmation E-Mail")):r.a.createElement(e,t.props)}))}}]),n}(r.a.Component);return w(t)},I=a(19),D=a(22),x=w((function(e){var t=e.firebase;return r.a.createElement("button",{type:"button",className:"btn btn-primary nav-item nav-link",onClick:t.doSignOut},r.a.createElement(D.a,{icon:I.b}))})),M=Object(E.a)(P,A((function(e){return!!e})))((function(){return r.a.createElement(v.Consumer,null,(function(e){return r.a.createElement("div",{id:"content-wrap",className:"AccountPage"},r.a.createElement("div",{className:"usercard"},r.a.createElement("img",{className:"profile-photo",src:"https://picsum.photos/200",width:"100",height:"100",alt:"Profile"}),r.a.createElement("h3",null,e.username,"'s Account"),r.a.createElement("p",null,r.a.createElement("strong",null,"Email: "),e.email,r.a.createElement("br",null)),r.a.createElement("p",null,r.a.createElement("strong",null,"Awards: "),r.a.createElement("br",null),JSON.stringify(e.awardsEarned),r.a.createElement("br",null))),r.a.createElement("hr",null),r.a.createElement(x,null))}))})),L=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){return Object(g.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"content-wrap",className:"NotFoundPage"},r.a.createElement("h1",null,"Oops!"),r.a.createElement("h2",null,"We can't seem to find the page you're looking for."),r.a.createElement("p",{style:{textAlign:"center"}},r.a.createElement(s.b,{to:"/"},"Go to Home ")))}}]),a}(n.Component),T=(a(64),a(24)),R=a(11),W=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this,e)).onToggleEditMode=function(){n.setState((function(e){return{editMode:!e.editMode,editBadgeCategory:n.props.badge.category,editBadgeDescription:n.props.badge.description,editBadgeImage:n.props.badge.image,editBadgeLink:n.props.badge.link,editBadgeName:n.props.badge.name}}))},n.onChangeEditBadge=function(e){n.setState(Object(R.a)({},e.target.name,e.target.value))},n.onSaveEditBadge=function(){n.props.onEditBadge(n.props.badge,n.state.editBadgeCategory,n.state.editBadgeDescription,n.state.editBadgeImage,n.state.editBadgeLink,n.state.editBadgeName),n.setState({editMode:!1})},n.state={editMode:!1,editBadgeCategory:n.props.badge.category,editBadgeDescription:n.props.badge.description,editBadgeImage:n.props.badge.image,editBadgeLink:n.props.badge.link,editBadgeName:n.props.badge.name},n}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props,t=e.authUser,a=e.badge,n=e.onRemoveBadge,o=this.state,i=o.editMode,l=o.editBadgeCategory,u=o.editBadgeDescription,m=o.editBadgeImage,d=o.editBadgeLink,p=o.editBadgeName;return r.a.createElement("li",{className:"Badge",key:a.uid},i?r.a.createElement("div",{className:"text-center"},r.a.createElement("input",{type:"text",className:"form-control form-input col-10",placeholder:"Name Your Badge!",value:p,name:"editBadgeName",onChange:this.onChangeEditBadge}),r.a.createElement("input",{type:"text",className:"form-control form-input col-10",placeholder:"Badge's Category?",value:l,name:"editBadgeCategory",onChange:this.onChangeEditBadge}),r.a.createElement("input",{type:"text",className:"form-control form-input col-10",placeholder:"Badge's Description?",value:u,name:"editBadgeDescription",onChange:this.onChangeEditBadge}),r.a.createElement("input",{type:"text",className:"form-control form-input col-10",placeholder:"Badge's Image URL?",value:m,name:"editBadgeImage",onChange:this.onChangeEditBadge}),r.a.createElement("input",{type:"text",className:"form-control form-input col-10",placeholder:"Badge's Badgr Link?",value:d,name:"editBadgeLink",onChange:this.onChangeEditBadge})):r.a.createElement("div",{className:"Badge-info"},r.a.createElement("strong",null,"category: ")," ",a.category,r.a.createElement("br",null),r.a.createElement("strong",null,"name: ")," ",a.name,r.a.createElement("br",null),r.a.createElement("strong",null,"description: ")," ",a.description,r.a.createElement("br",null),r.a.createElement("img",{className:"Badge-image",src:a.image,alt:"badge"}),r.a.createElement("br",null),r.a.createElement(s.b,{to:{pathname:"".concat(c,"/").concat(a.uid),state:{badge:a,authUser:t}}},"Details"),r.a.createElement("p",{className:"comp-item"},r.a.createElement("sub",null,a.editedAt&&r.a.createElement("span",null,"(Edited)"))),r.a.createElement("hr",null)),t&&t.uid===a.ownerID&&r.a.createElement("div",{className:"badge-buttons"},i?r.a.createElement("div",{className:"justify-me"},r.a.createElement("button",{className:"btn btn-secondary btn-bot",onClick:this.onSaveEditBadge},"Save Changes"),r.a.createElement("button",{className:"btn btn-secondary btn-bot",onClick:this.onToggleEditMode},"Cancel Edit")):r.a.createElement("div",null,r.a.createElement("button",{className:"btn-li",onClick:this.onToggleEditMode},r.a.createElement(D.a,{icon:I.a})),r.a.createElement("button",{className:"btn-li",onClick:function(){return n(a.uid)}},r.a.createElement(D.a,{icon:I.c})))))}}]),a}(n.Component),F=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this,e)).onEditBadge=function(e,t,a,r,o,i){e.uid;var s=Object(T.a)(e,["uid"]);n.props.firebase.badge(e.uid).set(Object(S.a)({},s,{category:t,description:a,image:r,link:o,name:i,editedAt:n.props.firebase.serverValue.TIMESTAMP}))},n.onRemoveBadge=function(e){n.props.firebase.badge(e).remove()},n.state={loading:!1,badges:[]},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),this.props.firebase.badges().on("value",(function(t){var a=t.val();if(a){var n=Object.keys(a).map((function(e){return Object(S.a)({},a[e],{uid:e})}));e.setState({badges:n,loading:!1})}else e.setState({badges:null,loading:!1})}))}},{key:"componentWillUnmount",value:function(){this.props.firebase.badges().off()}},{key:"render",value:function(){var e=this,t=this.state,a=t.badges,n=t.loading;return r.a.createElement(v.Consumer,null,(function(t){return r.a.createElement("div",{id:"content-wrap",className:"BadgeListPage"},r.a.createElement("h1",null,"Badge List"),n&&r.a.createElement("div",null,"Loading ..."),a&&r.a.createElement("ul",{className:"BadgeList"},a.map((function(a){return r.a.createElement(W,{authUser:t,key:a.uid,badge:a,onEditBadge:e.onEditBadge,onRemoveBadge:e.onRemoveBadge})}))),!a&&r.a.createElement("div",null,"There are no badges ..."))}))}}]),a}(n.Component),V=w(F),G=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){var t=n.state,a=t.authUser,r=t.BADGE_ID,o=t.badge;n.props.firebase.doAwardBadge(a.uid,a.userName,r,o.name),n.setState({AwardEarned:!0}),e.preventDefault()},n.onChange=function(e){n.setState(Object(R.a)({},e.target.name,e.target.value))},n.onChangeCheckbox=function(e){n.setState(Object(R.a)({},e.target.name,e.target.checked))},n.state=Object(S.a)({loading:!1,badge:null,AwardEarned:!1,BADGE_ID:n.props.match.params.id,authUser:n.props.authUser},e.location.state),n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.state.badge||(this.setState({loading:!0}),this.props.firebase.badge(this.state.BADGE_ID).on("value",(function(t){e.setState({badge:t.val(),AwardEarned:!1,BADGE_ID:e.props.match.params.id,authUser:e.props.authUser,loading:!1})})))}},{key:"componentWillUnmount",value:function(){this.props.firebase.badge(this.state.BADGE_ID).off()}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.badge,n=e.AwardEarned,o=e.authUser;return r.a.createElement("div",{id:"content-wrap",className:"BadgeDetailsPage"},t&&r.a.createElement("div",null,"Loading ..."),a&&r.a.createElement("div",{className:"Badge-info"},r.a.createElement("h3",null,"Badge (",this.state.BADGE_ID,")"),r.a.createElement("img",{className:n?"Earned":"Badge-image",src:a.image,alt:"badge"}),r.a.createElement("strong",null,"Badge Name:")," ",a.name,r.a.createElement("br",null),r.a.createElement("strong",null,"Badge Description:")," ",a.description,r.a.createElement("br",null),r.a.createElement("strong",null,"Badge Category:")," ",a.category,r.a.createElement("br",null),r.a.createElement("a",{href:a.link},"Badgr Page for this Badge"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),"Have you earned this award yet:",n?" Yes":" No",o&&r.a.createElement("div",null,r.a.createElement("button",{onClick:this.onSubmit,type:"submit"},"Earn This Badge"),r.a.createElement("br",null),r.a.createElement("label",null,"Overide Request:",r.a.createElement("input",{name:"AwardEarned",type:"checkbox",checked:n,onChange:this.onChangeCheckbox})))))}}]),a}(n.Component),_=w(G),J=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this,e)).onListenForBadges=function(){n.setState({loading:!0}),n.props.firebase.badges().orderByChild("createdAt").limitToLast(n.state.limit).on("value",(function(e){var t=e.val();if(t){var a=Object.keys(t).map((function(e){return Object(S.a)({},t[e],{uid:e})}));n.setState({badges:a,loading:!1})}else n.setState({badges:null,loading:!1})}))},n.onChange=function(e){n.setState(Object(R.a)({},e.target.name,e.target.value))},n.onCreateBadge=function(e,t){n.props.firebase.badges().push({createdAt:n.props.firebase.serverValue.TIMESTAMP,category:n.state.category,description:n.state.description,image:n.state.image,link:n.state.link,name:n.state.name,ownerID:t.uid}),n.setState({category:"",description:"",image:"",link:"",name:""}),e.preventDefault()},n.onEditBadge=function(e,t,a,r,o,i){e.uid;var s=Object(T.a)(e,["uid"]);n.props.firebase.badge(n.state.companyID,e.uid).set(Object(S.a)({},s,{category:t,description:a,image:r,link:o,name:i,editedAt:n.props.firebase.serverValue.TIMESTAMP}))},n.onRemoveBadge=function(e){n.props.firebase.badge(e).remove()},n.onNextPage=function(){n.setState((function(e){return{limit:e.limit+5}}),n.onListenForBadges)},n.state={editMode:!1,loading:!1,limit:25,category:"",description:"",image:"",link:"",name:""},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.onListenForBadges()}},{key:"componentWillUnmount",value:function(){this.props.firebase.badges().off()}},{key:"render",value:function(){var e=this,t=this.state,a=t.category,n=t.description,o=t.image,i=t.link,s=t.name,l=t.badges,c=t.loading;return r.a.createElement(v.Consumer,null,(function(t){return r.a.createElement("div",{id:"content-wrap",className:"CreateBadgePage"},r.a.createElement("h1",null,"Create A New Badge"),r.a.createElement("form",{onSubmit:function(a){return e.onCreateBadge(a,t)}},r.a.createElement("div",{className:""},r.a.createElement("div",{className:"form-group "},r.a.createElement("input",{className:"form-control form-input col-10",type:"text",placeholder:"Badge Name",value:s,name:"name",onChange:e.onChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control form-input col-10",type:"text",placeholder:"Badge Category",value:a,name:"category",onChange:e.onChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control form-input col-10",type:"text",placeholder:"Badge Description",value:n,name:"description",onChange:e.onChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control form-input col-10",type:"text",placeholder:"Badge Link",value:i,name:"link",onChange:e.onChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control form-input col-10",type:"text",placeholder:"Badge Image URL",value:o,name:"image",onChange:e.onChange}))),r.a.createElement("div",{className:"text-center"},r.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Add Badge"))),c&&r.a.createElement("div",null,"Loading ..."),l&&r.a.createElement(V,{authUser:t,badges:l,onEditBadge:e.onEditBadge,onRemoveBadge:e.onRemoveBadge}),!c&&l&&r.a.createElement("button",{className:"btn btn-secondary",type:"button",onClick:e.onNextPage},"Show More"),!l&&r.a.createElement("div",null,"There are no badges ..."))}))}}]),a}(n.Component),Y=w(J),H=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this,e)).handleChange=function(e){if(e.target.files[0]){var t=e.target.files[0];n.setState((function(){return{image:t}}))}},n.handleUpload=function(){var e=n.state.image;n.props.firebase.storage.ref("images/".concat(e.name)).put(e).on("state_changed",(function(e){var t=Math.round(e.bytesTransferred/e.totalBytes*100);n.setState({progress:t})}),(function(e){console.log(e)}),(function(){n.props.firebase.storage.ref("images").child(e.name).getDownloadURL().then((function(e){n.setState({url:e})}))}))},n.state={image:null,url:"",progress:0},n}return Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"center"},r.a.createElement("br",null),r.a.createElement("h2",{className:"green-text"},"React Firebase Image Uploader"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"row"},r.a.createElement("progress",{value:this.state.progress,max:"100",className:"progress"})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"file-field input-field"},r.a.createElement("div",{className:"btn"},r.a.createElement("span",null,"File"),r.a.createElement("input",{type:"file",onChange:this.handleChange})),r.a.createElement("div",{className:"file-path-wrapper"},r.a.createElement("input",{className:"file-path validate",type:"text"}))),r.a.createElement("button",{onClick:this.handleUpload,className:"waves-effect waves-light btn"},"Upload"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("img",{src:this.state.url||"https://via.placeholder.com/400x300",alt:"Uploaded Images",height:"300",width:"400"}),r.a.createElement("span",null,"URL: ",this.state.url))}}]),a}(n.Component),q=w(H),z=function(){return r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,path:c,component:V}),r.a.createElement(l.b,{exact:!0,path:"/badges/new-photo",component:q}),r.a.createElement(l.b,{exact:!0,path:"/badges/new",component:Y}),r.a.createElement(l.b,{exact:!0,path:"/badges/:id",component:_}))},K={email:"",error:null},Q=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){var t=n.state.email;n.props.firebase.doPasswordReset(t).then((function(){n.setState(Object(S.a)({},K))})).catch((function(e){n.setState({error:e})})),e.preventDefault()},n.onChange=function(e){n.setState(Object(R.a)({},e.target.name,e.target.value))},n.state=Object(S.a)({},K),n}return Object(h.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.error,n=""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"email",autoComplete:"email",value:this.state.email,onChange:this.onChange,type:"text",placeholder:"Email Address"}),r.a.createElement("button",{disabled:n,type:"submit"},"Reset My Password"),a&&r.a.createElement("p",null,a.message))}}]),a}(n.Component),X=function(){return r.a.createElement("p",null,r.a.createElement(s.b,{to:"/pw-forget"},"Forgot Password?"))},Z=function(){return r.a.createElement("div",{id:"content-wrap",className:"PasswordForgetPage"},r.a.createElement("h1",null,"PasswordForget"),r.a.createElement($,null),r.a.createElement("p",null,r.a.createElement(s.b,{to:"/"},"Nevermind Go Back")))},$=w(Q),ee={email:"",password:"",error:null},te="\n  An account with an E-Mail address to\n  this social account already exists. Try to login from\n  this account instead and associate your social accounts on\n  your personal account page.\n",ae=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){var t=n.state,a=t.email,r=t.password;n.props.firebase.doSignInWithEmailAndPassword(a,r).then((function(){n.setState(Object(S.a)({},ee)),n.props.history.push(c)})).catch((function(e){n.setState({error:e})})),e.preventDefault()},n.onChange=function(e){n.setState(Object(R.a)({},e.target.name,e.target.value))},n.state=Object(S.a)({},ee),n}return Object(h.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,n=e.error,o=""===a||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"email",value:t,autoComplete:"email",onChange:this.onChange,type:"text",placeholder:"Email Address"}),r.a.createElement("input",{name:"password",autoComplete:"current-password",value:a,onChange:this.onChange,type:"password",placeholder:"Password"}),r.a.createElement("button",{disabled:o,type:"submit"},"Sign In"),n&&r.a.createElement("p",null,n.message))}}]),a}(n.Component),ne=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){n.props.firebase.doSignInWithGoogle().then((function(e){return n.props.firebase.user(e.user.uid).set({username:e.user.displayName,email:e.user.email})})).then((function(){n.setState({error:null}),n.props.history.push(c)})).catch((function(e){"auth/account-exists-with-different-credential"===e.code&&(e.message=te),n.setState({error:e})})),e.preventDefault()},n.state={error:null},n}return Object(h.a)(a,[{key:"render",value:function(){var e=this.state.error;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("button",{type:"submit"},"Sign In with Google"),e&&r.a.createElement("p",null,e.message))}}]),a}(n.Component),re=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){n.props.firebase.doSignInWithFacebook().then((function(e){return n.props.firebase.user(e.user.uid).set({username:e.additionalUserInfo.profile.name,email:e.additionalUserInfo.profile.email})})).then((function(){n.setState({error:null}),n.props.history.push(c)})).catch((function(e){"auth/account-exists-with-different-credential"===e.code&&(e.message=te),n.setState({error:e})})),e.preventDefault()},n.state={error:null},n}return Object(h.a)(a,[{key:"render",value:function(){var e=this.state.error;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("button",{type:"submit"},"Sign In with Facebook"),e&&r.a.createElement("p",null,e.message))}}]),a}(n.Component),oe=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){n.props.firebase.doSignInWithTwitter().then((function(e){return n.props.firebase.user(e.user.uid).set({username:e.additionalUserInfo.profile.name,email:e.additionalUserInfo.profile.email})})).then((function(){n.setState({error:null}),n.props.history.push(c)})).catch((function(e){"auth/account-exists-with-different-credential"===e.code&&(e.message=te),n.setState({error:e})})),e.preventDefault()},n.state={error:null},n}return Object(h.a)(a,[{key:"render",value:function(){var e=this.state.error;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("button",{type:"submit"},"Sign In with Twitter"),e&&r.a.createElement("p",null,e.message))}}]),a}(n.Component),ie=function(){return r.a.createElement("p",null,"Already have an account? ",r.a.createElement(s.b,{to:"/signin"},"Sign In"))},se=Object(E.a)(l.g,w)(ae),le=Object(E.a)(l.g,w)(ne),ce=(Object(E.a)(l.g,w)(re),Object(E.a)(l.g,w)(oe),function(){return r.a.createElement("div",{id:"content-wrap"},r.a.createElement("h1",null,"SignIn"),r.a.createElement("p",null,"use your\xa0@students.makeschool.com,\xa0@makeschool.com\xa0, or\xa0@students.dominican.edu"),r.a.createElement(se,null),r.a.createElement(le,null),r.a.createElement(X,null),r.a.createElement(de,null))}),ue={username:"",email:"",passwordOne:"",passwordTwo:"",isAdmin:!1,error:null},me=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){var t=n.state,a=t.username,r=t.email,o=t.passwordOne,i=t.isAdmin,s={};s.Priority=i?"ADMIN":"STUDENT",n.props.firebase.doCreateUserWithEmailAndPassword(r,o).then((function(){return n.props.firebase.doSendEmailVerification()})).then((function(e){return e.user.updateProfile({displayName:a}),n.props.firebase.user(e.user.uid).set({username:a,email:r,roles:s})})).then((function(){n.setState(Object(S.a)({},ue)),n.props.history.push(c)})).catch((function(e){"auth/email-already-in-use"===e.code&&(e.message="\n  An account with this E-Mail address already exists.\n  Try to login with this account instead. If you think the\n  account is already used from one of the social logins, try\n  to sign in with one of them. Afterward, associate your accounts\n  on your personal account page.\n"),n.setState({error:e})})),e.preventDefault()},n.validate=function(e){return/\S+@makeschool.com/.test(String(e).toLowerCase())?(n.isAdmin=!0,!0):/\S+@students.makeschool.com/.test(String(e).toLowerCase())||/\S+@students.dominican.edu/.test(String(e).toLowerCase())},n.onChange=function(e){n.setState(Object(R.a)({},e.target.name,e.target.value))},n.onChangeCheckbox=function(e){n.setState(Object(R.a)({},e.target.name,e.target.checked))},n.state=Object(S.a)({},ue),n}return Object(h.a)(a,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.email,n=e.passwordOne,o=e.passwordTwo,i=e.validEmail,s=void 0===i?this.validate(a):i,l=e.error,c=n!==o||""===n||""===a||!s||""===t;return r.a.createElement("div",null,r.a.createElement("p",null,"use your\xa0@students.makeschool.com,\xa0@makeschool.com\xa0, or\xa0@students.dominican.edu"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"username",autoComplete:"username",value:t,onChange:this.onChange,type:"text",placeholder:"Full Name"}),r.a.createElement("input",{name:"email",autoComplete:"email",value:a,onChange:this.onChange,type:"text",placeholder:"Email Address"}),r.a.createElement("input",{name:"passwordOne",autoComplete:"new-password",value:n,onChange:this.onChange,type:"password",placeholder:"Password"}),r.a.createElement("input",{name:"passwordTwo",autoComplete:"new-password",value:o,onChange:this.onChange,type:"password",placeholder:"Confirm Password"}),r.a.createElement("button",{disabled:c,type:"submit"},"Sign Up"),l&&r.a.createElement("p",null,l.message)))}}]),a}(n.Component),de=function(){return r.a.createElement("p",null,"Don't have an account? ",r.a.createElement(s.b,{to:"/signup"},"Sign Up"))},pe=Object(E.a)(l.g,w)(me),ge=function(){return r.a.createElement("div",{id:"content-wrap",className:"SignUpPage"},r.a.createElement("h1",null,"SignUp"),r.a.createElement(pe,null),r.a.createElement(ie,null))},he={passwordOne:"",passwordTwo:"",error:null},fe=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){var t=n.state.passwordOne;n.props.firebase.doPasswordUpdate(t).then((function(){n.setState(Object(S.a)({},he))})).catch((function(e){n.setState({error:e})})),e.preventDefault()},n.onChange=function(e){n.setState(Object(R.a)({},e.target.name,e.target.value))},n.state=Object(S.a)({},he),n}return Object(h.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.passwordOne,n=e.passwordTwo,o=e.error,i=a!==n||""===a;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{hidden:!0,name:"email",autoComplete:"email",value:t,type:"text",placeholder:"Email Address"}),r.a.createElement("input",{name:"passwordOne",autoComplete:"new-password",value:a,onChange:this.onChange,type:"password",placeholder:"New Password"}),r.a.createElement("input",{name:"passwordTwo",autoComplete:"new-password",value:n,onChange:this.onChange,type:"password",placeholder:"Confirm New Password"}),r.a.createElement("button",{disabled:i,type:"submit"},"Reset My Password"),o&&r.a.createElement("p",null,o.message))}}]),a}(n.Component),be=w(fe);var Ee=N((function(){return r.a.createElement(s.a,null,r.a.createElement("div",{id:"page-container",className:"App"},r.a.createElement(d,null),r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,path:"/"},r.a.createElement(l.a,{to:c})),r.a.createElement(l.b,{exact:!0,path:"/signin",component:ce}),r.a.createElement(l.b,{exact:!0,path:"/signup",component:ge}),r.a.createElement(l.b,{exact:!0,path:"/account",component:M}),r.a.createElement(l.b,{exact:!0,path:"/pw-forget",component:Z}),r.a.createElement(l.b,{exact:!0,path:"/pw-reset",component:be}),r.a.createElement(l.b,{path:c,component:z}),r.a.createElement(l.b,{path:"*",component:L})),r.a.createElement(p,null)))}));i.a.render(r.a.createElement(C.Provider,{value:new k},r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ee,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.40d9ae2a.chunk.js.map