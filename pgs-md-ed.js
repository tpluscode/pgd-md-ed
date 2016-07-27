/// <reference path="./bower_components/polymer-ts/polymer-ts.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var PgsMdEd = (function (_super) {
    __extends(PgsMdEd, _super);
    function PgsMdEd() {
        _super.apply(this, arguments);
    }
    __decorate([
        property()
    ], PgsMdEd.prototype, "markdown");
    __decorate([
        property()
    ], PgsMdEd.prototype, "editorShown");
    PgsMdEd = __decorate([
        /// <reference path="./bower_components/polymer-ts/polymer-ts.d.ts" />
        component('pgs-md-ed')
    ], PgsMdEd);
    return PgsMdEd;
}(polymer.Base));
PgsMdEd.register();
//# sourceMappingURL=pgs-md-ed.js.map