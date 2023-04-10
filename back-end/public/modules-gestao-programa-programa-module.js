(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-gestao-programa-programa-module"],{

/***/ "8OEL":
/*!********************************************************************!*\
  !*** ./src/app/modules/gestao/programa/programa-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: ProgramaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramaRoutingModule", function() { return ProgramaRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/guards/auth.guard */ "UTcu");
/* harmony import */ var src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/resolvies/config.resolver */ "toza");
/* harmony import */ var _programa_form_programa_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./programa-form/programa-form.component */ "UC/S");
/* harmony import */ var _programa_list_programa_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./programa-list/programa-list.component */ "cmH+");
/* harmony import */ var _programa_participantes_programa_participantes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./programa-participantes/programa-participantes.component */ "I5ge");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const routes = [
    { path: '', component: _programa_list_programa_list_component__WEBPACK_IMPORTED_MODULE_4__["ProgramaListComponent"], canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]], resolve: { config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_2__["ConfigResolver"] }, runGuardsAndResolvers: 'always', data: { title: "Programa" } },
    { path: 'new', component: _programa_form_programa_form_component__WEBPACK_IMPORTED_MODULE_3__["ProgramaFormComponent"], canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]], resolve: { config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_2__["ConfigResolver"] }, runGuardsAndResolvers: 'always', data: { title: "Inclusão", modal: true } },
    { path: ':id/edit', component: _programa_form_programa_form_component__WEBPACK_IMPORTED_MODULE_3__["ProgramaFormComponent"], canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]], resolve: { config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_2__["ConfigResolver"] }, runGuardsAndResolvers: 'always', data: { title: "Edição", modal: true } },
    { path: ':id/consult', component: _programa_form_programa_form_component__WEBPACK_IMPORTED_MODULE_3__["ProgramaFormComponent"], canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]], resolve: { config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_2__["ConfigResolver"] }, runGuardsAndResolvers: 'always', data: { title: "Consultar", modal: true } },
    { path: ':id/participantes', component: _programa_participantes_programa_participantes_component__WEBPACK_IMPORTED_MODULE_5__["ProgramaParticipantesComponent"], canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]], resolve: { config: src_app_resolvies_config_resolver__WEBPACK_IMPORTED_MODULE_2__["ConfigResolver"] }, runGuardsAndResolvers: 'always', data: { title: "Participantes", modal: true } }
];
class ProgramaRoutingModule {
}
ProgramaRoutingModule.ɵfac = function ProgramaRoutingModule_Factory(t) { return new (t || ProgramaRoutingModule)(); };
ProgramaRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: ProgramaRoutingModule });
ProgramaRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ProgramaRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "Exic":
/*!**********************************************************!*\
  !*** ./src/app/dao/programa-participante-dao.service.ts ***!
  \**********************************************************/
/*! exports provided: ProgramaParticipanteDaoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramaParticipanteDaoService", function() { return ProgramaParticipanteDaoService; });
/* harmony import */ var _dao_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dao-base.service */ "WScx");
/* harmony import */ var _usuario_dao_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usuario-dao.service */ "w5Sy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class ProgramaParticipanteDaoService extends _dao_base_service__WEBPACK_IMPORTED_MODULE_0__["DaoBaseService"] {
    constructor(injector) {
        super("ProgramaParticipante", injector);
        this.injector = injector;
        this.usuarioDao = injector.get(_usuario_dao_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioDaoService"]);
    }
    dataset(deeps) {
        return this.deepsFilter([
            { field: "habilitado", label: "Habilitado" },
            { field: "usuario", label: "Usuário", fields: this.usuarioDao.dataset(), type: "OBJECT" }
        ], deeps);
    }
}
ProgramaParticipanteDaoService.ɵfac = function ProgramaParticipanteDaoService_Factory(t) { return new (t || ProgramaParticipanteDaoService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"])); };
ProgramaParticipanteDaoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ProgramaParticipanteDaoService, factory: ProgramaParticipanteDaoService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "I5ge":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/gestao/programa/programa-participantes/programa-participantes.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ProgramaParticipantesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramaParticipantesComponent", function() { return ProgramaParticipantesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/grid/grid.component */ "m4bG");
/* harmony import */ var src_app_modules_base_page_list_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/base/page-list-base */ "+vn/");
/* harmony import */ var src_app_models_programa_participante_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/programa-participante.model */ "UUwt");
/* harmony import */ var src_app_dao_programa_participante_dao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dao/programa-participante-dao.service */ "Exic");
/* harmony import */ var src_app_dao_unidade_dao_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dao/unidade-dao.service */ "Ufbc");
/* harmony import */ var src_app_dao_usuario_dao_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dao/usuario-dao.service */ "w5Sy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_grid_filter_filter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/grid/filter/filter.component */ "kHdc");
/* harmony import */ var _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../components/input/input-text/input-text.component */ "lYxd");
/* harmony import */ var _components_input_input_search_input_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../components/input/input-search/input-search.component */ "8OLq");
/* harmony import */ var _components_grid_columns_columns_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../components/grid/columns/columns.component */ "d7UH");
/* harmony import */ var _components_grid_column_column_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../components/grid/column/column.component */ "pFmK");
/* harmony import */ var _components_grid_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../components/grid/pagination/pagination.component */ "f3Td");
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../components/toolbar/toolbar.component */ "np0s");
/* harmony import */ var _components_profile_picture_profile_picture_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../components/profile-picture/profile-picture.component */ "xp1S");
/* harmony import */ var _components_input_input_switch_input_switch_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../components/input/input-switch/input-switch.component */ "puzm");



















const _c0 = ["usuario"];
function ProgramaParticipantesComponent_toolbar_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "toolbar");
} }
function ProgramaParticipantesComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "profile-picture", 18);
} if (rf & 2) {
    const row_r14 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("url", row_r14.usuario == null ? null : row_r14.usuario.url_foto)("size", 40)("hint", row_r14.usuario == null ? null : row_r14.usuario.nome);
} }
function ProgramaParticipantesComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "profile-picture", 19);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("url", ctx_r5.usuario == null ? null : ctx_r5.usuario.searchObj == null ? null : ctx_r5.usuario.searchObj.url_foto)("size", 40);
} }
function ProgramaParticipantesComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r16 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"]((row_r16.usuario == null ? null : row_r16.usuario.nome) || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"]((row_r16.usuario == null ? null : row_r16.usuario.apelido) || "");
} }
const _c1 = function () { return ["configuracoes", "usuario"]; };
const _c2 = function (a0) { return { route: a0 }; };
function ProgramaParticipantesComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "input-search", 20, 21);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("size", 12)("control", ctx_r9.form.controls.usuario_id)("dao", ctx_r9.usuarioDao)("selectRoute", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](5, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](4, _c1)));
} }
function ProgramaParticipantesComponent_ng_template_19_i_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 23);
} }
function ProgramaParticipantesComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, ProgramaParticipantesComponent_ng_template_19_i_0_Template, 1, 0, "i", 22);
} if (rf & 2) {
    const row_r19 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", row_r19.habilitado);
} }
function ProgramaParticipantesComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "input-switch", 24);
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("size", 12)("control", ctx_r13.form.controls.habilitado);
} }
const _c3 = function () { return ["configuracoes", "unidade"]; };
class ProgramaParticipantesComponent extends src_app_modules_base_page_list_base__WEBPACK_IMPORTED_MODULE_2__["PageListBase"] {
    constructor(injector) {
        super(injector, src_app_models_programa_participante_model__WEBPACK_IMPORTED_MODULE_3__["ProgramaParticipante"], src_app_dao_programa_participante_dao_service__WEBPACK_IMPORTED_MODULE_4__["ProgramaParticipanteDaoService"]);
        this.injector = injector;
        this.programaId = "";
        this.filterWhere = (filter) => {
            var _a, _b;
            let result = [];
            let form = filter.value;
            result.push(["programa_id", "==", this.programaId]);
            if ((_a = form.nome) === null || _a === void 0 ? void 0 : _a.length)
                result.push(["usuario.nome", "like", "%" + form.nome + "%"]);
            if ((_b = form.unidade_id) === null || _b === void 0 ? void 0 : _b.length)
                result.push(["usuario.lotacoes.unidade.id", "==", form.unidade_id]);
            return result;
        };
        this.unidadeDao = injector.get(src_app_dao_unidade_dao_service__WEBPACK_IMPORTED_MODULE_5__["UnidadeDaoService"]);
        this.usuarioDao = injector.get(src_app_dao_usuario_dao_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioDaoService"]);
        /* Inicializações */
        this.code = "MOD_PRGT_PART";
        this.filter = this.fh.FormBuilder({
            unidade_id: { default: undefined },
            nome: { default: "" }
        });
        this.form = this.fh.FormBuilder({
            usuario_id: { default: undefined },
            habilitado: { default: true }
        });
        this.join = ["usuario:id,nome,apelido,url_foto"];
    }
    ngOnInit() {
        var _a;
        super.ngOnInit();
        this.programaId = ((_a = this.urlParams) === null || _a === void 0 ? void 0 : _a.get('id')) || "";
    }
    filterClear(filter) {
        filter.controls.nome.setValue("");
        filter.controls.unidade_id.setValue(undefined);
        super.filterClear(filter);
    }
    addParticipante() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new src_app_models_programa_participante_model__WEBPACK_IMPORTED_MODULE_3__["ProgramaParticipante"]({
                id: this.dao.generateUuid(),
                usuario_id: "",
                _status: "ADD"
            });
        });
    }
    loadParticipante(form, row) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const selected = row;
            this.form.patchValue({
                usuario_id: (selected === null || selected === void 0 ? void 0 : selected.usuario_id) || "",
                habilitado: !!(selected === null || selected === void 0 ? void 0 : selected.habilitado)
            });
            this.cdRef.detectChanges();
        });
    }
    removeParticipante(row) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let confirm = yield this.dialog.confirm("Exclui ?", "Deseja remover o participante?");
            if (confirm) {
                yield this.dao.delete(row);
                return true;
            }
            else {
                return false;
            }
        });
    }
    saveParticipante(form, item) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let result = undefined;
            this.form.markAllAsTouched();
            if (this.form.valid) {
                item.usuario_id = form.controls.usuario_id.value;
                item.habilitado = !!form.controls.habilitado.value;
                item.usuario = (_a = this.usuario) === null || _a === void 0 ? void 0 : _a.searchObj;
                item.programa_id = this.programaId;
                this.submitting = true;
                try {
                    result = yield this.dao.save(item);
                    item.id = result.id;
                }
                catch (error) {
                    this.error(error.message ? error.message : error);
                }
                finally {
                    this.submitting = false;
                }
                this.cdRef.detectChanges();
            }
            return result;
        });
    }
}
ProgramaParticipantesComponent.ɵfac = function ProgramaParticipantesComponent_Factory(t) { return new (t || ProgramaParticipantesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["Injector"])); };
ProgramaParticipantesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ProgramaParticipantesComponent, selectors: [["app-programa-participantes"]], viewQuery: function ProgramaParticipantesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_1__["GridComponent"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.grid = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.usuario = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 25, vars: 38, consts: [["editable", "", 3, "dao", "form", "title", "orderBy", "groupBy", "join", "add", "load", "remove", "save", "selectable", "hasAdd", "hasEdit", "hasDelete", "select"], [4, "ngIf"], [3, "form", "where", "submit", "clear", "collapseChange", "collapsed"], [1, "row"], ["label", "Nome", "controlName", "nome", "placeholder", "Nome do usu\u00E1rio...", 3, "size", "control"], ["label", "Unidade", "icon", "fab fa-unity", "controlName", "unidade_id", 3, "size", "control", "dao", "selectRoute"], ["unidade", ""], ["icon", "bi-person", 3, "align", "template", "editTemplate"], ["columnFoto", ""], ["editFoto", ""], ["title", "Usu\u00E1rio", 3, "template", "editTemplate"], ["columnUsuario", ""], ["editUsuario", ""], ["title", "Habilitado", 3, "template", "editTemplate"], ["columnHabilitado", ""], ["editHabilitado", ""], ["type", "options"], [3, "rows"], [3, "url", "size", "hint"], [3, "url", "size"], ["controlName", "usuario_id", 3, "size", "control", "dao", "selectRoute"], ["usuario", ""], ["class", "bi bi-person-check", 4, "ngIf"], [1, "bi", "bi-person-check"], ["controlName", "habilitado", 3, "size", "control"]], template: function ProgramaParticipantesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "grid", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("select", function ProgramaParticipantesComponent_Template_grid_select_0_listener($event) { return ctx.onSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ProgramaParticipantesComponent_toolbar_1_Template, 1, 0, "toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "filter", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "input-text", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "input-search", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "column", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, ProgramaParticipantesComponent_ng_template_9_Template, 1, 3, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, ProgramaParticipantesComponent_ng_template_11_Template, 1, 2, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "column", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, ProgramaParticipantesComponent_ng_template_14_Template, 5, 2, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, ProgramaParticipantesComponent_ng_template_16_Template, 2, 7, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "column", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, ProgramaParticipantesComponent_ng_template_19_Template, 1, 1, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, ProgramaParticipantesComponent_ng_template_21_Template, 1, 2, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](23, "column", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "pagination", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](10);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](12);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](15);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](17);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](20);
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dao", ctx.dao)("form", ctx.form)("title", ctx.isModal ? "" : ctx.title)("orderBy", ctx.orderBy)("groupBy", ctx.groupBy)("join", ctx.join)("add", ctx.addParticipante.bind(ctx))("load", ctx.loadParticipante.bind(ctx))("remove", ctx.removeParticipante.bind(ctx))("save", ctx.saveParticipante.bind(ctx))("selectable", ctx.selectable)("hasAdd", ctx.auth.hasPermissionTo("MOD_PRGT_INCL"))("hasEdit", ctx.auth.hasPermissionTo("MOD_PRGT_EDT"))("hasDelete", ctx.auth.hasPermissionTo("MOD_PRGT_EXCL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.selectable);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("form", ctx.filter)("where", ctx.filterWhere)("submit", ctx.filterSubmit.bind(ctx))("clear", ctx.filterClear.bind(ctx))("collapseChange", ctx.filterCollapseChange.bind(ctx))("collapsed", !ctx.selectable && ctx.filterCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("size", 6)("control", ctx.filter.controls.nome);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("size", 6)("control", ctx.filter.controls.unidade_id)("dao", ctx.unidadeDao)("selectRoute", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](36, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](35, _c3)));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("align", "center")("template", _r2)("editTemplate", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("template", _r6)("editTemplate", _r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("template", _r10)("editTemplate", _r12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("rows", ctx.rowsLimit);
    } }, directives: [src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_1__["GridComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _components_grid_filter_filter_component__WEBPACK_IMPORTED_MODULE_9__["FilterComponent"], _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_10__["InputTextComponent"], _components_input_input_search_input_search_component__WEBPACK_IMPORTED_MODULE_11__["InputSearchComponent"], _components_grid_columns_columns_component__WEBPACK_IMPORTED_MODULE_12__["ColumnsComponent"], _components_grid_column_column_component__WEBPACK_IMPORTED_MODULE_13__["ColumnComponent"], _components_grid_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_14__["PaginationComponent"], _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_15__["ToolbarComponent"], _components_profile_picture_profile_picture_component__WEBPACK_IMPORTED_MODULE_16__["ProfilePictureComponent"], _components_input_input_switch_input_switch_component__WEBPACK_IMPORTED_MODULE_17__["InputSwitchComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9ncmFtYS1wYXJ0aWNpcGFudGVzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "UC/S":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/gestao/programa/programa-form/programa-form.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ProgramaFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramaFormComponent", function() { return ProgramaFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/editable-form/editable-form.component */ "RKEd");
/* harmony import */ var src_app_dao_programa_dao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dao/programa-dao.service */ "bsmI");
/* harmony import */ var src_app_dao_template_dao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dao/template-dao.service */ "1DpL");
/* harmony import */ var src_app_dao_tipo_documento_dao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dao/tipo-documento-dao.service */ "EwcK");
/* harmony import */ var src_app_dao_unidade_dao_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dao/unidade-dao.service */ "Ufbc");
/* harmony import */ var src_app_models_programa_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/programa.model */ "nKBF");
/* harmony import */ var src_app_modules_base_page_form_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/base/page-form-base */ "793T");
/* harmony import */ var src_app_modules_uteis_templates_template_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modules/uteis/templates/template.service */ "G6YU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_input_input_search_input_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../components/input/input-search/input-search.component */ "8OLq");
/* harmony import */ var _components_input_input_datetime_input_datetime_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../components/input/input-datetime/input-datetime.component */ "NRF3");
/* harmony import */ var _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../components/input/input-text/input-text.component */ "lYxd");
/* harmony import */ var _components_separator_separator_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../components/separator/separator.component */ "FVj5");
/* harmony import */ var _components_input_input_switch_input_switch_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../components/input/input-switch/input-switch.component */ "puzm");
















const _c0 = ["unidade"];
const _c1 = function () { return ["configuracoes", "unidade"]; };
const _c2 = function (a0) { return { route: a0 }; };
const _c3 = function () { return ["especie", "==", "TCR"]; };
const _c4 = function (a0) { return [a0]; };
const _c5 = function () { return ["cadastros", "tipo-documento"]; };
class ProgramaFormComponent extends src_app_modules_base_page_form_base__WEBPACK_IMPORTED_MODULE_7__["PageFormBase"] {
    constructor(injector) {
        super(injector, src_app_models_programa_model__WEBPACK_IMPORTED_MODULE_6__["Programa"], src_app_dao_programa_dao_service__WEBPACK_IMPORTED_MODULE_2__["ProgramaDaoService"]);
        this.injector = injector;
        this.validate = (control, controlName) => {
            var _a, _b;
            let result = null;
            if (['nome', 'unidade_id'].indexOf(controlName) >= 0 && !((_a = control.value) === null || _a === void 0 ? void 0 : _a.length)) {
                result = "Obrigatório";
            }
            else if (['data_inicio_vigencia', 'data_fim_vigencia'].indexOf(controlName) >= 0 && !((_b = this.dao) === null || _b === void 0 ? void 0 : _b.validDateTime(control.value))) {
                result = "Inválido";
            }
            return result;
        };
        this.titleEdit = (entity) => {
            return "Editando " + ((entity === null || entity === void 0 ? void 0 : entity.nome) || "");
        };
        this.unidadeDao = injector.get(src_app_dao_unidade_dao_service__WEBPACK_IMPORTED_MODULE_5__["UnidadeDaoService"]);
        this.templateDao = injector.get(src_app_dao_template_dao_service__WEBPACK_IMPORTED_MODULE_3__["TemplateDaoService"]);
        this.tipoDocumentoDao = injector.get(src_app_dao_tipo_documento_dao_service__WEBPACK_IMPORTED_MODULE_4__["TipoDocumentoDaoService"]);
        this.templateService = injector.get(src_app_modules_uteis_templates_template_service__WEBPACK_IMPORTED_MODULE_8__["TemplateService"]);
        this.modalWidth = 600;
        this.form = this.fh.FormBuilder({
            unidade_id: { default: "" },
            nome: { default: "" },
            normativa: { default: "" },
            config: { default: null },
            data_inicio_vigencia: { default: new Date() },
            data_fim_vigencia: { default: new Date() },
            termo_obrigatorio: { default: false },
            template_tcr_id: { default: null },
            tipo_documento_tcr_id: { default: null }
        }, this.cdRef, this.validate);
        this.join = ["unidade"];
    }
    loadData(entity, form) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let formValue = Object.assign({}, form.value);
            yield Promise.all([
                this.unidade.loadSearch(entity.unidade || entity.unidade_id)
            ]);
            form.patchValue(this.util.fillForm(formValue, entity));
        });
    }
    initializeData(form) {
        form.patchValue(new src_app_models_programa_model__WEBPACK_IMPORTED_MODULE_6__["Programa"]());
    }
    saveData(form) {
        return new Promise((resolve, reject) => {
            const programa = this.util.fill(new src_app_models_programa_model__WEBPACK_IMPORTED_MODULE_6__["Programa"](), this.entity);
            resolve(this.util.fillForm(programa, this.form.value));
        });
    }
}
ProgramaFormComponent.ɵfac = function ProgramaFormComponent_Factory(t) { return new (t || ProgramaFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["Injector"])); };
ProgramaFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: ProgramaFormComponent, selectors: [["app-programa-form"]], viewQuery: function ProgramaFormComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_1__["EditableFormComponent"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.editableForm = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.unidade = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]], decls: 15, vars: 34, consts: [[3, "form", "disabled", "title", "submit", "cancel"], [1, "row"], ["label", "Unidade instituidora", "icon", "fab fa-unity", "controlName", "unidade_id", 3, "size", "control", "dao", "selectRoute"], ["unidade", ""], ["date", "", "label", "In\u00EDcio", "icon", "bi bi-calendar-date", "controlName", "data_inicio_vigencia", "labelInfo", "In\u00EDcio da Vig\u00EAncia do Programa", 3, "size", "control"], ["date", "", "label", "Final", "icon", "bi bi-calendar-date", "controlName", "data_fim_vigencia", "labelInfo", "Final da Vig\u00EAncia do Programa", 3, "size", "control"], ["label", "T\u00EDtulo", "icon", "bi bi-textarea-t", "controlName", "nome", 3, "size", "control"], ["label", "Normativa", "icon", "bi bi-blockquote-left", "controlName", "normativa", "labelInfo", "Normativa que regula o Programa", 3, "size", "control"], ["title", "Configura\u00E7\u00F5es"], ["label", "Se o termo \u00E9 obrigat\u00F3rio", "controlName", "termo_obrigatorio", "scale", "small", "labelPosition", "right", 3, "size"], ["detailsButton", "", "labelInfo", "Template do termo utilizado no plano de trabalho", "controlName", "template_tcr_id", 3, "label", "size", "dao", "where", "selectRoute", "details"], ["controlName", "tipo_documento_tcr_id", "labelInfo", "Tipo de documento utilizado para exportar o termo para o SEI/SUPER", 3, "label", "size", "dao", "selectRoute"], ["tipoDocumento", ""]], template: function ProgramaFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "editable-form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("submit", function ProgramaFormComponent_Template_editable_form_submit_0_listener() { return ctx.onSaveData(); })("cancel", function ProgramaFormComponent_Template_editable_form_cancel_0_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "input-search", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "input-datetime", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "input-datetime", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "input-text", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "input-text", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "separator", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "input-switch", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "input-search", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("details", function ProgramaFormComponent_Template_input_search_details_12_listener($event) { return ctx.templateService.details($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](13, "input-search", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("form", ctx.form)("disabled", ctx.formDisabled)("title", ctx.isModal ? "" : ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("size", 12)("control", ctx.form.controls.unidade_id)("dao", ctx.unidadeDao)("selectRoute", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](26, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](25, _c1)));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("size", 6)("control", ctx.form.controls.data_inicio_vigencia);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("size", 6)("control", ctx.form.controls.data_fim_vigencia);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("size", 6)("control", ctx.form.controls.nome);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("size", 6)("control", ctx.form.controls.normativa);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("size", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("label", "Template " + ctx.lex.noun("termo", true, true))("size", 12)("dao", ctx.templateDao)("where", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](29, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](28, _c3)))("selectRoute", ctx.templateService.selectRoute("TCR"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("label", "Tipo de documento " + ctx.lex.noun("termo", true, true))("size", 12)("dao", ctx.tipoDocumentoDao)("selectRoute", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](32, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](31, _c5)));
    } }, directives: [src_app_components_editable_form_editable_form_component__WEBPACK_IMPORTED_MODULE_1__["EditableFormComponent"], _components_input_input_search_input_search_component__WEBPACK_IMPORTED_MODULE_10__["InputSearchComponent"], _components_input_input_datetime_input_datetime_component__WEBPACK_IMPORTED_MODULE_11__["InputDatetimeComponent"], _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_12__["InputTextComponent"], _components_separator_separator_component__WEBPACK_IMPORTED_MODULE_13__["SeparatorComponent"], _components_input_input_switch_input_switch_component__WEBPACK_IMPORTED_MODULE_14__["InputSwitchComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9ncmFtYS1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "UUwt":
/*!*******************************************************!*\
  !*** ./src/app/models/programa-participante.model.ts ***!
  \*******************************************************/
/*! exports provided: ProgramaParticipante */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramaParticipante", function() { return ProgramaParticipante; });
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.model */ "rBj3");

class ProgramaParticipante extends _base_model__WEBPACK_IMPORTED_MODULE_0__["Base"] {
    constructor(data) {
        super();
        this.habilitado = true; /* Se o participante está habilitado */
        this.data_inicio = new Date(); /* Data de início */
        this.data_fim = null; /* Data do fim */
        this.programa_id = ""; /* Programa */
        this.usuario_id = ""; /* Usuario */
        this.initialization(data);
    }
}


/***/ }),

/***/ "cmH+":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/gestao/programa/programa-list/programa-list.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ProgramaListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramaListComponent", function() { return ProgramaListComponent; });
/* harmony import */ var src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/grid/grid.component */ "m4bG");
/* harmony import */ var src_app_dao_programa_dao_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dao/programa-dao.service */ "bsmI");
/* harmony import */ var src_app_models_programa_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/programa.model */ "nKBF");
/* harmony import */ var src_app_modules_base_page_list_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/base/page-list-base */ "+vn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_grid_filter_filter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/grid/filter/filter.component */ "kHdc");
/* harmony import */ var _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/input/input-text/input-text.component */ "lYxd");
/* harmony import */ var _components_grid_columns_columns_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/grid/columns/columns.component */ "d7UH");
/* harmony import */ var _components_grid_column_column_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/grid/column/column.component */ "pFmK");
/* harmony import */ var _components_grid_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../components/grid/pagination/pagination.component */ "f3Td");
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../components/toolbar/toolbar.component */ "np0s");














function ProgramaListComponent_toolbar_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "toolbar");
} }
function ProgramaListComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r9 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", row_r9.nome, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", row_r9.normativa, "");
} }
function ProgramaListComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r10 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", row_r10.unidade.nome, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", row_r10.unidade.sigla, "");
} }
function ProgramaListComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "br");
} if (rf & 2) {
    const row_r11 = ctx.row;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r6.dao.getDateFormatted(row_r11.data_inicio_vigencia), "");
} }
function ProgramaListComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r12 = ctx.row;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r8.dao.getDateFormatted(row_r12.data_fim_vigencia), "");
} }
class ProgramaListComponent extends src_app_modules_base_page_list_base__WEBPACK_IMPORTED_MODULE_3__["PageListBase"] {
    constructor(injector, dao) {
        super(injector, src_app_models_programa_model__WEBPACK_IMPORTED_MODULE_2__["Programa"], src_app_dao_programa_dao_service__WEBPACK_IMPORTED_MODULE_1__["ProgramaDaoService"]);
        this.injector = injector;
        this.filterWhere = (filter) => {
            var _a;
            let result = [];
            let form = filter.value;
            if ((_a = form.nome) === null || _a === void 0 ? void 0 : _a.length) {
                result.push(["nome", "like", "%" + form.nome + "%"]);
            }
            return result;
        };
        /* Inicializações */
        this.title = this.lex.noun("Programa de gestão", true);
        this.code = "MOD_PRGT";
        this.join = ["unidade"];
        this.filter = this.fh.FormBuilder({
            nome: { default: "" },
        });
        // Testa se o usuário possui permissão para exibir dados do programa de gestão
        if (this.auth.hasPermissionTo("MOD_PRGT_CONS")) {
            this.options.push({
                icon: "bi bi-info-circle",
                label: "Informações",
                onClick: this.consult.bind(this)
            });
        }
        // Testa se o usuário possui permissão para excluir o programa de gestão
        if (this.auth.hasPermissionTo("MOD_PRGT_EXCL")) {
            this.options.push({
                icon: "bi bi-trash",
                label: "Excluir",
                onClick: this.delete.bind(this)
            });
        }
        // Testa se o usuário possui permissão para excluir o programa de gestão
        if (this.auth.hasPermissionTo("MOD_PRGT_PART")) {
            this.options.push({
                icon: "bi bi-people",
                label: "Participantes",
                onClick: (programa) => this.go.navigate({ route: ["gestao", "programa", programa.id, "participantes"] })
            });
        }
    }
    filterClear(filter) {
        filter.controls.nome.setValue("");
        super.filterClear(filter);
    }
}
ProgramaListComponent.ɵfac = function ProgramaListComponent_Factory(t) { return new (t || ProgramaListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_dao_programa_dao_service__WEBPACK_IMPORTED_MODULE_1__["ProgramaDaoService"])); };
ProgramaListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ProgramaListComponent, selectors: [["app-programa-list"]], viewQuery: function ProgramaListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__["GridComponent"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.grid = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 20, vars: 25, consts: [[3, "dao", "add", "title", "orderBy", "groupBy", "join", "selectable", "hasAdd", "hasEdit", "select"], [4, "ngIf"], [3, "form", "where", "submit", "clear", "collapseChange", "collapsed"], [1, "row"], ["label", "Nome do Programa", "controlName", "nome", "placeholder", "Nome do programa", 3, "size", "control"], ["title", "T\u00EDtulo/Normativa", 3, "template"], ["columnTituloNormativa", ""], ["title", "Unidade instituidora", 3, "template"], ["columnUnidadeInstituidora", ""], ["title", "In\u00EDcio da Vig\u00EAncia", 3, "template"], ["columnInicioVigencia", ""], ["title", "Fim da Vig\u00EAncia", 3, "template"], ["columnFimVigencia", ""], ["type", "options", 3, "onEdit", "options"], [3, "rows"]], template: function ProgramaListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "grid", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("select", function ProgramaListComponent_Template_grid_select_0_listener($event) { return ctx.onSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProgramaListComponent_toolbar_1_Template, 1, 0, "toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "filter", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "input-text", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "column", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ProgramaListComponent_ng_template_7_Template, 5, 2, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "column", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, ProgramaListComponent_ng_template_10_Template, 5, 2, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "column", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, ProgramaListComponent_ng_template_13_Template, 3, 1, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "column", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, ProgramaListComponent_ng_template_16_Template, 2, 1, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "column", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "pagination", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](8);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](11);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](14);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dao", ctx.dao)("add", ctx.add)("title", ctx.isModal ? "" : ctx.title)("orderBy", ctx.orderBy)("groupBy", ctx.groupBy)("join", ctx.join)("selectable", ctx.selectable)("hasAdd", ctx.auth.hasPermissionTo("MOD_PRGT_INCL"))("hasEdit", ctx.auth.hasPermissionTo("MOD_PRGT_EDT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.selectable);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("form", ctx.filter)("where", ctx.filterWhere)("submit", ctx.filterSubmit.bind(ctx))("clear", ctx.filterClear.bind(ctx))("collapseChange", ctx.filterCollapseChange.bind(ctx))("collapsed", !ctx.selectable && ctx.filterCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("size", 12)("control", ctx.filter.controls.nome);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("template", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("template", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("template", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("template", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("onEdit", ctx.edit)("options", ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("rows", ctx.rowsLimit);
    } }, directives: [src_app_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_0__["GridComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _components_grid_filter_filter_component__WEBPACK_IMPORTED_MODULE_6__["FilterComponent"], _components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_7__["InputTextComponent"], _components_grid_columns_columns_component__WEBPACK_IMPORTED_MODULE_8__["ColumnsComponent"], _components_grid_column_column_component__WEBPACK_IMPORTED_MODULE_9__["ColumnComponent"], _components_grid_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_10__["PaginationComponent"], _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_11__["ToolbarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9ncmFtYS1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "iaiR":
/*!************************************************************!*\
  !*** ./src/app/modules/gestao/programa/programa.module.ts ***!
  \************************************************************/
/*! exports provided: ProgramaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramaModule", function() { return ProgramaModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _programa_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./programa-routing.module */ "8OEL");
/* harmony import */ var _programa_form_programa_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./programa-form/programa-form.component */ "UC/S");
/* harmony import */ var _programa_list_programa_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./programa-list/programa-list.component */ "cmH+");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _programa_participantes_programa_participantes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./programa-participantes/programa-participantes.component */ "I5ge");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class ProgramaModule {
}
ProgramaModule.ɵfac = function ProgramaModule_Factory(t) { return new (t || ProgramaModule)(); };
ProgramaModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: ProgramaModule });
ProgramaModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _programa_routing_module__WEBPACK_IMPORTED_MODULE_1__["ProgramaRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](ProgramaModule, { declarations: [_programa_form_programa_form_component__WEBPACK_IMPORTED_MODULE_2__["ProgramaFormComponent"],
        _programa_list_programa_list_component__WEBPACK_IMPORTED_MODULE_3__["ProgramaListComponent"],
        _programa_participantes_programa_participantes_component__WEBPACK_IMPORTED_MODULE_6__["ProgramaParticipantesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        src_app_components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _programa_routing_module__WEBPACK_IMPORTED_MODULE_1__["ProgramaRoutingModule"]] }); })();


/***/ }),

/***/ "nKBF":
/*!******************************************!*\
  !*** ./src/app/models/programa.model.ts ***!
  \******************************************/
/*! exports provided: Programa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Programa", function() { return Programa; });
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.model */ "rBj3");

class Programa extends _base_model__WEBPACK_IMPORTED_MODULE_0__["Base"] {
    constructor(data) {
        super();
        this.nome = ""; /* Nome do programa */
        this.normativa = ""; /* Normativa que regula o programa */
        this.config = null; /* Configuração extra de programa */
        this.unidade_id = ""; /* Unidade vinculada ao programa */
        this.data_inicio_vigencia = new Date(); /* Data de início vigencia */
        this.data_fim_vigencia = new Date(); /* Data de fim vigencia */
        this.data_inicio = new Date(); /* Data de início */
        this.data_fim = null; /* Data do fim */
        this.periodo_avaliacao = 'MENSAL'; /* Período para avaliação do plano */
        this.template_tcr_id = null; /* Template do TCR */
        this.termo_obrigatorio = false; /* tinyint; NOT NULL; */
        this.tipo_documento_tcr_id = null; /* Tipo de documento do TCR */
        this.initialization(data);
    }
}


/***/ })

}]);
//# sourceMappingURL=modules-gestao-programa-programa-module.js.map