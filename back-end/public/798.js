"use strict";(self.webpackChunkpetrvs=self.webpackChunkpetrvs||[]).push([[798],{4798:(Z,p,n)=>{n.r(p),n.d(p,{AfastamentoModule:()=>Q});var f=n(6610),h=n(1260),r=n(1620),d=n(6819),C=n(3308),v=n(1641),_=n(3564),u=n(7979),I=n(24),g=n(9272),A=n(5413),t=n(3279),D=n(7363),R=n(158),F=n(5524),M=n(9209);const T=["tipoMotivoAfastamento"],O=["usuario"];function y(s,l){if(1&s&&t.nrm(0,"top-alert",10),2&s){const i=t.XpG();t.Y8G("message",i.warning)}}let c=(()=>{class s extends I.n{constructor(i){super(i,u.k,_.h),this.injector=i,this.validate=(e,a)=>{let o=null;return["usuario_id","tipo_motivo_afastamento_id"].indexOf(a)>=0&&!e.value?.length?o="Obrigat\xf3rio":["data_inicio","data_fim"].indexOf(a)>=0&&!this.dao?.validDateTime(e.value)&&(o="Inv\xe1lido"),o},this.titleEdit=e=>"Editando "+this.lex.translate("afastamento")+": "+(e?.usuario?.nome||"")+" - "+(e?.tipo_motivo_afastamento?.nome||""),this.tipoMotivoAfastamentoDao=i.get(g.B),this.usuarioDao=i.get(A._),this.title=this.lex.translate("Afastamento"),this.form=this.fh.FormBuilder({observacoes:{default:""},data_inicio:{default:new Date},data_fim:{default:new Date},usuario_id:{default:""},tipo_motivo_afastamento_id:{default:""}},this.cdRef,this.validate),this.join=["usuario","tipo_motivo_afastamento"]}isHoras(){return!(!this.form.controls.tipo_motivo_afastamento_id.value?.length||!this.tipoMotivoAfastamento?.selectedEntity?.horas)}loadData(i,e){var a=this;return(0,C.A)(function*(){let o=Object.assign({},e.value);a.metadata?.consolidacao&&(a.consolidacao=a.metadata?.consolidacao,i.usuario_id=a.consolidacao.plano_trabalho.usuario_id,i.usuario=a.consolidacao.plano_trabalho?.usuario),yield Promise.all([a.usuario.loadSearch(i.usuario||o.usuario_id),a.tipoMotivoAfastamento.loadSearch(i.tipo_motivo_afastamento||o.tipo_motivo_afastamento_id)]),e.patchValue(a.util.fillForm(o,i))})()}initializeData(i){this.entity=new u.k,this.loadData(this.entity,i)}saveData(i){return new Promise((e,a)=>{let o=this.util.fill(new u.k,this.entity);o=this.util.fillForm(o,this.form.value),this.isHoras()||(o.data_inicio.setHours(0,0,0),o.data_fim.setHours(23,59,0),o.data_fim.setDate(o.data_fim.getDate())),e(o)})}get warning(){let i,e=this.util.asDate(this.form.controls.data_inicio.value),a=this.util.asDate(this.form.controls.data_fim.value);return this.consolidacao&&e&&a&&(this.util.daystamp(e)<this.util.daystamp(this.consolidacao.data_inicio)||this.util.daystamp(a)>this.util.daystamp(this.consolidacao.data_fim))&&(i="Aten\xe7\xe3o: Data da consolida\xe7\xe3o do plano \xe9 de "+this.util.getDateFormatted(this.consolidacao.data_inicio)+" a "+this.util.getDateFormatted(this.consolidacao.data_fim)),i}static#t=this.\u0275fac=function(e){return new(e||s)(t.rXU(t.zZn))};static#a=this.\u0275cmp=t.VBU({type:s,selectors:[["app-afastamento-form"]],viewQuery:function(e,a){if(1&e&&(t.GBs(v.Q,5),t.GBs(T,5),t.GBs(O,5)),2&e){let o;t.mGM(o=t.lsd())&&(a.editableForm=o.first),t.mGM(o=t.lsd())&&(a.tipoMotivoAfastamento=o.first),t.mGM(o=t.lsd())&&(a.usuario=o.first)}},features:[t.Vt3],decls:12,vars:16,consts:[["usuario",""],["tipoMotivoAfastamento",""],["type","warning",3,"message",4,"ngIf"],["initialFocus","usuario_id",3,"submit","cancel","form","disabled","title"],[1,"row"],["controlName","usuario_id","required","",3,"size","disabled","dao"],["controlName","tipo_motivo_afastamento_id","required","","label","Motivo",3,"size","dao"],["label","In\xedcio","controlName","data_inicio",3,"date","size"],["label","Fim","controlName","data_fim",3,"date","size"],["label","Observa\xe7\xf5es","controlName","observacoes",3,"size","rows"],["type","warning",3,"message"]],template:function(e,a){if(1&e){const o=t.RV6();t.DNE(0,y,1,1,"top-alert",2),t.j41(1,"editable-form",3),t.bIt("submit",function(){return t.eBV(o),t.Njj(a.onSaveData())})("cancel",function(){return t.eBV(o),t.Njj(a.onCancel())}),t.j41(2,"div",4),t.nrm(3,"input-search",5,0)(5,"input-search",6,1),t.k0s(),t.j41(7,"div",4),t.nrm(8,"input-datetime",7)(9,"input-datetime",8),t.k0s(),t.j41(10,"div",4),t.nrm(11,"input-textarea",9),t.k0s()()}2&e&&(t.Y8G("ngIf",null==a.warning?null:a.warning.length),t.R7$(),t.Y8G("form",a.form)("disabled",a.formDisabled)("title",a.isModal?"":a.title),t.R7$(2),t.Y8G("size",6)("disabled",a.consolidacao?"true":void 0)("dao",a.usuarioDao),t.R7$(2),t.Y8G("size",6)("dao",a.tipoMotivoAfastamentoDao),t.R7$(3),t.Y8G("date",a.isHoras()?void 0:"")("size",6),t.R7$(),t.Y8G("date",a.isHoras()?void 0:"")("size",6),t.R7$(2),t.Y8G("size",12)("rows",3),t.BMQ("maxlength",250))},dependencies:[f.bT,v.Q,D.O,R.S,F.r,M.P]})}return s})();var G=n(5611),E=n(9062),j=n(2034),$=n(5852),N=n(7772),b=n(2305),L=n(6764);function Y(s,l){1&s&&t.nrm(0,"toolbar")}function z(s,l){if(1&s&&(t.j41(0,"span"),t.EFF(1),t.k0s()),2&s){const i=l.row;t.R7$(),t.SpI(" ",i.usuario.nome,"")}}function B(s,l){if(1&s&&(t.j41(0,"span"),t.EFF(1),t.k0s()),2&s){const i=t.XpG().row;t.R7$(),t.SpI(" ","(c\xf3d. "+i.tipo_motivo_afastamento.codigo+")","")}}function w(s,l){if(1&s&&(t.nrm(0,"i"),t.j41(1,"span"),t.EFF(2),t.k0s(),t.DNE(3,B,2,1,"span",7)),2&s){const i=l.row;t.HbH(i.tipo_motivo_afastamento.icone),t.R7$(),t.xc7("color",i.tipo_motivo_afastamento.cor),t.R7$(),t.SpI(" ",i.tipo_motivo_afastamento.nome,""),t.R7$(),t.Y8G("ngIf",i.tipo_motivo_afastamento.codigo)}}function S(s,l){if(1&s&&(t.j41(0,"span"),t.EFF(1),t.k0s()),2&s){const i=l.row,e=t.XpG();t.R7$(),t.SpI(" ",e.dao.getDateFormatted(i.data_inicio),"")}}function V(s,l){if(1&s&&(t.j41(0,"span"),t.EFF(1),t.k0s()),2&s){const i=l.row,e=t.XpG();t.R7$(),t.SpI(" ",e.dao.getDateFormatted(i.data_fim),"")}}const P=[{path:"",component:(()=>{class s extends E.P{constructor(i){super(i,u.k,_.h),this.injector=i,this.listagemInicial=!0,this.filterWhere=e=>{let a=[],o=e.value;return o.usuario_id?.length&&o.tipo_motivo_afastamento_id?.length?(a.push(["usuario_id","==",o.usuario_id]),a.push(["tipo_motivo_afastamento_id","==",o.tipo_motivo_afastamento_id])):o.usuario_id?.length?a.push(["usuario_id","==",o.usuario_id]):o.tipo_motivo_afastamento_id?.length?a.push(["tipo_motivo_afastamento_id","==",o.tipo_motivo_afastamento_id]):this.dao?.validDateTime(o.data_inicio)&&this.dao?.validDateTime(o.data_fim)&&!this.listagemInicial&&a.push(this.dao?.intersectionWhere("data_inicio","data_fim",this.util.startOfDay(o.data_inicio),this.util.startOfDay(o.data_fim))),a},this.join=["tipo_motivo_afastamento:id, nome","usuario: id, nome"],this.tipoMotivoAfastamentoDao=i.get(g.B),this.usuarioDao=i.get(A._),this.title=this.lex.translate("Afastamentos"),this.code="MOD_AFT",this.filter=this.fh.FormBuilder({observacoes:{default:""},data_inicio:{default:new Date},data_fim:{default:new Date},usuario_id:{default:""},tipo_motivo_afastamento_id:{default:""}}),this.OPTION_INFORMACOES.onClick=e=>this.go.navigate({route:["gestao","afastamento",e.id,"consult"]},{modal:!0}),this.addOption(this.OPTION_INFORMACOES),this.addOption(this.OPTION_EXCLUIR,"MOD_AFT_EXCL"),this.addOption(this.OPTION_LOGS,"MOD_AUDIT_LOG")}filtro(){this.listagemInicial=!1}static#t=this.\u0275fac=function(e){return new(e||s)(t.rXU(t.zZn))};static#a=this.\u0275cmp=t.VBU({type:s,selectors:[["app-afastamento-list"]],viewQuery:function(e,a){if(1&e&&t.GBs(G._,5),2&e){let o;t.mGM(o=t.lsd())&&(a.grid=o.first)}},features:[t.Vt3],decls:26,vars:32,consts:[["usuario",""],["tipoMotivoAfastamento",""],["columnUsuario",""],["columnMotivoAfastamento",""],["columnInicioAfastamento",""],["columnFimAfastamento",""],[3,"dao","add","title","orderBy","groupBy","join","hasAdd","hasEdit"],[4,"ngIf"],[3,"form","where","submit","collapseChange","collapsed","deleted"],[1,"row"],["controlName","usuario_id",3,"size","control","dao"],["controlName","tipo_motivo_afastamento_id","label","Motivo",3,"size","control","dao"],["date","","label","In\xedcio","controlName","data_inicio",3,"click","size"],["date","","label","Fim","controlName","data_fim",3,"click","size"],[3,"title","template"],["title","In\xedcio",3,"template"],["title","Fim",3,"template"],["title","Observa\xe7\xf5es","field","observacoes"],["type","options",3,"onEdit","options"],[3,"rows"]],template:function(e,a){if(1&e){const o=t.RV6();t.j41(0,"grid",6),t.DNE(1,Y,1,0,"toolbar",7),t.j41(2,"filter",8)(3,"div",9),t.nrm(4,"input-search",10,0)(6,"input-search",11,1),t.j41(8,"input-datetime",12),t.bIt("click",function(){return t.eBV(o),t.Njj(a.filtro())}),t.k0s(),t.j41(9,"input-datetime",13),t.bIt("click",function(){return t.eBV(o),t.Njj(a.filtro())}),t.k0s()()(),t.j41(10,"columns")(11,"column",14),t.DNE(12,z,2,1,"ng-template",null,2,t.C5r),t.k0s(),t.j41(14,"column",14),t.DNE(15,w,4,6,"ng-template",null,3,t.C5r),t.k0s(),t.j41(17,"column",15),t.DNE(18,S,2,1,"ng-template",null,4,t.C5r),t.k0s(),t.j41(20,"column",16),t.DNE(21,V,2,1,"ng-template",null,5,t.C5r),t.k0s(),t.nrm(23,"column",17)(24,"column",18),t.k0s(),t.nrm(25,"pagination",19),t.k0s()}if(2&e){const o=t.sdS(13),m=t.sdS(16),k=t.sdS(19),W=t.sdS(22);t.Y8G("dao",a.dao)("add",a.add)("title",a.isModal?"":a.title)("orderBy",a.orderBy)("groupBy",a.groupBy)("join",a.join)("hasAdd",a.auth.hasPermissionTo("MOD_AFT_INCL"))("hasEdit",a.auth.hasPermissionTo("MOD_AFT_EDT")),t.R7$(),t.Y8G("ngIf",!a.selectable),t.R7$(),t.Y8G("form",a.filter)("where",a.filterWhere)("submit",a.filterSubmit.bind(a))("collapseChange",a.filterCollapseChange.bind(a))("collapsed",a.filterCollapsed)("deleted",a.auth.hasPermissionTo("MOD_AUDIT_DEL")),t.R7$(2),t.Y8G("size",3)("control",a.filter.controls.usuario_id)("dao",a.usuarioDao),t.R7$(2),t.Y8G("size",3)("control",a.filter.controls.tipo_motivo_afastamento_id)("dao",a.tipoMotivoAfastamentoDao),t.R7$(2),t.Y8G("size",3),t.R7$(),t.Y8G("size",3),t.R7$(2),t.Y8G("title",a.lex.translate("Usu\xe1rio"))("template",o),t.R7$(3),t.Y8G("title",a.lex.translate("Motivo"))("template",m),t.R7$(3),t.Y8G("template",k),t.R7$(3),t.Y8G("template",W),t.R7$(4),t.Y8G("onEdit",a.edit)("options",a.options),t.R7$(),t.Y8G("rows",a.rowsLimit)}},dependencies:[f.bT,G._,j.T,$.I,N.i,b.H,L.e,D.O,F.r]})}return s})(),canActivate:[r.q],resolve:{config:d.L},runGuardsAndResolvers:"always",data:{title:"Afastamentos"}},{path:"new",component:c,canActivate:[r.q],resolve:{config:d.L},runGuardsAndResolvers:"always",data:{title:"Inclus\xe3o de Afastamento",modal:!0}},{path:":id/edit",component:c,canActivate:[r.q],resolve:{config:d.L},runGuardsAndResolvers:"always",data:{title:"Edi\xe7\xe3o de Afastamento",modal:!0}},{path:":id/consult",component:c,canActivate:[r.q],resolve:{config:d.L},runGuardsAndResolvers:"always",data:{title:"Consulta a Afastamento",modal:!0}}];let U=(()=>{class s{static#t=this.\u0275fac=function(e){return new(e||s)};static#a=this.\u0275mod=t.$C({type:s});static#o=this.\u0275inj=t.G2t({imports:[h.iI.forChild(P),h.iI]})}return s})();var H=n(8425),X=n(8832);let Q=(()=>{class s{static#t=this.\u0275fac=function(e){return new(e||s)};static#a=this.\u0275mod=t.$C({type:s});static#o=this.\u0275inj=t.G2t({imports:[f.MD,H.h,X.X1,U]})}return s})()}}]);