"use strict";(self.webpackChunkpetrvs=self.webpackChunkpetrvs||[]).push([[644],{3644:(P,p,a)=>{a.r(p),a.d(p,{MaterialServicoModule:()=>U});var f=a(6610),h=a(1260),s=a(1620),c=a(6819),g=a(1641),v=a(1428),T=a(291);class d extends T.C{constructor(r){super(),this.tipo="MATERIAL",this.codigo=null,this.referencia=null,this.descricao="",this.unidade_medida="UNIDADE",this.initialization(r)}}var S=a(24),e=a(3279),M=a(16),R=a(3678);let m=(()=>{class i extends S.n{constructor(l){super(l,d,v.W),this.injector=l,this.validate=(o,t)=>{let n=null;return["descricao"].indexOf(t)>=0&&!o.value?.length&&(n="Obrigat\xf3rio"),n},this.titleEdit=o=>"Editando "+this.lex.translate("Material-Servi\xe7o")+": "+(o?.descricao||""),this.form=this.fh.FormBuilder({tipo:{default:"MATERIAL"},codigo:{default:null},referencia:{default:null},descricao:{default:""},unidade_medida:{default:"UNIDADE"}},this.cdRef,this.validate)}loadData(l,o){let t=Object.assign({},o.value);o.patchValue(this.util.fillForm(t,l))}initializeData(l){this.entity=new d,this.loadData(this.entity,l)}saveData(l){return new Promise((o,t)=>{const n=this.util.fill(new d,this.entity);o(this.util.fillForm(n,this.form.value))})}static#e=this.\u0275fac=function(o){return new(o||i)(e.rXU(e.zZn))};static#t=this.\u0275cmp=e.VBU({type:i,selectors:[["app-material-servico-form"]],viewQuery:function(o,t){if(1&o&&e.GBs(g.Q,5),2&o){let n;e.mGM(n=e.lsd())&&(t.editableForm=n.first)}},features:[e.Vt3],decls:8,vars:13,consts:[["initialFocus","tipo",3,"submit","cancel","form","disabled","title"],[1,"row"],["label","Tipo","icon","bi bi-intersect","controlName","tipo",3,"size","items"],["label","C\xf3digo","icon","bi bi-upc-scan","controlName","codigo",3,"size"],["label","Refer\xeancia","icon","bi bi-qr-code","controlName","referencia",3,"size"],["label","Descricao","controlName","descricao","required","",3,"size"],["label","Unidade","icon","bi bi-rulers","controlName","unidade_medida",3,"size","items"]],template:function(o,t){1&o&&(e.j41(0,"editable-form",0),e.bIt("submit",function(){return t.onSaveData()})("cancel",function(){return t.onCancel()}),e.j41(1,"div",1),e.nrm(2,"input-select",2)(3,"input-text",3)(4,"input-text",4),e.k0s(),e.j41(5,"div",1),e.nrm(6,"input-text",5)(7,"input-select",6),e.k0s()()),2&o&&(e.Y8G("form",t.form)("disabled",t.formDisabled)("title",t.isModal?"":t.title),e.R7$(2),e.Y8G("size",4)("items",t.lookup.MATERIAL_SERVICO_TIPO),e.R7$(),e.Y8G("size",4),e.BMQ("maxlength",250),e.R7$(),e.Y8G("size",4),e.BMQ("maxlength",250),e.R7$(2),e.Y8G("size",8),e.BMQ("maxlength",250),e.R7$(),e.Y8G("size",4)("items",t.lookup.MATERIAL_SERVICO_UNIDADE))},dependencies:[g.Q,M.H,R.K]})}return i})();var b=a(5611),E=a(9062),I=a(2034),A=a(5852),G=a(7772),D=a(2305),O=a(6764),L=a(5201);function y(i,r){1&i&&e.nrm(0,"toolbar")}function F(i,r){if(1&i&&e.nrm(0,"badge",18),2&i){const l=r.row,o=e.XpG();e.Y8G("icon",o.lookup.getIcon(o.lookup.MATERIAL_SERVICO_TIPO,l.tipo))("label",o.lookup.getValue(o.lookup.MATERIAL_SERVICO_TIPO,l.tipo))}}function N(i,r){if(1&i&&e.nrm(0,"badge",21),2&i){const l=e.XpG().row;e.Y8G("label",l.codigo)}}function Y(i,r){if(1&i&&e.nrm(0,"badge",22),2&i){const l=e.XpG().row;e.Y8G("label",l.referencia)}}function z(i,r){if(1&i&&e.DNE(0,N,1,1,"badge",19)(1,Y,1,1,"badge",20),2&i){const l=r.row;e.Y8G("ngIf",null==l.codigo?null:l.codigo.length),e.R7$(),e.Y8G("ngIf",null==l.referencia?null:l.referencia.length)}}function _(i,r){if(1&i&&(e.j41(0,"strong"),e.EFF(1),e.k0s()),2&i){const l=r.row;e.R7$(),e.JRh(l.descricao)}}function $(i,r){if(1&i&&(e.j41(0,"strong"),e.EFF(1),e.k0s()),2&i){const l=r.row,o=e.XpG();e.R7$(),e.JRh(o.lookup.getValue(o.lookup.MATERIAL_SERVICO_UNIDADE,l.unidade))}}const j=[{path:"",component:(()=>{class i extends E.P{constructor(l){super(l,d,v.W),this.injector=l,this.filterWhere=o=>{let t=[],n=o.value;return n.tipo?t.push(["tipo","==",n.tipo]):n.codigo?.length?t.push(["codigo","like","%"+n.codigo.trim().replace(" ","%")+"%"]):n.referencia?.length?t.push(["referencia","like","%"+n.referencia.trim().replace(" ","%")+"%"]):n.descricao?.length&&t.push(["descricao","like","%"+n.descricao.trim().replace(" ","%")+"%"]),t},this.title=this.lex.translate("Materiais e Servi\xe7os"),this.code="MOD_MATSRV",this.filter=this.fh.FormBuilder({tipo:{default:null},codigo:{default:""},referencia:{default:""},descricao:{default:""}}),this.addOption(this.OPTION_INFORMACOES),this.addOption(this.OPTION_EXCLUIR,"MOD_MATSRV_EXCL"),this.addOption(this.OPTION_LOGS,"MOD_AUDIT_LOG")}static#e=this.\u0275fac=function(o){return new(o||i)(e.rXU(e.zZn))};static#t=this.\u0275cmp=e.VBU({type:i,selectors:[["app-material-servico-list"]],viewQuery:function(o,t){if(1&o&&e.GBs(b._,5),2&o){let n;e.mGM(n=e.lsd())&&(t.grid=n.first)}},features:[e.Vt3],decls:24,vars:36,consts:[["columnTipo",""],["columnCodigoReferencia",""],["columnDescricao",""],["columnUnidade",""],[3,"select","dao","add","title","orderBy","groupBy","join","selectable","hasAdd","hasEdit"],[4,"ngIf"],[3,"deleted","form","where","submit","collapseChange","collapsed"],[1,"row"],["label","Tipo","itemTodos","- Todos -","controlName","tipo",3,"size","valueTodos","control","items"],["label","C\xf3digo","controlName","codigo",3,"size","control"],["label","Refer\xeancia","controlName","referencia",3,"size","control"],["label","Descri\xe7\xe3o","controlName","descricao",3,"size","control"],["title","Tipo",3,"template"],["title","C\xf3d./Ref.",3,"template"],["title","Descri\xe7\xe3o",3,"template"],["title","Unidades",3,"template"],["type","options",3,"onEdit","options"],[3,"rows"],["color","light",3,"icon","label"],["color","light","icon","bi bi-upc-scan","hint","C\xf3digo",3,"label",4,"ngIf"],["color","light","icon","bi bi-qr-code","hint","Refer\xeancia",3,"label",4,"ngIf"],["color","light","icon","bi bi-upc-scan","hint","C\xf3digo",3,"label"],["color","light","icon","bi bi-qr-code","hint","Refer\xeancia",3,"label"]],template:function(o,t){if(1&o){const n=e.RV6();e.j41(0,"grid",4),e.bIt("select",function(u){return e.eBV(n),e.Njj(t.onSelect(u))}),e.DNE(1,y,1,0,"toolbar",5),e.j41(2,"filter",6)(3,"div",7),e.nrm(4,"input-select",8)(5,"input-text",9)(6,"input-text",10),e.k0s(),e.j41(7,"div",7),e.nrm(8,"input-text",11),e.k0s()(),e.j41(9,"columns")(10,"column",12),e.DNE(11,F,1,2,"ng-template",null,0,e.C5r),e.k0s(),e.j41(13,"column",13),e.DNE(14,z,2,2,"ng-template",null,1,e.C5r),e.k0s(),e.j41(16,"column",14),e.DNE(17,_,2,1,"ng-template",null,2,e.C5r),e.k0s(),e.j41(19,"column",15),e.DNE(20,$,2,1,"ng-template",null,3,e.C5r),e.k0s(),e.nrm(22,"column",16),e.k0s(),e.nrm(23,"pagination",17),e.k0s()}if(2&o){const n=e.sdS(12),C=e.sdS(15),u=e.sdS(18),w=e.sdS(21);e.Y8G("dao",t.dao)("add",t.add)("title",t.isModal?"":t.title)("orderBy",t.orderBy)("groupBy",t.groupBy)("join",t.join)("selectable",t.selectable)("hasAdd",t.auth.hasPermissionTo("MOD_MATSRV_INCL"))("hasEdit",t.auth.hasPermissionTo("MOD_MATSRV_EDT")),e.R7$(),e.Y8G("ngIf",!t.selectable),e.R7$(),e.Y8G("deleted",t.auth.hasPermissionTo("MOD_AUDIT_DEL"))("form",t.filter)("where",t.filterWhere)("submit",t.filterSubmit.bind(t))("collapseChange",t.filterCollapseChange.bind(t))("collapsed",!t.selectable&&t.filterCollapsed),e.R7$(2),e.Y8G("size",4)("valueTodos",null)("control",t.filter.controls.tipo)("items",t.lookup.MATERIAL_SERVICO_TIPO),e.R7$(),e.Y8G("size",4)("control",t.filter.controls.codigo),e.BMQ("maxlength",250),e.R7$(),e.Y8G("size",4)("control",t.filter.controls.referencia),e.BMQ("maxlength",250),e.R7$(2),e.Y8G("size",12)("control",t.filter.controls.descricao),e.BMQ("maxlength",250),e.R7$(2),e.Y8G("template",n),e.R7$(3),e.Y8G("template",C),e.R7$(3),e.Y8G("template",u),e.R7$(3),e.Y8G("template",w),e.R7$(3),e.Y8G("onEdit",t.edit)("options",t.options),e.R7$(),e.Y8G("rows",t.rowsLimit)}},dependencies:[f.bT,b._,I.T,A.I,G.i,D.H,O.e,M.H,R.K,L.n]})}return i})(),canActivate:[s.q],resolve:{config:c.L},runGuardsAndResolvers:"always",data:{title:"Materiais e Servi\xe7os"}},{path:"new",component:m,canActivate:[s.q],resolve:{config:c.L},runGuardsAndResolvers:"always",data:{title:"Inclus\xe3o de Material e Servi\xe7o",modal:!0}},{path:":id/edit",component:m,canActivate:[s.q],resolve:{config:c.L},runGuardsAndResolvers:"always",data:{title:"Edi\xe7\xe3o de Material e Servi\xe7o",modal:!0}},{path:":id/consult",component:m,canActivate:[s.q],resolve:{config:c.L},runGuardsAndResolvers:"always",data:{title:"Consulta a Material e Servi\xe7o",modal:!0}}];let V=(()=>{class i{static#e=this.\u0275fac=function(o){return new(o||i)};static#t=this.\u0275mod=e.$C({type:i});static#i=this.\u0275inj=e.G2t({imports:[h.iI.forChild(j),h.iI]})}return i})();var B=a(8425);let U=(()=>{class i{static#e=this.\u0275fac=function(o){return new(o||i)};static#t=this.\u0275mod=e.$C({type:i});static#i=this.\u0275inj=e.G2t({imports:[f.MD,B.h,V]})}return i})()}}]);