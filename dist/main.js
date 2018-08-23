(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-snippet/add-snippet.component.css":
/*!*******************************************************!*\
  !*** ./src/app/add-snippet/add-snippet.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#snippet {\r\n    height:160px;\r\n}"

/***/ }),

/***/ "./src/app/add-snippet/add-snippet.component.html":
/*!********************************************************!*\
  !*** ./src/app/add-snippet/add-snippet.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"databaseService.connected\">\r\n\r\n  <h4>Add Snippet</h4>\r\n  <p>Enter a snippet from your cover letter that you feel is well articulated and communicates your experience well. Then fill out the categories (experiences, languages, skills) that relate to this cover letter.</p>\r\n  <textarea id=\"snippet\" ref-textarea [(ngModel)]=\"snippet\" placeholder=\"Copy/Paste a cover letter snippet here.\"></textarea>\r\n  <textarea ref-textarea [(ngModel)]=\"categories\" placeholder=\"Add your categories here, separated by a comma. eg. PHP, javascript, Node, mysql\"></textarea>\r\n  <button (click)=\"addSnippet()\">Submit Snippet</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/add-snippet/add-snippet.component.ts":
/*!******************************************************!*\
  !*** ./src/app/add-snippet/add-snippet.component.ts ***!
  \******************************************************/
/*! exports provided: AddSnippetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSnippetComponent", function() { return AddSnippetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/database.service */ "./src/app/services/database.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddSnippetComponent = /** @class */ (function () {
    function AddSnippetComponent(databaseService) {
        this.databaseService = databaseService;
        this.snippet = '';
        this.categories = '';
    }
    AddSnippetComponent.prototype.ngOnInit = function () {
    };
    AddSnippetComponent.prototype.addSnippet = function () {
        this.categories.replace(' ', '');
        var categoriesArray = this.categories.split(',');
        this.databaseService.addSnippet(this.snippet, categoriesArray);
        this.snippet = '';
        this.categories = '';
    };
    AddSnippetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-snippet',
            template: __webpack_require__(/*! ./add-snippet.component.html */ "./src/app/add-snippet/add-snippet.component.html"),
            styles: [__webpack_require__(/*! ./add-snippet.component.css */ "./src/app/add-snippet/add-snippet.component.css")]
        }),
        __metadata("design:paramtypes", [_services_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"]])
    ], AddSnippetComponent);
    return AddSnippetComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n</div>\n<app-nav></app-nav>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n  <!-- <app-database></app-database>\n  <app-function-choice></app-function-choice> -->\n</div>\n<app-status-message></app-status-message>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Cover Letter Snippets';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _job_description_job_description_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./job-description/job-description.component */ "./src/app/job-description/job-description.component.ts");
/* harmony import */ var _database_database_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./database/database.component */ "./src/app/database/database.component.ts");
/* harmony import */ var _results_results_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./results/results.component */ "./src/app/results/results.component.ts");
/* harmony import */ var _add_snippet_add_snippet_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-snippet/add-snippet.component */ "./src/app/add-snippet/add-snippet.component.ts");
/* harmony import */ var _status_message_status_message_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./status-message/status-message.component */ "./src/app/status-message/status-message.component.ts");
/* harmony import */ var _has_keywords_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./has-keywords.pipe */ "./src/app/has-keywords.pipe.ts");
/* harmony import */ var _cover_letter_cover_letter_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cover-letter/cover-letter.component */ "./src/app/cover-letter/cover-letter.component.ts");
/* harmony import */ var _build_cover_letter_build_cover_letter_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./build-cover-letter/build-cover-letter.component */ "./src/app/build-cover-letter/build-cover-letter.component.ts");
/* harmony import */ var _export_export_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./export/export.component */ "./src/app/export/export.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _services_parse_description_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/parse-description.service */ "./src/app/services/parse-description.service.ts");
/* harmony import */ var _services_status_message_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/status-message.service */ "./src/app/services/status-message.service.ts");
/* harmony import */ var _services_cover_letter_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/cover-letter.service */ "./src/app/services/cover-letter.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var appRoutes = [
    { path: '', component: _database_database_component__WEBPACK_IMPORTED_MODULE_7__["DatabaseComponent"] },
    { path: 'add-snippet', component: _add_snippet_add_snippet_component__WEBPACK_IMPORTED_MODULE_9__["AddSnippetComponent"] },
    { path: 'build-cover-letter', component: _build_cover_letter_build_cover_letter_component__WEBPACK_IMPORTED_MODULE_13__["BuildCoverLetterComponent"] },
    { path: 'export-cover-letter', component: _export_export_component__WEBPACK_IMPORTED_MODULE_14__["ExportComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _job_description_job_description_component__WEBPACK_IMPORTED_MODULE_6__["JobDescriptionComponent"],
                _database_database_component__WEBPACK_IMPORTED_MODULE_7__["DatabaseComponent"],
                _results_results_component__WEBPACK_IMPORTED_MODULE_8__["ResultsComponent"],
                _add_snippet_add_snippet_component__WEBPACK_IMPORTED_MODULE_9__["AddSnippetComponent"],
                _status_message_status_message_component__WEBPACK_IMPORTED_MODULE_10__["StatusMessageComponent"],
                _has_keywords_pipe__WEBPACK_IMPORTED_MODULE_11__["HasKeywordsPipe"],
                _cover_letter_cover_letter_component__WEBPACK_IMPORTED_MODULE_12__["CoverLetterComponent"],
                _export_export_component__WEBPACK_IMPORTED_MODULE_14__["ExportComponent"],
                _build_cover_letter_build_cover_letter_component__WEBPACK_IMPORTED_MODULE_13__["BuildCoverLetterComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_15__["NavComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [
                _services_database_service__WEBPACK_IMPORTED_MODULE_16__["DatabaseService"],
                _services_parse_description_service__WEBPACK_IMPORTED_MODULE_17__["ParseDescriptionService"],
                _services_status_message_service__WEBPACK_IMPORTED_MODULE_18__["StatusMessageService"],
                _services_cover_letter_service__WEBPACK_IMPORTED_MODULE_19__["CoverLetterService"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/build-cover-letter/build-cover-letter.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/build-cover-letter/build-cover-letter.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/build-cover-letter/build-cover-letter.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/build-cover-letter/build-cover-letter.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-job-description *ngIf=\"!parseDescriptionService.showParsingResults\"></app-job-description>\r\n\r\n<div *ngIf=\"parseDescriptionService.showParsingResults\">\r\n  <app-results ></app-results>\r\n  <div class=\"line-break\"></div>\r\n</div>\r\n\r\n<div *ngIf=\"coverLetterService.addedSnippets.length > 0\">\r\n  <app-cover-letter></app-cover-letter>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/build-cover-letter/build-cover-letter.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/build-cover-letter/build-cover-letter.component.ts ***!
  \********************************************************************/
/*! exports provided: BuildCoverLetterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildCoverLetterComponent", function() { return BuildCoverLetterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_parse_description_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/parse-description.service */ "./src/app/services/parse-description.service.ts");
/* harmony import */ var _services_cover_letter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/cover-letter.service */ "./src/app/services/cover-letter.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BuildCoverLetterComponent = /** @class */ (function () {
    function BuildCoverLetterComponent(parseDescriptionService, coverLetterService) {
        this.parseDescriptionService = parseDescriptionService;
        this.coverLetterService = coverLetterService;
    }
    BuildCoverLetterComponent.prototype.ngOnInit = function () {
    };
    BuildCoverLetterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-build-cover-letter',
            template: __webpack_require__(/*! ./build-cover-letter.component.html */ "./src/app/build-cover-letter/build-cover-letter.component.html"),
            styles: [__webpack_require__(/*! ./build-cover-letter.component.css */ "./src/app/build-cover-letter/build-cover-letter.component.css")]
        }),
        __metadata("design:paramtypes", [_services_parse_description_service__WEBPACK_IMPORTED_MODULE_1__["ParseDescriptionService"],
            _services_cover_letter_service__WEBPACK_IMPORTED_MODULE_2__["CoverLetterService"]])
    ], BuildCoverLetterComponent);
    return BuildCoverLetterComponent;
}());



/***/ }),

/***/ "./src/app/cover-letter/cover-letter.component.css":
/*!*********************************************************!*\
  !*** ./src/app/cover-letter/cover-letter.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#cover-letter-table thead td:first-child {\r\n    width:70%;\r\n}\r\n\r\n#cover-letter-table thead td:nth-child(2) {\r\n    max-width:15%;\r\n}\r\n\r\n#cover-letter-table thead td:nth-child(3) {\r\n    max-width:15%;\r\n}"

/***/ }),

/***/ "./src/app/cover-letter/cover-letter.component.html":
/*!**********************************************************!*\
  !*** ./src/app/cover-letter/cover-letter.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"table-container\" *ngIf=\"coverLetterService.addedSnippets.length > 0\"> -->\n<h4>Organize Snippets and Export:</h4>\n<div class=\"table-container\">\n  <table id=\"cover-letter-table\">\n    <thead>\n      <tr>\n        <td>Snippet</td>\n        <td>Remove</td>\n        <td>Reorganize</td>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let snippet of coverLetterService.addedSnippets; let i = index\">\n        <td>{{snippet.snippet}}</td>\n        <td><a (click)=\"coverLetterService.removeSnippet(i)\">Remove</a></td>\n        <td>\n          <p><a (click)=\"coverLetterService.moveSnippet(i,true)\" *ngIf=\"i !== 0\">Move Up</a></p>\n          <p><a (click)=\"coverLetterService.moveSnippet(i,false)\" *ngIf=\"i !== coverLetterService.addedSnippets.length - 1\">Move Down</a></p>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<button [routerLink]=\"['/export-cover-letter']\" (click)=\"compile()\">Export and Tweak Cover Letter</button>\n"

/***/ }),

/***/ "./src/app/cover-letter/cover-letter.component.ts":
/*!********************************************************!*\
  !*** ./src/app/cover-letter/cover-letter.component.ts ***!
  \********************************************************/
/*! exports provided: CoverLetterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoverLetterComponent", function() { return CoverLetterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cover_letter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/cover-letter.service */ "./src/app/services/cover-letter.service.ts");
/* harmony import */ var _services_status_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/status-message.service */ "./src/app/services/status-message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CoverLetterComponent = /** @class */ (function () {
    function CoverLetterComponent(coverLetterService, statusMessasageService) {
        this.coverLetterService = coverLetterService;
        this.statusMessasageService = statusMessasageService;
    }
    CoverLetterComponent.prototype.ngOnInit = function () {
    };
    CoverLetterComponent.prototype.compile = function () {
        var exportedCoverLetter = "";
        for (var i = 0; i < this.coverLetterService.addedSnippets.length; i++) {
            exportedCoverLetter += this.coverLetterService.addedSnippets[i].snippet;
            exportedCoverLetter += "\n\n";
        }
        this.coverLetterService.exported = exportedCoverLetter;
        this.statusMessasageService.newStatusMessage('Exporting Cover Letter to final edit!', 'success');
    };
    CoverLetterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cover-letter',
            template: __webpack_require__(/*! ./cover-letter.component.html */ "./src/app/cover-letter/cover-letter.component.html"),
            styles: [__webpack_require__(/*! ./cover-letter.component.css */ "./src/app/cover-letter/cover-letter.component.css")]
        }),
        __metadata("design:paramtypes", [_services_cover_letter_service__WEBPACK_IMPORTED_MODULE_1__["CoverLetterService"],
            _services_status_message_service__WEBPACK_IMPORTED_MODULE_2__["StatusMessageService"]])
    ], CoverLetterComponent);
    return CoverLetterComponent;
}());



/***/ }),

/***/ "./src/app/database/database.component.css":
/*!*************************************************!*\
  !*** ./src/app/database/database.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-container {\r\n    max-height: 300px;\r\n}\r\n\r\n#database-table thead td:first-child {\r\n    width:60%;\r\n}\r\n\r\n#database-table thead td:nth-child(2) {\r\n    width:25%;\r\n}\r\n\r\n#database-table thead td:nth-child(3) {\r\n    width:15%;\r\n}\r\n\r\n.snippet-edit, .categories-edit {\r\n  background-color: #00000000;\r\n  color:#c9c9c9;\r\n  border:none;\r\n  font-size: 11px;\r\n  font-family: sans-serif;\r\n}\r\n\r\n.snippet-edit {\r\n  display:none;\r\n  min-height: 75px;\r\n}\r\n\r\n.categories-edit {\r\n  display:none;\r\n}\r\n"

/***/ }),

/***/ "./src/app/database/database.component.html":
/*!**************************************************!*\
  !*** ./src/app/database/database.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!databaseService.connected\">\r\n  <h4 id=\"json-title\">Use JSON File:</h4>\r\n  <p>\r\n    Click here to store/pull data from a local JSON file.\r\n  </p>\r\n  <button (click)=\"connectJson()\">Connect to JSON File</button>\r\n\r\n  <br>\r\n\r\n  <h4 id=\"db-title\">Connect your Database:</h4>\r\n  <p>\r\n    Paste your MongoDB url here with credentials and we will connect to your database.\r\n    For instructions on how to create a cloud-hosted database, <a href=\"https://github.com/mattcheah/cover-letter-snippets#setting-up-a-database\">visit the README</a>.\r\n  </p>\r\n  <p>The database string here is a test sandbox for anyone to use. Please play nice.</p>\r\n  <input [(ngModel)]=\"databaseString\"/><br>\r\n  <button [ngClass]=\"{inactive: databaseString == ''}\" (click)=\"connect(databaseString)\">Connect to Database</button>\r\n</div>\r\n\r\n<div *ngIf=\"databaseService.showDatabase\">\r\n  <p>\r\n    Your Snippets Database has {{databaseService.database.length}} entries.<br>\r\n    <small>Click a snippet or category to edit and press 'enter' to save</small>\r\n  </p>\r\n  <div class=\"table-container\">\r\n\r\n    <table id=\"database-table\">\r\n      <thead>\r\n        <tr>\r\n          <td>Snippet</td>\r\n          <td>Categories</td>\r\n          <td>Delete</td>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr [id]=\"'snippet-'+snippet._id\" *ngFor=\"let snippet of databaseService.database\">\r\n          <td (click)=\"toggleEditSnippet(snippet)\" >\r\n            <div class=\"snippet no-edit\" style=\"display:block\">\r\n              {{snippet.snippet}}\r\n            </div>\r\n            <textarea  \r\n            [(ngModel)]=\"editSnippetObject ? editSnippetObject.snippet : snippet.snippet\" \r\n            (keydown)=\"snippetEdited = true\" \r\n            (keyup.enter)=\"saveEdit(editSnippetObject)\" \r\n            (blur)=\"saveEdit(editSnippetObject)\"\r\n            class=\"snippet-edit editable\" >\r\n            </textarea>\r\n          </td>\r\n          <td (click)=\"toggleEditCategories(snippet)\" >\r\n            <div class=\"categories no-edit\" style=\"display:block\">\r\n              {{snippet.categories}}\r\n            </div>\r\n            <input \r\n            [(ngModel)]=\"editSnippetObject ? editSnippetObject.categories : snippet.categories\" \r\n            (keydown)=\"snippetEdited = true\" \r\n            (keyup.enter)=\"saveEdit(editSnippetObject)\" \r\n            (blur)=\"saveEdit(editSnippetObject)\"\r\n            class=\"categories-edit editable\" >\r\n          </td>\r\n          <td class=\"delete\"><a (click)=\"deleteRecord(snippet._id)\">Delete</a></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/database/database.component.ts":
/*!************************************************!*\
  !*** ./src/app/database/database.component.ts ***!
  \************************************************/
/*! exports provided: DatabaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseComponent", function() { return DatabaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/database.service */ "./src/app/services/database.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DatabaseComponent = /** @class */ (function () {
    function DatabaseComponent(databaseService) {
        this.databaseService = databaseService;
        this.showConnectForm = true;
        this.databaseString = 'mongodb://user:testtest1@ds119660.mlab.com:19660/snippets-sandbox';
        this.editingCategory = false;
        this.snippetEdited = false;
    }
    DatabaseComponent.prototype.ngOnInit = function () {
    };
    DatabaseComponent.prototype.connectJson = function (jsonString) {
        this.databaseService.startConnection(true, jsonString);
    };
    DatabaseComponent.prototype.connect = function (connectString) {
        // console.log("connecting to mongoose db: response is:");
        this.databaseService.startConnection(false, connectString);
    };
    DatabaseComponent.prototype.toggleEditSnippet = function (snippet) {
        if (!this.editSnippetObject || snippet._id !== this.editSnippetObject._id || this.editingCategory) {
            this.editingCategory = false;
            if (this.editSnippetObject) {
                this.saveEdit(this.editSnippetObject);
            }
            this.editSnippetObject = snippet;
            var snippetLabel = document.querySelector('#snippet-' + snippet._id + ' .snippet');
            var snippetEdit = document.querySelector('#snippet-' + snippet._id + ' .snippet-edit');
            snippetLabel.style.display = 'none';
            snippetEdit.style.display = 'block';
        }
    };
    DatabaseComponent.prototype.toggleEditCategories = function (snippet) {
        if (!this.editSnippetObject || snippet._id !== this.editSnippetObject._id || !this.editingCategory) {
            this.editingCategory = true;
            if (this.editSnippetObject) {
                this.saveEdit(this.editSnippetObject);
            }
            this.editSnippetObject = snippet;
            var categoriesLabel = document.querySelector('#snippet-' + snippet._id + ' .categories');
            var categoriesEdit = document.querySelector('#snippet-' + snippet._id + ' .categories-edit');
            categoriesLabel.style.display = 'none';
            categoriesEdit.style.display = 'block';
        }
    };
    DatabaseComponent.prototype.toggleOffEditing = function () {
        if (this.editSnippetObject) {
            this.editSnippetObject = undefined;
            var noEdits = document.getElementsByClassName('no-edit');
            var edits = document.getElementsByClassName('editable');
            for (var i = 0; i < edits.length; i++) {
                edits[i].style.display = 'none';
            }
            for (var j = 0; j < noEdits.length; j++) {
                noEdits[j].style.display = 'block';
            }
        }
    };
    DatabaseComponent.prototype.saveEdit = function (snippet) {
        // setting variables for edited content so that
        var newSnip = document.querySelector('#snippet-' + snippet._id + ' .snippet-edit');
        var newCat = document.querySelector('#snippet-' + snippet._id + ' .categories-edit');
        snippet.snippet = newSnip.value;
        snippet.categories = newCat.value;
        if (this.snippetEdited) {
            if (typeof snippet.categories === 'string') {
                snippet.categories.replace(' ', '');
                snippet.categories = snippet.categories.split(',');
            }
            this.databaseService.editSnippet(snippet._id, snippet.snippet, snippet.categories);
            this.snippetEdited = false;
        }
        this.toggleOffEditing();
    };
    DatabaseComponent.prototype.deleteRecord = function (id) {
        // console.log("delete id: "+id);
        this.databaseService.deleteSnippet(id);
    };
    DatabaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-database',
            template: __webpack_require__(/*! ./database.component.html */ "./src/app/database/database.component.html"),
            styles: [__webpack_require__(/*! ./database.component.css */ "./src/app/database/database.component.css")]
        }),
        __metadata("design:paramtypes", [_services_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"]])
    ], DatabaseComponent);
    return DatabaseComponent;
}());



/***/ }),

/***/ "./src/app/export/export.component.css":
/*!*********************************************!*\
  !*** ./src/app/export/export.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "textarea {\r\n  height:500px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/export/export.component.html":
/*!**********************************************!*\
  !*** ./src/app/export/export.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"export-container\">\n  <h4 id=\"export-title\">Exported Cover Letter:</h4>\n  <p>You may edit your cover letter, and copy/paste it from here to whatever medium you are using to apply for jobs.</p>\n  <textarea [(ngModel)]=\"coverLetterService.exported\"></textarea>\n  <p>Need to edit something? Click the button below to go back.</p>\n  <p>WARNING: Any changes you made in this text form will not be saved!</p>\n  <button [routerLink]=\"['/build-cover-letter']\" (click)=\"statusMessageService.clearStatus()\">Go Back to Building Cover Letter</button>\n</div>\n\n"

/***/ }),

/***/ "./src/app/export/export.component.ts":
/*!********************************************!*\
  !*** ./src/app/export/export.component.ts ***!
  \********************************************/
/*! exports provided: ExportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportComponent", function() { return ExportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cover_letter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/cover-letter.service */ "./src/app/services/cover-letter.service.ts");
/* harmony import */ var _services_status_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/status-message.service */ "./src/app/services/status-message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExportComponent = /** @class */ (function () {
    function ExportComponent(coverLetterService, statusMessageService) {
        this.coverLetterService = coverLetterService;
        this.statusMessageService = statusMessageService;
    }
    ExportComponent.prototype.ngOnInit = function () {
    };
    ExportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-export',
            template: __webpack_require__(/*! ./export.component.html */ "./src/app/export/export.component.html"),
            styles: [__webpack_require__(/*! ./export.component.css */ "./src/app/export/export.component.css")]
        }),
        __metadata("design:paramtypes", [_services_cover_letter_service__WEBPACK_IMPORTED_MODULE_1__["CoverLetterService"],
            _services_status_message_service__WEBPACK_IMPORTED_MODULE_2__["StatusMessageService"]])
    ], ExportComponent);
    return ExportComponent;
}());



/***/ }),

/***/ "./src/app/has-keywords.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/has-keywords.pipe.ts ***!
  \**************************************/
/*! exports provided: HasKeywordsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HasKeywordsPipe", function() { return HasKeywordsPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HasKeywordsPipe = /** @class */ (function () {
    function HasKeywordsPipe() {
    }
    HasKeywordsPipe.prototype.transform = function (value, args) {
        // Only return categories if there is at least 1 keyword in the job description
        return value.filter(function (cat) { return cat.jobKeywords > 0; });
    };
    HasKeywordsPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'hasKeywords'
        })
    ], HasKeywordsPipe);
    return HasKeywordsPipe;
}());



/***/ }),

/***/ "./src/app/job-description/job-description.component.css":
/*!***************************************************************!*\
  !*** ./src/app/job-description/job-description.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#keyword-results-table-container {\r\n    max-height:160px;\r\n}\r\n\r\n/* #keyword-results-table thead td, #filtered-snippets-table thead td {\r\n    font-size:14px;\r\n    color:white;\r\n} */\r\n\r\n#keyword-results-table tbody td {\r\n    font-size:10px;\r\n}\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/job-description/job-description.component.html":
/*!****************************************************************!*\
  !*** ./src/app/job-description/job-description.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h4>Job Description</h4>\n<p>Enter the job description here, and Snippets will parse it in order to find the keywords (skills, experience, languages) that match previous cover letter information that you have written.</p>\n<textarea ref-textarea [(ngModel)]=\"descriptionContent\" placeholder=\"Copy/Paste a job description here\" ></textarea>\n<button (click)=\"submitDescription(descriptionContent)\">Parse Job Description</button>\n\n\n\n"

/***/ }),

/***/ "./src/app/job-description/job-description.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/job-description/job-description.component.ts ***!
  \**************************************************************/
/*! exports provided: JobDescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobDescriptionComponent", function() { return JobDescriptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_parse_description_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/parse-description.service */ "./src/app/services/parse-description.service.ts");
/* harmony import */ var _services_status_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/status-message.service */ "./src/app/services/status-message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JobDescriptionComponent = /** @class */ (function () {
    function JobDescriptionComponent(parseDescriptionService, statusMessageService) {
        this.parseDescriptionService = parseDescriptionService;
        this.statusMessageService = statusMessageService;
    }
    JobDescriptionComponent.prototype.ngOnInit = function () {
    };
    JobDescriptionComponent.prototype.submitDescription = function (description) {
        this.parseDescriptionService.parseDescription(description);
    };
    JobDescriptionComponent.prototype.enterNewDescription = function () {
        this.descriptionContent = "";
        this.parseDescriptionService.showParsingResults = false;
        this.statusMessageService.newStatusMessage("Resetting Job Description", "warning");
    };
    JobDescriptionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-job-description',
            template: __webpack_require__(/*! ./job-description.component.html */ "./src/app/job-description/job-description.component.html"),
            styles: [__webpack_require__(/*! ./job-description.component.css */ "./src/app/job-description/job-description.component.css")]
        }),
        __metadata("design:paramtypes", [_services_parse_description_service__WEBPACK_IMPORTED_MODULE_1__["ParseDescriptionService"],
            _services_status_message_service__WEBPACK_IMPORTED_MODULE_2__["StatusMessageService"]])
    ], JobDescriptionComponent);
    return JobDescriptionComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\r\n  list-style-type: none;\r\n}\r\n\r\nli a {\r\n  color:#b0ccea;\r\n}\r\n\r\nli .is-active {\r\n  color:white;\r\n  font-weight:700;\r\n}\r\n\r\nli .disabled {\r\n  cursor:not-allowed !important;\r\n  color:#555 !important;\r\n  text-decoration:none;\r\n}\r\n\r\n/* .is-active {\r\n  color:#7ca0c5;\r\n} */\r\n"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"flex\">\n  <li><a [routerLink]=\"['']\" [routerLinkActive]=\"['is-active']\" [routerLinkActiveOptions]=\"{ exact: true }\">Database</a></li>\n\n  <li *ngIf=\"databaseService.connected\"><a [routerLink]=\"['add-snippet']\" [routerLinkActive]=\"['is-active']\" [routerLinkActiveOptions]=\"{ exact: true }\" [ngClass]=\"{disabled: !databaseService.connected}\">Add Snippets</a></li>\n  <li *ngIf=\"!databaseService.connected\"><a class=\"disabled\">Add Snippets</a></li>\n\n  <li *ngIf=\"databaseService.connected\"><a [routerLink]=\"['build-cover-letter']\" [routerLinkActive]=\"['is-active']\" [routerLinkActiveOptions]=\"{ exact: true }\">Build Cover Letter</a></li>\n  <li *ngIf=\"!databaseService.connected\"><a class=\"disabled\">Build Cover Letter</a></li>\n\n  <li *ngIf=\"coverLetterService.addedSnippets.length != 0\"><a [routerLink]=\"['export-cover-letter']\" [routerLinkActive]=\"['is-active']\">Export Cover Letter</a></li>\n  <li *ngIf=\"coverLetterService.addedSnippets.length == 0\"><a  class=\"disabled\">Export Cover Letter</a></li>\n</ul>\n"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _services_cover_letter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/cover-letter.service */ "./src/app/services/cover-letter.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavComponent = /** @class */ (function () {
    function NavComponent(databaseService, coverLetterService) {
        this.databaseService = databaseService;
        this.coverLetterService = coverLetterService;
        this.coverLetterLinkDisabled = (this.coverLetterService.addedSnippets.length == 0);
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [_services_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"],
            _services_cover_letter_service__WEBPACK_IMPORTED_MODULE_2__["CoverLetterService"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/results/results.component.css":
/*!***********************************************!*\
  !*** ./src/app/results/results.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#filtered-snippets-table thead td:first-child {\r\n    width:75%;\r\n}\r\n\r\n#filtered-snippets-table thead td:nth-child(2) {\r\n    max-width:25%;\r\n}\r\n\r\nbutton {\r\n  margin: 0 auto;\r\n  display: block;\r\n}\r\n\r\n#intro-outro {\r\n  margin:20px 0\r\n}\r\n"

/***/ }),

/***/ "./src/app/results/results.component.html":
/*!************************************************!*\
  !*** ./src/app/results/results.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"results\">\n\n  <div class=\"line-break\"></div>\n\n  <div class=\"flex\">\n    <button (click)=\"enterNewDescription()\">Enter new job description</button>\n  </div>\n\n  <div class=\"line-break\"></div>\n\n  <h4 id=\"results-title\">Results for the job description:</h4>\n  <small>{{parseDescriptionService.jobDescription.substring(0,200)}}...</small>\n\n  <div id=\"keyword-results-table-container\" class=\"table-container\">\n    <table id=\"keyword-results-table\">\n      <thead>\n        <tr>\n          <td>Category/Keyword:</td>\n          <td>Times Mentioned:</td>\n          <td>Show snippets for Category</td>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let keyword of parseDescriptionService.keywordArray | hasKeywords\">\n          <td>{{ keyword.keyword }}</td>\n          <td>{{ keyword.jobKeywords }}</td>\n          <td>\n            <a (click)=\"displaySnippets(keyword.keyword)\">Show Snippets</a>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n  <div id=\"intro-outro\" class=\"flex\">\n    <button (click)=\"displaySnippets('intro')\">Show Intros</button>\n    <button (click)=\"displaySnippets('outro')\">Show Outros</button>\n  </div>\n\n  <div *ngIf=\"showFilteredSnippetsTable\">\n    <div class=\"line-break\"></div>\n\n    <h4 id=\"snippets-from-category\">Snippets from Category: {{ displayedCategory }}</h4>\n    <div id=\"filtered-snippets-table-container\" class=\"table-container\" >\n      <table id=\"filtered-snippets-table\">\n        <thead>\n          <tr>\n            <td>Snippet</td>\n            <!-- <td>Categories</td> -->\n            <td>Add to Letter</td>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let snippet of filteredSnippets\">\n            <td class=\"snippet\">{{snippet.snippet}}</td>\n            <!-- <td class=\"categories\">{{snippet.categories}}</td> -->\n            <td class=\"add\" (click)=\"coverLetterService.addSnippet(snippet)\">\n              <a>Add</a>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/results/results.component.ts":
/*!**********************************************!*\
  !*** ./src/app/results/results.component.ts ***!
  \**********************************************/
/*! exports provided: ResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsComponent", function() { return ResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_parse_description_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/parse-description.service */ "./src/app/services/parse-description.service.ts");
/* harmony import */ var _services_status_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/status-message.service */ "./src/app/services/status-message.service.ts");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _services_cover_letter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/cover-letter.service */ "./src/app/services/cover-letter.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ResultsComponent = /** @class */ (function () {
    function ResultsComponent(parseDescriptionService, coverLetterService, databaseService, statusMessageService) {
        this.parseDescriptionService = parseDescriptionService;
        this.coverLetterService = coverLetterService;
        this.databaseService = databaseService;
        this.statusMessageService = statusMessageService;
        this.displayedCategory = '';
        this.showFilteredSnippetsTable = false;
    }
    ResultsComponent.prototype.ngOnInit = function () {
    };
    ResultsComponent.prototype.displaySnippets = function (keyword) {
        this.filteredSnippets = [];
        var snippets = this.databaseService.database;
        for (var i = 0; i < snippets.length; i++) {
            if (snippets[i].categories.includes(keyword)) {
                this.filteredSnippets.push(snippets[i]);
            }
        }
        this.displayedCategory = keyword;
        this.showFilteredSnippetsTable = true;
        this.statusMessageService.newStatusMessage('Displaying Snippets from category: ' + keyword, 'primary');
    };
    ResultsComponent.prototype.enterNewDescription = function () {
        this.filteredSnippets = [];
        this.showFilteredSnippetsTable = false;
        this.parseDescriptionService.showParsingResults = false;
        this.parseDescriptionService.jobDescription = '';
        this.parseDescriptionService.keywordArray = [];
        this.statusMessageService.newStatusMessage('Resetting Job Description', 'warning');
    };
    ResultsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-results',
            template: __webpack_require__(/*! ./results.component.html */ "./src/app/results/results.component.html"),
            styles: [__webpack_require__(/*! ./results.component.css */ "./src/app/results/results.component.css")]
        }),
        __metadata("design:paramtypes", [_services_parse_description_service__WEBPACK_IMPORTED_MODULE_1__["ParseDescriptionService"],
            _services_cover_letter_service__WEBPACK_IMPORTED_MODULE_4__["CoverLetterService"],
            _services_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"],
            _services_status_message_service__WEBPACK_IMPORTED_MODULE_2__["StatusMessageService"]])
    ], ResultsComponent);
    return ResultsComponent;
}());



/***/ }),

/***/ "./src/app/services/cover-letter.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/cover-letter.service.ts ***!
  \**************************************************/
/*! exports provided: CoverLetterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoverLetterService", function() { return CoverLetterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_status_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/status-message.service */ "./src/app/services/status-message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CoverLetterService = /** @class */ (function () {
    function CoverLetterService(statusMessageService) {
        this.statusMessageService = statusMessageService;
        this.addedSnippets = [];
        this.exported = '';
    }
    CoverLetterService.prototype.addSnippet = function (snippet) {
        for (var i = 0; i < this.addedSnippets.length; i++) {
            if (this.addedSnippets[i]._id === snippet._id) {
                return;
            }
        }
        this.addedSnippets.push(snippet);
        this.statusMessageService.newStatusMessage('Added Snippet to the Cover Letter', 'primary');
    };
    CoverLetterService.prototype.moveSnippet = function (index, up) {
        var temp = this.addedSnippets[index];
        var swapIndex = up ? -1 : 1;
        this.addedSnippets[index] = this.addedSnippets[index + swapIndex];
        this.addedSnippets[index + swapIndex] = temp;
    };
    CoverLetterService.prototype.removeSnippet = function (index) {
        this.addedSnippets.splice(index, 1);
        this.statusMessageService.newStatusMessage('Removed Snippet from Cover Letter', 'primary');
    };
    CoverLetterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_status_message_service__WEBPACK_IMPORTED_MODULE_1__["StatusMessageService"]])
    ], CoverLetterService);
    return CoverLetterService;
}());



/***/ }),

/***/ "./src/app/services/database.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/database.service.ts ***!
  \**********************************************/
/*! exports provided: DatabaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseService", function() { return DatabaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _status_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./status-message.service */ "./src/app/services/status-message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DatabaseService = /** @class */ (function () {
    function DatabaseService(http, statusMessageService) {
        this.http = http;
        this.statusMessageService = statusMessageService;
        this.connected = false;
        this.showDatabase = false;
        this.categories = {};
    }
    DatabaseService.prototype.startConnection = function (isJson, urlString) {
        if (isJson === void 0) { isJson = true; }
        if (urlString === void 0) { urlString = 'snippets-db.json'; }
        var self = this;
        var dataObj = JSON.stringify({ databaseUrl: urlString });
        var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json; charset=utf-8'
            })
        };
        var url = isJson ? 'api/get-json-data' : 'api/connect-to-database';
        self.isJson = isJson;
        this.http.post(url, dataObj, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError)).subscribe(function (response) {
            if (response.connected && !response.error) {
                self.database = response.data;
                self.statusMessageService.newStatusMessage(response.responseMessage, 'success');
                self.connected = true;
                self.showDatabase = true;
                if (self.database.length > 0) {
                    self.extractCategories();
                }
            }
        });
    };
    DatabaseService.prototype.addSnippet = function (snippet, categories) {
        var self = this;
        var data = { snippet: snippet, categories: categories };
        var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json; charset=utf-8'
            })
        };
        var url = self.isJson ? 'api/add-json-snippet' : 'api/add-snippet';
        this.http.post(url, JSON.stringify(data), options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError)).subscribe(function (returnData) {
            if (returnData.connected) {
                self.statusMessageService.newStatusMessage(returnData.responseMessage, 'success');
                self.database = returnData.data;
                self.extractCategories();
            }
            else if (returnData.error) {
                self.statusMessageService.newStatusMessage(returnData.responseMessage, 'error');
            }
        });
    };
    DatabaseService.prototype.editSnippet = function (id, snippet, categories) {
        var self = this;
        var url = self.isJson ? 'api/edit-json-snippet' : 'api/edit-snippet';
        var data = { id: id, snippet: snippet, categories: categories };
        var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json; charset=utf-8'
            })
        };
        this.http.put(url, JSON.stringify(data), options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError)).subscribe(function (returnData) {
            if (returnData.connected && !returnData.error) {
                self.statusMessageService.newStatusMessage(returnData.responseMessage, 'success');
                self.database = returnData.data;
                self.extractCategories();
            }
        });
    };
    DatabaseService.prototype.deleteSnippet = function (id) {
        var self = this;
        var data = { id: id };
        var url = self.isJson ? 'api/delete-json-snippet' : 'api/delete-snippet';
        var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json; charset=utf-8'
            }),
            body: JSON.stringify(data)
        };
        this.http.delete(url, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError)).subscribe(function (returnData) {
            if (returnData.connected && !returnData.error) {
                self.statusMessageService.newStatusMessage(returnData.responseMessage, 'success');
                self.database = returnData.data;
                self.extractCategories();
            }
        });
    };
    DatabaseService.prototype.extractCategories = function () {
        this.categories = {};
        for (var i = 0; i < this.database.length; i++) {
            var record = this.database[i];
            for (var j = 0; j < record.categories.length; j++) {
                var category = record.categories[j];
                if (!(category in this.categories)) {
                    this.categories[category] = {
                        ids: [],
                        jobKeywords: 0
                    };
                }
                this.categories[category].ids.push(record);
            }
        }
    };
    DatabaseService.prototype.handleError = function (error) {
        console.log('error obj: ');
        console.log(error);
        if (error.error instanceof ErrorEvent) {
            console.error('Error: ', error.error.message);
            this.statusMessageService.newStatusMessage('There was a network error with your request: ' + error.error.message, 'error');
        }
        else {
            console.error("Backend returned code " + error.status);
            console.error("Error Body: " + error.error);
            this.statusMessageService.newStatusMessage('There was a server error with your request: ' + error.error, 'error');
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('error from throwerror');
    };
    DatabaseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _status_message_service__WEBPACK_IMPORTED_MODULE_4__["StatusMessageService"]])
    ], DatabaseService);
    return DatabaseService;
}());



/***/ }),

/***/ "./src/app/services/parse-description.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/parse-description.service.ts ***!
  \*******************************************************/
/*! exports provided: ParseDescriptionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParseDescriptionService", function() { return ParseDescriptionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _status_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./status-message.service */ "./src/app/services/status-message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ParseDescriptionService = /** @class */ (function () {
    function ParseDescriptionService(databaseService, statusMessageService) {
        this.databaseService = databaseService;
        this.statusMessageService = statusMessageService;
        this.jobDescription = '';
        this.showParsingResults = false;
    }
    ParseDescriptionService.prototype.parseDescription = function (description) {
        this.resetJobKeywords();
        this.jobDescription = description;
        var descriptionWords = description.split(/\W/);
        for (var i = 0; i < descriptionWords.length; i++) {
            var word = descriptionWords[i].toLowerCase();
            if (word in this.databaseService.categories) {
                this.databaseService.categories[word].jobKeywords++;
            }
        }
        this.keywordArray = this.createOrderedArray();
        this.showParsingResults = true;
    };
    ParseDescriptionService.prototype.resetJobKeywords = function () {
        var keywords = Object.keys(this.databaseService.categories);
        for (var i = 0; i < keywords.length; i++) {
            this.databaseService.categories[keywords[i]].jobKeywords = 0;
        }
    };
    ParseDescriptionService.prototype.createOrderedArray = function () {
        var keywords = Object.keys(this.databaseService.categories);
        var keywordsArray = [];
        for (var i = 0; i < keywords.length; i++) {
            this.databaseService.categories[keywords[i]].keyword = keywords[i];
            keywordsArray.push(this.databaseService.categories[keywords[i]]);
        }
        function quicksortByJobKeywords(arr, left, right) {
            if (left < right) {
                var divider = divide(arr, left, right);
                quicksortByJobKeywords(arr, left, divider - 1);
                quicksortByJobKeywords(arr, divider + 1, right);
            }
            return arr;
        }
        function divide(arr, left, right) {
            var dividerIndex = left;
            var pivot = right;
            for (var i = left; i < right; i++) {
                if (arr[i].jobKeywords > arr[pivot].jobKeywords) {
                    swap(arr, i, dividerIndex);
                    dividerIndex++;
                }
            }
            swap(arr, pivot, dividerIndex);
            return dividerIndex;
        }
        function swap(arr, a, b) {
            var temp = arr[a];
            arr[a] = arr[b];
            arr[b] = temp;
        }
        quicksortByJobKeywords(keywordsArray, 0, keywordsArray.length - 1);
        var statusMessage = 'Finished parsing the description. The category with the most keywords in this job description is: ' + keywordsArray[0].keyword + ' with ' + keywordsArray[0].jobKeywords + ' keywords.';
        this.statusMessageService.newStatusMessage(statusMessage, 'success');
        return keywordsArray;
    };
    ParseDescriptionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"], _status_message_service__WEBPACK_IMPORTED_MODULE_2__["StatusMessageService"]])
    ], ParseDescriptionService);
    return ParseDescriptionService;
}());



/***/ }),

/***/ "./src/app/services/status-message.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/status-message.service.ts ***!
  \****************************************************/
/*! exports provided: StatusMessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusMessageService", function() { return StatusMessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StatusMessageService = /** @class */ (function () {
    function StatusMessageService() {
        this.statusMessageStream = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](undefined);
    }
    StatusMessageService.prototype.getStatusMessageStream = function () {
        return this.statusMessageStream.asObservable();
    };
    StatusMessageService.prototype.newStatusMessage = function (status, cssClass) {
        this.statusMessageStream.next({
            status: status,
            cssClass: cssClass
        });
    };
    StatusMessageService.prototype.clearStatus = function () {
        this.statusMessageStream.next({
            status: '',
            cssClass: ''
        });
    };
    StatusMessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], StatusMessageService);
    return StatusMessageService;
}());



/***/ }),

/***/ "./src/app/status-message/status-message.component.css":
/*!*************************************************************!*\
  !*** ./src/app/status-message/status-message.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#status {\r\n    width:100%;\r\n    max-width:38em;\r\n    padding: 0px 15px;\r\n    border:1px solid #c9c9c9;\r\n    text-align:left;\r\n    color:#c9c9c9;\r\n    border-radius:3px;\r\n    margin:20px 0 0 -13px;\r\n    background-color: rgba(200,200,200,.3);\r\n    position: fixed;\r\n    bottom: 0px;\r\n    box-sizing: border-box;\r\n}\r\n\r\n#status.success {\r\n    color:green;\r\n    border-color:green;\r\n    background-color:#9bca9b;\r\n}\r\n\r\n#status.error {\r\n    color: #c14242;\r\n    border-color: #b54242;\r\n    background-color: #5a2c2c;\r\n}\r\n\r\n#status.primary {\r\n    color: #8fcef3;\r\n    border-color: #596c77;\r\n    background-color: #596c77;\r\n}\r\n\r\n#status.warning {\r\n    color: #856404;\r\n    background-color: #fff3cd;\r\n    border-color: #ffeeba;\r\n}\r\n"

/***/ }),

/***/ "./src/app/status-message/status-message.component.html":
/*!**************************************************************!*\
  !*** ./src/app/status-message/status-message.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"status\" *ngIf=\"statusMessage !== ''\" [ngClass]=\"statusClass\">\n<p>\n  {{statusMessage}}\n</p>\n</div>"

/***/ }),

/***/ "./src/app/status-message/status-message.component.ts":
/*!************************************************************!*\
  !*** ./src/app/status-message/status-message.component.ts ***!
  \************************************************************/
/*! exports provided: StatusMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusMessageComponent", function() { return StatusMessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_status_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/status-message.service */ "./src/app/services/status-message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StatusMessageComponent = /** @class */ (function () {
    function StatusMessageComponent(statusMessageService) {
        this.statusMessageService = statusMessageService;
        this.statusMessage = "";
        this.statusClass = "primary";
    }
    StatusMessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        var statusObservable = this.statusMessageService.getStatusMessageStream();
        statusObservable.subscribe(function (d) {
            if (d !== undefined) {
                _this.statusMessage = d.status;
                _this.statusClass = d.cssClass;
            }
        });
    };
    StatusMessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-status-message',
            template: __webpack_require__(/*! ./status-message.component.html */ "./src/app/status-message/status-message.component.html"),
            styles: [__webpack_require__(/*! ./status-message.component.css */ "./src/app/status-message/status-message.component.css")]
        }),
        __metadata("design:paramtypes", [_services_status_message_service__WEBPACK_IMPORTED_MODULE_1__["StatusMessageService"]])
    ], StatusMessageComponent);
    return StatusMessageComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\mcheah\cover-letter-snippets\snippets\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map