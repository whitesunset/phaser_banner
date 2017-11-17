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
var Const_1 = require("./../Const");
var slider_offset_x = 50;
var slider_offset_y = 130;
var slider_width = 390;
var slider_height = 290;
var slider = {
    woman: [
        {
            image: 'woman_0',
            text: 'Скидки до 50%',
            sub_text: 'по промокоду'
        },
        {
            image: 'woman_1',
            text: 'До 50% на товары',
            sub_text: 'раздела распродажа'
        },
        {
            image: 'woman_2',
            text: 'Скидки до 50%',
            sub_text: 'на премиальные коллекции'
        },
    ],
    man: [
        {
            image: 'man_0',
            text: 'Скидки до 50%',
            sub_text: 'по промокоду'
        },
        {
            image: 'man_1',
            text: 'Скидки до 60%',
            sub_text: 'на спортивные коллекции'
        },
        {
            image: 'man_2',
            text: 'Зимняя обувь',
            sub_text: 'на смену кроссовкам'
        },
    ],
    kid: [
        {
            image: 'kid_0',
            text: 'Скидки до 70%',
            sub_text: 'на товары для девочек'
        },
        {
            image: 'kid_1',
            text: 'Скидки до 70%',
            sub_text: 'на товары для мальчиков'
        },
        {
            image: 'kid_2',
            text: 'Важное дополнение',
            sub_text: 'согревающие аксессуары'
        },
    ]
};
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.menu = {};
        _this.active_menu = 'woman';
        _this.active_slide = 0;
        return _this;
    }
    Main.prototype.preload = function () {
        this.initHeader();
        this.initLogo();
        this.initCloseButton();
        this.initMenu();
        this.initCallToActionIcon();
        this.initCallToActionText();
        this.initCallToActionButton();
        this.initSliderGroup();
        this.initSlider();
    };
    Main.prototype.create = function () {
    };
    Main.prototype.update = function () {
    };
    Main.prototype.initHeader = function () {
        var header = this.game.add.image(0, 0, 'header-shadow');
        header.width = this.game.width;
        header.height = 123;
    };
    Main.prototype.initLogo = function () {
        var x = this.game.width - 300;
        var y = 55;
        var logo = this.game.add.sprite(x, y, 'sprite', 'logo');
        logo.anchor.y = .5;
        logo.inputEnabled = true;
        logo.input.useHandCursor = true;
        logo.events.onInputUp.add(this.openFakeStub, this);
    };
    Main.prototype.initCloseButton = function () {
        var x = this.game.width - 10;
        var y = 10;
        var button = this.game.add.sprite(x, y, 'sprite', 'close');
        button.width = 20;
        button.height = 20;
        button.anchor.x = 1;
        button.inputEnabled = true;
        button.input.useHandCursor = true;
    };
    Main.prototype.initMenu = function () {
        var _this = this;
        var items = {
            woman: {
                x: 65,
                y: 55
            },
            man: {
                x: 225,
                y: 55
            },
            kid: {
                x: 380,
                y: 55
            }
        };
        var _loop_1 = function (key) {
            this_1.menu[key] = this_1.game.add.sprite(items[key].x, items[key].y, 'sprite', key);
            this_1.menu[key].anchor.y = .5;
            this_1.menu[key].inputEnabled = true;
            this_1.menu[key].input.useHandCursor = true;
            this_1.menu[key].events.onInputUp.add(function (sprite, pointer) {
                Object.keys(_this.menu).forEach(function (item) {
                    _this.menu[item].underline.width = 0;
                });
                _this.game.add.tween(_this.menu[key].underline)
                    .to({ width: sprite.width }, Const_1.default.TRANSITION_DURATION, Phaser.Easing.Default, true);
                _this.active_menu = key;
                _this.active_slide = 0;
                _this.initSlider();
            }, this_1);
            this_1.menu[key].underline = this_1.game.add.sprite(items[key].x, items[key].y + 20, 'sprite', 'underline');
            this_1.menu[key].underline.tint = 0x000000;
            this_1.menu[key].underline.width = key == 'woman' ? this_1.menu[key].width : 0;
        };
        var this_1 = this;
        for (var key in items) {
            _loop_1(key);
        }
    };
    Main.prototype.initCallToActionIcon = function () {
        var x = this.game.width - 230;
        var y = 180;
        var icon = this.game.add.sprite(x, y, 'sprite', 'gift');
        icon.anchor.x = .5;
        icon.anchor.y = .5;
        icon.angle = 20;
        var tween0 = this.game.add.tween(icon)
            .to({ angle: -20 }, 500, Phaser.Easing.Sinusoidal.In, false, 0, -1, true);
        tween0.start();
    };
    Main.prototype.initCallToActionText = function () {
        var x = this.game.width - 50;
        var y = 250;
        var text = this.game.add.text(x, y, Const_1.default.MAIN_TEXT);
        text.fontSize = 30;
        text.font = 'Proxima Nova';
        text.wordWrapWidth = 360;
        text.wordWrap = true;
        text.align = 'center';
        text.anchor.x = 1;
    };
    Main.prototype.initCallToActionButton = function () {
        var x = this.game.width - 23;
        var y = 417;
        var button = this.game.add.button(x, y, 'sprite', this.openFakeStub, this, 'button-hover', 'button-default');
        button.anchor.x = 1;
    };
    Main.prototype.initSliderGroup = function () {
        var slider_shadow_group = this.game.add.group();
        var slider_shadow = this.game.add.graphics(slider_offset_x - 1, slider_offset_y - 1, slider_shadow_group);
        slider_shadow.beginFill(0xCCCCCC);
        slider_shadow.drawRect(0, 0, slider_width + 2, slider_height + 2);
        slider_shadow.endFill();
        var slider_background = this.game.add.graphics(slider_offset_x, slider_offset_y, slider_shadow_group);
        slider_background.beginFill(0xFFFFFF);
        slider_background.drawRect(0, 0, slider_width, slider_height);
        slider_background.endFill();
        this.slider_group = this.game.add.group();
    };
    Main.prototype.initSlider = function () {
        this.slider_group.x = slider_offset_x;
        this.slider_group.y = slider_offset_y;
        var items = slider[this.active_menu].slice(0, 2);
        items.unshift(slider[this.active_menu][slider[this.active_menu].length - 1]);
        this.sliderBuild(items);
        if (!this.slider_progress) {
            this.slider_progress = this.game.add.sprite(slider_offset_x, slider_offset_y + slider_height - 4, 'sprite', 'underline');
            this.slider_progress.tint = 0xFF0000;
            this.slider_progress.width = 0;
        }
        if (this.slider_progress_tween) {
            this.slider_progress.width = 0;
            this.slider_progress_tween.stop();
        }
        this.slider_progress_tween = this.game.add.tween(this.slider_progress)
            .to({ width: slider_width }, Const_1.default.SLIDE_DURATION, Phaser.Easing.Default, true);
        clearInterval(this.slider_autoslide_interval);
        clearTimeout(this.slider_rebuild_timeout);
        this.slider_autoslide_interval = setInterval(this.nextSlide.bind(this), Const_1.default.SLIDE_DURATION);
        this.initSliderMask();
        this.initSliderArrows();
        this.initSliderDots();
    };
    Main.prototype.initSliderMask = function () {
        if (this.slider_group.mask)
            return;
        var crop = this.game.add.graphics(slider_offset_x, slider_offset_y);
        crop.beginFill(0xffffff);
        crop.drawRect(0, 0, slider_width, slider_height);
        crop.endFill();
        this.slider_group.mask = crop;
    };
    Main.prototype.initSliderArrows = function () {
        var _this = this;
        var arrow_prev = this.game.add.sprite(15, slider_offset_y + slider_height / 2, 'sprite', 'arrow');
        arrow_prev.anchor.x = 1;
        arrow_prev.anchor.y = .5;
        arrow_prev.scale.x = -1;
        arrow_prev.inputEnabled = true;
        arrow_prev.input.useHandCursor = true;
        arrow_prev.events.onInputUp.add(function (sprite, pointer) {
            _this.prevSlide();
        }, this);
        var arrow_next = this.game.add.sprite(slider_offset_x + slider_width + 15, slider_offset_y + slider_height / 2, 'sprite', 'arrow');
        arrow_next.anchor.y = .5;
        arrow_next.inputEnabled = true;
        arrow_next.input.useHandCursor = true;
        arrow_next.events.onInputUp.add(function (sprite, pointer) {
            _this.nextSlide();
        }, this);
    };
    Main.prototype.initSliderDots = function () {
        var offset = 65;
        this.slider_dots_group = this.game.add.group();
        this.slider_dots_group.x = slider_offset_x + 120;
        this.slider_dots_group.y = slider_offset_y + slider_height + 25;
        for (var i = 0; i < 3; i++) {
            var dot = this.game.add.sprite(offset * i, 0, 'sprite', 'dot');
            dot.tint = i == 0 ? Const_1.default.ACTIVE_DOT_COLOR : Const_1.default.DOT_COLOR;
            this.slider_dots_group.add(dot);
        }
    };
    Main.prototype.handleSliderDots = function () {
        this.slider_dots_group.forEach(function (dot) {
            dot.tint = Const_1.default.DOT_COLOR;
        }, this);
        this.slider_dots_group.getChildAt(this.active_slide)['tint'] = Const_1.default.ACTIVE_DOT_COLOR;
    };
    Main.prototype.prevSlide = function () {
        this.active_slide--;
        this.active_slide = this.active_slide < 0 ? slider[this.active_menu].length - 1 : this.active_slide;
        this.handleSliderDots();
        this.sliderProgressRestart();
        clearInterval(this.slider_autoslide_interval);
        this.slider_autoslide_interval = setInterval(this.nextSlide.bind(this), Const_1.default.SLIDE_DURATION);
        var current_slide_image = this.slider_group.getChildAt(3);
        var current_slide_text = this.slider_group.getChildAt(4);
        var current_slide_sub_text = this.slider_group.getChildAt(5);
        var prev_slide_image = this.slider_group.getChildAt(0);
        var prev_slide_text = this.slider_group.getChildAt(1);
        var prev_slide_sub_text = this.slider_group.getChildAt(2);
        current_slide_image['tweens'] = current_slide_image['tweens'] || {};
        current_slide_text['tweens'] = current_slide_text['tweens'] || {};
        current_slide_sub_text['tweens'] = current_slide_sub_text['tweens'] || {};
        prev_slide_image['tweens'] = prev_slide_image['tweens'] || {};
        prev_slide_text['tweens'] = prev_slide_text['tweens'] || {};
        prev_slide_sub_text['tweens'] = prev_slide_sub_text['tweens'] || {};
        if (current_slide_image['tweens'].move)
            current_slide_image['tweens'].move.stop();
        if (current_slide_text['tweens'].move)
            current_slide_text['tweens'].move.stop();
        if (current_slide_sub_text['tweens'].move)
            current_slide_sub_text['tweens'].move.stop();
        if (prev_slide_image['tweens'].move)
            prev_slide_image['tweens'].move.stop();
        if (prev_slide_text['tweens'].move)
            prev_slide_text['tweens'].move.stop();
        if (prev_slide_sub_text['tweens'].move)
            prev_slide_sub_text['tweens'].move.stop();
        current_slide_image['tweens'].move = this.game.add.tween(current_slide_image)
            .to({ x: current_slide_image.x + slider_width }, Const_1.default.SLIDE_TRANSITION_DURATION, Phaser.Easing.Default, true);
        current_slide_text['tweens'].move = this.game.add.tween(current_slide_text)
            .to({ x: current_slide_image.x + slider_width }, Const_1.default.SLIDE_TRANSITION_DURATION, Phaser.Easing.Default, true);
        current_slide_sub_text['tweens'].move = this.game.add.tween(current_slide_sub_text)
            .to({ x: current_slide_image.x + slider_width }, Const_1.default.SLIDE_TRANSITION_DURATION, Phaser.Easing.Default, true);
        prev_slide_image['tweens'].move = this.game.add.tween(prev_slide_image)
            .to({ x: prev_slide_image.x + slider_width }, Const_1.default.SLIDE_TRANSITION_DURATION, Phaser.Easing.Default, true);
        prev_slide_text['tweens'].move = this.game.add.tween(prev_slide_text)
            .to({ x: prev_slide_text.x + slider_width }, Const_1.default.SLIDE_TRANSITION_DURATION, Phaser.Easing.Default, true);
        prev_slide_sub_text['tweens'].move = this.game.add.tween(prev_slide_sub_text)
            .to({ x: prev_slide_sub_text.x + slider_width }, Const_1.default.SLIDE_TRANSITION_DURATION, Phaser.Easing.Default, true);
        clearTimeout(this.slider_rebuild_timeout);
        this.slider_rebuild_timeout = setTimeout(this.sliderRebuild.bind(this), Const_1.default.SLIDE_TRANSITION_DURATION);
    };
    Main.prototype.nextSlide = function () {
        this.active_slide++;
        this.active_slide = this.active_slide == slider[this.active_menu].length ? 0 : this.active_slide;
        this.handleSliderDots();
        this.sliderProgressRestart();
        clearInterval(this.slider_autoslide_interval);
        this.slider_autoslide_interval = setInterval(this.nextSlide.bind(this), Const_1.default.SLIDE_DURATION);
        var current_slide_image = this.slider_group.getChildAt(3);
        var current_slide_text = this.slider_group.getChildAt(4);
        var current_slide_sub_text = this.slider_group.getChildAt(5);
        var next_slide_image = this.slider_group.getChildAt(6);
        var next_slide_text = this.slider_group.getChildAt(7);
        var next_slide_sub_text = this.slider_group.getChildAt(8);
        current_slide_image['tweens'] = current_slide_image['tweens'] || {};
        current_slide_text['tweens'] = current_slide_text['tweens'] || {};
        current_slide_sub_text['tweens'] = current_slide_sub_text['tweens'] || {};
        next_slide_image['tweens'] = next_slide_image['tweens'] || {};
        next_slide_text['tweens'] = next_slide_text['tweens'] || {};
        next_slide_sub_text['tweens'] = next_slide_sub_text['tweens'] || {};
        if (current_slide_image['tweens'].move)
            current_slide_image['tweens'].move.stop();
        if (current_slide_text['tweens'].move)
            current_slide_text['tweens'].move.stop();
        if (current_slide_sub_text['tweens'].move)
            current_slide_sub_text['tweens'].move.stop();
        if (next_slide_image['tweens'].move)
            next_slide_image['tweens'].move.stop();
        if (next_slide_text['tweens'].move)
            next_slide_text['tweens'].move.stop();
        if (next_slide_sub_text['tweens'].move)
            next_slide_sub_text['tweens'].move.stop();
        current_slide_image['tweens'].move = this.game.add.tween(current_slide_image)
            .to({ x: current_slide_image.x - slider_width }, Const_1.default.SLIDE_TRANSITION_DURATION, Phaser.Easing.Default, true);
        current_slide_text['tweens'].move = this.game.add.tween(current_slide_text)
            .to({ x: current_slide_image.x - slider_width }, Const_1.default.SLIDE_TRANSITION_DURATION, Phaser.Easing.Default, true);
        current_slide_sub_text['tweens'].move = this.game.add.tween(current_slide_sub_text)
            .to({ x: current_slide_image.x - slider_width }, Const_1.default.SLIDE_TRANSITION_DURATION, Phaser.Easing.Default, true);
        next_slide_image['tweens'].move = this.game.add.tween(next_slide_image)
            .to({ x: next_slide_image.x - slider_width }, Const_1.default.SLIDE_TRANSITION_DURATION, Phaser.Easing.Default, true);
        next_slide_text['tweens'].move = this.game.add.tween(next_slide_text)
            .to({ x: next_slide_text.x - slider_width }, Const_1.default.SLIDE_TRANSITION_DURATION, Phaser.Easing.Default, true);
        next_slide_sub_text['tweens'].move = this.game.add.tween(next_slide_sub_text)
            .to({ x: next_slide_sub_text.x - slider_width }, Const_1.default.SLIDE_TRANSITION_DURATION, Phaser.Easing.Default, true);
        clearTimeout(this.slider_rebuild_timeout);
        this.slider_rebuild_timeout = setTimeout(this.sliderRebuild.bind(this), Const_1.default.SLIDE_TRANSITION_DURATION);
    };
    Main.prototype.sliderBuild = function (items) {
        var _this = this;
        this.slider_group.removeAll(true);
        items.forEach(function (item, j) {
            var image = _this.game.add.image(0, 0, item.image);
            var x = j * image.width - image.width;
            image.x = x;
            _this.slider_group.add(image);
            var text = _this.game.add.text(x + 20, 200, item.text);
            text.fill = '#ef3f30';
            text.fontSize = 30;
            text.font = 'Proxima Nova';
            _this.slider_group.add(text);
            var sub_text = _this.game.add.text(x + 20, 245, item.sub_text);
            sub_text.fontSize = 20;
            sub_text.font = 'Proxima Nova';
            _this.slider_group.add(sub_text);
        });
    };
    Main.prototype.sliderRebuild = function () {
        var items = [];
        var prev_index = this.active_slide - 1 < 0 ? slider[this.active_menu].length - 1 : this.active_slide - 1;
        var prev_slide = slider[this.active_menu][prev_index];
        var current_index = this.active_slide;
        var current_slide = slider[this.active_menu][current_index];
        var next_index = this.active_slide + 1 == slider[this.active_menu].length ? 0 : this.active_slide + 1;
        var next_slide = slider[this.active_menu][next_index];
        items.push(prev_slide);
        items.push(current_slide);
        items.push(next_slide);
        this.sliderBuild(items);
    };
    Main.prototype.sliderProgressRestart = function () {
        this.slider_progress_tween.stop();
        this.slider_progress.width = 0;
        this.slider_progress_tween = this.game.add.tween(this.slider_progress)
            .to({ width: slider_width }, Const_1.default.SLIDE_DURATION, Phaser.Easing.Default, true);
    };
    Main.prototype.openFakeStub = function () {
        var tab = window.open(Const_1.default.TARGET_URL, '_blank');
        tab.focus();
    };
    return Main;
}(Phaser.State));
exports.Main = Main;
