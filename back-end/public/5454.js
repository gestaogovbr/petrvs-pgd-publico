"use strict";(self.webpackChunkpetrvs=self.webpackChunkpetrvs||[]).push([[5454],{5454:(P,f,s)=>{s.r(f),s.d(f,{TipoCursoModule:()=>c});var h=s(76733),y=s(58568),A=s(72133),p=s(55579),a=s(1391),r=s(2314),v=s(73150),C=s(42277),D=s(64368);class m extends D.X{constructor(i){super(),this.nome="",this.ativo=1,this.initialization(i)}}var F=s(78509),t=s(20755),Q=s(57224),z=s(83351),Z=s(57765),B=s(45512),M=s(42704),g=s(92392);function E(b,i){1&b&&t._UZ(0,"toolbar")}class d extends F.E{constructor(i){super(i,m,C.H),this.injector=i,this.filterWhere=e=>{let o=[],n=e.value;return n.nome?.length&&o.push(["nome","like","%"+n.nome.trim().replace(" ","%")+"%"]),o},this.title=this.lex.translate("Tipos de Curso"),this.code="MOD_RX",this.filter=this.fh.FormBuilder({nome:{default:""}}),this.auth.hasPermissionTo("MOD_RX_VIS_DPE")&&this.options.push({icon:"bi bi-info-circle",label:"Informa\xe7\xf5es",onClick:this.consult.bind(this)}),this.auth.hasPermissionTo("MOD_RX_VIS_DPE")&&this.options.push({icon:"bi bi-trash",label:"Excluir",onClick:this.delete.bind(this)})}filterClear(i){i.controls.nome.setValue(""),super.filterClear(i)}static#t=this.\u0275fac=function(e){return new(e||d)(t.Y36(t.zs3))};static#o=this.\u0275cmp=t.Xpm({type:d,selectors:[["tipo-curso-list"]],viewQuery:function(e,o){if(1&e&&t.Gf(v.M,5),2&e){let n;t.iGM(n=t.CRH())&&(o.grid=n.first)}},features:[t.qOj],decls:8,vars:21,consts:[[3,"dao","add","title","orderBy","groupBy","join","selectable","hasAdd","hasEdit","select"],[4,"ngIf"],[3,"deleted","form","where","submit","clear","collapseChange","collapsed"],[1,"row"],["label","Nome do tipo de curso","controlName","nome","placeholder","Nome do tipo de curso",3,"size","control"],["title","Tipo de Curso","field","nome","orderBy","nome"],[3,"rows"]],template:function(e,o){1&e&&(t.TgZ(0,"grid",0),t.NdJ("select",function(I){return o.onSelect(I)}),t.YNc(1,E,1,0,"toolbar",1),t.TgZ(2,"filter",2)(3,"div",3),t._UZ(4,"input-text",4),t.qZA()(),t.TgZ(5,"columns"),t._UZ(6,"column",5),t.qZA(),t._UZ(7,"pagination",6),t.qZA()),2&e&&(t.Q6J("dao",o.dao)("add",o.add)("title",o.isModal?"":o.title)("orderBy",o.orderBy)("groupBy",o.groupBy)("join",o.join)("selectable",o.selectable)("hasAdd",o.auth.hasPermissionTo("MOD_RX_VIS_DPE"))("hasEdit",o.auth.hasPermissionTo("MOD_RX_VIS_DPE")),t.xp6(1),t.Q6J("ngIf",!o.selectable),t.xp6(1),t.Q6J("deleted",o.auth.hasPermissionTo("MOD_AUDIT_DEL"))("form",o.filter)("where",o.filterWhere)("submit",o.filterSubmit.bind(o))("clear",o.filterClear.bind(o))("collapseChange",o.filterCollapseChange.bind(o))("collapsed",!o.selectable&&o.filterCollapsed),t.xp6(2),t.Q6J("size",9)("control",o.filter.controls.nome),t.uIk("maxlength",250),t.xp6(3),t.Q6J("rows",o.rowsLimit))},dependencies:[h.O5,v.M,Q.a,z.b,Z.z,B.n,M.Q,g.m]})}var T=s(74040),J=s(1184),O=s(88820);class l extends J.F{constructor(i){super(i,m,C.H),this.injector=i,this.validate=(e,o)=>{let n=null;return["labelnome, ativo"].indexOf(o)>=0&&!e.value?.length&&(n="Obrigat\xf3rio"),n},this.titleEdit=e=>"Editando "+(e?.nome||""),this.form=this.fh.FormBuilder({nome:{default:""},labelnome:{default:""},ativo:{default:!0}},this.cdRef,this.validate)}loadData(i,e){let o=Object.assign({},e.value);e.patchValue(this.util.fillForm(o,i))}initializeData(i){i.patchValue(new m)}saveData(i){return new Promise((e,o)=>{const n=this.util.fill(new m,this.entity);e(this.util.fillForm(n,this.form.value))})}static#t=this.\u0275fac=function(e){return new(e||l)(t.Y36(t.zs3))};static#o=this.\u0275cmp=t.Xpm({type:l,selectors:[["tipo-curso-form"]],viewQuery:function(e,o){if(1&e&&t.Gf(T.Q,5),2&e){let n;t.iGM(n=t.CRH())&&(o.editableForm=n.first)}},features:[t.qOj],decls:4,vars:6,consts:[["initialFocus","nome",3,"form","disabled","title","submit","cancel"],[1,"row"],["label","Nome do tipo do curso","controlName","nome","required","",3,"size"],["labelPosition","left","label","Ativo","controlName","ativo",3,"size"]],template:function(e,o){1&e&&(t.TgZ(0,"editable-form",0),t.NdJ("submit",function(){return o.onSaveData()})("cancel",function(){return o.onCancel()}),t.TgZ(1,"div",1),t._UZ(2,"input-text",2)(3,"input-switch",3),t.qZA()()),2&e&&(t.Q6J("form",o.form)("disabled",o.formDisabled)("title",o.isModal?"":o.title),t.xp6(2),t.Q6J("size",5),t.uIk("maxlength",250),t.xp6(1),t.Q6J("size",2))},dependencies:[T.Q,O.a,g.m]})}const R=[{path:"",component:d,canActivate:[a.a],resolve:{config:r.o},runGuardsAndResolvers:"always",data:{title:"Lista",modal:!1}},{path:"new",component:l,canActivate:[a.a],resolve:{config:r.o},runGuardsAndResolvers:"always",data:{title:"Inclus\xe3o",modal:!0}},{path:":id/edit",component:l,canActivate:[a.a],resolve:{config:r.o},runGuardsAndResolvers:"always",data:{title:"Edi\xe7\xe3o",modal:!0}},{path:":id/consult",component:l,canActivate:[a.a],resolve:{config:r.o},runGuardsAndResolvers:"always",data:{title:"Consultar",modal:!0}}];class u{static#t=this.\u0275fac=function(e){return new(e||u)};static#o=this.\u0275mod=t.oAB({type:u});static#e=this.\u0275inj=t.cJS({imports:[p.Bz.forChild(R),p.Bz]})}class c{static#t=this.\u0275fac=function(e){return new(e||c)};static#o=this.\u0275mod=t.oAB({type:c});static#e=this.\u0275inj=t.cJS({imports:[h.ez,y.K,A.UX,u]})}}}]);