import{a as De}from"./chunk-Q57W2TY4.js";import{a as _e}from"./chunk-3OQ5NXFP.js";import{b as be}from"./chunk-GEQ4G77C.js";import{a as x,b as Q}from"./chunk-72ETMCRT.js";import{W as ee,Y as te,b as J,f as fe,fa as Ce,h as Z,i as M,j as he,l as ge,q as ve,s as B,v as ye,w as Ie,x as Ee}from"./chunk-JEWU6XZO.js";import{b as ue,c as K,d as Y,e as me,h as pe,m as ce,s as O}from"./chunk-OWVQDN4P.js";import"./chunk-P4ZMML75.js";import{Ab as ne,Bb as W,Cd as $,Fa as d,Fb as se,Ga as u,Ha as c,La as L,Ma as k,Na as D,Nc as z,P as j,Sc as V,U as R,Ua as y,V as H,Va as I,Wa as E,Xa as C,Ya as T,Z as U,Za as G,Zc as X,_ as N,_a as oe,ba as P,fd as de,h,ic as le,ma as s,na as w,oc as re,sb as A,uc as S,va as F,xa as g,ya as b,za as n}from"./chunk-SDCVQHKS.js";var ke=["unidade"];function Ge(r,o){if(r&1&&(d(0,"span")(1,"strong"),T(2),u()()),r&2){let l=D();s(2),G("Servidor: "+(l.entity==null?null:l.entity.nome))}}function ze(r,o){if(r&1&&c(0,"top-alert",17),r&2){let l=D();n("message","\xC9 imposs\xEDvel excluir "+l.lex.translate("a lota\xE7\xE3o")+" "+l.lex.translate("do servidor")+". Para alter\xE1-la, lote-o em outra "+l.lex.translate("unidade")+"!")}}function Ve(r,o){if(r&1&&(d(0,"strong"),T(1),u(),d(2,"span"),T(3),u(),c(4,"br"),d(5,"span"),T(6),u()),r&2){let l=o.row;s(),G(l.unidade_sigla||""),s(2),oe(" ",l.informal?"(Unidade Informal)":"(C\xF3digo: "+(l.unidade_codigo||"")+")",""),s(3),oe("",l.unidade_nome||""," ")}}function xe(r,o){if(r&1&&c(0,"input-search",18,5),r&2){let l=D(),t=C(9);n("disabled",t!=null&&t.adding?void 0:"true")("size",12)("dao",l.unidadeDao)}}function Me(r,o){if(r&1&&(d(0,"div"),c(1,"badge",20)(2,"br"),u()),r&2){let l=o.$implicit,t=D(2);s(),n("color",t.lookup.getColor(t.lookup.UNIDADE_INTEGRANTE_TIPO,l||""))("icon",t.lookup.getIcon(t.lookup.UNIDADE_INTEGRANTE_TIPO,l||""))("label",t.lookup.getValue(t.lookup.UNIDADE_INTEGRANTE_TIPO,l||""))}}function Be(r,o){if(r&1&&g(0,Me,3,3,"div",19),r&2){let l=o.row;n("ngForOf",l.atribuicoes)}}function Qe(r,o){if(r&1&&(d(0,"input-multiselect",21),c(1,"input-select",22),u()),r&2){let l=D();n("size",8)("addItemHandle",l.addItemHandle.bind(l))("deleteItemHandle",l.deleteItemHandle.bind(l)),s(),n("size",12)("items",l.lookup.ordenarLookupItem(l.lookup.UNIDADE_INTEGRANTE_TIPO))}}var q=(()=>{let o=class o extends ce{set control(t){super.control=t}get control(){return super.control}set entity(t){super.entity=t}get entity(){return super.entity}set noPersist(t){super.noPersist=t}get noPersist(){return super.noPersist}constructor(t){super(t),this.injector=t,this.items=[],this.perfilUsuario="",this.validate=(i,e)=>{let a=null;return["unidade_id","perfil_id","atribuicoes"].includes(e)&&!i.value?.length&&(a="Obrigat\xF3rio"),e=="unidade_id"&&this.grid?.adding&&this.items.map(m=>m.id).includes(i.value)&&(a="O usu\xE1rio j\xE1 \xE9 integrante desta unidade. Edite-a, ao inv\xE9s de inclu\xED-la novamente!"),a},this.formValidation=i=>{let e=i.controls.atribuicoes.value;if(this.util.array_diff(["GESTOR","GESTOR_SUBSTITUTO","GESTOR_DELEGADO"],e.map(a=>a.key)||[]).length<2)return"A um mesmo servidor s\xF3 pode ser atribu\xEDda uma fun\xE7\xE3o de gestor (titular, substituto ou delegado), para uma mesma Unidade!"},this.integranteService=t.get(De),this.integranteDao=t.get($),this.unidadeDao=t.get(V),this.usuarioDao=t.get(z),this.perfilDao=t.get(X),this.form=this.fh.FormBuilder({unidade_id:{default:""},atribuicoes:{default:void 0},atribuicao:{default:""}},this.cdRef,this.validate),this.formPerfil=this.fh.FormBuilder({perfil_id:{default:""}},this.cdRef,this.validate)}ngOnInit(){super.ngOnInit(),this.entity=this.entity??this.metadata?.entity}ngAfterViewInit(){h(this,null,function*(){yield this.loadData(this.entity||{},this.form)})}loadData(t,i){return h(this,null,function*(){if(t.id){let e=[];try{yield this.integranteDao.carregarIntegrantes("",t.id).then(a=>e=a.integrantes.filter(m=>m.atribuicoes?.length>0))}finally{this.perfilUsuario=t.perfil_id,this.formPerfil.controls.perfil_id.setValue(this.perfilUsuario),this.items=[],e.forEach(a=>this.items?.push(this.integranteService.completarIntegrante(a,a.id,t.id,a.atribuicoes))),this.items=this.integranteService.ordenarIntegrantes(this.items),this.cdRef.detectChanges(),this.grid.loading=!1}}})}salvarPerfil(){return h(this,null,function*(){this.submitting=!0,this.usuarioDao?.update(this.entity.id,{perfil_id:this.formPerfil.controls.perfil_id.value},[]).then(t=>{this.perfilUsuario=t.perfil_id,this.submitting=!1})})}addItemHandle(){let t,i=this.lookup.getValue(this.lookup.UNIDADE_INTEGRANTE_TIPO,this.form.controls.atribuicao.value),e=this.form.controls.atribuicao.value;if(i?.length&&this.util.validateLookupItem(this.form.controls.atribuicao.value,e)){let a=this.lookup.getIcon(this.lookup.UNIDADE_INTEGRANTE_TIPO,this.form.controls.atribuicao.value),m=this.lookup.getColor(this.lookup.UNIDADE_INTEGRANTE_TIPO,this.form.controls.atribuicao.value);t={key:e,value:i,icon:a,color:m},this.form.controls.atribuicao.setValue("")}return t}deleteItemHandle(t){return t.key!="LOTADO"}carregarIntegrante(t,i){return h(this,null,function*(){t.controls.unidade_id.setValue(this.grid?.adding?i.unidade_id:i.id),t.controls.atribuicoes.setValue(this.integranteService.converterAtribuicoes(i.atribuicoes)),t.controls.atribuicao.setValue("")})}adicionarIntegrante(){return h(this,null,function*(){return this.grid&&(this.grid.error=""),{id:this.integranteDao.generateUuid(),unidade_id:"",atribuicoes:[]}})}removerIntegrante(t){return h(this,null,function*(){if(t.atribuicoes.includes("LOTADO"))yield this.dialog.alert("IMPOSS\xCDVEL EXCLUIR !","O v\xEDnculo que inclui "+this.lex.translate("a lota\xE7\xE3o")+" "+this.lex.translate("do servidor")+" n\xE3o pode ser exclu\xEDdo. Se deseja excluir as demais atribui\xE7\xF5es, edite o v\xEDnculo. Se deseja alterar "+this.lex.translate("a lota\xE7\xE3o")+", lote-o em outra "+this.lex.translate("Unidade")+".");else if(yield this.dialog.confirm("Exclui ?","Deseja realmente excluir todas as atribui\xE7\xF5es de "+this.entity.nome.toUpperCase()+" "+this.lex.translate("na unidade")+" "+t.unidade_sigla?.toUpperCase()+" ?")){let e;try{if(!this.isNoPersist)this.loading=!0,yield this.integranteDao.salvarIntegrantes([this.integranteService.completarIntegrante(t,t.id,this.entity.id,[])]).then(a=>{(e=a.find(m=>m._metadata.msg?.length)?._metadata.msg)&&this.grid&&(this.grid.error=e)}),yield this.loadData({id:this.entity.id},this.form);else return Object.assign(t,{_status:"DELETE",atribuicoes:[]}),!1}finally{this.loading=!1}}return!1})}salvarIntegrante(t,i){return h(this,null,function*(){let e=this.lookup.uniqueLookupItem(t.controls.atribuicoes.value);t.controls.atribuicoes.setValue(e),this.grid&&(this.grid.error=""),this.cdRef.detectChanges();let a=this.formValidation(t);if(a)yield this.dialog.alert("IMPOSS\xCDVEL INCLUIR/ALTERAR A UNIDADE !",a);else{let m=this.grid?.items||[],v=!0,f=this.integranteService.haAlteracaoGestor(e.map(p=>p.key),Object.assign(i,{unidade_sigla:this.unidade?.selectedItem?.entity.sigla}),m,this.entity?.nome||this.parent?.form?.controls.nome.value||"");if(f[0]!="nenhuma")if(v=yield this.dialog.confirm("CONFIRMA A ALTERA\xC7\xC3O DA CHEFIA ?",f[2]),v){switch(f[0]){case"ganho":if(f[3]){let p=this.grid?.items.findIndex(_=>_.atribuicoes.includes("LOTADO"));p&&(this.grid.items[p].atribuicoes=this.grid.items[p].atribuicoes.filter(_=>_!="LOTADO"))}break;case"troca":this.grid.items[f[1]].atribuicoes=this.grid.items[f[1]].atribuicoes.filter(p=>!["GESTOR","LOTADO"].includes(p));break}e=this.integranteService.inserirAtribuicao(e,"LOTADO"),t.controls.atribuicoes.setValue(e),this.loading=!0}else return;else{let p=this.integranteService.haAlteracaoLotacao(t,Object.assign(i,{unidade_sigla:this.unidade?.selectedItem?.entity.sigla}),m,this.entity?.nome||"");if(p[0])if(this.grid?.items[p[1]].atribuicoes.includes("GESTOR")){yield this.dialog.alert("IMPOSS\xCDVEL ALTERAR A LOTA\xC7\xC3O !",p[3]);return}else if(v=yield this.dialog.confirm("CONFIRMA A ALTERA\xC7\xC3O DA LOTA\xC7\xC3O ?",p[2]),v)this.grid.items[p[1]].atribuicoes=this.grid.items[p[1]].atribuicoes.filter(_=>_!="LOTADO");else return}try{this.isNoPersist?(i.id=this.unidade?.selectedEntity.id,this.grid.items=this.integranteService.substituirItem({id:i.id,itens:this.grid?.items||[],apelidoOuSigla:this.unidade?.selectedItem?.entity.sigla,nome:this.unidade?.selectedItem?.entity.nome,codigo:this.unidade?.selectedItem?.entity.codigo},e.map(p=>p.key),new S(this.entity)),this.cdRef.detectChanges()):(yield this.integranteDao.salvarIntegrantes([this.integranteService.completarIntegrante(i,t.controls.unidade_id.value,this.entity.id,e.map(p=>p.key))]).then(p=>{let _;(_=p?.find(Oe=>Oe._metadata.msg?.length)?._metadata.msg)&&this.dialog.alert("ATEN\xC7\xC3O: ERRO!",_)}),yield this.loadData({id:this.entity.id},this.form),this.grid&&(this.grid.error=""))}catch(p){this.grid&&(this.grid.error=p),yield this.loadData({id:this.entity.id},this.form)}finally{this.loading=!1}}})}isNoButtons(){return this.isNoPersist||this.formPerfil.controls.perfil_id.value==this.perfilUsuario?"true":void 0}};o.\u0275fac=function(i){return new(i||o)(w(P))},o.\u0275cmp=R({type:o,selectors:[["usuario-integrante"]],viewQuery:function(i,e){if(i&1&&(y(O,5),y(ke,5)),i&2){let a;I(a=E())&&(e.grid=a.first),I(a=E())&&(e.unidade=a.first)}},inputs:{control:"control",entity:"entity",noPersist:"noPersist",parent:"parent"},features:[F],decls:23,vars:23,consts:[["grid",""],["columnUnidade",""],["editUnidade",""],["columnAtribuicoes",""],["editAtribuicoes",""],["unidade",""],[4,"ngIf"],[1,"row"],[1,"col-4"],["title","",3,"submit","form","noButtons","disabled"],["controlName","perfil_id","required","",3,"disabled","label","dao"],[1,"col"],["type","warning",3,"message"],["editable","",3,"items","minHeight","form","hasDelete","add","load","remove","save"],["type","alert",3,"message",4,"ngIf"],[3,"title","template","editTemplate"],["type","options"],["type","alert",3,"message"],["label","","icon","","controlName","unidade_id",3,"disabled","size","dao"],[4,"ngFor","ngForOf"],[3,"color","icon","label"],["controlName","atribuicoes",3,"size","addItemHandle","deleteItemHandle"],["label","","icon","fas fa-sign-out-alt","controlName","atribuicao",3,"size","items"]],template:function(i,e){if(i&1){let a=L();g(0,Ge,3,1,"span",6),d(1,"div",7)(2,"div",8)(3,"editable-form",9),k("submit",function(){return U(a),N(e.salvarPerfil())}),d(4,"div",7),c(5,"input-select",10),u()()(),d(6,"div",11),c(7,"top-alert",12),u()(),d(8,"grid",13,0),g(10,ze,1,1,"top-alert",14),d(11,"columns")(12,"column",15),g(13,Ve,7,3,"ng-template",null,1,A)(15,xe,2,3,"ng-template",null,2,A),u(),d(17,"column",15),g(18,Be,1,1,"ng-template",null,3,A)(20,Qe,2,5,"ng-template",null,4,A),u(),c(22,"column",16),u()()}if(i&2){let a=C(14),m=C(16),v=C(19),f=C(21);n("ngIf",!e.isNoPersist),s(3),n("form",e.formPerfil)("noButtons",e.isNoButtons())("disabled",e.formDisabled),s(2),n("disabled",e.auth.hasPermissionTo("MOD_CFG_USER_PERFIL")?void 0:"true")("label",e.lex.translate("Perfil"))("dao",e.perfilDao),s(2),n("message","Ao conceder a "+e.lex.translate("um usu\xE1rio")+" a atribui\xE7\xE3o de "+e.lookup.getValue(e.lookup.UNIDADE_INTEGRANTE_TIPO,"GESTOR")+", "+e.lookup.getValue(e.lookup.UNIDADE_INTEGRANTE_TIPO,"GESTOR_SUBSTITUTO")+" ou de "+e.lookup.getValue(e.lookup.UNIDADE_INTEGRANTE_TIPO,"GESTOR_DELEGADO")+" em "+e.lex.translate("uma unidade")+", deve lhe ser concedido tamb\xE9m "+e.lex.translate("o n\xEDvel de acesso")+" correspondente."),s(),n("items",e.items)("minHeight",500)("form",e.form)("hasDelete",!0)("add",e.adicionarIntegrante.bind(e))("load",e.carregarIntegrante.bind(e))("remove",e.removerIntegrante.bind(e))("save",e.salvarIntegrante.bind(e)),s(2),n("ngIf",!e.isNoPersist),s(2),n("title",e.lex.translate("Unidades"))("template",a)("editTemplate",m),s(5),n("title",e.lex.translate("Atribui\xE7\xF5es"))("template",v)("editTemplate",f)}},dependencies:[ne,W,O,Y,K,B,Z,M,he,te,ye]});let r=o;return r})();var We=["lotacao"],ae=(()=>{let o=class o extends _e{constructor(t){super(t,S,z),this.injector=t,this.validate=(i,e)=>{let a=null;return e=="cpf"&&!this.util.validarCPF(i.value)&&(a="Inv\xE1lido"),["data_nascimento"].indexOf(e)>=0&&!this.dao?.validDateTime(i.value)&&(a="Inv\xE1lido"),a},this.formValidation=i=>{if(!this.unidadesIntegrantes?.formPerfil.controls.perfil_id.value?.length)return"\xC9 obrigat\xF3rio a defini\xE7\xE3o de um "+this.lex.translate("perfil")+" para "+this.lex.translate("o servidor")+". Utilize a aba 'Atribui\xE7\xF5es'.";if(!this.unidadesIntegrantes?.grid?.items.find((e,a,m)=>e.atribuicoes.includes("LOTADO")))return"\xC9 obrigat\xF3ria a defini\xE7\xE3o "+this.lex.translate("da unidade")+" "+this.lex.translate("de lota\xE7\xE3o")+" "+this.lex.translate("do servidor")+"! Defina-a na aba 'Atribui\xE7\xF5es'.";if(this.action!="new"&&this.unidadesIntegrantes?.grid?.items.find((e,a,m)=>!(e.unidade_id.length&&e.usuario_id.length)))return"Na aba 'Atribui\xE7\xF5es' h\xE1 "+this.lex.translate("unidade")+" com edi\xE7\xE3o n\xE3o conclu\xEDda. Conclua-a antes de salvar "+this.lex.translate("o servidor")+"!"},this.titleEdit=i=>"Editando "+this.lex.translate("Usu\xE1rio")+": "+(i?.nome||""),this.unidadeDao=t.get(V),this.integranteDao=t.get($),this.planoTrabalhoDao=t.get(de),this.form=this.fh.FormBuilder({email:{default:""},nome:{default:""},cpf:{default:""},matricula:{default:""},apelido:{default:""},telefone:{default:""},uf:{default:""},sexo:{default:null},url_foto:{default:""},texto_complementar_plano:{default:""},data_nascimento:{default:null}},this.cdRef,this.validate),this.planoDataset=this.planoTrabalhoDao.dataset()}loadData(t,i){return h(this,null,function*(){let e=Object.assign({},i.value);i.patchValue(this.util.fillForm(e,t)),yield this.unidadesIntegrantes?.loadData(t)})}initializeData(t){this.entity=new S,this.loadData(this.entity,t)}saveData(t){return new Promise((i,e)=>h(this,null,function*(){this.unidadesIntegrantes.grid.confirm();let a=this.util.fill(new S,this.entity);a=this.util.fillForm(a,this.form.value),a.perfil_id=this.unidadesIntegrantes?.formPerfil.controls.perfil_id.value;let m=this.unidadesIntegrantes?.items||[],v=m.findIndex(f=>f.atribuicoes.includes("LOTADO"));m.forEach((f,p,_)=>{p!=v&&f._status=="DELETE"&&(f.atribuicoes=[])}),a.integrantes=m,i(a)}))}};o.\u0275fac=function(i){return new(i||o)(w(P))},o.\u0275cmp=R({type:o,selectors:[["app-usuario-form"]],viewQuery:function(i,e){if(i&1&&(y(B,5),y(q,5),y(We,5)),i&2){let a;I(a=E())&&(e.editableForm=a.first),I(a=E())&&(e.unidadesIntegrantes=a.first),I(a=E())&&(e.lotacao=a.first)}},features:[F],decls:26,vars:33,consts:[["unidadesIntegrantes",""],["initialFocus","cpf",3,"submit","cancel","form","disabled","title"],["display","","right",""],["key","PRINCIPAL","label","Principal"],[1,"row"],[1,"form-group","col-md-3","text-center"],[1,"mt-5",3,"url","size"],[1,"form-group","col-md-9"],["label","CPF","controlName","cpf","required","",3,"disabled","size","maskFormat"],["label","Matr\xEDcula","controlName","matricula","required","",3,"disabled","size"],["label","E-mail","controlName","email","textCase","lower","required","",3,"disabled","size"],["date","","label","Nascimento","noIcon","","controlName","data_nascimento",3,"size","labelInfo"],["label","Nome","controlName","nome","required","",3,"size"],["label","Apelido","controlName","apelido","required","",3,"size"],["label","Sexo","controlName","sexo",3,"size","items"],["label","UF","icon","bi bi-flag","controlName","uf",3,"size","items"],["label","Telefone","controlName","telefone",3,"size","maskFormat"],["key","CONFIGURACOES","label","Configura\xE7\xF5es"],["controlName","texto_complementar_plano",3,"label","dataset"],["key","ATRIBUICOES",3,"label"],["type","alert",3,"message"],["noPersist","",3,"entity"]],template:function(i,e){if(i&1){let a=L();d(0,"editable-form",1),k("submit",function(){return U(a),N(e.onSaveData())})("cancel",function(){return U(a),N(e.onCancel())}),d(1,"tabs",2)(2,"tab",3)(3,"div",4)(4,"div",5),c(5,"profile-picture",6),u(),d(6,"div",7)(7,"div",4),c(8,"input-text",8)(9,"input-text",9)(10,"input-text",10)(11,"input-datetime",11),u(),d(12,"div",4),c(13,"input-text",12)(14,"input-text",13)(15,"input-radio",14),u(),d(16,"div",4),c(17,"input-select",15)(18,"input-text",16),u()()()(),d(19,"tab",17)(20,"div",4),c(21,"input-editor",18),u()(),d(22,"tab",19),c(23,"top-alert",20)(24,"usuario-integrante",21,0),u()()()}i&2&&(n("form",e.form)("disabled",e.formDisabled)("title",e.isModal?"":e.title),s(5),n("url",e.form.controls.url_foto.value)("size",150),s(3),n("disabled",e.auth.hasPermissionTo("MOD_CFG_USER_CPF")?void 0:"true")("size",3)("maskFormat","000.000.000-00"),b("maxlength",15),s(),n("disabled",e.auth.hasPermissionTo("MOD_CFG_USER_MAT")?void 0:"true")("size",2),b("maxlength",250),s(),n("disabled",e.auth.hasPermissionTo("MOD_CFG_USER_MAIL")?void 0:"true")("size",4),b("maxlength",250),s(),n("size",3)("labelInfo","Data de nascimento"),s(2),n("size",5),b("maxlength",250),s(),n("size",3),b("maxlength",250),s(),n("size",3)("items",e.lookup.SEXO),s(2),n("size",4)("items",e.lookup.UF),s(),n("size",4)("maskFormat","(00) 0000-0000||(00) 0 0000-0000"),b("maxlength",250),s(3),n("label","Texto complementar "+e.lex.translate("Plano de Trabalho"))("dataset",e.planoDataset),s(),n("label",e.lex.translate("Atribui\xE7\xF5es")),s(),n("message","\xC9 imposs\xEDvel excluir "+e.lex.translate("a lota\xE7\xE3o")+" "+e.lex.translate("do servidor")+". Para alter\xE1-la, lote-o em outra "+e.lex.translate("unidade")+"!"),s(),n("entity",e.entity))},dependencies:[B,J,fe,ge,M,Ee,Ie,te,ee,ve,q]});let r=o;return r})();function Xe(r,o){if(r&1&&(d(0,"h3",17),T(1),u()),r&2){let l=D();s(),G(l.title)}}function $e(r,o){r&1&&c(0,"toolbar")}function Je(r,o){if(r&1&&c(0,"profile-picture",18),r&2){let l=o.row;n("url",l.url_foto)("size",40)("hint",l.nome)}}function Ke(r,o){if(r&1&&(d(0,"strong"),T(1),u()),r&2){let l=o.row;s(),G((l.perfil==null?null:l.perfil.nome)||"")}}var Ae=(()=>{let o=class o extends be{constructor(t){super(t,S,z),this.injector=t,this.filterWhere=i=>{let e=[];return i?.controls.usuario?.value?.length&&e.push(["nome","like","%"+i?.controls.usuario?.value.trim().replace(" ","%")+"%"]),i?.controls.unidade_id?.value?.length&&e.push(["lotacao","==",i?.controls.unidade_id.value]),i?.controls.perfil_id?.value?.length&&e.push(["perfil_id","==",i?.controls.perfil_id?.value]),e},this.unidadeDao=t.get(V),this.perfilDao=t.get(X),this.title=this.lex.translate("Usu\xE1rios"),this.code="MOD_CFG_USER",this.join=["perfil:id,nome"],this.filter=this.fh.FormBuilder({usuario:{default:""},unidade_id:{default:""},perfil_id:{default:null}}),this.addOption(this.OPTION_INFORMACOES,"MOD_USER")}dynamicOptions(t){let i=[];return this.auth.hasPermissionTo("MOD_USER_ATRIB")&&i.push({label:"Atribui\xE7\xF5es",icon:"bi bi-list-task",onClick:e=>{this.go.navigate({route:["configuracoes","usuario",e.id,"integrante"]},{metadata:{entity:t}})}}),i}};o.\u0275fac=function(i){return new(i||o)(w(P))},o.\u0275cmp=R({type:o,selectors:[["app-usuario-list"]],viewQuery:function(i,e){if(i&1&&y(O,5),i&2){let a;I(a=E())&&(e.grid=a.first)}},features:[F],decls:20,vars:35,consts:[["columnFoto",""],["columnPerfil",""],["class","my-2",4,"ngIf"],[3,"select","dao","add","orderBy","groupBy","join","selectable","hasAdd","hasEdit"],[4,"ngIf"],[3,"form","where","submit","collapseChange","collapsed"],[1,"row"],["controlName","usuario","placeholder","Nome",3,"size","label","control"],["controlName","unidade_id",3,"size","label","control","dao"],["controlName","perfil_id","nullable","",3,"size","label","control","dao"],["icon","bi-person",3,"align","template"],["title","CPF","field","cpf"],["title","Matr\xEDcula","field","matricula"],["title","Nome","field","nome","orderBy","nome"],[3,"title","template"],["type","options",3,"onEdit","dynamicOptions","options"],[3,"rows"],[1,"my-2"],[3,"url","size","hint"]],template:function(i,e){if(i&1){let a=L();g(0,Xe,2,1,"h3",2),d(1,"grid",3),k("select",function(v){return U(a),N(e.onSelect(v))}),g(2,$e,1,0,"toolbar",4),d(3,"filter",5)(4,"div",6),c(5,"input-text",7)(6,"input-search",8)(7,"input-select",9),u()(),d(8,"columns")(9,"column",10),g(10,Je,1,3,"ng-template",null,0,A),u(),c(12,"column",11)(13,"column",12)(14,"column",13),d(15,"column",14),g(16,Ke,2,1,"ng-template",null,1,A),u(),c(18,"column",15),u(),c(19,"pagination",16),u()}if(i&2){let a=C(11),m=C(17);n("ngIf",!e.isModal),s(),n("dao",e.dao)("add",e.add)("orderBy",e.orderBy)("groupBy",e.groupBy)("join",e.join)("selectable",e.selectable)("hasAdd",e.auth.hasPermissionTo("MOD_USER_INCL"))("hasEdit",e.auth.hasPermissionTo("MOD_USER_EDT")),s(),n("ngIf",!e.selectable),s(),n("form",e.filter)("where",e.filterWhere)("submit",e.filterSubmit.bind(e))("collapseChange",e.filterCollapseChange.bind(e))("collapsed",!e.selectable&&e.filterCollapsed),s(2),n("size",4)("label",e.lex.translate("Usu\xE1rio"))("control",e.filter.controls.usuario),b("maxlength",250),s(),n("size",4)("label",e.lex.translate("Lota\xE7\xE3o"))("control",e.filter.controls.unidade_id)("dao",e.unidadeDao),s(),n("size",4)("label",e.lex.translate("Perfil"))("control",e.filter.controls.perfil_id)("dao",e.perfilDao),s(2),n("align","center")("template",a),s(6),n("title",e.lex.translate("Perfil"))("template",m),s(3),n("onEdit",e.edit)("dynamicOptions",e.dynamicOptions.bind(e))("options",e.options),s(),n("rows",e.rowsLimit)}},dependencies:[W,O,Y,K,me,ue,pe,Z,J,M,ee]});let r=o;return r})();var Ye=[{path:"",component:Ae,canActivate:[x],resolve:{config:Q},runGuardsAndResolvers:"always",data:{title:"Usu\xE1rios"}},{path:"new",component:ae,canActivate:[x],resolve:{config:Q},runGuardsAndResolvers:"always",data:{title:"Inclus\xE3o de Usu\xE1rio",modal:!0}},{path:":id/edit",component:ae,canActivate:[x],resolve:{config:Q},runGuardsAndResolvers:"always",data:{title:"Edi\xE7\xE3o de Usu\xE1rio",modal:!0}},{path:":id/consult",component:ae,canActivate:[x],resolve:{config:Q},runGuardsAndResolvers:"always",data:{title:"Consulta a Usu\xE1rio",modal:!0}},{path:":id/integrante",component:q,canActivate:[x],resolve:{config:Q},runGuardsAndResolvers:"always",data:{title:"Atribui\xE7\xF5es do Usu\xE1rio",modal:!0}}],Se=(()=>{let o=class o{};o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=H({type:o}),o.\u0275inj=j({imports:[re.forChild(Ye),re]});let r=o;return r})();var Yt=(()=>{let o=class o{};o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=H({type:o}),o.\u0275inj=j({imports:[se,Ce,le,Se]});let r=o;return r})();export{Yt as UsuarioModule};