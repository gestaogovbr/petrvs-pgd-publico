"use strict";(self.webpackChunkpetrvs=self.webpackChunkpetrvs||[]).push([[6235],{76235:(U,f,i)=>{i.r(f),i.d(f,{AreaTematicaModule:()=>u});var h=i(76733),y=i(58568),O=i(72133),p=i(55579),l=i(1391),r=i(2314),v=i(73150),b=i(78509),E=i(64368);class m extends E.X{constructor(o){super(),this.nome="",this.ativo=1,this.initialization(o)}}var T=i(88653),t=i(20755),F=i(57224),Q=i(83351),R=i(57765),z=i(45512),B=i(42704),g=i(92392);function N(A,o){1&A&&t._UZ(0,"toolbar")}class d extends b.E{constructor(o){super(o,m,T.K),this.injector=o,this.filterWhere=a=>{let e=[],n=a.value;return n.nome?.length&&e.push(["nome","like","%"+n.nome.trim().replace(" ","%")+"%"]),e},this.title=this.lex.translate("\xc1reas Tem\xe1ticas"),this.code="MOD_RX_CURR",this.orderBy=[["nome","asc"]],this.filter=this.fh.FormBuilder({nome:{default:""}}),this.addOption(this.OPTION_INFORMACOES),this.addOption(this.OPTION_EXCLUIR,"MOD_RX_OUT_EXCL")}filterClear(o){o.controls.nome.setValue(""),super.filterClear(o)}static#t=this.\u0275fac=function(a){return new(a||d)(t.Y36(t.zs3))};static#e=this.\u0275cmp=t.Xpm({type:d,selectors:[["area-tematica-list"]],viewQuery:function(a,e){if(1&a&&t.Gf(v.M,5),2&a){let n;t.iGM(n=t.CRH())&&(e.grid=n.first)}},features:[t.qOj],decls:9,vars:23,consts:[[3,"dao","add","title","orderBy","groupBy","join","selectable","hasAdd","hasEdit","select"],[4,"ngIf"],[3,"deleted","form","where","submit","clear","collapseChange","collapsed"],[1,"row"],["label","Nome da \xc1rea Tem\xe1tica","controlName","nome","placeholder","Nome da \xc1rea Tem\xe1tica",3,"size","control"],["title","Nome da \xc1rea Tem\xe1tica","field","nome","orderBy","nome"],["type","options",3,"onEdit","options"],[3,"rows"]],template:function(a,e){1&a&&(t.TgZ(0,"grid",0),t.NdJ("select",function(M){return e.onSelect(M)}),t.YNc(1,N,1,0,"toolbar",1),t.TgZ(2,"filter",2)(3,"div",3),t._UZ(4,"input-text",4),t.qZA()(),t.TgZ(5,"columns"),t._UZ(6,"column",5)(7,"column",6),t.qZA(),t._UZ(8,"pagination",7),t.qZA()),2&a&&(t.Q6J("dao",e.dao)("add",e.add)("title",e.isModal?"":e.title)("orderBy",e.orderBy)("groupBy",e.groupBy)("join",e.join)("selectable",e.selectable)("hasAdd",e.auth.hasPermissionTo("MOD_RX_OUT_INCL"))("hasEdit",e.auth.hasPermissionTo("MOD_RX_OUT_EDT")),t.xp6(1),t.Q6J("ngIf",!e.selectable),t.xp6(1),t.Q6J("deleted",e.auth.hasPermissionTo("MOD_AUDIT_DEL"))("form",e.filter)("where",e.filterWhere)("submit",e.filterSubmit.bind(e))("clear",e.filterClear.bind(e))("collapseChange",e.filterCollapseChange.bind(e))("collapsed",!e.selectable&&e.filterCollapsed),t.xp6(2),t.Q6J("size",12)("control",e.filter.controls.nome),t.uIk("maxlength",250),t.xp6(3),t.Q6J("onEdit",e.edit)("options",e.options),t.xp6(1),t.Q6J("rows",e.rowsLimit))},dependencies:[h.O5,v.M,F.a,Q.b,R.z,z.n,B.Q,g.m]})}var C=i(74040),Z=i(1184),D=i(88820);class s extends Z.F{constructor(o){super(o,m,T.K),this.injector=o,this.validate=(a,e)=>{let n=null;return["nome"].indexOf(e)>=0&&!a.value?.length&&(n="Obrigat\xf3rio"),n},this.titleEdit=a=>"Editando "+(a?.nome||""),this.form=this.fh.FormBuilder({nome:{default:""},ativo:{default:!0}},this.cdRef,this.validate)}loadData(o,a){let e=Object.assign({},a.value);a.patchValue(this.util.fillForm(e,o))}initializeData(o){o.patchValue(new m)}saveData(o){return new Promise((a,e)=>{const n=this.util.fill(new m,this.entity);a(this.util.fillForm(n,this.form.value))})}static#t=this.\u0275fac=function(a){return new(a||s)(t.Y36(t.zs3))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-area-tematica-form"]],viewQuery:function(a,e){if(1&a&&t.Gf(C.Q,5),2&a){let n;t.iGM(n=t.CRH())&&(e.editableForm=n.first)}},features:[t.qOj],decls:4,vars:6,consts:[["initialFocus","nome",3,"form","disabled","title","submit","cancel"],[1,"row"],["label","Nome da \xc1rea Tematica","controlName","nome","required","",3,"size"],["labelPosition","left","label","Ativo","controlName","ativo",3,"size"]],template:function(a,e){1&a&&(t.TgZ(0,"editable-form",0),t.NdJ("submit",function(){return e.onSaveData()})("cancel",function(){return e.onCancel()}),t.TgZ(1,"div",1),t._UZ(2,"input-text",2)(3,"input-switch",3),t.qZA()()),2&a&&(t.Q6J("form",e.form)("disabled",e.formDisabled)("title",e.isModal?"":e.title),t.xp6(2),t.Q6J("size",10),t.uIk("maxlength",250),t.xp6(1),t.Q6J("size",2))},dependencies:[C.Q,D.a,g.m]})}const J=[{path:"",component:d,canActivate:[l.a],resolve:{config:r.o},runGuardsAndResolvers:"always",data:{title:"Lista",modal:!1}},{path:"new",component:s,canActivate:[l.a],resolve:{config:r.o},runGuardsAndResolvers:"always",data:{title:"Inclus\xe3o",modal:!0}},{path:":id/edit",component:s,canActivate:[l.a],resolve:{config:r.o},runGuardsAndResolvers:"always",data:{title:"Edi\xe7\xe3o",modal:!0}},{path:":id/consult",component:s,canActivate:[l.a],resolve:{config:r.o},runGuardsAndResolvers:"always",data:{title:"Consultar",modal:!0}}];class c{static#t=this.\u0275fac=function(a){return new(a||c)};static#e=this.\u0275mod=t.oAB({type:c});static#a=this.\u0275inj=t.cJS({imports:[p.Bz.forChild(J),p.Bz]})}class u{static#t=this.\u0275fac=function(a){return new(a||u)};static#e=this.\u0275mod=t.oAB({type:u});static#a=this.\u0275inj=t.cJS({imports:[h.ez,y.K,O.UX,c]})}}}]);