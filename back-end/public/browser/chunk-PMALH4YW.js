import{a as gt}from"./chunk-GJBIJI6K.js";import{a as dt}from"./chunk-UFS3OPCG.js";import{b as _t}from"./chunk-76VPKZU2.js";import{a as N,b as w}from"./chunk-RMYSPY7H.js";import{b as G,d as st,fa as vt,i as mt,j as pt,n as ct,r as ut,s as W,t as ft,v as X}from"./chunk-XHTD5OAS.js";import{b as nt,c as k,d as U,e as rt,h as lt,s as C}from"./chunk-KODYKPWY.js";import"./chunk-ORJB5SCJ.js";import{Ab as q,Bb as J,Fa as m,Fb as it,Ga as p,Ha as c,La as R,Ma as P,Na as f,P as F,U as j,Ua as V,V as O,Va as z,Wa as M,Xa as d,Ya as v,Z as A,Za as x,_ as I,_a as B,ba as S,h as E,ic as ot,kb as tt,kd as Q,lb as et,ma as l,md as at,na as D,oc as Y,pc as T,sb as _,va as L,xa as u,ya as g,za as r}from"./chunk-6YMI2QVU.js";var h=class extends T{constructor(i){super(),this.notas=[],this.tipo="QUANTITATIVO",this.nome="",this.initialization(i)}};var $=class extends T{constructor(i){super(),this.sequencia=0,this.nota=0,this.descricao="",this.aprova=!1,this.justifica=!1,this.pergunta="",this.icone="",this.cor="",this.codigo="",this.justificativas=[],this.tipo_avaliacao_id="",this.initialization(i)}};var H=class extends T{constructor(i){super(),this.tipo_avaliacao_nota_id="",this.tipo_justificativa_id="",this.initialization(i)}};var Ot=()=>["cadastros","tipo-justificativa","new"],St=t=>({route:t});function Dt(t,i){if(t&1&&(m(0,"strong"),v(1),p()),t&2){let o=i.row;l(),x(o.nota)}}function Lt(t,i){if(t&1&&c(0,"input-number",24),t&2){let o=f(2);r("control",o.formNota.controls.nota)}}function Rt(t,i){if(t&1&&c(0,"input-text",24),t&2){let o=f(2);r("control",o.formNota.controls.nota),g("maxlength",250)}}function Pt(t,i){if(t&1&&(u(0,Lt,1,1,"input-number",22)(1,Rt,1,2,"input-text",22),c(2,"input-text",23)),t&2){let o=f();r("ngIf",o.form.controls.tipo.value=="QUANTITATIVO"),l(),r("ngIf",o.form.controls.tipo.value=="QUALITATIVO"),l(),r("control",o.formNota.controls.codigo),g("maxlength",250)}}function Vt(t,i){if(t&1&&c(0,"badge",25),t&2){let o=i.row;r("label",o.descricao)("icon",o.icone)("color",o.cor)}}function zt(t,i){if(t&1&&c(0,"input-text",26)(1,"input-select",27)(2,"input-color",28),t&2){let o=f();r("control",o.formNota.controls.descricao),g("maxlength",250),l(),r("size",6)("control",o.formNota.controls.icone)("items",o.lookup.ICONES),l(),r("size",6)("control",o.formNota.controls.cor)}}function Mt(t,i){t&1&&c(0,"badge",32)}function Bt(t,i){t&1&&c(0,"badge",33)}function qt(t,i){if(t&1&&(m(0,"strong"),v(1),p(),m(2,"div",29),u(3,Mt,1,0,"badge",30)(4,Bt,1,0,"badge",31),p()),t&2){let o=i.row;l(),x(o.pergunta),l(2),r("ngIf",o.aprova),l(),r("ngIf",o.justifica)}}function Jt(t,i){if(t&1&&(c(0,"input-text",24),m(1,"div",12),c(2,"input-switch",34)(3,"input-switch",35),p()),t&2){let o=f();r("control",o.formNota.controls.pergunta),g("maxlength",250),l(2),r("size",12)("control",o.formNota.controls.aprova),l(),r("size",12)("control",o.formNota.controls.justifica)}}function Qt(t,i){if(t&1&&c(0,"badge",37),t&2){let o=i.$implicit;r("label",o.tipo_justificativa.nome)}}function Gt(t,i){if(t&1&&(m(0,"div",29),u(1,Qt,1,1,"badge",36),p()),t&2){let o=i.row;l(),r("ngForOf",o.justificativas)}}function kt(t,i){if(t&1&&(m(0,"input-multiselect",38),c(1,"input-select",39,10),p()),t&2){let o=d(2),n=f();r("size",12)("canEdit",!0)("addItemControl",o)("control",n.formNota.controls.justificativas),l(),r("size",12)("control",n.formNota.controls.tipo_justificativa_id)("dao",n.tipoJustificativaDao)("addRoute",et(9,St,tt(8,Ot)))}}var K=(()=>{let i=class i extends dt{constructor(n){super(n,h,Q),this.injector=n,this.justificativasLista=[],this.tipoJustificativa=new gt,this.validate=(a,e)=>{let s=null;return["nome"].indexOf(e)>=0&&!a.value?.length&&(s="Obrigat\xF3rio"),s},this.validateNota=(a,e)=>{let s=null;return["pergunta","descricao","icone"].indexOf(e)>=0&&!a.value?.length&&(s="Obrigat\xF3rio"),s},this.titleEdit=a=>"Editando "+this.lex.translate("Tipo de Avalia\xE7\xE3o")+": "+(a?.nome||""),this.tipoJustificativaDao=n.get(at),this.join=["notas.justificativas.tipo_justificativa"],this.form=this.fh.FormBuilder({nome:{default:""},tipo:{default:"QUANTITATIVO"},notas:{default:[]}},this.cdRef,this.validate),this.formNota=this.fh.FormBuilder({descricao:{default:""},nota:{default:0},codigo:{default:""},aprova:{default:!1},pergunta:{default:""},justifica:{default:!1},icone:{default:""},cor:{default:""},justificativas:{default:[]},tipo_justificativa_id:{default:null}},this.cdRef,this.validateNota)}loadData(n,a){let e=Object.assign({},a.value);a.patchValue(this.util.fillForm(e,n))}initializeData(n){this.entity=new h,this.loadData(this.entity,n)}saveData(n){return new Promise((a,e)=>{let s=this.util.fill(new h,this.entity);s=this.util.fillForm(s,this.form.value),a(s)})}addNota(){return E(this,null,function*(){return new $({tipo_avaliacao_id:this.entity.id,sequencia:this.form.controls.notas.value.length+1})})}loadNota(n,a){return E(this,null,function*(){n.patchValue(a),n.controls.tipo_justificativa_id.setValue(null),n.controls.justificativas.setValue(a.justificativas?.map(e=>Object.assign({},{key:e.tipo_justificativa_id,value:e.tipo_justificativa.nome,data:e.tipo_justificativa}))||[])})}removeNota(n){return E(this,null,function*(){return yield this.dialog.confirm("Exclui ?","Deseja realmente excluir?")})}saveNota(n,a){return E(this,null,function*(){let e=n.controls.justificativas.value||[];return this.util.fillForm(a,n.value),a.justificativas=e.map(s=>(a.justificativas||[]).find(y=>y.tipo_justificativa_id==s.key)||new H({tipo_avaliacao_nota_id:this.entity.id,tipo_justificativa_id:s.key,tipo_justificativa:s.data})),a})}};i.\u0275fac=function(a){return new(a||i)(D(S))},i.\u0275cmp=j({type:i,selectors:[["app-tipo-avaliacao-form"]],viewQuery:function(a,e){if(a&1&&V(W,5),a&2){let s;z(s=M())&&(e.editableForm=s.first)}},features:[L],decls:30,vars:25,consts:[["tipo",""],["grid",""],["columnNota",""],["editNota",""],["columnDescricao",""],["editDescricao",""],["columnPerguntaConfiguracoes",""],["editPerguntaConfiguracoes",""],["columnJustificativas",""],["editJustificativas",""],["justificativa",""],["initialFocus","nome",3,"submit","cancel","form","disabled","title"],[1,"row"],["label","T\xEDtulo","controlName","nome","required","",3,"size"],["label","Tipo da nota","controlName","tipo",3,"size","items"],["title","Notas"],["editable","",3,"control","form","hasDelete","add","load","remove","save"],["title","Nota",3,"template","editTemplate"],["title","Descri\xE7\xE3o/Icone/Cor",3,"template","editTemplate"],[3,"title","template","editTemplate"],[3,"title","width","template","editTemplate"],["type","options"],[3,"control",4,"ngIf"],["placeholder","C\xF3digo integra\xE7\xE3o",3,"control"],[3,"control"],[3,"label","icon","color"],["placeholder","Descri\xE7\xE3o",3,"control"],["icon","fas fa-sign-out-alt",3,"size","control","items"],[3,"size","control"],[1,"one-per-line"],["color","success","icon","bi bi-check","label","Aprova","hint","Se para esta nota ser\xE1 considerado como aprovado, quando aplic\xE1vel",4,"ngIf"],["color","warning","icon","bi bi-patch-question","label","Justifica","hint","Se para esta nota ser\xE1 obrigat\xF3rio uma justificativa",4,"ngIf"],["color","success","icon","bi bi-check","label","Aprova","hint","Se para esta nota ser\xE1 considerado como aprovado, quando aplic\xE1vel"],["color","warning","icon","bi bi-patch-question","label","Justifica","hint","Se para esta nota ser\xE1 obrigat\xF3rio uma justificativa"],["scale","small","labelPosition","right","label","Aprova?","labelInfo","Se para esta nota ser\xE1 considerado como aprovado, quando aplic\xE1vel",3,"size","control"],["scale","small","labelPosition","right","label","Justifica?","labelInfo","Se para esta nota ser\xE1 obrigat\xF3rio uma justificativa",3,"size","control"],["color","light",3,"label",4,"ngFor","ngForOf"],["color","light",3,"label"],["noBox","",3,"size","canEdit","addItemControl","control"],["fullEntity","",3,"size","control","dao","addRoute"]],template:function(a,e){if(a&1){let s=R();m(0,"editable-form",11),P("submit",function(){return A(s),I(e.onSaveData())})("cancel",function(){return A(s),I(e.onCancel())}),m(1,"div",12),c(2,"input-text",13)(3,"input-select",14,0),p(),m(5,"separator",15)(6,"grid",16,1)(8,"columns")(9,"column",17),u(10,Dt,2,1,"ng-template",null,2,_)(12,Pt,3,4,"ng-template",null,3,_),p(),m(14,"column",18),u(15,Vt,1,3,"ng-template",null,4,_)(17,zt,3,7,"ng-template",null,5,_),p(),m(19,"column",19),u(20,qt,5,3,"ng-template",null,6,_)(22,Jt,4,6,"ng-template",null,7,_),p(),m(24,"column",20),u(25,Gt,2,1,"ng-template",null,8,_)(27,kt,3,11,"ng-template",null,9,_),p(),c(29,"column",21),p()()()()}if(a&2){let s=d(11),b=d(13),y=d(16),Tt=d(18),Ct=d(21),yt=d(23),Et=d(26),At=d(28);r("form",e.form)("disabled",e.formDisabled)("title",e.isModal?"":e.title),l(2),r("size",8),g("maxlength",250),l(),r("size",4)("items",e.lookup.TIPO_AVALIACAO_TIPO),l(3),r("control",e.form.controls.notas)("form",e.formNota)("hasDelete",!0)("add",e.addNota.bind(e))("load",e.loadNota.bind(e))("remove",e.removeNota.bind(e))("save",e.saveNota.bind(e)),l(3),r("template",s)("editTemplate",b),l(5),r("template",y)("editTemplate",Tt),l(5),r("title",`Pergunta motivacional
Configura\xE7\xF5es`)("template",Ct)("editTemplate",yt),l(5),r("title",e.lex.translate("Tipos de justificativa"))("width",300)("template",Et)("editTemplate",At)}},dependencies:[q,J,C,U,k,W,ct,G,mt,st,pt,ft,X,ut]});let t=i;return t})();function Ut(t,i){t&1&&c(0,"toolbar")}function Wt(t,i){if(t&1&&v(0),t&2){let o=i.row;B(" ",o.nome," ")}}function Xt(t,i){if(t&1&&(m(0,"div"),v(1),p()),t&2){let o=f().row,n=f();l(),B(" ",n.getNotasText(o.notas)," ")}}function $t(t,i){t&1&&c(0,"badge",19)}function Ht(t,i){t&1&&c(0,"badge",20)}function Kt(t,i){if(t&1&&(m(0,"tr")(1,"td"),c(2,"badge",16),p(),m(3,"td"),v(4),c(5,"br"),m(6,"small"),v(7),p(),c(8,"br"),p(),m(9,"td"),u(10,$t,1,0,"badge",17)(11,Ht,1,0,"badge",18),p()()),t&2){let o=i.$implicit;l(2),r("label",o.nota)("icon",o.icon)("color",o.cor),l(2),B(" ",o.descricao,""),l(3),x(o.pergunta),l(3),r("ngIf",o.aprova),l(),r("ngIf",o.justifica)}}function Yt(t,i){if(t&1&&(m(0,"table",13)(1,"thead")(2,"tr")(3,"th",14),v(4,"Nota"),p(),m(5,"th",14),v(6,"Descri\xE7\xE3o"),c(7,"br"),m(8,"small"),v(9,"Pergunta motivacional"),p()(),m(10,"th",14),v(11,"Op\xE7\xF5es"),p()()(),m(12,"tbody"),u(13,Kt,12,7,"tr",15),p()()),t&2){let o=f().row,n=f();l(13),r("ngForOf",n.notasOrdenadas(o).notas)}}function Zt(t,i){if(t&1&&u(0,Xt,2,1,"div",12)(1,Yt,14,1,"ng-template",null,2,_),t&2){let o=d(2),n=f();r("ngIf",n.selectable)("ngIfElse",o)}}var ht=(()=>{let i=class i extends _t{constructor(n){super(n,h,Q),this.injector=n,this.filterWhere=a=>{let e=[],s=a.value;return s.nome?.length&&e.push(["nome","like","%"+s.nome.trim().replace(" ","%")+"%"]),e},this.title=this.lex.translate("Tipos de Avalia\xE7\xE3o"),this.code="MOD_TIPO_AVAL",this.filter=this.fh.FormBuilder({nome:{default:""}}),this.addOption(this.OPTION_INFORMACOES),this.addOption(this.OPTION_EXCLUIR,"MOD_TIPO_AVAL_EXCL"),this.addOption(this.OPTION_LOGS,"MOD_AUDIT_LOG")}getNotasText(n){return n.map(a=>a.nota).join(", ")}notasOrdenadas(n){let a=n.notas;return a.sort((e,s)=>e.sequencia-s.sequencia),n.notas=a,n}};i.\u0275fac=function(a){return new(a||i)(D(S))},i.\u0275cmp=j({type:i,selectors:[["app-tipo-avaliacao-list"]],viewQuery:function(a,e){if(a&1&&V(C,5),a&2){let s;z(s=M())&&(e.grid=s.first)}},features:[L],decls:14,vars:25,consts:[["columnNome",""],["columnNotas",""],["tabelaNotas",""],[3,"select","dao","add","title","orderBy","groupBy","join","selectable","hasAdd","hasEdit"],[4,"ngIf"],[3,"deleted","form","where","submit","collapseChange","collapsed"],[1,"row"],["controlName","nome","placeholder","Nome...",3,"size","label","control"],["title","Nome",3,"template"],["title","Notas",3,"template"],["type","options",3,"onEdit","options"],[3,"rows"],[4,"ngIf","ngIfElse"],[1,"table"],["scope","col"],[4,"ngFor","ngForOf"],[3,"label","icon","color"],["icon","bi bi-hand-thumbs-up","color","success","label","Aprova",4,"ngIf"],["icon","bi bi-patch-question","color","primary","label","Justifica",4,"ngIf"],["icon","bi bi-hand-thumbs-up","color","success","label","Aprova"],["icon","bi bi-patch-question","color","primary","label","Justifica"]],template:function(a,e){if(a&1){let s=R();m(0,"grid",3),P("select",function(y){return A(s),I(e.onSelect(y))}),u(1,Ut,1,0,"toolbar",4),m(2,"filter",5)(3,"div",6),c(4,"input-text",7),p()(),m(5,"columns")(6,"column",8),u(7,Wt,1,1,"ng-template",null,0,_),p(),m(9,"column",9),u(10,Zt,3,2,"ng-template",null,1,_),p(),c(12,"column",10),p(),c(13,"pagination",11),p()}if(a&2){let s=d(8),b=d(11);r("dao",e.dao)("add",e.add)("title",e.isModal?"":e.title)("orderBy",e.orderBy)("groupBy",e.groupBy)("join",e.join)("selectable",e.selectable)("hasAdd",e.auth.hasPermissionTo("MOD_TIPO_AVAL_INCL"))("hasEdit",e.auth.hasPermissionTo("MOD_TIPO_AVAL_EDT")),l(),r("ngIf",!e.selectable),l(),r("deleted",e.auth.hasPermissionTo("MOD_AUDIT_DEL"))("form",e.filter)("where",e.filterWhere)("submit",e.filterSubmit.bind(e))("collapseChange",e.filterCollapseChange.bind(e))("collapsed",e.filterCollapsed),l(2),r("size",12)("label","Nome "+e.lex.translate("tipo de avalia\xE7\xE3o"))("control",e.filter.controls.nome),g("maxlength",250),l(2),r("template",s),l(3),r("template",b),l(3),r("onEdit",e.edit)("options",e.options),l(),r("rows",e.rowsLimit)}},dependencies:[q,J,C,U,k,rt,nt,lt,G,X]});let t=i;return t})();var te=[{path:"",component:ht,canActivate:[N],resolve:{config:w},runGuardsAndResolvers:"always",data:{title:"Tipos de Avalia\xE7\xE3o"}},{path:"new",component:K,canActivate:[N],resolve:{config:w},runGuardsAndResolvers:"always",data:{title:"Inclus\xE3o de Tipo de Avalia\xE7\xE3o",modal:!0}},{path:":id/edit",component:K,canActivate:[N],resolve:{config:w},runGuardsAndResolvers:"always",data:{title:"Edi\xE7\xE3o de Tipo de Avalia\xE7\xE3o",modal:!0}},{path:":id/consult",component:K,canActivate:[N],resolve:{config:w},runGuardsAndResolvers:"always",data:{title:"Consulta a Tipo de Avalia\xE7\xE3o",modal:!0}}],bt=(()=>{let i=class i{};i.\u0275fac=function(a){return new(a||i)},i.\u0275mod=O({type:i}),i.\u0275inj=F({imports:[Y.forChild(te),Y]});let t=i;return t})();var Ue=(()=>{let i=class i{};i.\u0275fac=function(a){return new(a||i)},i.\u0275mod=O({type:i}),i.\u0275inj=F({imports:[it,vt,ot,bt]});let t=i;return t})();export{Ue as TipoAvaliacaoModule};