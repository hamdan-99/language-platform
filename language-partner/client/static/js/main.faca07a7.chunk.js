(this["webpackJsonplanguage-partner"]=this["webpackJsonplanguage-partner"]||[]).push([[0],{173:function(e,a,t){e.exports=t(208)},203:function(e,a,t){},208:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(11),o=t.n(l),i=t(13),s=t(14),c=t(16),u=t(15),p=t(65),m=t(27),d=t(20),h=function(){return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),window.localStorage.clear(),window.location="/"},style:{marginTop:"8px"}},r.a.createElement("button",{title:"Log Out",style:{background:"none",border:"none",color:"red"}},r.a.createElement("i",{className:"fa fa-sign-out","aria-hidden":"true"})))},g=(t(181),function(e){var a=e.user;return console.log("user",a),r.a.createElement("nav",{style:{fontWeight:"bold",fontSize:"35px",position:"absolute",right:"0px"},className:"navbar navbar-expand-lg navbar-dark "},r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarText"},r.a.createElement("div",{className:"navbar-nav mr-auto"},!a&&r.a.createElement(r.a.Fragment,null,r.a.createElement(d.c,{style:{color:"purple"},className:"nav-link",to:"/home"},r.a.createElement("i",{class:"fa fa-home","aria-hidden":"true"})),r.a.createElement(d.c,{style:{color:"lightGreen"},className:"nav-link",to:"/Signup",placeholder:"Sign Up"},r.a.createElement("i",{className:"fa fa-user-plus","aria-hidden":"true"})),r.a.createElement(d.c,{style:{color:"lightGreen"},className:"nav-link",to:"/login"},r.a.createElement("i",{className:"fa fa-sign-in","aria-hidden":"true",title:"Login"}))),a&&r.a.createElement(r.a.Fragment,null,r.a.createElement(d.c,{style:{color:"purple"},className:"nav-link",to:"/home"},r.a.createElement("i",{class:"fa fa-home","aria-hidden":"true"})),r.a.createElement(d.c,{style:{color:"lightBlue"},className:"nav-link",to:"/profile"},r.a.createElement("i",{className:"fa fa-user","aria-hidden":"false",title:"Profile"}," ")),r.a.createElement(h,null)))))}),f=t(49),b=t(66),E=t.n(b),v=t(90),y=t(7),O=t(26),j=t(258),N=t(18),w=t(209),k=t(5),S=t(50),x=t.n(S);var P={init:function(){},log:function(e){console.error(e)}};x.a.interceptors.response.use(null,(function(e){return e.response&&e.response.status>=400&&422!==e.response.status&&e.response.status<500&&(P.log(e),f.b.error("An unexpected error occurrred ")),e.response&&422===e.response.status&&f.b.error("E-mail is registered !",{position:f.b.POSITION.TOP_CENTER}),Promise.reject(e)}));var C={login:function(e,a,t){x.a.post("/api/users/login",{email:e,password:a}).then((function(e){t(e),window.location="/"}))},register:function(){var e=Object(v.a)(E.a.mark((function e(a){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.post("/api/users",{firstName:a.firstName,lastName:a.lastName,location:a.location,nativeLanguage:a.nativeLanguage,languageToLearn:a.languageToLearn,phoneNumber:a.phoneNumber,Gender:a.Gender,skill:a.skill,email:a.email,password:a.password,birthdate:a.birthdate}).then((function(e){e&&(f.b.success("Student Created !",{position:f.b.POSITION.TOP_CENTER}),window.location="/login")}));case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),getUsers:function(e,a){x.a.get("/api/users?access_token=".concat(e)).then((function(e){a(e)}))},getPosts:function(e,a){x.a.get("/api/Posts?access_token=".concat(e)).then((function(e){a(e)}))},addPost:function(e,a,t){x.a.post("/api/Posts?access_token=".concat(a),e).then((function(e){t(e)}))},updatePost:function(e,a,t){x.a.patch("/api/Posts/".concat(e.id,"?access_token=").concat(a),e).then((function(e){t(e)}))},getSinglePost:function(e,a,t){x.a.post("/api/Posts/".concat(e,"/accessTokens?access_token=").concat(a)).then((function(e){t(e)}))},uploadImage:function(e,a,t,n,r){x.a.post("/api/PostImages/upload?post_id=".concat(t,"&access_token=").concat(a,"&user_id=").concat(n),e).then((function(e){r(e)}))}},T=function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){var e=this,a=this.props.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,null),r.a.createElement("form",{onSubmit:function(){var a=Object(v.a)(E.a.mark((function a(t){return E.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),a.next=3,C.register(e.props.values);case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),className:a.container},r.a.createElement(w.a,{className:a.leftSide},r.a.createElement("h3",{style:{color:"purple"}},"Sign up"),r.a.createElement(O.b,{name:"firstName",label:"First Name",margin:"normal",htmlFor:"firstName",id:"firstName",onChange:this.props.handleChange,value:this.props.values.firstName,fullWidth:!0}),r.a.createElement(O.b,{name:"lastName",label:"Last Name",margin:"normal",htmlFor:"lastName",id:"lastName",onChange:this.props.handleChange,value:this.props.values.lastName,fullWidth:!0}),r.a.createElement(O.b,{name:"phoneNumber",htmlFor:"phoneNumber",id:"phoneNumber",type:"number",label:"Phone Number",margin:"normal",onChange:this.props.handleChange,value:this.props.values.phoneNumber,fullWidth:!0}),r.a.createElement(O.b,{name:"email",htmlFor:"email",id:"email",label:"E-mail",margin:"normal",onChange:this.props.handleChange,value:this.props.values.email,fullWidth:!0}),r.a.createElement(O.b,{type:"password",name:"password",htmlFor:"password",id:"password",label:"Password",margin:"normal",onChange:this.props.handleChange,onBlur:this.props.handleBlur,fullWidth:!0}),r.a.createElement(O.b,{className:a.birth,type:"date",name:"birthdate",htmlFor:"birthdate",id:"birthdate",margin:"normal",onChange:this.props.handleChange,value:this.props.values.birthdate,fullWidth:!0})),r.a.createElement(w.a,{className:a.rightSide},r.a.createElement(O.a,{name:"Gender",htmlFor:"Gender",id:"Gender",label:"Gender",margin:"normal",onChange:this.props.handleChange,value:this.props.values.Gender,options:[{label:"male",value:"male"},{label:"female",value:"female"}],fullWidth:!0}),r.a.createElement(O.a,{name:"location",htmlFor:"location",id:"location",label:"Location",margin:"normal",onChange:this.props.handleChange,value:this.props.values.location,options:[{value:"Brussels",label:"Brussels"},{value:"Flamish-Brabant",label:"Flamish-Brabant"},{value:"Antwerp",label:"Antwerp"},{value:"Limburg",label:"Limburg"},{value:"Luik(Liege)",label:"Luik(Liege)"},{value:"West-Flanders",label:"West-Flanders"}],fullWidth:!0}),r.a.createElement(O.a,{name:"nativeLanguage",htmlFor:"nativeLanguage",id:"nativeLanguage",label:"Native Language",margin:"normal",onChange:this.props.handleChange,value:this.props.values.nativeLanguage,options:[{label:"Dutch",value:"Dutch"},{label:"French",value:"French"},{label:"German",value:"German"},{label:"English",value:"English"}],fullWidth:!0}),r.a.createElement(O.a,{name:"languageToLearn",htmlFor:"languageToLearn",id:"languageToLearn",label:"Language To Learn",margin:"normal",onChange:this.props.handleChange,value:this.props.values.languageToLearn,options:[{label:"Dutch",value:"Dutch"},{label:"French",value:"French"},{label:"German",value:"German"},{label:"English",value:"English"}],fullWidth:!0}),r.a.createElement(O.a,{name:"skill",htmlFor:"skill",id:"skill",label:"Skill",margin:"normal",onChange:this.props.handleChange,value:this.props.values.skill,options:[{label:"IT",value:"IT"},{label:"Health",value:"Health"},{label:"Law",value:"Law"},{label:"Sports",value:"Sports"},{label:"Journalism",value:"Journalism"},{label:"Education",value:"Education"},{label:"Literature",value:"Literature"}],fullWidth:!0}),r.a.createElement("div",{className:a.Save},r.a.createElement(j.a,{type:"submit",disabled:this.props.pristine||this.props.submitting,variant:"contained",color:"secondary",style:{marginLeft:"220px"}},"Sign up")))))}}]),t}(n.Component),L=Object(m.b)((function(e){return{auth:e.auth}}))(Object(y.d)({mapPropsToValues:function(e){return{firstName:"",lastName:"",location:"",nativeLanguage:"",languageToLearn:"",phoneNumber:"",Gender:"",skill:"",email:"",password:"",birthdate:""}},validationSchema:N.b().shape({firstName:N.c().required(),lastName:N.c().required(),location:N.c().required(),nativeLanguage:N.c().required(),languageToLearn:N.c().required(),phoneNumber:N.c().required(),Gender:N.c().required(),skill:N.c().required(),email:N.c().email("E-mail is invalid").required(),password:N.c().min(6,"Password at least 8 chars").required(),birthdate:N.a().required()}),handleSubmit:function(){var e=Object(v.a)(E.a.mark((function e(a,t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.setSubmitting,t.props;case 1:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}()})(Object(k.a)((function(e){return{container:{position:"fixed",top:"50px",display:"flex",flexDirection:"row wrap",width:"80%",opacity:"80%"},Save:{position:"fixed",bottom:"140px"},leftSide:{flex:2,margin:e.spacing(2),padding:e.spacing(2)},rightSide:{flex:1,margin:e.spacing(2),padding:e.spacing(2)}}}))(T))),D=function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{style:{color:"red",position:"absolute",top:"150px",left:"300px",margin:"auto"}},r.a.createElement("span",{style:{color:"red",position:"absolute",left:"200px",marginTop:"-50px"}},"Welcome Home"),"This Page are going to be ready Soon ...!"))}}]),t}(n.Component),I=t(28),F=t(256),G=t(257),_=t(259),B=t(260),W=t(153),q=t.n(W),U=t(151),A=t.n(U),R=t(152),M=t.n(R);function H(e){return r.a.createElement(G.a,Object.assign({button:!0,component:d.b},e))}var V=function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(F.a,null,r.a.createElement(H,{to:"/admin"},r.a.createElement(A.a,null),r.a.createElement(_.a,null,r.a.createElement(B.a,{primary:"Dashboard"}))),r.a.createElement(H,{to:"/admin/posts"},r.a.createElement(M.a,null),r.a.createElement(_.a,null,r.a.createElement(B.a,{primary:"Posts"}))),r.a.createElement(H,{to:"/admin/users"},r.a.createElement(q.a,null),r.a.createElement(_.a,null,r.a.createElement(B.a,{primary:"Users"}))))}}]),t}(n.Component),z=t(261),J=t(262),Y=t(94),X=t(22),K=t.n(X),Q=t(273),Z=t(255),ee=t(154),ae=t.n(ee),te=t(155),ne=t.n(te),re=t(263),le=function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={open:!0},e.handleDrawerOpen=function(a){e.setState({open:!0})},e.handleDrawerClose=function(a){e.setState({open:!1})},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{id:"admin-page",className:e.root},r.a.createElement(z.a,{className:K()(e.appBar,this.state.open&&e.appBarShift)},r.a.createElement(J.a,{className:e.Toolbar},r.a.createElement(Z.a,{onClick:this.handleDrawerOpen},r.a.createElement(ae.a,null)),r.a.createElement(Y.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0},"Control Panel"))),r.a.createElement(Q.a,{classes:{paper:K()(e.drawerPaper,!this.state.open&&e.drawerPaperClose)},variant:"permanent",open:!0},r.a.createElement("div",{className:e.toolbarIcon},r.a.createElement(Z.a,{onClick:this.handleDrawerClose},r.a.createElement(ne.a,null))),r.a.createElement(re.a,null),r.a.createElement(V,null)),r.a.createElement("main",{className:e.content},r.a.createElement("div",{className:e.appBarSpace}),this.props.children))}}]),t}(n.Component),oe=Object(k.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRigh:24},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},appBarSpace:e.mixins.toolbar,drawerPaper:{position:"relative",whiteSpace:"noWrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:{overflowX:"hidden",width:e.spacing(0),transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},toolbarIcon:Object(I.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"8px 8px"},e.mixins.toolbar,{backgroundColor:"lightBlue"}),content:{flexGrow:1,padding:e.spacing(3),height:"650px",backgroundColor:"lightGray",overflow:"auto"}}}))(le),ie=function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("h1",null,"You are logged in with token ",this.props.auth.token)}}]),t}(n.Component),se=Object(m.b)((function(e){return{auth:e.auth}}),(function(e){return{}}))(Object(p.g)(ie)),ce=(t(203),function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"d-flex justify-content-center h-100"},r.a.createElement("div",{style:{marginTop:"100px"},className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h3",null,"Sign In")),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:function(a){a.preventDefault(),e.props.login(e.props.values.email,e.props.values.password)}},r.a.createElement("div",{className:"input-group form-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},r.a.createElement("i",{style:{marginLeft:"5px"},className:"fa fa-user-circle-o","aria-hidden":"true"}))),r.a.createElement("input",{className:"form-control",key:1,type:"email",name:"email",placeholder:"username",onChange:this.props.handleChange,onBlur:this.props.handleBlur,errors:this.props.errors.email})),r.a.createElement("div",{className:"input-group form-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},r.a.createElement("i",{style:{marginLeft:"5px"},className:"fa fa-key"}))),r.a.createElement("input",{key:2,className:"form-control",type:"password",name:"password",placeholder:"Password",onChange:this.props.handleChange,onBlur:this.props.handleBlur,errors:this.props.errors.password})),r.a.createElement("div",{className:"row align-items-center remember"},r.a.createElement("input",{type:"checkbox"}),r.a.createElement("h5",{style:{color:"gray",marginBottom:"21px"}},r.a.createElement("span",{style:{fontSize:"15px",position:"absolute",top:"195px"}},"Remember Me"))),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{style:{marginLeft:"270px",paddingLeft:"15px"},className:"btn btn-primary"},"login")))),r.a.createElement("div",{className:"card-footer"},r.a.createElement("div",{className:"d-flex justify-content-center links"},"Don't have an account?",r.a.createElement(d.b,{to:"/signup"},"Sign Up")),r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement(d.b,{to:"#"},"Forgot your password?")))))))}}]),t}(n.Component)),ue=Object(y.d)({mapPropsToValues:function(){return{email:"",password:""}},validationSchema:N.b().shape({email:N.c().email("E-mail is Invalid").required("The E-mail is required!"),password:N.c().min(6,"Your Password should be more 6").max(12,"the maximum length of Password is 12").required("Password is required ")}),handleSubmit:function(e,a){a.setSubmitting;console.log("submmited",e),f.b.info("you are logging in ")}})(Object(m.b)((function(e){return{auth:e.auth}}),(function(e){return{login:function(a,t){e(function(e,a){return function(t){C.login(e,a,(function(a){t({type:"LOGIN",payload:{email:e,token:a.data.id,userId:a.data.userId}})}))}}(a,t))}}}))(ce)),pe=function(){return r.a.createElement("h1",null,"Not Found")},me=function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"login-page"},this.props.children)}}]),t}(n.Component),de=t(264),he=t(265),ge=t(269),fe=t(266),be=t(267),Ee=t(268),ve=t(270),ye=function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){var e=this.props,a=e.rows,t=e.columns,n=e.classes;return r.a.createElement(de.a,{component:w.a},r.a.createElement(he.a,{className:n.table,"aria-label":"simple table"},r.a.createElement(fe.a,null,r.a.createElement(be.a,null,t?t.map((function(e){return r.a.createElement(Ee.a,{key:e.name},e.label)})):null)),r.a.createElement(ge.a,null,a?a.map((function(e,a){return r.a.createElement(be.a,{key:e.id},t.map((function(t,n){return r.a.createElement(Ee.a,{key:a},"id"===t.name?r.a.createElement(ve.a,{to:"/admin/posts/edit/".concat(e[t.name]),component:d.b},e[t.name]):e[t.name])})))})):null)))}}]),t}(n.Component),Oe=Object(k.a)((function(e){return{table:{minWidth:650}}}))(ye),je=[{label:"ID",name:"id"},{label:"Email",name:"email"},{label:"Name",name:"firstName"}],Ne=function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.auth.token)}},{key:"render",value:function(){var e=this.props.admin.users;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Users"),r.a.createElement(Oe,{columns:je,rows:e}))}}]),t}(n.Component),we=Object(m.b)((function(e){return{auth:e.auth,admin:e.admin}}),(function(e){return{getUsers:function(a){e(function(e){return function(a){C.getUsers(e,(function(e){a({type:"GOT_USERS",payload:e.data})})),console.log("token",e)}}(a))}}}))(Ne),ke=t(271),Se=t(156),xe=t.n(Se),Pe=[{label:"ID",name:"id"},{label:"Title",name:"title"}],Ce=function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.getPosts(this.props.auth.token)}},{key:"render",value:function(){var e=this.props.admin.posts,a=this.props.classes;return r.a.createElement("div",null,r.a.createElement("h1",null,"Posts"),r.a.createElement(Oe,{columns:Pe,rows:e}),r.a.createElement(ke.a,{component:d.b,to:"/admin/posts/add",color:"secondary","aria-label":"Add",className:a.fab},r.a.createElement(xe.a,null)))}}]),t}(n.Component),Te=Object(m.b)((function(e){return{auth:e.auth,admin:e.admin}}),(function(e){return{getPosts:function(a){e(function(e){return function(a){C.getPosts(e,(function(e){a({type:"GOT_POSTS",payload:e.data})})),console.log("token2",e)}}(a))}}}))(Object(k.a)((function(e){return{fab:{position:"fixed",bottom:"50px",right:"50px"}}}))(Ce)),Le=t(158),De=t.n(Le),Ie=t(157),Fe=t.n(Ie),Ge=function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).uploadImage=function(a){var t=new FormData;t.append("file",a.target.files[0],(new Date).getTime().toString()+a.target.files[0].name),e.props.uploadImage(t,e.props.auth.token,e.props.admin.post.id,e.props.auth.user.uesrId)},e}return Object(s.a)(t,[{key:"componentDidUpdate",value:function(e,a){var t=this;if("add"===this.props.match.params.view&&this.props.admin.posts.filter((function(e){return e.title===t.props.values.title})).length>0){var n=this.props.admin.posts.filter((function(e){return e.title===t.props.values.title}))[0];this.props.history.push("/admin/posts/edit/"+n.dispatch)}this.props.admin.post.id!==e.admin.post.id&&(console.log("post",this.props.admin.post),this.props.setValues(e.admin.posts.map((function(e){return e.id===t.props.match.params.id?e:null}))))}},{key:"componentDidMount",value:function(e,a){"edit"===this.props.match.params.view&&this.props.match.params.id&&this.props.getSinglePost(this.props.match.params.id,this.props.auth.token)}},{key:"render",value:function(){var e=this,a=this.props.classes;return r.a.createElement("div",null,r.a.createElement(y.b,{className:a.container},r.a.createElement(w.a,{className:a.leftSide},r.a.createElement(O.b,{name:"title",label:"Title",margin:"normal",onChange:function(a){return e.props.setFieldValue("slug",a.target.value.toLowerCase().replace(/ /g,"_"))},fullWidth:!0}),r.a.createElement(O.b,{name:"slug",label:"Slug",margin:"normal"}),r.a.createElement(O.b,{name:"content",label:"Content",margin:"normal",fullWidth:!0})),r.a.createElement(w.a,{className:a.rightSide},r.a.createElement(O.a,{name:"status",label:"Status",margin:"normal",options:[{label:"Published",value:!0},{label:"Unpublished",value:!1}],fullWidth:!0}),r.a.createElement("div",{className:a.Save},r.a.createElement(j.a,{variant:"contained",color:"secondary",onClick:function(a){e.props.handleSubmit()}},r.a.createElement(Fe.a,null)," Save")),r.a.createElement("div",null,r.a.createElement(j.a,{variant:"contained",color:"secondary",onClick:function(e){$(".MyFile").trigger("click")}},r.a.createElement(De.a,null)," Upload Post Image"),r.a.createElement("input",{type:"file",style:{display:"none"},className:"MyFile"})))))}}]),t}(n.Component),_e=Object(p.g)(Object(m.b)((function(e){return{auth:e.auth,admin:e.admin}}),(function(e){return{addPost:function(a,t){e(function(e,a){return function(t){C.addPost(e,a,(function(e){t({type:"POST_ADDED",payload:e.data})}))}}(a,t))},updatePost:function(a,t){e(function(e,a){return function(t){C.updatePost(e,a,(function(e){t({type:"UPDATED_POST",payload:e.data})}))}}(a,t))},getSinglePost:function(a,t){e(function(e,a){return function(t){C.getSinglePost(e,a,(function(e){t({type:"GOT_SINGLE_POST",payload:e.data})}))}}(a,t))},uploadImage:function(a,t,n,r){e(function(e,a,t,n){return function(r){C.uploadImage(e,a,t,n,(function(e){r({type:"UPLOADED_IMAGE",payload:e.data})}))}}(a,t,n,r))}}}))(Object(y.d)({mapPropsToValues:function(e){return{title:e.match.params.id?e.admin.post.title:console.log("title",e.admin.posts),slug:e.match.params.id?e.admin.post.slug:"",created_at:e.match.params.id?e.admin.post.created_at:(new Date).getTime(),status:!!e.match.params.id&&e.admin.post.status,content:e.match.params.id?e.admin.post.content:""}},validationSchema:N.b().shape({title:N.c().required("Title is required"),slug:N.c().required(),content:N.c().required()}),handleSubmit:function(e,a){a.setSubmitting;var t=a.props;if("edit"===t.match.params.view){var n=Object(I.a)({},e,{id:t.match.params.id});t.updatePost(n,t.auth.token)}else t.addPost(e,t.auth.token)}})(Object(k.a)((function(e){return{container:{margin:e.spacing(3),display:"flex",flexDirection:"row wrap",width:"768px"},Save:{marginBottom:e.spacing(2)},formControl:{margin:e.spacing(1)},leftSide:{flex:2,height:"100%",margin:e.spacing(1),padding:e.spacing(3)},rightSide:{flex:1,height:"100%",margin:e.spacing(1),padding:e.spacing(3)}}}))(Ge)))),Be=(t(204),t(142),function(){return r.a.createElement("div",null,r.a.createElement("h1",{style:{color:"red",position:"absolute",top:"200px"}},"Hopefully, By Saturday, This page will be ready Completely ",r.a.createElement("br",null),r.a.createElement("span",{style:{position:"absolute",left:"100px"}},"===== Profile Page ===== Loading... =====")))}),We=function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return console.log("props",this),r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{user:this.props.auth.user.token}),r.a.createElement(f.a,null),r.a.createElement("main",{className:"container"},r.a.createElement(p.d,null,r.a.createElement(p.b,{path:"/Signup",component:L}),r.a.createElement(p.b,{path:"/home",component:D}),r.a.createElement(p.b,{path:"/profile",component:Be}),r.a.createElement(p.b,{path:"/login",render:function(a){return r.a.createElement("div",null,e.props.auth.token?r.a.createElement(p.a,{to:"/"}):r.a.createElement(me,null,r.a.createElement(ue,null)))}}),r.a.createElement(p.b,{path:"/admin",render:function(a){return r.a.createElement("div",null,e.props.auth.token?r.a.createElement(oe,null,r.a.createElement(se,null)):r.a.createElement(me,null,r.a.createElement(ue,null)))}}),r.a.createElement(p.b,{exact:!0,path:"/admin/posts",render:function(a){return r.a.createElement("div",null,e.props.auth.token?r.a.createElement(oe,null,r.a.createElement(Te,null)):r.a.createElement(me,null,r.a.createElement(ue,null)))}}),r.a.createElement(p.b,{path:"/admin/users",render:function(a){return r.a.createElement("div",null,e.props.auth.token?r.a.createElement(oe,null,r.a.createElement(we,null)):r.a.createElement(me,null,r.a.createElement(ue,null)))}}),r.a.createElement(p.b,{path:"/admin/posts/:view/:id?",render:function(a){return r.a.createElement("div",null,e.props.auth.token?r.a.createElement(oe,null,r.a.createElement(_e,null)):r.a.createElement(me,null,r.a.createElement(ue,null)))}}),r.a.createElement(p.b,{path:"/not-found",component:pe}),r.a.createElement(p.a,{from:"/",exact:!0,to:"/home"}),r.a.createElement(p.a,{to:"/not-found"}))))}}]),t}(n.Component),qe=Object(m.b)((function(e){return{auth:e.auth,user:e.user}}),(function(e){return{}}))(We),Ue=t(159),Ae=t(40),Re=t(160),Me=t(127),He=t(161),Ve=t.n(He),ze={user:{},token:null,error:null},Je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ze,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"LOGIN":return Object(I.a)({},e,{user:a.payload,token:a.payload.token});case"SHOW_ERROR":return Object(I.a)({},e,{error:a.payload});default:return e}},Ye={users:[],posts:[],post:{}},Xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GOT_USERS":return Object(I.a)({},e,{users:a.payload});case"GOT_POSTS":return Object(I.a)({},e,{posts:a.payload});case"POST_ADDED":return Object(I.a)({},e,{posts:e.posts.concat(a.payload),post:a.payload});case"UPDATED_POST":return Object(I.a)({},e,{post:a.payload,posts:e.posts.map((function(e){return e.id===a.payload.id?Object(I.a)({},e,{},a.payload):e}))});case"GOT_SINGLE_POST":return Object(I.a)({},e,{post:a.payload});case"UPLOADED_IMAGE":return Object(I.a)({},e,{post:Object(I.a)({},e.post,{PostImage:[a.payload]})});default:return e}},$e=Object(Ae.c)({auth:Je,admin:Xe}),Ke={key:"root",storage:Ve.a},Qe=Object(Me.a)(Ke,$e),Ze=(t(207),function(){var e=Object(Ae.d)(Qe,Object(Ae.a)(Re.a));return{store:e,persistor:Object(Me.b)(e)}}()),ea=Ze.store,aa=Ze.persistor;o.a.render(r.a.createElement(m.a,{store:ea},r.a.createElement(Ue.a,{loading:null,persistor:aa},r.a.createElement(d.a,null,r.a.createElement(qe,null)))),document.getElementById("root"))}},[[173,1,2]]]);