"use strict";(self.webpackChunktribal_frontend_typescript=self.webpackChunktribal_frontend_typescript||[]).push([[711],{4215:function(e,t,n){n.d(t,{z:function(){return o}});var a=n(1413),r=n(5987),i=(n(2791),n(184)),s=["backgroundColor","textColor","border","width","padding","children"],o=function(e){var t=e.backgroundColor,n=void 0===t?"black":t,o=e.textColor,d=void 0===o?"white":o,c=e.border,u=void 0===c?"":c,l=e.width,f=void 0===l?"100%":l,p=e.padding,m=void 0===p?" 14px 24px":p,v=e.children,h=(0,r.Z)(e,s),b={"--textColor":d,"--backgroundColor":n,"--border":u,"--width":f,"--padding":m};return(0,i.jsx)("button",(0,a.Z)((0,a.Z)({className:"a-button",style:b},h),{},{"data-v-3cd6afc4":"",children:v}))}},1234:function(e,t,n){n.d(t,{I:function(){return o}});var a=n(1413),r=n(5987),i=(n(2791),n(184)),s=["formik","labelText"],o=function(e){var t=e.formik,n=e.labelText,o=void 0===n?"":n,d=(0,r.Z)(e,s);return(0,i.jsxs)("div",{className:"a-input","data-v-139ab3f7":"",children:[(0,i.jsxs)("label",{className:"a-input__label",htmlFor:d.id,"data-v-139ab3f7":"",children:[o,(0,i.jsx)("input",(0,a.Z)((0,a.Z)({},d),{},{className:"a-input__input","data-v-139ab3f7":""}))]}),t&&(0,i.jsx)("div",{className:"a-input__error","data-v-139ab3f7":"",children:t.touched[d.id]&&t.errors[d.id]})]})}},9794:function(e,t,n){n.d(t,{$:function(){return l}});var a=n(937),r=n(2791),i=n(3504),s=n(3939),o=n(184),d=function(e){var t=e.condition,n=e.wrapper,a=e.children;return t?n(a):a},c=function(e){var t=e.name,n=e.handleEdit,a=e.id,r=e.handleDelete,c=e.mutedText,u=e.withLink,l=void 0!==u&&u,f=e.item,p=e.hoverable,m=e.withActions,v=e.canEdit,h=void 0===v||v,b=e.canDelete,x=void 0===b||b,_=e.editIconName,C=void 0===_?"pen":_;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(d,{condition:l,wrapper:function(e){return(0,o.jsx)(i.rU,{to:"/overview/".concat(a),"data-v-25973df8":"",children:e})},"data-v-25973df8":"",children:(0,o.jsxs)("li",{className:p?"m-crudItem --hoverable":"m-crudItem","data-v-25973df8":"",children:[(0,o.jsxs)("div",{className:"m-crudItem__textsContainer","data-v-25973df8":"",children:[(0,o.jsx)("div",{className:"m-crudItem__textsContainer__text","data-v-25973df8":"",children:t}),c&&(0,o.jsx)("div",{className:" m-crudItem__textsContainer__text --muted","data-v-25973df8":"",children:c})]}),m&&(0,o.jsxs)("div",{className:"m-crudItem__buttonsContainer","data-v-25973df8":"",children:[h&&(0,o.jsx)("button",{onClick:function(e){return n(f,e)},className:"m-crudItem__buttonsContainer__icon","data-v-25973df8":"",children:(0,o.jsx)(s.Q,{src:"/icons/".concat(C,".svg"),"data-v-25973df8":""})}),x&&(0,o.jsx)("button",{onClick:function(e){return r(f,e)},className:"m-crudItem__buttonsContainer__icon","data-v-25973df8":"",children:(0,o.jsx)(s.Q,{src:"/icons/trash.svg","data-v-25973df8":""})})]})]})})})},u=function(e){var t=e.name,n=e.mutedText,a=e.additional1,r=e.additional2,i=e.handleDelete,s=e.id,d=e.handleEdit,u=e.item,l=e.canEdit,f=void 0===l||l,p=e.canDelete,m=void 0===p||p,v=e.editIconName;return(0,o.jsxs)("article",{className:"o-card","data-v-a227bf34":"",children:[(0,o.jsx)("section",{className:"o-card__header","data-v-a227bf34":"",children:(0,o.jsx)(c,{withActions:!0,item:u,name:t,mutedText:n,handleDelete:i,handleEdit:d,id:s,canEdit:f,canDelete:m,editIconName:v,"data-v-a227bf34":""})}),(0,o.jsxs)("section",{className:"o-card__body","data-v-a227bf34":"",children:[(0,o.jsx)("div",{className:"o-card__body__text1","data-v-a227bf34":"",children:a}),(0,o.jsx)("div",{className:"o-card__body__text2","data-v-a227bf34":"",children:r})]})]})},l=function(e){var t=e.isLoading,n=e.withError,i=e.data,s=e.handleEdit,d=e.handleDelete,l=e.currentView,f=void 0===l?0:l,p=e.withLink,m=e.canEdit,v=void 0===m||m,h=e.canDelete,b=void 0===h||h,x=e.withActions,_=void 0===x||x,C=e.editIconName,j=0===f?"o-crudList ":"o-crudList --gallery";return(0,o.jsxs)(o.Fragment,{children:[!t&&!n&&(0,o.jsx)("ul",{className:j,"data-v-992295f8":"",children:r.Children.toArray(i.map((function(e,t){return(0,o.jsxs)(o.Fragment,{children:[0===f?(0,o.jsx)(c,{hoverable:!0,id:e.id,name:e.name,handleEdit:s,handleDelete:d,withLink:p,item:e,withActions:_,canEdit:v,canDelete:b,editIconName:C,"data-v-992295f8":""}):(0,o.jsx)(u,{id:e.id,name:e.name,mutedText:e.role,additional1:e.phone,additional2:e.email,handleDelete:d,handleEdit:s,item:e,canEdit:v,canDelete:b,editIconName:C,"data-v-992295f8":""}),t+1<i.length&&0===f?(0,o.jsx)("hr",{className:"o-crudList__separator","data-v-992295f8":""}):null]})})))}),t&&(0,o.jsx)(a.T,{"data-v-992295f8":""})]})}},1722:function(e,t,n){n.d(t,{B:function(){return i}});var a=n(4215),r=(n(2791),n(184)),i=function(e){var t=e.elementName,n=e.onCancel,i=e.onConfirmClick,s=e.cancelButtonText,o=void 0===s?"Cancel":s,d=e.submitButtonText,c=void 0===d?"Remove":d,u=e.confirmText,l=void 0===u?"Are you sure to delete":u;return(0,r.jsxs)("div",{className:"o-deleteModalContent","data-v-080ec2a3":"",children:[(0,r.jsxs)("p",{className:"o-deleteModalContent__title","data-v-080ec2a3":"",children:[l," ",t,"?"]}),(0,r.jsxs)("div",{className:"o-deleteModalContent__buttons","data-v-080ec2a3":"",children:[(0,r.jsx)(a.z,{type:"button",backgroundColor:"#F8F8F8",textColor:"Black",onClick:n,"data-v-080ec2a3":"",children:o}),(0,r.jsx)(a.z,{type:"submit",backgroundColor:"#FFD5D5",textColor:"#9A0000",onClick:i,"data-v-080ec2a3":"",children:c})]})]})}},6204:function(e,t,n){n.d(t,{y:function(){return s}});var a=n(9439),r=n(4387),i=n(184),s=function(e){var t=e.title,n=e.children,s=e.responsive,o=e.actions,d=(0,r.X)(),c=(0,a.Z)(d,1)[0];return(0,i.jsxs)("div",{className:c&&s?"o-headerCrud --mobile":"o-headerCrud","data-v-a816d295":"",children:[(0,i.jsxs)("div",{className:"o-headerCrud__principal","data-v-a816d295":"",children:[(0,i.jsx)("h2",{className:c&&s?"o-headerCrud__title --mobile":"o-headerCrud__title","data-v-a816d295":"",children:t}),(0,i.jsx)("div",{className:"o-headerCrud__actions","data-v-a816d295":"",children:o})]}),(0,i.jsx)("div",{className:"o-headerCrud__secondary","data-v-a816d295":"",children:n})]})}},7961:function(e,t,n){n.d(t,{n:function(){return d}});var a=n(9439),r=n(4215),i=n(4387),s=n(3939),o=n(184),d=function(e){var t=e.children,n=e.onButtonClick,d=e.goBackText,c=void 0===d?"Back":d,u=(0,i.X)(),l=(0,a.Z)(u,1)[0];return(0,o.jsxs)(o.Fragment,{children:[l&&(0,o.jsx)("div",{className:"o-mobileWrapper","data-v-ea240dc6":"",children:(0,o.jsxs)(r.z,{backgroundColor:"transparent",textColor:"#000000",width:"fit-content",padding:"0",onClick:n,"data-v-ea240dc6":"",children:[(0,o.jsx)(s.Q,{src:"/icons/left-arrow.svg","data-v-ea240dc6":""}),c]})}),t]})}},873:function(e,t,n){n.d(t,{L:function(){return a}});var a=function(e){return{title:e("Businesses"),actions:{create:e("Create business"),edit:e("Edit business"),delete:e("Delete business")},responses:{created:e("Business created"),deleted:e("Business deleted"),updated:e("Business updated")},fields:{name:e("Name")}}}},5481:function(e,t,n){n.d(t,{j:function(){return a}});var a=function(e){return{title:e("Businesses"),actions:{create:e("Create"),cancel:e("Cancel"),update:e("Update"),delete:e("Delete"),save:e("Save"),back:e("Back")},confirm:{delete:e("Are you sure you want to delete")},responses:{deleted:e("Deleted")},fields:{required:e("This field is required")}}}},7771:function(e,t,n){n.d(t,{M:function(){return a}});var a=function(e){return{title:e("Persons"),actions:{create:e("Create person"),edit:e("Edit person"),delete:e("Delete person")},responses:{created:e("Person created"),deleted:e("Person deleted"),updated:e("Person updated")},fields:{personName:e("Person name"),role:e("Role"),email:e("Email"),phone:e("Phone"),joinDate:e("Join date"),invalidEmail:e("Invalid email address"),dateShouldBeInPast:e("Date must be in the past")}}}},1266:function(e,t,n){n.d(t,{b:function(){return r}});var a=n(4569),r=n.n(a)().create({baseURL:"https://reto-tribal.dialguiba.workers.dev",timeout:5e3,headers:{"x-api-key":"e9p4msN8O08nORtkLoL9C7GmRJGMjphQ6wXXFCiI"}})},4306:function(e,t,n){n.d(t,{mi:function(){return H},tB:function(){return I},bd:function(){return E},DJ:function(){return z},zr:function(){return P},AF:function(){return L},Km:function(){return V}});var a=n(1413),r=n(5861),i=n(7757),s=n.n(i),o=n(1722),d=n(9439),c=n(2791),u=n(5705),l=n(8805),f=n(4215),p=n(1234),m=n(4387),v=n(3168),h=n(5481),b=n(184),x={id:"",name:""},_=function(e){var t=e.initialValues,n=void 0===t?x:t,r=e.title,i=e.onCancel,s=e.submitButtonText,o=e.onSubmit,_=e.canDeleteInMobile,C=void 0!==_&&_,j=e.onDelete,k=e.cancelButtonText,w=void 0===k?"Cancel":k,B=e.deleteButtonText,N=void 0===B?"Delete":B,y=(0,m.X)(),g=(0,d.Z)(y,1)[0],T=(0,c.useState)(),D=(0,d.Z)(T,2),E=D[0],I=D[1],Z=(0,v.$)(["translation"]).t;(0,c.useEffect)((function(){I(g?"--mobile":"")}),[g]);var F=(0,u.TA)({initialValues:n,validationSchema:l.Ry({name:l.Z_().required((0,h.j)(Z).fields.required)}),onSubmit:function(e){return o(e)}});return(0,b.jsxs)("div",{className:"o-createForm","data-v-4b3662fb":"",children:[(0,b.jsx)("h3",{className:"o-createForm__title","data-v-4b3662fb":"",children:r}),(0,b.jsxs)("form",{className:"o-createForm__form",onSubmit:F.handleSubmit,"data-v-4b3662fb":"",children:[(0,b.jsx)(p.I,(0,a.Z)((0,a.Z)({formik:F,type:"text",id:"name"},F.getFieldProps("name")),{},{"data-v-4b3662fb":""})),(0,b.jsxs)("div",{className:"o-createForm__buttons ".concat(E),"data-v-4b3662fb":"",children:[!g&&(0,b.jsx)(f.z,{type:"button",onClick:i,backgroundColor:"#F8F8F8",textColor:"Black","data-v-4b3662fb":"",children:w}),g&&C&&(0,b.jsx)(f.z,{type:"button",onClick:j,backgroundColor:"#ffffff",textColor:"#E32900",border:"solid 1px #E32900","data-v-4b3662fb":"",children:N}),(0,b.jsx)(f.z,{type:"submit","data-v-4b3662fb":"",children:s})]})]})]})},C=n(1266),j=n(4270),k=n(1830),w=n.n(k),B=n(8086),N=n.n(B),y=n(7961),g=n(1105),T=n(1659),D=N()(w()),E=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return function(){var t=(0,r.Z)(s().mark((function t(n){var r,i;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e&&n(F(!0)),t.next=4,(0,C.b)("/business");case 4:r=t.sent.data.businesses,i=r.map((function(e){var t=e.businessId;return delete e.businessId,(0,a.Z)({id:t},e)})),n(Z(i)),e&&n(F(!1)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),n(A(!0));case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},I=function(e){return function(){var t=(0,r.Z)(s().mark((function t(n){var a,r,i;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,C.b)("/business/".concat(e));case 3:return a=t.sent.data,r=a.businessId,i=a.name,t.abrupt("return",{id:r,name:i});case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},Z=function(e){return{type:j.V.loadBusinesses,payload:e}},F=function(e){return{type:j.V.updateLoadingBusinesses,payload:e}},A=function(e){return{type:j.V.updateWithErrorBusinesses,payload:e}},H=function(){return function(){var e=(0,r.Z)(s().mark((function e(t,n){var a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,new Promise((function(e,t){D.fire({html:(0,b.jsx)(y.n,{goBackText:(0,T.H)(g.t).business.back,onButtonClick:function(){D.close()},children:(0,b.jsx)(_,{title:(0,T.H)(g.t).business.createBusiness,submitButtonText:(0,T.H)(g.t).business.create,onSubmit:function(t){e(t)},onCancel:function(){D.close()},cancelButtonText:(0,T.H)(g.t).business.cancel})}),showConfirmButton:!1,target:".App",showClass:{popup:"animate__animated animate__fadeInRight animate__faster"},hideClass:{popup:"animate__animated animate__fadeOutLeft animate__faster"}})}));case 3:return a=e.sent,e.next=6,(0,C.b)("/business",{method:"POST",data:JSON.stringify(a),headers:{"Content-Type":"application/json"}});case 6:t(E(!1)),D.close(),w().fire({icon:"success",title:(0,T.H)(g.t).business.created,showConfirmButton:!1,timer:1500,target:".App",customClass:{popup:"--responsiveResponse"}}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),w().fire({icon:"error",title:"Error",text:"error",showConfirmButton:!0,timer:1500,target:".App",customClass:{popup:"--responsiveResponse"}});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}()},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(){var t=(0,r.Z)(s().mark((function t(n,a){var i,o,d,c,u;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,i=a().businesses.currentBusiness,o=i||e,d=(null===i||void 0===i?void 0:i.id)||e.id,c=function(){var t=(0,r.Z)(s().mark((function t(){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(t,a){D.fire({html:(0,b.jsx)(y.n,{onButtonClick:function(){D.close()},goBackText:(0,T.H)(g.t).business.back,children:(0,b.jsx)(_,{deleteButtonText:(0,T.H)(g.t).business.deleteBusiness,onDelete:function(){return n(P(e))},canDeleteInMobile:!0,initialValues:o,title:(0,T.H)(g.t).business.edit,cancelButtonText:(0,T.H)(g.t).business.cancel,submitButtonText:(0,T.H)(g.t).business.update,id:e.id,currentName:e.name,onSubmit:function(e){t(e)},onCancel:function(){D.close()}})}),showConfirmButton:!1,target:".App",showClass:{popup:"animate__animated animate__fadeInRight animate__faster"},hideClass:{popup:"animate__animated animate__fadeOutLeft animate__faster"}})}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),t.next=7,c();case 7:return u=t.sent,t.next=10,(0,C.b)("/business/".concat(d),{method:"PUT",data:JSON.stringify(u),headers:{"Content-Type":"application/json"}});case 10:n(S(u)),null!==i&&void 0!==i&&i.id&&n(z(u)),D.close(),w().fire({icon:"success",title:(0,T.H)(g.t).business.updated,showConfirmButton:!1,timer:1500,target:".App",customClass:{popup:"--responsiveResponse"}}),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(0),w().fire({icon:"error",title:"Error",text:"error",showConfirmButton:!1,timer:1500,target:".App",customClass:{popup:"--responsiveResponse"}});case 19:case"end":return t.stop()}}),t,null,[[0,16]])})));return function(e,n){return t.apply(this,arguments)}}()},S=function(e){return{type:j.V.updateBusiness,payload:e}},P=function(e){return function(){var t=(0,r.Z)(s().mark((function t(n,a){var i,d,c,u,l;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c=null===(i=a().businesses)||void 0===i||null===(d=i.currentBusiness)||void 0===d?void 0:d.id,u=c||e.id,l=function(){var t=(0,r.Z)(s().mark((function t(){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(t,n){D.fire({html:(0,b.jsx)(o.B,{elementName:e.name,onConfirmClick:function(){t({isConfirmed:!0})},cancelButtonText:(0,T.H)(g.t).business.cancel,submitButtonText:(0,T.H)(g.t).business.delete,confirmText:(0,T.H)(g.t).business.deleteConfirm,onCancel:function(){D.close()}}),showConfirmButton:!1,target:".App",showClass:{popup:"animate__animated animate__fadeInRight animate__faster"},hideClass:{popup:"animate__animated animate__fadeOutLeft animate__faster"},customClass:{htmlContainer:"--responsive"}})}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),t.next=6,l();case 6:if(!t.sent.isConfirmed){t.next=13;break}return t.next=10,(0,C.b)("/business/".concat(u),{method:"DELETE",headers:{"Content-Type":"application/json"}});case 10:w().fire((0,T.H)(g.t).business.deleted,(0,T.H)(g.t).business.businessDeleted,"success"),n(R(u)),c&&n(z({}));case 13:t.next=18;break;case 15:t.prev=15,t.t0=t.catch(0),console.log(t.t0);case 18:case"end":return t.stop()}}),t,null,[[0,15]])})));return function(e,n){return t.apply(this,arguments)}}()},R=function(e){return{type:j.V.removeBusiness,payload:e}},V=function(e){return function(){var t=(0,r.Z)(s().mark((function t(n,a){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=a().businesses.data.find((function(t){return t.id===e}))){t.next=5;break}return t.next=4,n(I(e));case 4:r=t.sent;case 5:n(z(r));case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},z=function(e){return{type:j.V.setCurrentBusiness,payload:e}}},1659:function(e,t,n){n.d(t,{H:function(){return c}});var a=n(873),r=n(5481),i=n(7771),s=function(e){var t=(0,a.L)(e),n=(0,r.j)(e);return{create:n.actions.create,cancel:n.actions.cancel,createBusiness:t.actions.create,created:t.responses.created,edit:t.actions.edit,update:n.actions.update,updated:t.responses.updated,delete:n.actions.delete,deleted:n.responses.deleted,businessDeleted:t.responses.deleted,deleteConfirm:n.confirm.delete,deleteBusiness:t.actions.delete,back:n.actions.back}},o=function(e){var t=(0,i.M)(e);return{create:t.actions.create,created:t.responses.created,edit:t.actions.edit,updated:t.responses.updated,deleted:t.responses.deleted,fields:{personName:t.fields.personName,role:t.fields.role,email:t.fields.email,phone:t.fields.phone,joinDate:t.fields.joinDate}}},d=function(e){var t=(0,r.j)(e);return{create:t.actions.create,cancel:t.actions.cancel,delete:t.actions.delete,deleted:t.responses.deleted,deleteConfirm:t.confirm.delete,save:t.actions.save}},c=function(e){return{business:s(e),persons:o(e),general:d(e)}}},5539:function(e,t,n){n.d(t,{r:function(){return o}});var a=n(9439),r=n(4387),i=n(2791),s=n(184),o=function(e){var t=e.children,n=(0,r.X)(),o=(0,a.Z)(n,1)[0],d=(0,i.useState)("t-crud"),c=(0,a.Z)(d,2),u=c[0],l=c[1];return(0,i.useEffect)((function(){var e=["t-crud"];o&&e.push("--mobile"),l(e.join(" "))}),[o]),(0,s.jsx)("div",{className:u,"data-v-29bfd47d":"",children:t})}}}]);
//# sourceMappingURL=711.806e7366.chunk.js.map