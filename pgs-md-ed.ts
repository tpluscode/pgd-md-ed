/// <reference path="./bower_components/polymer-ts/polymer-ts.d.ts" />

@component('pgs-md-ed')
class PgsMdEd extends polymer.Base {

    @property()
    markdown: String;
}

PgsMdEd.register();