"use strict";(self.webpackChunkpetrvs=self.webpackChunkpetrvs||[]).push([[295],{9036:(z,N,d)=>{d.d(N,{l:()=>g});var U=d(4423),C=d(3279);let g=(()=>{class b extends U.F{constructor(A){super("Avaliacao",A),this.injector=A,this.inputSearchConfig.searchFields=[]}cancelarAvaliacao(A){return new Promise((f,E)=>{this.server.post("api/"+this.collection+"/cancelar-avaliacao",{id:A}).subscribe(O=>{O?.error?E(O?.error):f(!0)},O=>E(O))})}recorrer(A,f){return new Promise((E,O)=>{this.server.post("api/"+this.collection+"/recorrer",{id:A.id,recurso:f}).subscribe(R=>{R?.error?O(R?.error):(A.recurso=f,E(!0))},R=>O(R))})}static#t=this.\u0275fac=function(f){return new(f||b)(C.KVO(C.zZn))};static#e=this.\u0275prov=C.jDH({token:b,factory:b.\u0275fac,providedIn:"root"})}return b})()},6295:(z,N,d)=>{d.d(N,{r:()=>Ot});var U=d(5611),C=d(2119),g=d(6867),b=d(5374),Y=d(6268),A=d(3535),f=d(5413),E=d(5464),O=d(9062),R=d(4450),$=d(9344),v=d(2342),x=d(976),t=d(3279);function s(o,n){if(1&o){const e=t.RV6();t.j41(0,"input-switch",49),t.bIt("change",function(i){t.eBV(e);const l=t.XpG(2);return t.Njj(l.onLotadosMinhaUnidadeChange(i))}),t.k0s()}if(2&o){const e=t.XpG(2);t.Y8G("size",4)("control",e.filter.controls.lotados_minha_unidade)}}function r(o,n){if(1&o){const e=t.RV6();t.j41(0,"toolbar"),t.DNE(1,s,1,2,"input-switch",47),t.j41(2,"input-switch",48),t.bIt("change",function(i){t.eBV(e);const l=t.XpG();return t.Njj(l.onAgruparChange(i))}),t.k0s()()}if(2&o){const e=t.XpG();t.R7$(),t.Y8G("ngIf",e.temAtribuicaoChefia),t.R7$(),t.Y8G("size",4)("control",e.filter.controls.agrupar)}}function _(o,n){if(1&o&&(t.j41(0,"span",52),t.nrm(1,"i",53),t.EFF(2),t.k0s()),2&o){const e=t.XpG().row;t.R7$(2),t.SpI(" ",null==e.entregas?null:e.entregas.length,"")}}function c(o,n){if(1&o&&t.DNE(0,_,3,1,"span",51),2&o){const e=n.row;t.Y8G("ngIf",null==e.entregas?null:e.entregas.length)}}function h(o,n){if(1&o){const e=t.RV6();t.j41(0,"plano-trabalho-list-entrega",54),t.bIt("atualizaPlanoTrabalhoEvent",function(i){t.eBV(e);const l=t.XpG(2);return t.Njj(null==((null==l.grid?null:l.grid.query)||l.query)?null:((null==l.grid?null:l.grid.query)||l.query).refreshId(i))}),t.k0s()}if(2&o){const e=n.row;t.Y8G("entity",e)("planoTrabalhoEditavel",e._metadata.editavel||!1)}}function m(o,n){if(1&o&&(t.j41(0,"column",50),t.DNE(1,c,1,1,"ng-template",null,18,t.C5r)(3,h,1,2,"ng-template",null,19,t.C5r),t.k0s()),2&o){const e=t.sdS(2),a=t.sdS(4),i=t.XpG();t.Y8G("align","center")("hint",i.lex.translate("Entrega"))("template",e)("expandTemplate",a)}}function u(o,n){1&o&&(t.j41(0,"order",55),t.EFF(1,"#ID"),t.k0s()),2&o&&t.Y8G("header",n.header)}function P(o,n){if(1&o&&(t.j41(0,"span"),t.EFF(1),t.k0s()),2&o){const e=n.row;t.R7$(),t.SpI(" ","#"+e.numero,"")}}function Z(o,n){1&o&&(t.j41(0,"order",56),t.EFF(1,"Usu\xe1rio"),t.k0s(),t.nrm(2,"br"),t.EFF(3,"Programa ")),2&o&&t.Y8G("header",n.header)}function tt(o,n){if(1&o&&(t.j41(0,"span"),t.EFF(1),t.k0s(),t.nrm(2,"br")(3,"badge",57)),2&o){const e=n.row;t.R7$(),t.SpI(" ",(null==e.usuario?null:e.usuario.nome)||"",""),t.R7$(2),t.Y8G("label",(null==e.programa?null:e.programa.nome)||"")}}function et(o,n){if(1&o&&(t.j41(0,"span"),t.EFF(1),t.k0s()),2&o){const e=n.row;t.R7$(),t.SpI(" ",(null==e.unidade?null:e.unidade.sigla)||"","")}}function at(o,n){if(1&o&&(t.j41(0,"span"),t.EFF(1),t.k0s()),2&o){const e=n.row;t.R7$(),t.SpI(" ",(null==e.tipo_modalidade?null:e.tipo_modalidade.nome)||"","")}}function it(o,n){if(1&o&&(t.EFF(0," Vig\xeancia de"),t.nrm(1,"br"),t.j41(2,"order",58),t.EFF(3,"In\xedcio"),t.k0s(),t.EFF(4,"a"),t.j41(5,"order",59),t.EFF(6,"Fim"),t.k0s()),2&o){const e=n.header;t.R7$(2),t.Y8G("header",e),t.R7$(3),t.Y8G("header",e)}}function ot(o,n){1&o&&t.nrm(0,"badge",62)}function st(o,n){if(1&o&&(t.j41(0,"small"),t.EFF(1),t.k0s(),t.j41(2,"div",60),t.DNE(3,ot,1,0,"badge",61),t.k0s()),2&o){const e=n.row,a=t.XpG();t.R7$(),t.Lme(" ",a.dao.getDateFormatted(e.data_inicio)," "," at\xe9 "+a.dao.getDateFormatted(e.data_fim),""),t.R7$(2),t.Y8G("ngIf",a.planoTrabalhoService.estaVigente(e))}}function nt(o,n){1&o&&t.nrm(0,"documentos-badge",63),2&o&&t.Y8G("documento",n.row.documento)("maxWidth",200)}function lt(o,n){1&o&&t.nrm(0,"badge",67)}function rt(o,n){1&o&&t.nrm(0,"badge",68)}function dt(o,n){if(1&o&&(t.nrm(0,"badge",64)(1,"br"),t.DNE(2,lt,1,0,"badge",65)(3,rt,1,0,"badge",66)),2&o){const e=n.row,a=t.XpG();t.Y8G("color",a.lookup.getColor(a.lookup.PLANO_TRABALHO_STATUS,e.status))("icon",a.lookup.getIcon(a.lookup.PLANO_TRABALHO_STATUS,e.status))("label",a.lookup.getValue(a.lookup.PLANO_TRABALHO_STATUS,e.status)),t.R7$(2),t.Y8G("ngIf",e.data_arquivamento),t.R7$(),t.Y8G("ngIf",e.deleted_at)}}function ut(o,n){1&o&&t.EFF(0),2&o&&t.JRh(n.row.numero)}function _t(o,n){if(1&o&&t.EFF(0),2&o){const e=n.row;t.JRh((null==e.usuario?null:e.usuario.matricula)||"")}}function ct(o,n){if(1&o&&t.EFF(0),2&o){const e=n.row;t.JRh((null==e.programa?null:e.programa.nome)||"")}}function ht(o,n){if(1&o&&t.EFF(0),2&o){const e=n.row;t.JRh((null==e.unidade?null:e.unidade.nome)||"")}}function mt(o,n){if(1&o&&t.EFF(0),2&o){const e=n.row;t.JRh((null==e.tipo_modalidade?null:e.tipo_modalidade.nome)||"")}}function pt(o,n){if(1&o&&t.EFF(0),2&o){const e=n.row,a=t.XpG();t.JRh(a.util.getDateTimeFormatted(e.data_inicio))}}function gt(o,n){if(1&o&&t.EFF(0),2&o){const e=n.row,a=t.XpG();t.JRh(a.util.getDateTimeFormatted(e.data_fim))}}function At(o,n){if(1&o&&t.EFF(0),2&o){const e=n.row;t.JRh(null!=e.documento&&null!=e.documento.numero_processo&&e.documento.numero_processo.length?null==e.documento?null:e.documento.numero_processo:"N\xe3o atribu\xeddo")}}let Ot=(()=>{class o extends O.P{constructor(e){super(e,E.C,g.x),this.injector=e,this.temAtribuicaoChefia=!1,this.routeStatus={route:["uteis","status"]},this.multiselectAllFields=["tipo_modalidade_id","usuario_id","unidade_id","documento_id"],this.relatorios=[{key:"PTR_LISTA",value:"Lista Planos de Trabalhos"}],this.botoes=[],this.planoTrabalhoEditavel=!1,this.DATAS_FILTRO=[{key:"VIGENTE",value:"Vigente"},{key:"NAOVIGENTE",value:"N\xe3o vigente"},{key:"INICIAM",value:"Iniciam"},{key:"FINALIZAM",value:"Finalizam"}],this.filterValidate=(a,i)=>{let l=null;return"data_filtro_inicio"==i&&a.value>this.filter?.controls.data_filtro_fim.value?l="Maior que fim":"data_filtro_fim"==i&&a.value<this.filter?.controls.data_filtro_inicio.value&&(l="Menor que in\xedcio"),l},this.filterWhere=a=>{let i=[],l=a.value;return l.tipo_modalidade_id?.length&&i.push(["tipo_modalidade_id","==",l.tipo_modalidade_id]),l.data_filtro&&(i.push(["data_filtro","==",l.data_filtro]),i.push(["data_filtro_inicio","==",l.data_filtro_inicio]),i.push(["data_filtro_fim","==",l.data_filtro_fim])),l.usuario?.length&&i.push(["usuario.nome","like","%"+l.usuario.trim().replace(" ","%")+"%"]),l.unidade_id?.length&&i.push(["unidade_id","==",l.unidade_id]),l.status&&i.push(["status","==",l.status]),l.lotados_minha_unidade&&i.push(["lotados_minha_unidade","==",!0]),i.push(["incluir_arquivados","==",this.filter.controls.arquivados.value]),i},this.dynamicMultiselectMenu=a=>{let i=!!Object.keys(a).length,l=[];return Object.entries(a).forEach(([S,D])=>{this.planoTrabalhoService.needSign(D)||(i=!1)}),i&&l.push({label:"Assinar",icon:"bi bi-pen",onClick:this.assinar.bind(this)}),l},this.unidadeDao=e.get(A.s),this.programaDao=e.get(b.X),this.documentoDao=e.get(C.c),this.documentoService=e.get($.s),this.unidadeService=e.get(x.S),this.utilService=e.get(v.a),this.usuarioDao=e.get(f._),this.planoTrabalhoService=e.get(R.V),this.tipoModalidadeDao=e.get(Y.U),this.title=this.lex.translate("Planos de Trabalho"),this.code="MOD_PTR",this.filter=this.fh.FormBuilder({agrupar:{default:!0},lotados_minha_unidade:{default:!1},usuario:{default:""},status:{default:""},unidade_id:{default:null},arquivados:{default:!1},tipo_modalidade_id:{default:null},data_filtro:{default:null},data_filtro_inicio:{default:new Date},data_filtro_fim:{default:new Date}},this.cdRef,this.filterValidate),this.join=["unidade.entidade","unidade.gestor.usuario:id","usuario","programa.template_tcr","documento.assinaturas.usuario:id,nome,url_foto","tipo_modalidade","entregas.plano_entrega_entrega.entrega","entregas.plano_entrega_entrega.plano_entrega:id,unidade_id","entregas.plano_entrega_entrega.plano_entrega.unidade","entregas.entrega","entregas.reacoes.usuario:id,nome,apelido"],this.temAtribuicaoChefia=this.auth.isGestorAlgumaAreaTrabalho(!1),this.groupBy=[{field:"unidade.sigla",label:"Unidade"}],this.BOTAO_ALTERAR={label:"Alterar",icon:"bi bi-pencil-square",color:"btn-outline-info",onClick:this.edit.bind(this)},this.BOTAO_ARQUIVAR={label:"Arquivar",icon:"bi bi-inboxes",onClick:this.arquivar.bind(this)},this.BOTAO_ASSINAR={label:"Assinar",icon:"bi bi-pen",onClick:this.assinar.bind(this)},this.BOTAO_ATIVAR={label:"Ativar",icon:this.lookup.getIcon(this.lookup.PLANO_TRABALHO_STATUS,"ATIVO"),color:this.lookup.getColor(this.lookup.PLANO_TRABALHO_STATUS,"ATIVO"),onClick:this.ativar.bind(this)},this.BOTAO_CANCELAR_ASSINATURA={label:"Cancelar assinatura",icon:this.lookup.getIcon(this.lookup.PLANO_TRABALHO_STATUS,"AGUARDANDO_ASSINATURA ou INCLUIDO"),color:this.lookup.getColor(this.lookup.PLANO_TRABALHO_STATUS,"AGUARDANDO_ASSINATURA ou INCLUIDO"),onClick:this.cancelarAssinatura.bind(this)},this.BOTAO_CANCELAR_PLANO={label:"Cancelar plano",icon:this.lookup.getIcon(this.lookup.PLANO_TRABALHO_STATUS,"CANCELADO"),color:this.lookup.getColor(this.lookup.PLANO_TRABALHO_STATUS,"CANCELADO"),onClick:this.cancelarPlano.bind(this)},this.BOTAO_DESARQUIVAR={label:"Desarquivar",icon:"bi bi-reply",onClick:this.desarquivar.bind(this)},this.BOTAO_ENVIAR_ASSINATURA={label:"Enviar para assinatura",icon:this.lookup.getIcon(this.lookup.PLANO_TRABALHO_STATUS,"AGUARDANDO_ASSINATURA"),color:this.lookup.getColor(this.lookup.PLANO_TRABALHO_STATUS,"AGUARDANDO_ASSINATURA"),onClick:this.enviarParaAssinatura.bind(this)},this.BOTAO_INFORMACOES={label:"Informa\xe7\xf5es",icon:"bi bi-info-circle",onClick:this.consult.bind(this)},this.BOTAO_RELATORIO={label:"Relat\xf3rio",icon:"bi bi-file-pdf",onClick:a=>this.report(a,"PTR_LISTA_ENTREGAS")},this.BOTAO_TERMOS={label:"Termos",icon:"bi bi-file-earmark-check",onClick:(a=>this.go.navigate({route:["uteis","documentos","TCR",a.id]},{modalClose:i=>(this.grid?.query||this.query).refreshId(a.id),metadata:this.planoTrabalhoService.metadados(a)})).bind(this)},this.BOTAO_CONSOLIDACOES={label:"Consolida\xe7\xf5es",icon:this.entityService.getIcon("PlanoTrabalhoConsolidacao"),onClick:(a=>this.go.navigate({route:["gestao","plano-trabalho","consolidacao",a.usuario_id,a.id]},{modalClose:i=>(this.grid?.query||this.query).refreshId(a.id),modal:!0})).bind(this)},this.BOTAO_REATIVAR={label:"Reativar",icon:this.lookup.getIcon(this.lookup.PLANO_TRABALHO_STATUS,"ATIVO"),color:this.lookup.getColor(this.lookup.PLANO_TRABALHO_STATUS,"ATIVO"),onClick:this.reativar.bind(this)},this.BOTAO_SUSPENDER={label:"Suspender",icon:this.lookup.getIcon(this.lookup.PLANO_TRABALHO_STATUS,"SUSPENSO"),color:this.lookup.getColor(this.lookup.PLANO_TRABALHO_STATUS,"SUSPENSO"),onClick:this.suspender.bind(this)},this.botoes=[this.BOTAO_ALTERAR,this.BOTAO_ARQUIVAR,this.BOTAO_ASSINAR,this.BOTAO_ATIVAR,this.BOTAO_CANCELAR_ASSINATURA,this.BOTAO_CANCELAR_PLANO,this.BOTAO_DESARQUIVAR,this.BOTAO_ENVIAR_ASSINATURA,this.BOTAO_INFORMACOES,this.BOTAO_RELATORIO,this.BOTAO_TERMOS,this.BOTAO_CONSOLIDACOES,this.BOTAO_REATIVAR,this.BOTAO_SUSPENDER]}ngOnInit(){super.ngOnInit(),this.metadata?.minha_unidade&&this.filter?.controls.unidade_id.setValue(this.auth.unidade?.id),this.route.queryParams.subscribe(e=>{"EXECUCAO"==e.context&&this.filter&&this.filter?.controls.usuario.setValue(this.auth.usuario?.nome),"GESTAO"==e.context&&this.filter&&this.filter?.controls.unidade_id.setValue(this.auth.unidade?.id)})}dynamicOptions(e){let a=[];return this.botoes.forEach(i=>{this.botaoAtendeCondicoes(i,e)&&a.push(i)}),a.push(this.BOTAO_RELATORIO),a}dynamicButtons(e){let a=[];switch(this.planoTrabalhoService.situacaoPlano(e)){case"INCLUIDO":this.botaoAtendeCondicoes(this.BOTAO_ASSINAR,e)?a.push(this.BOTAO_ASSINAR):this.botaoAtendeCondicoes(this.BOTAO_ATIVAR,e)?a.push(this.BOTAO_ATIVAR):this.botaoAtendeCondicoes(this.BOTAO_ENVIAR_ASSINATURA,e)&&a.push(this.BOTAO_ENVIAR_ASSINATURA);break;case"AGUARDANDO_ASSINATURA":this.botaoAtendeCondicoes(this.BOTAO_ASSINAR,e)&&a.push(this.BOTAO_ASSINAR);break;case"ATIVO":case"SUSPENSO":case"ARQUIVADO":break;case"CONCLUIDO":case"CANCELADO":this.botaoAtendeCondicoes(this.BOTAO_ARQUIVAR,e)&&a.push(this.BOTAO_ARQUIVAR)}return a.length||a.push(this.BOTAO_INFORMACOES),a}filterClear(e){e.controls.usuario.setValue(""),e.controls.unidade_id.setValue(null),e.controls.status.setValue(null),e.controls.arquivados.setValue(!1),e.controls.tipo_modalidade_id.setValue(null),e.controls.data_filtro.setValue(null),e.controls.data_filtro_inicio.setValue(new Date),e.controls.data_filtro_fim.setValue(new Date),super.filterClear(e)}onAgruparChange(e){const a=this.filter.controls.agrupar.value;(a&&!this.groupBy?.length||!a&&this.groupBy?.length)&&(this.groupBy=a?[{field:"unidade.sigla",label:"Unidade"}]:[],this.grid.reloadFilter())}onLotadosMinhaUnidadeChange(e){this.grid.reloadFilter()}botaoAtendeCondicoes(e,a){let i=a._metadata?.assinaturasExigidas,l=[...i.gestores_entidade,...i.gestores_unidade_executora,...i.gestores_unidade_lotacao,...i.participante],S=this.planoTrabalhoService.assinaturasFaltantes(a._metadata?.assinaturasExigidas,a._metadata?.jaAssinaramTCR),D=!!(S.participante.length||S.gestores_unidade_executora.length||S.gestores_unidade_lotacao.length||S.gestores_entidade.length),I=this.unidadeService.isGestorUnidade(a.unidade_id),B=this.planoTrabalhoService.usuarioAssinou(a._metadata?.jaAssinaramTCR),V=!!l?.includes(this.auth.usuario?.id),L="INCLUIDO"==this.planoTrabalhoService.situacaoPlano(a),T=this.auth.usuario?.id==a.usuario_id,k="AGUARDANDO_ASSINATURA"==this.planoTrabalhoService.situacaoPlano(a),G="ATIVO"==this.planoTrabalhoService.situacaoPlano(a),w="CONCLUIDO"==this.planoTrabalhoService.situacaoPlano(a),K="CANCELADO"==this.planoTrabalhoService.situacaoPlano(a),W="EXCLUIDO"==this.planoTrabalhoService.situacaoPlano(a),F="ARQUIVADO"==this.planoTrabalhoService.situacaoPlano(a),q="SUSPENSO"==this.planoTrabalhoService.situacaoPlano(a),y=a.entregas.length>0;if(e==this.BOTAO_INFORMACOES&&this.auth.hasPermissionTo("MOD_PTR"))return!0;if(W)return!1;{let p=!1,M=a._metadata?.atribuicoesLogadoUnidadeSuperior.gestor||a._metadata?.atribuicoesLogadoUnidadeSuperior.gestorSubstituto,j=a._metadata?.atribuicoesLogado.gestor||a._metadata?.atribuicoesLogado.gestorSubstituto;switch(e){case this.BOTAO_ALTERAR:p=T?a._metadata?.usuarioEhParticipanteHabilitado:a._metadata?.atribuicoesParticipante.gestor?M:a._metadata?.atribuicoesParticipante.gestorSubstituto?M||a._metadata?.atribuicoesLogado.gestor:a._metadata?.atribuicoesParticipante.gestorDelegado?j:j||a._metadata?.atribuicoesLogado.gestorDelegado;let H=this.auth.hasPermissionTo("MOD_PTR_EDT"),Q=this.planoTrabalhoService.isValido(a),X=(L||k)&&p,J=G&&p&&this.auth.hasPermissionTo("MOD_PTR_EDT_ATV");return a._metadata={...a._metadata,editavel:H&&Q&&(X||J)},H&&Q&&(X||J);case this.BOTAO_ARQUIVAR:return(w||K)&&!F&&(T||I);case this.BOTAO_ASSINAR:return(L||k)&&y&&V&&!B;case this.BOTAO_ATIVAR:return p=a._metadata?.atribuicoesParticipante.gestor?M||a._metadata?.usuarioEhParticipanteHabilitado:a._metadata?.atribuicoesParticipante.gestorSubstituto?a._metadata?.atribuicoesLogado.gestor||T&&a._metadata?.usuarioEhParticipanteHabilitado||!T&&a._metadata?.atribuicoesLogado.gestorSubstituto:a._metadata?.atribuicoesParticipante.gestorDelegado?a._metadata?.atribuicoesLogado.gestor||a._metadata?.atribuicoesLogado.gestorSubstituto||T&&a._metadata?.usuarioEhParticipanteHabilitado:T?j||a._metadata?.usuarioEhParticipanteHabilitado:j,L&&p&&!i?.todas?.length&&y;case this.BOTAO_CANCELAR_ASSINATURA:return k&&B;case this.BOTAO_CANCELAR_PLANO:return!!a._metadata?.podeCancelar;case this.BOTAO_DESARQUIVAR:return F&&(T||I);case this.BOTAO_ENVIAR_ASSINATURA:return L&&(!V||B)&&D&&y&&(T||I);case this.BOTAO_REATIVAR:return q&&I;case this.BOTAO_SUSPENDER:return G&&I;case this.BOTAO_TERMOS:return this.auth.hasPermissionTo("MOD_PTR");case this.BOTAO_CONSOLIDACOES:return!0}}return!1}arquivar(e){this.go.navigate(this.routeStatus,{metadata:{tipo:"PlanoTrabalho",entity:Object.assign({},e,{arquivar:!0}),novoStatus:e.status,onClick:this.dao.arquivar.bind(this.dao)},title:"Arquivar Plano de Trabalho",modalClose:a=>{a&&(this.grid?.query||this.query).refreshId(e.id)}})}assinar(e){const a=e?[e.id]:Object.keys(this.grid.multiselected||{}),i=this.grid.items.filter(l=>a.includes(l.id)&&l.documento_id?.length).map(l=>l.documento);i.length?this.documentoService.sign(i).then(()=>(this.grid?.query||this.query).refreshId(e.id)):this.dialog.alert("Selecione","Nenhum plano selecionado!")}ativar(e){this.go.navigate(this.routeStatus,{metadata:{tipo:"PlanoTrabalho",entity:e,novoStatus:"ATIVO",onClick:this.dao.ativar.bind(this.dao)},title:"Ativar Plano de Trabalho",modalClose:a=>{a&&(this.grid?.query||this.query).refreshId(e.id)}})}cancelarAssinatura(e){this.go.navigate(this.routeStatus,{metadata:{tipo:"PlanoTrabalho",entity:e,novoStatus:"AGUARDANDO_ASSINATURA",onClick:this.dao.cancelarAssinatura.bind(this.dao)},title:"Cancelar Assinatura do TCR",modalClose:a=>{a&&(this.grid?.query||this.query).refreshId(e.id)}})}cancelarPlano(e){this.go.navigate(this.routeStatus,{metadata:{tipo:"PlanoTrabalho",entity:Object.assign({},e,{arquivar:!0}),exigeJustificativa:!0,novoStatus:"CANCELADO",onClick:this.dao.cancelarPlano.bind(this.dao)},title:"Cancelar Plano de Trabalho",modalClose:a=>{a&&(this.grid?.query||this.query).refreshId(e.id)}})}desarquivar(e){this.go.navigate(this.routeStatus,{metadata:{tipo:"PlanoTrabalho",entity:Object.assign({},e,{arquivar:!1}),novoStatus:e.status,onClick:this.dao.arquivar.bind(this.dao)},title:"Desarquivar Plano de Trabalho",modalClose:a=>{a&&(this.grid?.query||this.query).refreshId(e.id)}})}report(e,a){const i={id:e.id,join:["unidade.entidade","unidade.gestor.usuario:id","usuario","programa.template_tcr","tipo_modalidade","entregas.plano_entrega_entrega.entrega","entregas.plano_entrega_entrega.plano_entrega:id,unidade_id","entregas.plano_entrega_entrega.plano_entrega.unidade","entregas.entrega"]};this.grid?.buildRowReport(a,i)}enviarParaAssinatura(e){this.go.navigate(this.routeStatus,{metadata:{tipo:"PlanoTrabalho",entity:e,novoStatus:"AGUARDANDO_ASSINATURA",onClick:this.dao.enviarParaAssinatura.bind(this.dao)},title:"Disponibilizar Plano de Trabalho para assinatura",modalClose:a=>{a&&(this.grid?.query||this.query).refreshId(e.id)}})}reativar(e){this.go.navigate(this.routeStatus,{metadata:{tipo:"PlanoTrabalho",entity:e,novoStatus:"ATIVO",onClick:this.dao.reativar.bind(this.dao)},title:"Reativar Plano de Trabalho",modalClose:a=>{a&&(this.grid?.query||this.query).refreshId(e.id)}})}suspender(e){this.go.navigate(this.routeStatus,{metadata:{tipo:"PlanoTrabalho",entity:e,novoStatus:"SUSPENSO",onClick:this.dao.suspender.bind(this.dao)},title:"Suspender Plano de Trabalho",modalClose:a=>{a&&(this.grid?.query||this.query).refreshId(e.id)}})}static#t=this.\u0275fac=function(a){return new(a||o)(t.rXU(t.zZn))};static#e=this.\u0275cmp=t.VBU({type:o,selectors:[["plano-trabalho-list"]],viewQuery:function(a,i){if(1&a&&t.GBs(U._,5),2&a){let l;t.mGM(l=t.lsd())&&(i.grid=l.first)}},features:[t.Vt3],decls:69,vars:71,consts:[["titleNumero",""],["columnNumero",""],["titleUsuario",""],["columnUsuario",""],["columnUnidade",""],["columnModalidade",""],["titleVigencia",""],["columnInicioVigencia",""],["documento",""],["columnStatus",""],["reportNumero",""],["reportMatricula",""],["reportPrograma",""],["reportUnidade",""],["reportModalidade",""],["reportInicioVigencia",""],["reportFimVigencia",""],["reportTermoAdesao",""],["columnEntregas",""],["columnExpandedEntregas",""],["multiselect","",3,"select","dao","add","title","orderBy","groupBy","join","selectable","relatorios","hasDelete","hasAdd","hasEdit","dynamicMultiselectMenu","multiselectAllFields"],[4,"ngIf"],[3,"deleted","form","where","submit","clear","collapseChange","collapsed"],[1,"row"],["controlName","usuario","placeholder","Usu\xe1rio",3,"size","label","control"],["controlName","unidade_id",3,"size","control","dao"],["label","Status","controlName","status","itemTodos","- Todos -",3,"size","items","control","valueTodos"],["label","Arquivados","controlName","arquivados","labelInfo","Listar tamb\xe9m os planos de trabalho arquivados",3,"size","control"],["controlName","tipo_modalidade_id",3,"size","control","dao"],["label","Data","itemTodos","- Nenhum -","controlName","data_filtro",3,"size","valueTodos","control","items"],["date","","label","In\xedcio","controlName","data_filtro_inicio","labelInfo","Data in\xedcio do per\xedodo",3,"size","disabled","control"],["date","","label","Fim","controlName","data_filtro_fim","labelInfo","Data fim do per\xedodo",3,"size","disabled","control"],["type","expand","icon","bi bi-list-check",3,"align","hint","template","expandTemplate",4,"ngIf"],[3,"titleTemplate","template","minWidth"],[3,"titleTemplate","template"],["title","Unidade",3,"template"],["title","Modalidade",3,"template"],[3,"title","template"],["title","Status",3,"template"],["type","options",3,"dynamicOptions","dynamicButtons"],["title","Numero",3,"template"],["title","Matricula usu\xe1rio",3,"template"],["title","Programa",3,"template"],["title","In\xedcio vig\xeancia",3,"template"],["title","Fim vig\xeancia",3,"template"],["title","Termo de Ades\xe3o",3,"template"],[3,"rows"],["labelPosition","left","label","Lotados em minha unidade","controlName","lotados_minha_unidade",3,"size","control","change",4,"ngIf"],["labelPosition","left","label","Agrupar por unidade","controlName","agrupar",3,"change","size","control"],["labelPosition","left","label","Lotados em minha unidade","controlName","lotados_minha_unidade",3,"change","size","control"],["type","expand","icon","bi bi-list-check",3,"align","hint","template","expandTemplate"],["class","badge rounded-pill bg-light text-dark",4,"ngIf"],[1,"badge","rounded-pill","bg-light","text-dark"],[1,"bi","bi-list-check"],[3,"atualizaPlanoTrabalhoEvent","entity","planoTrabalhoEditavel"],["by","numero",3,"header"],["by","usuario.nome",3,"header"],["color","light","icon","bi bi-file-bar-graph",3,"label"],["by","data_inicio",3,"header"],["by","data_fim",3,"header"],[1,"d-block"],["color","#5362fb","icon","bi bi-calendar-check-fill","label","Vigente","hint","Vigente",4,"ngIf"],["color","#5362fb","icon","bi bi-calendar-check-fill","label","Vigente","hint","Vigente"],["signatures","","noRounded","","withLink","",3,"documento","maxWidth"],[3,"color","icon","label"],["color","warning","icon","bi bi-inboxes","label","Arquivado",4,"ngIf"],["color","danger","icon","bi bi-trash3","label","Exclu\xeddo",4,"ngIf"],["color","warning","icon","bi bi-inboxes","label","Arquivado"],["color","danger","icon","bi bi-trash3","label","Exclu\xeddo"]],template:function(a,i){if(1&a){const l=t.RV6();t.j41(0,"grid",20),t.bIt("select",function(D){return t.eBV(l),t.Njj(i.onSelect(D))}),t.DNE(1,r,3,3,"toolbar",21),t.j41(2,"filter",22)(3,"div",23),t.nrm(4,"input-text",24)(5,"input-search",25)(6,"input-select",26)(7,"input-switch",27),t.k0s(),t.j41(8,"div",23),t.nrm(9,"input-search",28)(10,"input-select",29)(11,"input-datetime",30)(12,"input-datetime",31),t.k0s()(),t.j41(13,"columns"),t.DNE(14,m,5,4,"column",32),t.j41(15,"column",33),t.DNE(16,u,2,1,"ng-template",null,0,t.C5r)(18,P,2,1,"ng-template",null,1,t.C5r),t.k0s(),t.j41(20,"column",34),t.DNE(21,Z,4,1,"ng-template",null,2,t.C5r)(23,tt,4,2,"ng-template",null,3,t.C5r),t.k0s(),t.j41(25,"column",35),t.DNE(26,et,2,1,"ng-template",null,4,t.C5r),t.k0s(),t.j41(28,"column",36),t.DNE(29,at,2,1,"ng-template",null,5,t.C5r),t.k0s(),t.j41(31,"column",34),t.DNE(32,it,7,2,"ng-template",null,6,t.C5r)(34,st,4,3,"ng-template",null,7,t.C5r),t.k0s(),t.j41(36,"column",37),t.DNE(37,nt,1,2,"ng-template",null,8,t.C5r),t.k0s(),t.j41(39,"column",38),t.DNE(40,dt,4,5,"ng-template",null,9,t.C5r),t.k0s(),t.nrm(42,"column",39),t.k0s(),t.j41(43,"report")(44,"column",40),t.DNE(45,ut,1,1,"ng-template",null,10,t.C5r),t.k0s(),t.j41(47,"column",41),t.DNE(48,_t,1,1,"ng-template",null,11,t.C5r),t.k0s(),t.j41(50,"column",42),t.DNE(51,ct,1,1,"ng-template",null,12,t.C5r),t.k0s(),t.j41(53,"column",35),t.DNE(54,ht,1,1,"ng-template",null,13,t.C5r),t.k0s(),t.j41(56,"column",36),t.DNE(57,mt,1,1,"ng-template",null,14,t.C5r),t.k0s(),t.j41(59,"column",43),t.DNE(60,pt,1,1,"ng-template",null,15,t.C5r),t.k0s(),t.j41(62,"column",44),t.DNE(63,gt,1,1,"ng-template",null,16,t.C5r),t.k0s(),t.j41(65,"column",45),t.DNE(66,At,1,1,"ng-template",null,17,t.C5r),t.k0s()(),t.nrm(68,"pagination",46),t.k0s()}if(2&a){const l=t.sdS(17),S=t.sdS(19),D=t.sdS(22),I=t.sdS(24),B=t.sdS(27),V=t.sdS(30),L=t.sdS(33),T=t.sdS(35),k=t.sdS(38),G=t.sdS(41),w=t.sdS(46),K=t.sdS(49),W=t.sdS(52),F=t.sdS(55),q=t.sdS(58),y=t.sdS(61),p=t.sdS(64),M=t.sdS(67);t.Y8G("dao",i.dao)("add",i.add)("title",i.isModal?"":i.title)("orderBy",i.orderBy)("groupBy",i.groupBy)("join",i.join)("selectable",i.selectable)("relatorios",i.relatorios)("hasDelete",!1)("hasAdd",i.auth.hasPermissionTo("MOD_PTR_INCL"))("hasEdit",!1)("dynamicMultiselectMenu",i.dynamicMultiselectMenu.bind(i))("multiselectAllFields",i.multiselectAllFields),t.R7$(),t.Y8G("ngIf",!i.selectable),t.R7$(),t.Y8G("deleted",i.auth.hasPermissionTo("MOD_AUDIT_DEL"))("form",i.filter)("where",i.filterWhere)("submit",i.filterSubmit.bind(i))("clear",i.filterClear.bind(i))("collapseChange",i.filterCollapseChange.bind(i))("collapsed",!i.selectable&&i.filterCollapsed),t.R7$(2),t.Y8G("size",4)("label",i.lex.translate("Usu\xe1rio"))("control",i.filter.controls.usuario),t.BMQ("maxlength",250),t.R7$(),t.Y8G("size",4)("control",i.filter.controls.unidade_id)("dao",i.unidadeDao),t.R7$(),t.Y8G("size",2)("items",i.lookup.PLANO_TRABALHO_STATUS)("control",i.filter.controls.status)("valueTodos",null),t.R7$(),t.Y8G("size",2)("control",i.filter.controls.arquivados),t.R7$(2),t.Y8G("size",6)("control",i.filter.controls.tipo_modalidade_id)("dao",i.tipoModalidadeDao),t.R7$(),t.Y8G("size",2)("valueTodos",null)("control",i.filter.controls.data_filtro)("items",i.DATAS_FILTRO),t.R7$(),t.Y8G("size",2)("disabled",null==i.filter.controls.data_filtro.value?"true":void 0)("control",i.filter.controls.data_filtro_inicio),t.R7$(),t.Y8G("size",2)("disabled",null==i.filter.controls.data_filtro.value?"true":void 0)("control",i.filter.controls.data_filtro_fim),t.R7$(2),t.Y8G("ngIf",!i.selectable),t.R7$(),t.Y8G("titleTemplate",l)("template",S)("minWidth",50),t.R7$(5),t.Y8G("titleTemplate",D)("template",I),t.R7$(5),t.Y8G("template",B),t.R7$(3),t.Y8G("template",V),t.R7$(3),t.Y8G("titleTemplate",L)("template",T),t.R7$(5),t.Y8G("title","Termo\nAssinaturas")("template",k),t.R7$(3),t.Y8G("template",G),t.R7$(3),t.Y8G("dynamicOptions",i.dynamicOptions.bind(i))("dynamicButtons",i.dynamicButtons.bind(i)),t.R7$(2),t.Y8G("template",w),t.R7$(3),t.Y8G("template",K),t.R7$(3),t.Y8G("template",W),t.R7$(3),t.Y8G("template",F),t.R7$(3),t.Y8G("template",q),t.R7$(3),t.Y8G("template",y),t.R7$(3),t.Y8G("template",p),t.R7$(3),t.Y8G("template",M),t.R7$(3),t.Y8G("rows",i.rowsLimit)}}})}return o})()},4450:(z,N,d)=>{d.d(N,{V:()=>$});var U=d(3308),C=d(2220),g=d(3279),b=d(4796),Y=d(2342),A=d(3609),f=d(568),E=d(6867),O=d(9036),R=d(2736);let $=(()=>{class v{constructor(t,s,r,_,c,h,m,u){this.auth=t,this.util=s,this.go=r,this.lookup=_,this.dao=c,this.avaliacaoDao=h,this.templateService=m,this.planoTrabalhoDao=u}template(t){return t.programa?.template_tcr}metadados(t){return{needSign:this.needSign.bind(this),extraTags:this.extraTags.bind(this),especie:"TCR",titulo:"Termo de Ci\xeancia e Responsabilidade",dataset:this.planoTrabalhoDao.dataset(),datasource:this.planoTrabalhoDao.datasource(t),template:t.programa?.template_tcr,template_id:t.programa?.template_tcr_id}}needSign(t,s){const r=t,_=s||(r?.documentos||[]).find(c=>r?.documento_id?.length&&c.id==r?.documento_id)||r?.documento;if(t&&_&&!_.assinaturas?.find(c=>c.usuario_id==this.auth.usuario.id)){const c=r.tipo_modalidade,h=r.programa,m=this.auth.entidade;let u=[];return h?.plano_trabalho_assinatura_participante&&u.push(r.usuario_id),h?.plano_trabalho_assinatura_gestor_lotacao&&u.push(...this.auth.gestoresLotacao.map(P=>P.id)),h?.plano_trabalho_assinatura_gestor_unidade&&u.push(r.unidade?.gestor?.id||"",...r.unidade?.gestores_substitutos?.map(P=>P.id)||""),h?.plano_trabalho_assinatura_gestor_entidade&&u.push(m.gestor_id||"",m.gestor_substituto_id||""),!!c&&u.includes(this.auth.usuario.id)}return!1}extraTags(t,s,r){const _=t;let c=[];return _?.documento_id==s.id&&c.push({key:s.id,value:"Vigente",icon:"bi bi-check-all",color:"primary"}),JSON.stringify(r.tags)!=JSON.stringify(c)&&(r.tags=c),r.tags}tipoEntrega(t,s){let r=s||t.plano_trabalho,_=t.plano_entrega_entrega?.plano_entrega?.unidade_id==r.unidade_id?"PROPRIA_UNIDADE":t.plano_entrega_entrega?"OUTRA_UNIDADE":t.orgao?.length?"OUTRO_ORGAO":"SEM_ENTREGA",c=this.lookup.ORIGENS_ENTREGAS_PLANO_TRABALHO.find(u=>u.key==_)||{key:"",value:"Desconhecido1"};return{titulo:c.value,cor:c.color||"danger",nome:r?._metadata?.novaEntrega?.plano_entrega_entrega?.entrega?.nome||t.plano_entrega_entrega?.entrega?.nome||"Desconhecido2",tipo:_,descricao:r?._metadata?.novaEntrega?.plano_entrega_entrega?.descricao||t.plano_entrega_entrega?.descricao||""}}atualizarTcr(t,s,r,_){if(s.usuario&&s.unidade){let c=this.dao.datasource(t),h=this.dao.datasource(s),m=s.programa;if(h.usuario.texto_complementar_plano=r||s.usuario?.texto_complementar_plano||"",h.unidade.texto_complementar_plano=_||s.unidade?.texto_complementar_plano||"",(m?.termo_obrigatorio||s.documento_id?.length)&&JSON.stringify(h)!=JSON.stringify(c)&&m?.template_tcr){let u=s.documentos?.find(P=>P.id==s.documento_id);s.documento_id?.length&&u&&!u.assinaturas?.length&&"LINK"!=u.tipo?(u.conteudo=this.templateService.renderTemplate(m?.template_tcr?.conteudo||"",h),u.dataset=this.dao.dataset(),u.datasource=h,u._status="ADD"==u._status?"ADD":"EDIT"):(u=new C.j({id:this.dao?.generateUuid(),tipo:"HTML",especie:"TCR",titulo:"Termo de Ci\xeancia e Responsabilidade",conteudo:this.templateService.renderTemplate(m?.template_tcr?.conteudo||"",h),status:"GERADO",_status:"ADD",template:m?.template_tcr?.conteudo,dataset:this.dao.dataset(),datasource:h,entidade_id:this.auth.entidade?.id,plano_trabalho_id:s.id,template_id:m?.template_tcr_id}),s.documentos.push(u)),s.documento=u,s.documento_id=u?.id||null}}return s.documento}situacaoPlano(t){return t.deleted_at?"EXCLUIDO":t.data_arquivamento?"ARQUIVADO":t.status}isValido(t){return!t.deleted_at&&"CANCELADO"!=t.status&&!t.data_arquivamento}estaVigente(t){let s=new Date;return"ATIVO"==t.status&&t.data_inicio<=s&&t.data_fim>=s}diasParaConcluirConsolidacao(t,s){return t&&s?this.util.daystamp(t.data_fim)+s.dias_tolerancia_avaliacao-this.util.daystamp(this.auth.hora):-1}avaliar(t,s,r){this.go.navigate({route:["gestao","plano-trabalho","consolidacao",t.id,"avaliar"]},{modal:!0,metadata:{consolidacao:t,programa:s},modalClose:_=>{_&&(t.status="AVALIADO",t.avaliacao_id=_.id,t.avaliacao=_,r(t))}})}visualizarAvaliacao(t){this.go.navigate({route:["gestao","plano-trabalho","consolidacao",t.id,"verAvaliacoes"]},{modal:!0,metadata:{consolidacao:t}})}fazerRecurso(t,s,r){this.go.navigate({route:["gestao","plano-trabalho","consolidacao",t.id,"recurso"]},{modal:!0,metadata:{recurso:!0,consolidacao:t,programa:s},modalClose:_=>{_&&(t.avaliacao=_,r(t))}})}cancelarAvaliacao(t,s,r){var _=this;return(0,U.A)(function*(){s.submitting=!0;try{(yield _.avaliacaoDao.cancelarAvaliacao(t.avaliacao.id))&&(t.status="CONCLUIDO",t.avaliacao_id=null,t.avaliacao=void 0,r(t))}catch(c){s.error(c.message||c)}finally{s.submitting=!1}})()}usuarioAssinou(t,s){return s=s||this.auth.usuario.id,Object.values(t).some(r=>(r||[]).includes(s))}assinaturasFaltantes(t,s){return{participante:t.participante.filter(r=>!s.participante.includes(r)),gestores_unidade_executora:t.gestores_unidade_executora.length?t.gestores_unidade_executora.filter(r=>s.gestores_unidade_executora.includes(r)).length?[]:t.gestores_unidade_executora:[],gestores_unidade_lotacao:t.gestores_unidade_lotacao.length?t.gestores_unidade_lotacao.filter(r=>s.gestores_unidade_lotacao.includes(r)).length?[]:t.gestores_unidade_lotacao:[],gestores_entidade:t.gestores_entidade.length?t.gestores_entidade.filter(r=>s.gestores_entidade.includes(r)).length?[]:t.gestores_entidade:[]}}static#t=this.\u0275fac=function(s){return new(s||v)(g.KVO(b.u),g.KVO(Y.a),g.KVO(A.T),g.KVO(f.s),g.KVO(E.x),g.KVO(O.l),g.KVO(R.I),g.KVO(E.x))};static#e=this.\u0275prov=g.jDH({token:v,factory:v.\u0275fac,providedIn:"root"})}return v})()}}]);