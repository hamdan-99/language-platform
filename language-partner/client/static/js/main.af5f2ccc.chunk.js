(this["webpackJsonplanguage-partner"]=this["webpackJsonplanguage-partner"]||[]).push([[0],{171:function(e,a,t){e.exports=t(204)},204:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(11),o=t.n(l),i=t(13),s=t(14),c=t(15),u=t(16),p=t(22),m=t(64),d=t(25),h=t(88),g=function(e){Object(u.a)(t,e);var a=Object(c.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarText"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(p.c,{style:{color:"red"},className:"navbar-brand",to:"/"},"Home")),r.a.createElement("li",{className:"nav-item active"},r.a.createElement(p.c,{className:"nav-link",to:"/signup"},"Signup")),r.a.createElement("li",{className:"nav-item active"},r.a.createElement(p.c,{className:"nav-link",to:"/login"},"Login")))))}}]),t}(n.Component),b=t(52),f=t.n(b),v="https://language-partner.herokuapp.com:61224",E={login:function(e,a,t){f.a.post("".concat(v,"/api/users/login"),{email:e,password:a}).then((function(e){t(e)}))},register:function(e,a){f.a.post("".concat(v,"/api/users"),{firstName:e}).then((function(e){a(e)}))},getUsers:function(e,a){f.a.get("".concat(v,"/api/users?access_token=").concat(e)).then((function(e){a(e)}))},getPosts:function(e,a){f.a.get("".concat(v,"/api/Posts?access_token=").concat(e)).then((function(e){a(e)}))},addPost:function(e,a,t){f.a.post("".concat(v,"/api/Posts?access_token=").concat(a),e).then((function(e){t(e)}))},updatePost:function(e,a,t){f.a.patch("".concat(v,"/api/Posts/").concat(e.id,"?access_token=").concat(a),e).then((function(e){t(e)}))},getSinglePost:function(e,a,t){f.a.post("".concat(v,"/api/Posts/").concat(e,"/accessTokens?access_token=").concat(a)).then((function(e){t(e)}))},uploadImage:function(e,a,t,n,r){f.a.post("".concat(v,"/api/PostImages/upload?post_id=").concat(t,"&access_token=").concat(a,"&user_id=").concat(n),e).then((function(e){r(e)}))}},O=t(7),y=t(27),j=t(254),k=t(48),w=t(205),S=t(5),C=t(159),N=function(e){var a=e.name,t=e.label,n=(e.error,Object(C.a)(e,["name","label","error"]));return(r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{style:{marginTop:"20px"},htmlFor:a},t),r.a.createElement("input",Object.assign({},n,{name:a,className:"form-control",id:a,placeholder:t,style:{width:"300px",padding:"10px",marginTop:"20px"}}))))},P=function(e){Object(u.a)(t,e);var a=Object(c.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){var e=this,a=this.props.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,null),r.a.createElement(O.b,{onSubmit:function(e){e.preventDefault()},className:a.container},r.a.createElement(w.a,{className:a.leftSide},r.a.createElement("h3",null,"Sign up"),r.a.createElement(y.b,{name:"firstName",label:"First Name",margin:"normal",htmlFor:"firstName",id:"firstName",onChange:this.props.handleChange,value:this.props.values.firstName,errors:this.props.errors.firstName,fullWidth:!0}),r.a.createElement(y.b,{name:"lastName",label:"Last Name",margin:"normal",htmlFor:"lastName",id:"lastName",onChange:this.props.handleChange,value:this.props.values.lastName,fullWidth:!0}),r.a.createElement(y.b,{name:"birthday",htmlFor:"birthday",id:"birthday",label:"Birthday",margin:"normal",type:"date",onChange:this.props.handleChange,value:this.props.values.birthday,fullWidth:!0}),r.a.createElement(y.b,{name:"phoneNumber",htmlFor:"phoneNumber",id:"phoneNumber",type:"number",label:"Phone Number",margin:"normal",onChange:this.props.handleChange,value:this.props.values.phoneNumber,fullWidth:!0}),r.a.createElement(y.b,{name:"email",htmlFor:"email",id:"email",label:"E-mail",margin:"normal",onChange:this.props.handleChange,value:this.props.values.email,fullWidth:!0}),r.a.createElement(N,{key:2,type:"password",name:"password",htmlFor:"password",id:"password",label:"Password",onChange:this.props.handleChange,onBlur:this.props.handleBlur,touched:this.props.touched.password,errors:this.props.errors.password})),r.a.createElement(w.a,{className:a.rightSide},r.a.createElement(y.a,{name:"Gender",htmlFor:"Gender",id:"Gender",label:"Gender",margin:"normal",onChange:this.props.handleChange,value:this.props.values.Gender,options:[{label:"male",value:"male"},{label:"female",value:"female"}],fullWidth:!0}),r.a.createElement(y.a,{name:"location",htmlFor:"location",id:"location",label:"Location",margin:"normal",onChange:this.props.handleChange,value:this.props.values.location,options:[{value:"Brussels",label:"Brussels"},{value:"Flamish-Brabant",label:"Flamish-Brabant"},{value:"Antwerp",label:"Antwerp"},{value:"Limburg",label:"Limburg"},{value:"Luik(Liege)",label:"Luik(Liege)"},{value:"West-Flanders",label:"West-Flanders"}],fullWidth:!0}),r.a.createElement(y.a,{name:"nativeLanguage",htmlFor:"nativeLanguage",id:"nativeLanguage",label:"Native Language",margin:"normal",onChange:this.props.handleChange,value:this.props.values.nativeLanguage,options:[{label:"Dutch",value:"Dutch"},{label:"French",value:"French"},{label:"German",value:"German"},{label:"English",value:"English"}],fullWidth:!0}),r.a.createElement(y.a,{name:"languageToLearn",htmlFor:"languageToLearn",id:"languageToLearn",label:"Language To Learn",margin:"normal",onChange:this.props.handleChange,value:this.props.values.languageToLearn,options:[{label:"Dutch",value:"Dutch"},{label:"French",value:"French"},{label:"German",value:"German"},{label:"English",value:"English"}],fullWidth:!0}),r.a.createElement(y.a,{name:"skill",htmlFor:"skill",id:"skill",label:"Skill",margin:"normal",onChange:this.props.handleChange,value:this.props.values.skill,options:[{label:"IT",value:"IT"},{label:"Health",value:"Health"},{label:"Law",value:"Law"},{label:"Sports",value:"Sports"},{label:"Journalism",value:"Journalism"},{label:"Education",value:"Education"},{label:"Literature",value:"Literature"}],fullWidth:!0}),r.a.createElement("div",{className:a.Save},r.a.createElement(j.a,{type:"submit",disabled:this.props.pristine||this.props.submitting,variant:"contained",color:"secondary",onClick:function(a){return e.props.handleSubmit()}},"Sign up")))))}}]),t}(n.Component),x=Object(d.b)((function(e){return{auth:e.auth}}),(function(e){return{register:function(a,t,n,r,l,o,i,s,c,u,p){e((function(e){E.register((function(a){200===a.status||a.message&&e({type:"SHOW_ERROR",payload:a.message})}))}))}}}))(Object(O.d)({mapPropsToValues:function(e){return{firstName:""}},handleSubmit:function(e,a){a.setSubmitting;var t=a.props;console.log("values",e,"props",t),t.register(e,t.auth.token)}})(Object(S.a)((function(e){return{container:{margin:e.spacing(5),display:"flex",flexDirection:"row wrap",width:"900px"},Save:{padding:e.spacing(5)},formControl:{margin:e.spacing(2)},leftSide:{flex:5,height:"100%",margin:e.spacing(2),padding:e.spacing(5)},rightSide:{flex:2,height:"100%",margin:e.spacing(5),padding:e.spacing(3)}}}))(P))),T=function(e){Object(u.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).handleSubmit=function(e){e.preventDefault(),console.log("Submmited")},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return(r.a.createElement(r.a.Fragment,null,r.a.createElement(g,null),r.a.createElement("form",{onSubmit:function(a){a.preventDefault(),e.props.login(e.props.values.email,e.props.values.password)}},r.a.createElement(N,{key:1,type:"email",name:"email",label:"E-mail",onChange:this.props.handleChange,onBlur:this.props.handleBlur,touched:this.props.touched.email,errors:this.props.errors.email}),this.props.touched.email&&this.props.errors.email&&r.a.createElement("span",{className:"alert alert-danger"}," ",this.props.errors.email),r.a.createElement(N,{key:2,type:"password",name:"password",label:"Password",onChange:this.props.handleChange,onBlur:this.props.handleBlur,touched:this.props.touched.password,errors:this.props.errors.password}),this.props.touched.password&&this.props.errors.password&&r.a.createElement("span",{className:"alert alert-danger"},this.props.errors.password),r.a.createElement("button",{className:"btn btn-primary"},"login"))))}}]),t}(n.Component),D=Object(O.d)({mapPropsToValues:function(){return{email:"",password:""}},validationSchema:k.a().shape({email:k.b().email("E-mail is Invalid").required("The E-mail is required!"),password:k.b().min(6,"Your Password should be more 6").max(12,"the maximum length of Password is 12").required("Password is required ")}),handleSubmit:function(e,a){a.setSubmitting;console.log("submmited",e),h.b.info("you are logging in ")}})(Object(d.b)((function(e){return{auth:e.auth}}),(function(e){return{login:function(a,t){e(function(e,a){return function(t){E.login(e,a,(function(a){t({type:"LOGIN",payload:{email:e,token:a.data.id,userId:a.data.userId}})}))}}(a,t))}}}))(T)),L=function(e){Object(u.a)(t,e);var a=Object(c.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement("h1",null,"Welcome Home"))}}]),t}(n.Component),I=t(26),F=t(252),_=t(253),G=t(255),W=t(256),B=t(150),A=t.n(B),U=t(148),R=t.n(U),q=t(149),M=t.n(q);function H(e){return r.a.createElement(_.a,Object.assign({button:!0,component:p.b},e))}var V=function(e){Object(u.a)(t,e);var a=Object(c.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(F.a,null,r.a.createElement(H,{to:"/admin"},r.a.createElement(R.a,null),r.a.createElement(G.a,null,r.a.createElement(W.a,{primary:"Dashboard"}))),r.a.createElement(H,{to:"/admin/posts"},r.a.createElement(M.a,null),r.a.createElement(G.a,null,r.a.createElement(W.a,{primary:"Posts"}))),r.a.createElement(H,{to:"/admin/users"},r.a.createElement(A.a,null),r.a.createElement(G.a,null,r.a.createElement(W.a,{primary:"Users"}))))}}]),t}(n.Component),J=t(257),z=t(258),Y=t(92),X=t(20),K=t.n(X),Q=t(269),Z=t(251),ee=t(151),ae=t.n(ee),te=t(152),ne=t.n(te),re=t(259),le=function(e){Object(u.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={open:!0},e.handleDrawerOpen=function(a){e.setState({open:!0})},e.handleDrawerClose=function(a){e.setState({open:!1})},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes;return(r.a.createElement("div",{id:"admin-page",className:e.root},r.a.createElement(J.a,{className:K()(e.appBar,this.state.open&&e.appBarShift)},r.a.createElement(z.a,{className:e.Toolbar},r.a.createElement(Z.a,{onClick:this.handleDrawerOpen},r.a.createElement(ae.a,null)),r.a.createElement(Y.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0},"Control Panel"))),r.a.createElement(Q.a,{classes:{paper:K()(e.drawerPaper,!this.state.open&&e.drawerPaperClose)},variant:"permanent",open:!0},r.a.createElement("div",{className:e.toolbarIcon},r.a.createElement(Z.a,{onClick:this.handleDrawerClose},r.a.createElement(ne.a,null))),r.a.createElement(re.a,null),r.a.createElement(V,null)),r.a.createElement("main",{className:e.content},r.a.createElement("div",{className:e.appBarSpace}),this.props.children)))}}]),t}(n.Component),oe=Object(S.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRigh:24},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},appBarSpace:e.mixins.toolbar,drawerPaper:{position:"relative",whiteSpace:"noWrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:{overflowX:"hidden",width:e.spacing(0),transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},toolbarIcon:Object(I.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"8px 8px"},e.mixins.toolbar,{backgroundColor:"lightBlue"}),content:{flexGrow:1,padding:e.spacing(3),height:"650px",backgroundColor:"lightGray",overflow:"auto"}}}))(le),ie=function(e){Object(u.a)(t,e);var a=Object(c.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("h1",null,"You are logged in with token ",this.props.auth.token)}}]),t}(n.Component),se=Object(d.b)((function(e){return{auth:e.auth}}),(function(e){return{}}))(Object(m.g)(ie)),ce=function(e){Object(u.a)(t,e);var a=Object(c.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"login-page"},this.props.children)}}]),t}(n.Component),ue=t(260),pe=t(261),me=t(265),de=t(262),he=t(263),ge=t(264),be=t(266),fe=function(e){Object(u.a)(t,e);var a=Object(c.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){var e=this.props,a=e.rows,t=e.columns,n=e.classes;return(r.a.createElement(ue.a,{component:w.a},r.a.createElement(pe.a,{className:n.table,"aria-label":"simple table"},r.a.createElement(de.a,null,r.a.createElement(he.a,null,t?t.map((function(e){return r.a.createElement(ge.a,{key:e.name},e.label)})):null)),r.a.createElement(me.a,null,a?a.map((function(e,a){return r.a.createElement(he.a,{key:e.id},t.map((function(t,n){return r.a.createElement(ge.a,{key:a},"id"===t.name?r.a.createElement(be.a,{to:"/admin/posts/edit/".concat(e[t.name]),component:p.b},e[t.name]):e[t.name])})))})):null))))}}]),t}(n.Component),ve=Object(S.a)((function(e){return{table:{minWidth:650}}}))(fe),Ee=[{label:"ID",name:"id"},{label:"Email",name:"email"},{label:"Name",name:"firstName"}],Oe=function(e){Object(u.a)(t,e);var a=Object(c.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.auth.token)}},{key:"render",value:function(){var e=this.props.admin.users;return(r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Users"),r.a.createElement(ve,{columns:Ee,rows:e})))}}]),t}(n.Component),ye=Object(d.b)((function(e){return{auth:e.auth,admin:e.admin}}),(function(e){return{getUsers:function(a){e(function(e){return function(a){E.getUsers(e,(function(e){a({type:"GOT_USERS",payload:e.data})})),console.log("token",e)}}(a))}}}))(Oe),je=t(267),ke=t(153),we=t.n(ke),Se=[{label:"ID",name:"id"},{label:"Title",name:"title"}],Ce=function(e){Object(u.a)(t,e);var a=Object(c.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.getPosts(this.props.auth.token)}},{key:"render",value:function(){var e=this.props.admin.posts,a=this.props.classes;return r.a.createElement("div",null,r.a.createElement("h1",null,"Posts"),r.a.createElement(ve,{columns:Se,rows:e}),r.a.createElement(je.a,{component:p.b,to:"/admin/posts/add",color:"secondary","aria-label":"Add",className:a.fab},r.a.createElement(we.a,null)))}}]),t}(n.Component),Ne=Object(d.b)((function(e){return{auth:e.auth,admin:e.admin}}),(function(e){return{getPosts:function(a){e(function(e){return function(a){E.getPosts(e,(function(e){a({type:"GOT_POSTS",payload:e.data})})),console.log("token2",e)}}(a))}}}))(Object(S.a)((function(e){return{fab:{position:"fixed",bottom:"50px",right:"50px"}}}))(Ce)),Pe=t(155),xe=t.n(Pe),Te=t(154),De=t.n(Te),Le=function(e){Object(u.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).uploadImage=function(a){var t=new FormData;t.append("file",a.target.files[0],(new Date).getTime().toString()+a.target.files[0].name),e.props.uploadImage(t,e.props.auth.token,e.props.admin.post.id,e.props.auth.user.uesrId)},e}return Object(s.a)(t,[{key:"componentDidUpdate",value:function(e,a){var t=this;if("add"===this.props.match.params.view&&this.props.admin.posts.filter((function(e){return e.title===t.props.values.title})).length>0){var n=this.props.admin.posts.filter((function(e){return e.title===t.props.values.title}))[0];this.props.history.push("/admin/posts/edit/"+n.dispatch)}this.props.admin.post.id!==e.admin.post.id&&(console.log("post",this.props.admin.post),this.props.setValues(e.admin.posts.map((function(e){return e.id===t.props.match.params.id?e:null}))))}},{key:"componentDidMount",value:function(e,a){"edit"===this.props.match.params.view&&this.props.match.params.id&&this.props.getSinglePost(this.props.match.params.id,this.props.auth.token)}},{key:"render",value:function(){var e=this,a=this.props.classes;return r.a.createElement("div",null,r.a.createElement(O.b,{className:a.container},r.a.createElement(w.a,{className:a.leftSide},r.a.createElement(y.b,{name:"title",label:"Title",margin:"normal",onChange:function(a){return e.props.setFieldValue("slug",a.target.value.toLowerCase().replace(/ /g,"_"))},fullWidth:!0}),r.a.createElement(y.b,{name:"slug",label:"Slug",margin:"normal"}),r.a.createElement(y.b,{name:"content",label:"Content",margin:"normal",fullWidth:!0})),r.a.createElement(w.a,{className:a.rightSide},r.a.createElement(y.a,{name:"status",label:"Status",margin:"normal",options:[{label:"Published",value:!0},{label:"Unpublished",value:!1}],fullWidth:!0}),r.a.createElement("div",{className:a.Save},r.a.createElement(j.a,{variant:"contained",color:"secondary",onClick:function(a){e.props.handleSubmit()}},r.a.createElement(De.a,null)," Save")),this.props.admin.post.PostImage?r.a.createElement("img",{src:this.props.admin.post.PostImage[0].url,className:"post-image"}):null,r.a.createElement("div",null,r.a.createElement(j.a,{variant:"contained",color:"secondary",onClick:function(e){$(".MyFile").trigger("click")}},r.a.createElement(xe.a,null)," Upload Post Image"),r.a.createElement("input",{type:"file",style:{display:"none"},className:"MyFile"})))))}}]),t}(n.Component),Ie=Object(m.g)(Object(d.b)((function(e){return{auth:e.auth,admin:e.admin}}),(function(e){return{addPost:function(a,t){e(function(e,a){return function(t){E.addPost(e,a,(function(e){t({type:"POST_ADDED",payload:e.data})}))}}(a,t))},updatePost:function(a,t){e(function(e,a){return function(t){E.updatePost(e,a,(function(e){t({type:"UPDATED_POST",payload:e.data})}))}}(a,t))},getSinglePost:function(a,t){e(function(e,a){return function(t){E.getSinglePost(e,a,(function(e){t({type:"GOT_SINGLE_POST",payload:e.data})}))}}(a,t))},uploadImage:function(a,t,n,r){e(function(e,a,t,n){return function(r){E.uploadImage(e,a,t,n,(function(e){r({type:"UPLOADED_IMAGE",payload:e.data})}))}}(a,t,n,r))}}}))(Object(O.d)({mapPropsToValues:function(e){return{title:e.match.params.id?e.admin.post.title:console.log("title",e.admin.posts),slug:e.match.params.id?e.admin.post.slug:"",created_at:e.match.params.id?e.admin.post.created_at:(new Date).getTime(),status:!!e.match.params.id&&e.admin.post.status,content:e.match.params.id?e.admin.post.content:""}},validationSchema:k.a().shape({title:k.b().required("Title is required"),slug:k.b().required(),content:k.b().required()}),handleSubmit:function(e,a){a.setSubmitting;var t=a.props;if("edit"===t.match.params.view){var n=Object(I.a)({},e,{id:t.match.params.id});t.updatePost(n,t.auth.token)}else t.addPost(e,t.auth.token)}})(Object(S.a)((function(e){return{container:{margin:e.spacing(3),display:"flex",flexDirection:"row wrap",width:"768px"},Save:{marginBottom:e.spacing(2)},formControl:{margin:e.spacing(1)},leftSide:{flex:2,height:"100%",margin:e.spacing(1),padding:e.spacing(3)},rightSide:{flex:1,height:"100%",margin:e.spacing(1),padding:e.spacing(3)}}}))(Le)))),Fe=(t(199),t(200),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,null),r.a.createElement("div",{style:{padding:"200px",marginLeft:"150px",fontSize:"25px"}},r.a.createElement("div",null,r.a.createElement("h3",null,"Sorry , This page is not ready to render ")),r.a.createElement("div",{style:{marginLeft:"150px",marginTop:"100px"}},r.a.createElement(p.b,{style:{color:"red"},to:"/admin"},"Admin Dashboard"))))}),_e=function(e){Object(u.a)(t,e);var a=Object(c.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return(r.a.createElement(p.a,null,r.a.createElement(h.a,null),r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/",component:L}),r.a.createElement(m.b,{exact:!0,path:"/Signup",render:function(a){return e.props.auth.token?r.a.createElement(m.a,{to:"/"}):r.a.createElement(ce,null,r.a.createElement(x,null))}}),r.a.createElement(m.b,{path:"/login",render:function(e){return r.a.createElement(ce,null,r.a.createElement(Fe,null))}}),r.a.createElement(m.b,{exact:!0,path:"/admin",render:function(a){return r.a.createElement("div",null,e.props.auth.token?r.a.createElement(oe,null,r.a.createElement(se,null)):r.a.createElement(ce,null,r.a.createElement(D,null)))}}),r.a.createElement(m.b,{path:"/admin/users",render:function(a){return r.a.createElement("div",null,e.props.auth.token?r.a.createElement(oe,null,r.a.createElement(ye,null)):r.a.createElement(ce,null,r.a.createElement(D,null)))}}),r.a.createElement(m.b,{path:"/admin/posts/:view/:id?",exact:!0,render:function(a){return r.a.createElement("div",null,e.props.auth.token?r.a.createElement(oe,null,r.a.createElement(Ie,null)):r.a.createElement(ce,null,r.a.createElement(D,null)))}}),r.a.createElement(m.b,{path:"/admin/posts",exact:!0,render:function(a){return r.a.createElement("div",null,e.props.auth.token?r.a.createElement(oe,null,r.a.createElement(Ne,null)):r.a.createElement(ce,null,r.a.createElement(D,null)))}}),r.a.createElement(m.a,{to:"/"}))))}}]),t}(n.Component),Ge=Object(d.b)((function(e){return{auth:e.auth,admin:e.admin}}),(function(e){return{}}))(_e),We=t(156),Be=t(39),Ae=t(157),Ue=t(125),Re=t(158),qe=t.n(Re),Me={user:{},token:null,error:null},He=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"LOGIN":return Object(I.a)({},e,{user:a.payload,token:a.payload.token});case"SHOW_ERROR":return Object(I.a)({},e,{error:a.payload});default:return e}},Ve={users:[],posts:[],post:{}},Je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GOT_USERS":return Object(I.a)({},e,{users:a.payload});case"GOT_POSTS":return Object(I.a)({},e,{posts:a.payload});case"POST_ADDED":return Object(I.a)({},e,{posts:e.posts.concat(a.payload),post:a.payload});case"UPDATED_POST":return Object(I.a)({},e,{post:a.payload,posts:e.posts.map((function(e){return e.id===a.payload.id?Object(I.a)({},e,{},a.payload):e}))});case"GOT_SINGLE_POST":return Object(I.a)({},e,{post:a.payload});case"UPLOADED_IMAGE":return Object(I.a)({},e,{post:Object(I.a)({},e.post,{PostImage:[a.payload]})});default:return e}},ze=Object(Be.c)({auth:He,admin:Je}),Ye={key:"root",storage:qe.a},Xe=Object(Ue.a)(Ye,ze),$e=(t(203),function(){var e=Object(Be.d)(Xe,Object(Be.a)(Ae.a));return{store:e,persistor:Object(Ue.b)(e)}}()),Ke=$e.store,Qe=$e.persistor;o.a.render(r.a.createElement(d.a,{store:Ke},r.a.createElement(We.a,{loading:null,persistor:Qe},r.a.createElement(Ge,null))),document.getElementById("root"))}},[[171,1,2]]]);
//# sourceMappingURL=main.af5f2ccc.chunk.js.map