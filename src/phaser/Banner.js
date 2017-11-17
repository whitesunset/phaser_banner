'use strict';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Boot_1 = require("./states/Boot");
var Main_1 = require("./states/Main");
var Banner = (function (_super) {
    __extends(Banner, _super);
    function Banner() {
        var _this = this;
        var APP_WIDTH = document.body.clientWidth;
        var APP_HEIGHT = document.body.clientHeight;
        _this = _super.call(this, {
            width: APP_WIDTH,
            height: APP_HEIGHT,
            renderer: Phaser.AUTO,
            parent: 'app',
            forceSetTimeOut: true
        }) || this;
        _this.state.add('Boot', Boot_1.Boot, false);
        _this.state.add('Main', Main_1.Main, false);
        _this.state.start('Boot');
        return _this;
    }
    return Banner;
}(Phaser.Game));
exports.Banner = Banner;
