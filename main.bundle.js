webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__taskslist_taskslist_component__ = __webpack_require__("./src/app/taskslist/taskslist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__openedtask_openedtask_component__ = __webpack_require__("./src/app/openedtask/openedtask.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__taskslist_taskslist_component__["a" /* TaskslistComponent */] },
    { path: ':id', component: __WEBPACK_IMPORTED_MODULE_3__openedtask_openedtask_component__["a" /* OpenedtaskComponent */] },
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "h1{\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    color: darkslategray;\r\n}\r\n\r\n.container{\r\n    min-width: 400px;\r\n    max-width: 900px;\r\n    margin: 0 auto;\r\n    height: 100%;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>\n    Tasks\n  </h1>\n\n<router-outlet></router-outlet>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tasks_service__ = __webpack_require__("./src/app/tasks.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(tasksService) {
        this.tasksService = tasksService;
        this.title = 'app';
        this.tasksService.getTasks();
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__tasks_service__["a" /* TasksService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__taskslist_taskslist_component__ = __webpack_require__("./src/app/taskslist/taskslist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__openedtask_openedtask_component__ = __webpack_require__("./src/app/openedtask/openedtask.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tasks_service__ = __webpack_require__("./src/app/tasks.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__taskslist_taskslist_component__["a" /* TaskslistComponent */],
                __WEBPACK_IMPORTED_MODULE_7__openedtask_openedtask_component__["a" /* OpenedtaskComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["c" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["d" /* MatInputModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__tasks_service__["a" /* TasksService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/openedtask/openedtask.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.form-add-comment{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: start;\r\n        -ms-flex-align: start;\r\n            align-items: flex-start;\r\n}\r\n\r\n.form-add-comment button{\r\n    margin-left: 10px;\r\n}\r\n\r\n.form-add-comment_input{\r\n    -webkit-box-flex:1;\r\n        -ms-flex:1;\r\n            flex:1;\r\n}\r\n\r\n.comment{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n\r\n.avatar{\r\n    width: 70px;\r\n    height: 70px;\r\n    background: darkorange;\r\n    margin: 5px;\r\n}\r\n\r\n.comment-content{\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n    margin-left: 10px;\r\n}\r\n\r\n.username{\r\n    font-weight: bold;\r\n}\r\n\r\n.wrap{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    height: calc(100% - 100px);\r\n}\r\n\r\n.form-container{\r\n    height: 100px;\r\n}\r\n\r\n.comments-container{\r\n    overflow: scroll;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n    overflow-x:hidden; \r\n}"

/***/ }),

/***/ "./src/app/openedtask/openedtask.component.html":
/***/ (function(module, exports) {

module.exports = "\n<button mat-raised-button routerLink=\"/\">Back</button>\n\n<div class=\"wrap\">\n  <div class=\"comments-container\" id=\"comments\">\n    <mat-card *ngFor=\"let comment of task.comments\" class=\"comment\">\n      <div class=\"avatar\"></div>\n      <div class=\"comment-content\">\n        <div class=\"username\">\n          {{comment.username}}\n        </div>\n        {{comment.text}}\n      </div>\n    </mat-card>\n  </div>\n  <div class=\"form-container\">\n    <form class=\"form-add-comment\">\n      <mat-form-field class=\"form-add-comment_input\">\n        <textarea matInput type=\"text\" name=\"comment\" [(ngModel)]=\"comment\" placeholder=\"Your comment\"></textarea>\n      </mat-form-field>\n      <button mat-raised-button (click)=\"sendComment()\" [disabled]=\"!comment\">Comment</button>\n    </form>\n  </div>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/openedtask/openedtask.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenedtaskComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tasks_service__ = __webpack_require__("./src/app/tasks.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OpenedtaskComponent = /** @class */ (function () {
    function OpenedtaskComponent(tasksService, router) {
        this.tasksService = tasksService;
        this.router = router;
    }
    OpenedtaskComponent.prototype.ngOnInit = function () {
        this.task = this.tasksService.getTaskById(this.router.url.substr(1));
        console.log(this.task.name);
    };
    OpenedtaskComponent.prototype.sendComment = function () {
        this.tasksService.addComment(this.task.id, {
            text: this.comment,
            avatar: false,
            username: 'Gap'
        });
        this.comment = '';
        setTimeout(function () {
            document.getElementById('comments').scrollTo(0, document.getElementById('comments').scrollHeight);
        }, 50);
    };
    OpenedtaskComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-openedtask',
            template: __webpack_require__("./src/app/openedtask/openedtask.component.html"),
            styles: [__webpack_require__("./src/app/openedtask/openedtask.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__tasks_service__["a" /* TasksService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], OpenedtaskComponent);
    return OpenedtaskComponent;
}());



/***/ }),

/***/ "./src/app/tasks.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_uuidjs__ = __webpack_require__("./node_modules/uuidjs/src/uuid.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_uuidjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_uuidjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TasksService = /** @class */ (function () {
    function TasksService() {
        this.tasks = [];
    }
    TasksService.prototype.saveTasks = function () {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    };
    TasksService.prototype.getTasks = function () {
        var tasks = localStorage.getItem('tasks');
        if (tasks) {
            this.tasks = JSON.parse(localStorage.getItem('tasks'));
        }
    };
    TasksService.prototype.getTaskById = function (id) {
        for (var i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].id === id) {
                return this.tasks[i];
            }
        }
        return false;
    };
    TasksService.prototype.add = function (name) {
        this.tasks.push({
            name: name,
            id: __WEBPACK_IMPORTED_MODULE_1_uuidjs__["generate"](),
            comments: []
        });
        this.saveTasks();
    };
    TasksService.prototype.delete = function (id) {
        this.tasks = this.tasks.filter(function (el) { return el.id !== id; });
        this.saveTasks();
    };
    TasksService.prototype.addComment = function (id, text) {
        for (var i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].id === id) {
                this.tasks[i].comments.push(text);
                this.saveTasks();
            }
        }
    };
    TasksService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], TasksService);
    return TasksService;
}());



/***/ }),

/***/ "./src/app/taskslist/taskslist.component.css":
/***/ (function(module, exports) {

module.exports = ".btnDel{\r\n    float: right;\r\n    width: 100px;\r\n}\r\n\r\n.task{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    cursor: pointer;\r\n}\r\n\r\n.task-name{\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n}\r\n\r\n.comments-amount{\r\n    display: inline-block;\r\n    margin-left: 10px;\r\n}\r\n\r\n.form-add-task{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.form-add-task_input{\r\n    -webkit-box-flex:1;\r\n        -ms-flex:1;\r\n            flex:1;\r\n}\r\n\r\n.form-add-task_submit{\r\n    width:100px;\r\n    margin-left: 10px;\r\n}"

/***/ }),

/***/ "./src/app/taskslist/taskslist.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"form-add-task\">\n  <mat-form-field class=\"form-add-task_input\">\n    <input matInput placeholder=\"Task name\" [(ngModel)]=\"taskName\" name=\"name\" >\n  </mat-form-field>\n  <button mat-raised-button color=\"primary\" (click)=\"addTask()\" [disabled]=\"!taskName\" class=\"form-add-task_submit\">Add new</button>\n</form>\n\n<mat-card *ngFor=\"let task of this.tasksService.tasks\" routerLink={{task.id}} class=\"task\" >\n  <span class=\"task-name\">\n    {{task.name}}\n    <mat-chip-list class=\"comments-amount\">\n      <mat-chip color=\"accent\" selected=\"true\" *ngIf=\"task.comments.length\">{{task.comments.length}}</mat-chip>\n    </mat-chip-list>\n  </span>\n  <button mat-button (click)=\"this.tasksService.delete(task.id)\">Delete</button>\n</mat-card>\n\n"

/***/ }),

/***/ "./src/app/taskslist/taskslist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskslistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tasks_service__ = __webpack_require__("./src/app/tasks.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TaskslistComponent = /** @class */ (function () {
    function TaskslistComponent(tasksService) {
        this.tasksService = tasksService;
    }
    TaskslistComponent.prototype.addTask = function () {
        this.tasksService.add(this.taskName);
        this.taskName = '';
    };
    TaskslistComponent.prototype.ngOnInit = function () {
    };
    TaskslistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-taskslist',
            template: __webpack_require__("./src/app/taskslist/taskslist.component.html"),
            styles: [__webpack_require__("./src/app/taskslist/taskslist.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__tasks_service__["a" /* TasksService */]])
    ], TaskslistComponent);
    return TaskslistComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map