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
var Boot = (function (_super) {
    __extends(Boot, _super);
    function Boot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Boot.prototype.preload = function () {
        var _this = this;
        this.stage.disableVisibilityChange = true;
        this.stage.backgroundColor = '#f5f5f5';
        this.game.load.image('header-shadow', 'assets/images/header-shadow.png');
        this.game.load.image('man_0', 'assets/images/man_0.jpg');
        this.game.load.image('man_1', 'assets/images/man_1.jpg');
        this.game.load.image('man_2', 'assets/images/man_2.jpg');
        this.game.load.image('woman_0', 'assets/images/woman_0.jpg');
        this.game.load.image('woman_1', 'assets/images/woman_1.jpg');
        this.game.load.image('woman_2', 'assets/images/woman_2.jpg');
        this.game.load.image('kid_0', 'assets/images/kid_0.jpg');
        this.game.load.image('kid_1', 'assets/images/kid_1.jpg');
        this.game.load.image('kid_2', 'assets/images/kid_2.jpg');
        this.game.load.atlasXML('sprite', 'assets/images/atlas.png', 'assets/images/atlas.xml');
        this.game.scale.setResizeCallback(function (scale, parentBounds) {
            _this.game.width = parentBounds.width;
            _this.game.height = parentBounds.height;
        }, this);
        // Preload font
        var text = this.game.add.text(-1000, -1000, '1й');
        text.font = 'Proxima Nova';
    };
    Boot.prototype.create = function () {
        this.game.state.start('Main');
    };
    return Boot;
}(Phaser.State));
exports.Boot = Boot;
