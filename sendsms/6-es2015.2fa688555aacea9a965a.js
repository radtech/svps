(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{SPac:function(e,t,s){"use strict";s.r(t);var r=s("fXoL"),c=s("ofXK"),n=s("pKmL"),o=s("TVU/"),i=s("tyNb"),a=s("mrps"),u=s("mrSG"),l=s("4ZtF");let d=(()=>{let e=class extends l.b{constructor(){super()}};return e.ngInjectableDef=r.ac({token:e,factory:function(t){return new(t||e)},providedIn:"root"}),e=u.a([Object(l.h)({name:"users",idKey:"id"})],e)})(),m=(()=>{let e=class extends l.f{constructor(e){super(e),this.store=e}};return e.ngInjectableDef=r.ac({token:e,factory:function(t){return new(t||e)(r.tc(d))},providedIn:"root"}),e=u.a([Object(l.e)({sortBy:"userClass",sortByOrder:l.c.ASC})],e)})();var p=s("tk/3"),f=s("z6cu"),b=s("JIr8");let h=(()=>{class e{constructor(e){this.http=e}handleError(e){return e.error instanceof ErrorEvent?console.error("An error occurred:",e.error.message):console.error(`Backend returned code ${e.status}, `+`body was: ${e.error}`),Object(f.a)("Something bad happened; please try again later.")}getQueryParams(e){let t=new p.d;for(let s in e)t=t.set(s,e[s]);return t}runHttp(e,t,s={},r={}){let c={};switch(r.headers&&(c.headers=new p.c(Object.assign({},r.headers))),e){case"get":s&&Object.keys(s).length>0&&(s=this.getQueryParams(s),c.params=s);break;case"post":r.headers&&"content-type"in r.headers||c.headers.set("content-type","application/json")}return this.http[e](t,"get"==e?c:s,c).pipe(Object(b.a)(this.handleError))}get(e,t={},s={}){return this.runHttp("get",e,t,s)}post(e,t,s={}){return this.runHttp("post",e,t,s)}}return e.ngInjectableDef=r.ac({token:e,factory:function(t){return new(t||e)(r.tc(p.a))},providedIn:"root"}),e})();var g=s("AytR");let k=(()=>{class e{constructor(e,t,s,r){this.usersStore=e,this.db=t,this.usersQuery=s,this.api=r,this.collection=this.db.collection("users")}connect(){return e=this.usersStore,this.collection.stateChanges().pipe(Object(l.r)(function(t){if(0!==t.length)for(const s of t){const t=s.payload.doc.id,r=s.payload.doc.data();switch(s.type){case"added":e.add(Object.assign({id:t},r,{avatar:`assets/img/avatars/${1+Math.floor(8*Math.random())}.png`}));break;case"removed":e.remove(t);break;case"modified":e.update(t,r)}}else e.setLoading(!1)}));var e}getAll(e){return this.usersQuery.selectAll(e)}getByClass(e){return this.usersQuery.getAll({filterBy:t=>t.userClass==e})}getLoading(){return this.usersQuery.selectLoading()}addUser(e,t,s){this.collection.add({name:e,mobile:t,userClass:s})}removeUser(e){this.collection.doc(e).delete()}editUser(e,t){this.collection.doc(e).update(Object.assign({},t))}sendSms(e,t){const s={user:g.a.sms.username,pass:g.a.sms.password,sender:g.a.sms.sender,priority:g.a.sms.priority,stype:g.a.sms.type,phone:e.join(","),text:t};return this.api.get(g.a.sms.url,s)}}return e.ngInjectableDef=r.ac({token:e,factory:function(t){return new(t||e)(r.tc(d),r.tc(a.a),r.tc(m),r.tc(h))},providedIn:"root"}),e})();var y=s("3Pt+"),v=s("LcAk"),w=s("IRfi"),C=s("A2Vd"),O=s("2+6u"),D=s("j14s");const S=["mat-dialog-title","",1,"text-center"],F=["mat-dialog-content",""],U=[1,"",3,"formGroup"],j=[1,"form-group"],I=["appearance","outline",1,"w-100"],Y=["matInput","","formControlName","name","placeholder","Enter Student Name"],A=["matInput","","type","number","formControlName","mobile","placeholder","Enter Student Name"],G=["formControlName","userClass","name","food"],N=[3,"value",4,"ngFor","ngForOf"],x=["mat-dialog-actions",""],B=[1,"container"],M=[1,"row"],L=[1,"col"],R=[1,"btn","btn-secondary","btn-lg","btn-block",3,"click"],_=[1,"btn","btn-primary","btn-lg","btn-block",3,"disabled","mat-dialog-close"],$=[3,"value"];function E(e,t){if(1&e&&(r.kc(0,"mat-option",$),r.Yc(1),r.ic()),2&e){const e=t.$implicit,s=r.yc();r.Dc("value",e),r.Oc(1),r.ad(" ",s.getClass(e)," ")}}let K=(()=>{class e{constructor(e){this.dialogRef=e,this.classes=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],this.createUserForm()}createUserForm(){this.userForm=new y.d({name:new y.b("",[y.p.required,y.p.minLength(2)]),mobile:new y.b("",[y.p.required]),userClass:new y.b("",[y.p.required])})}getClass(e){switch(e){case 13:return"Nursery";case 14:return"LKG";case 15:return"UKG";case 16:return"Play Group";case 17:return"All";default:return e}}onClose(){this.dialogRef.close()}ngOnInit(){}}return e.ngComponentDef=r.Yb({type:e,selectors:[["udb-user-add"]],factory:function(t){return new(t||e)(r.ec(v.g))},consts:29,vars:4,template:function(e,t){1&e&&(r.kc(0,"h1",S),r.Yc(1,"Add New Student"),r.ic(),r.kc(2,"div",F),r.kc(3,"form",U),r.kc(4,"div",j),r.kc(5,"mat-form-field",I),r.kc(6,"mat-label"),r.Yc(7,"Name"),r.ic(),r.fc(8,"input",Y),r.ic(),r.ic(),r.kc(9,"div",j),r.kc(10,"mat-form-field",I),r.kc(11,"mat-label"),r.Yc(12,"Mobile"),r.ic(),r.fc(13,"input",A),r.ic(),r.ic(),r.kc(14,"div",j),r.kc(15,"mat-form-field",I),r.kc(16,"mat-label"),r.Yc(17,"Class"),r.ic(),r.kc(18,"mat-select",G),r.Wc(19,E,2,2,"mat-option",N),r.ic(),r.ic(),r.ic(),r.ic(),r.ic(),r.kc(20,"div",x),r.kc(21,"div",B),r.kc(22,"div",M),r.kc(23,"div",L),r.kc(24,"button",R),r.vc("click",function(e){return t.onClose()}),r.Yc(25,"Cancel"),r.ic(),r.ic(),r.kc(26,"div",L),r.kc(27,"button",_),r.Yc(28,"Add Student"),r.ic(),r.ic(),r.ic(),r.ic(),r.ic()),2&e&&(r.Oc(3),r.Dc("formGroup",t.userForm),r.Oc(19),r.Dc("ngForOf",t.classes),r.Oc(27),r.Dc("disabled",!t.userForm.valid)("mat-dialog-close",t.userForm.value))},directives:[v.h,v.e,y.r,y.k,y.e,w.a,w.d,C.a,y.a,y.j,y.c,y.n,O.a,c.k,v.c,v.d,D.f],styles:[""]}),e})();var P=s("XNiG"),Q=s("1G5W");function W(e){return"function"==typeof e}const q=(e,t="ngOnDestroy")=>s=>{const r=e[t];if(!1===W(r))throw new Error(`${e.constructor.name} is using untilDestroyed but doesn't implement ${t}`);return e.__takeUntilDestroy||(e.__takeUntilDestroy=new P.a,e[t]=function(){W(r)&&r.apply(this,arguments),e.__takeUntilDestroy.next(!0),e.__takeUntilDestroy.complete()}),s.pipe(Object(Q.a)(e.__takeUntilDestroy))};var X=s("wHSu"),H=s("Xlwt"),Z=s("6NWb");const z=[1,"item"],J=[1,"ui","avatar","image","rounded-circle",3,"src"],T=[1,"content"],V=[1,"header","text-primary","text-capitalize"],ee=[1,"description"],te=[1,"text-muted"],se=["mat-icon-button","","aria-label","Example icon-button with a heart icon",1,"float-right",3,"click"],re=[3,"icon"];let ce=(()=>{class e{constructor(){this.faUserSlash=X.a,this.user={},this.userRemove=new r.s}deleteUser(e){this.userRemove.emit(e)}getClass(e){switch(e){case 13:return"Nursery";case 14:return"LKG";case 15:return"UKG";case 16:return"Play Group";case 17:return"All";default:return e}}ngOnInit(){}}return e.ngComponentDef=r.Yb({type:e,selectors:[["udb-user"]],factory:function(t){return new(t||e)},hostBindings:function(e,t,s){1&e&&r.jc(z)},inputs:{user:"user"},outputs:{userRemove:"userRemove"},consts:15,vars:5,template:function(e,t){1&e&&(r.fc(0,"img",J),r.kc(1,"div",T),r.kc(2,"a",V),r.Yc(3),r.ic(),r.kc(4,"div",ee),r.kc(5,"strong"),r.Yc(6),r.ic(),r.fc(7,"br"),r.kc(8,"span",te),r.Yc(9,"Class"),r.ic(),r.Yc(10,": "),r.kc(11,"strong"),r.Yc(12),r.ic(),r.ic(),r.ic(),r.kc(13,"button",se),r.vc("click",function(e){return t.deleteUser(t.user)}),r.fc(14,"fa-icon",re),r.ic()),2&e&&(r.Dc("src",t.user.avatar,r.Nc),r.Oc(3),r.Zc(t.user.name),r.Oc(6),r.Zc(t.user.mobile),r.Oc(12),r.Zc(t.getClass(t.user.userClass)),r.Oc(14),r.Dc("icon",t.faUserSlash))},directives:[H.a,Z.a],styles:[".image[_ngcontent-%COMP%]{max-width:50px}"]}),e})();const ne=[1,"row"],oe=[1,"col"],ie=[1,"row","my-3"],ae=["type","button",1,"btn","btn-primary","btn-lg","btn-block",3,"click"],ue=[1,"col","vh-85","overflow-auto"],le=[1,"ui","middle","aligned","divided","list"],de=["class","py-3",3,"user","userRemove",4,"ngFor","ngForOf","ngForTrackBy"],me=[1,"py-3",3,"user","userRemove"];function pe(e,t){if(1&e){const e=r.lc();r.kc(0,"udb-user",me),r.vc("userRemove",function(t){return r.Lc(e),r.yc().deleteUser(t)}),r.ic()}2&e&&r.Dc("user",t.$implicit)}let fe=(()=>{class e{constructor(e,t){this.us=e,this.dialog=t,this.users=[],this.users$=this.us.getAll()}addUserModal(){this.dialog.open(K,{minWidth:"50%"}).afterClosed().subscribe(e=>{e&&e.name&&this.addUser(e)})}addUser(e){this.us.addUser(e.name,e.mobile,e.userClass)}deleteUser(e){confirm("Do you really want to remove "+e.name+"?")&&this.us.removeUser(e.id)}trackByFn(e,t){return t.id}ngOnInit(){this.us.connect().pipe(q(this)).subscribe()}ngOnDestroy(){}}return e.ngComponentDef=r.Yb({type:e,selectors:[["udb-user-list"]],factory:function(t){return new(t||e)(r.ec(k),r.ec(v.b))},consts:11,vars:4,template:function(e,t){1&e&&(r.kc(0,"div",ne),r.kc(1,"div",oe),r.kc(2,"div",ie),r.kc(3,"div",oe),r.kc(4,"button",ae),r.vc("click",function(e){return t.addUserModal()}),r.Yc(5,"Add User"),r.ic(),r.ic(),r.ic(),r.kc(6,"div",ne),r.kc(7,"div",ue),r.kc(8,"div",le),r.Wc(9,pe,1,1,"udb-user",de),r.zc(10,"async"),r.ic(),r.ic(),r.ic(),r.ic(),r.ic()),2&e&&(r.Oc(9),r.Dc("ngForOf",r.Ac(10,2,t.users$))("ngForTrackBy",t.trackByFn))},directives:[c.k,ce],pipes:[c.b],styles:[""]}),e})();var be=s("0DX0");let he=(()=>{class e{constructor(e){this.snackBar=e}show(e="",t=3e3){this.snackBar.open(e,"Dismiss",{duration:t,panelClass:["pt-5","mt-4"],verticalPosition:"top"})}}return e.ngInjectableDef=r.ac({token:e,factory:function(t){return new(t||e)(r.tc(be.a))},providedIn:"root"}),e})();const ge=[1,"row","align-items-center","h-100"],ke=[1,"col"],ye=[1,"jumbotron"],ve=[3,"formGroup","ngSubmit"],we=[1,"form-group"],Ce=["appearance","outline",1,"w-100"],Oe=["formControlName","userClass","name","food"],De=[3,"value",4,"ngFor","ngForOf"],Se=["matInput","","formControlName","message","rows","5","placeholder","Enter the sms to be sent"],Fe=["type","submit",1,"btn","btn-primary","btn-lg","btn-block",3,"disabled"],Ue=[3,"value"];function je(e,t){if(1&e&&(r.kc(0,"mat-option",Ue),r.Yc(1),r.ic()),2&e){const e=t.$implicit,s=r.yc();r.Dc("value",e),r.Oc(1),r.ad(" ",s.getClass(e)," ")}}let Ie=(()=>{class e{constructor(e,t){this.us=e,this.as=t,this.classes=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],this.createSmsForm()}createSmsForm(){this.smsForm=new y.d({message:new y.b("",[y.p.required]),userClass:new y.b("",[y.p.required])})}getClass(e){switch(e){case 13:return"Nursery";case 14:return"LKG";case 15:return"UKG";case 16:return"Play Group";case 17:return"All";default:return e}}sendSms(){const e=this.us.getByClass(this.smsForm.controls.userClass.value).map(e=>e.mobile);this.us.sendSms(e,this.smsForm.controls.message.value).subscribe(()=>{this.smsForm.reset(),this.as.show("SMS Sent Successfully")},e=>this.as.show("SMS Sent Successfully"))}ngOnInit(){}}return e.ngComponentDef=r.Yb({type:e,selectors:[["udb-message-box"]],factory:function(t){return new(t||e)(r.ec(k),r.ec(he))},consts:17,vars:3,template:function(e,t){1&e&&(r.kc(0,"div",ge),r.kc(1,"div",ke),r.kc(2,"div",ye),r.kc(3,"form",ve),r.vc("ngSubmit",function(e){return t.sendSms()}),r.kc(4,"div",we),r.kc(5,"mat-form-field",Ce),r.kc(6,"mat-label"),r.Yc(7,"Class"),r.ic(),r.kc(8,"mat-select",Oe),r.Wc(9,je,2,2,"mat-option",De),r.ic(),r.ic(),r.ic(),r.kc(10,"div",we),r.kc(11,"mat-form-field",Ce),r.kc(12,"mat-label"),r.Yc(13,"Message"),r.ic(),r.fc(14,"textarea",Se),r.ic(),r.ic(),r.kc(15,"button",Fe),r.Yc(16,"Send Sms"),r.ic(),r.ic(),r.ic(),r.ic(),r.ic()),2&e&&(r.Oc(3),r.Dc("formGroup",t.smsForm),r.Oc(9),r.Dc("ngForOf",t.classes),r.Oc(15),r.Dc("disabled",!t.smsForm.valid))},directives:[y.r,y.k,y.e,w.a,w.d,O.a,y.j,y.c,c.k,C.a,y.a,D.f],styles:[""]}),e})();const Ye=[1,"row"],Ae=[1,"col-sm-4"],Ge=[1,"col-sm-8"],Ne=[{path:"",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.ngComponentDef=r.Yb({type:e,selectors:[["udb-sms"]],factory:function(t){return new(t||e)},consts:5,vars:0,template:function(e,t){1&e&&(r.kc(0,"div",Ye),r.kc(1,"div",Ae),r.fc(2,"udb-user-list"),r.ic(),r.kc(3,"div",Ge),r.fc(4,"udb-message-box"),r.ic(),r.ic())},directives:[fe,Ie],styles:[""]}),e})()}];let xe=(()=>{class e{}return e.ngModuleDef=r.cc({type:e}),e.ngInjectorDef=r.bc({factory:function(t){return new(t||e)},imports:[[i.d.forChild(Ne)],i.d]}),e})();i.d.forChild(Ne),s.d(t,"SmsModule",function(){return Be});let Be=(()=>{class e{}return e.ngModuleDef=r.cc({type:e}),e.ngInjectorDef=r.bc({factory:function(t){return new(t||e)},imports:[[c.c,xe,n.a.forChild(),o.a.forChild()]]}),e})();n.a.forChild(),o.a.forChild()}}]);