/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	Object.defineProperty(exports, "__esModule", { value: true });
	var Banner_1 = __webpack_require__(1);
	document.addEventListener('DOMContentLoaded', function () {
	    new Banner_1.Banner();
	}, false);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

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
	var Boot_1 = __webpack_require__(2);
	var Main_1 = __webpack_require__(3);
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


/***/ }),
/* 2 */
/***/ (function(module, exports) {

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


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

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
	var Const_1 = __webpack_require__(4);
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


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = {
	    TRANSITION_DURATION: 150,
	    SLIDE_DURATION: 2500,
	    SLIDE_TRANSITION_DURATION: 600,
	    TARGET_URL: 'https://www.lamoda.ru/',
	    MAIN_TEXT: '10% - гарантированная скидка на первый заказ',
	    DOT_COLOR: 0xC4C5C6,
	    ACTIVE_DOT_COLOR: 0xEF3F30,
	};


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOGI4NjJhNTQ4YmM2MTg4Y2YwN2IiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9waGFzZXIvQmFubmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9waGFzZXIvc3RhdGVzL0Jvb3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BoYXNlci9zdGF0ZXMvTWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGhhc2VyL0NvbnN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBO0FBQ0EsK0NBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7Ozs7OztBQ0xEO0FBQ0E7QUFDQTtBQUNBLFdBQVUsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUNuRiwwQkFBeUIsdURBQXVEO0FBQ2hGO0FBQ0E7QUFDQSx3QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxFQUFDO0FBQ0QsK0NBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVSxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ25GLDBCQUF5Qix1REFBdUQ7QUFDaEY7QUFDQTtBQUNBLHdCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLEVBQUM7QUFDRCwr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Q0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZGlzdC9zY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOGI4NjJhNTQ4YmM2MTg4Y2YwN2IiLCIndXNlIHN0cmljdCc7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgQmFubmVyXzEgPSByZXF1aXJlKFwiLi9waGFzZXIvQmFubmVyXCIpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBuZXcgQmFubmVyXzEuQmFubmVyKCk7XG59LCBmYWxzZSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBCb290XzEgPSByZXF1aXJlKFwiLi9zdGF0ZXMvQm9vdFwiKTtcbnZhciBNYWluXzEgPSByZXF1aXJlKFwiLi9zdGF0ZXMvTWFpblwiKTtcbnZhciBCYW5uZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhCYW5uZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQmFubmVyKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgQVBQX1dJRFRIID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcbiAgICAgICAgdmFyIEFQUF9IRUlHSFQgPSBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodDtcbiAgICAgICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCB7XG4gICAgICAgICAgICB3aWR0aDogQVBQX1dJRFRILFxuICAgICAgICAgICAgaGVpZ2h0OiBBUFBfSEVJR0hULFxuICAgICAgICAgICAgcmVuZGVyZXI6IFBoYXNlci5BVVRPLFxuICAgICAgICAgICAgcGFyZW50OiAnYXBwJyxcbiAgICAgICAgICAgIGZvcmNlU2V0VGltZU91dDogdHJ1ZVxuICAgICAgICB9KSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5zdGF0ZS5hZGQoJ0Jvb3QnLCBCb290XzEuQm9vdCwgZmFsc2UpO1xuICAgICAgICBfdGhpcy5zdGF0ZS5hZGQoJ01haW4nLCBNYWluXzEuTWFpbiwgZmFsc2UpO1xuICAgICAgICBfdGhpcy5zdGF0ZS5zdGFydCgnQm9vdCcpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIHJldHVybiBCYW5uZXI7XG59KFBoYXNlci5HYW1lKSk7XG5leHBvcnRzLkJhbm5lciA9IEJhbm5lcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3BoYXNlci9CYW5uZXIuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgQm9vdCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEJvb3QsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQm9vdCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBCb290LnByb3RvdHlwZS5wcmVsb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnN0YWdlLmRpc2FibGVWaXNpYmlsaXR5Q2hhbmdlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zdGFnZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2Y1ZjVmNSc7XG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCdoZWFkZXItc2hhZG93JywgJ2Fzc2V0cy9pbWFnZXMvaGVhZGVyLXNoYWRvdy5wbmcnKTtcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ21hbl8wJywgJ2Fzc2V0cy9pbWFnZXMvbWFuXzAuanBnJyk7XG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCdtYW5fMScsICdhc3NldHMvaW1hZ2VzL21hbl8xLmpwZycpO1xuICAgICAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgnbWFuXzInLCAnYXNzZXRzL2ltYWdlcy9tYW5fMi5qcGcnKTtcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ3dvbWFuXzAnLCAnYXNzZXRzL2ltYWdlcy93b21hbl8wLmpwZycpO1xuICAgICAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgnd29tYW5fMScsICdhc3NldHMvaW1hZ2VzL3dvbWFuXzEuanBnJyk7XG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCd3b21hbl8yJywgJ2Fzc2V0cy9pbWFnZXMvd29tYW5fMi5qcGcnKTtcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ2tpZF8wJywgJ2Fzc2V0cy9pbWFnZXMva2lkXzAuanBnJyk7XG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCdraWRfMScsICdhc3NldHMvaW1hZ2VzL2tpZF8xLmpwZycpO1xuICAgICAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgna2lkXzInLCAnYXNzZXRzL2ltYWdlcy9raWRfMi5qcGcnKTtcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQuYXRsYXNYTUwoJ3Nwcml0ZScsICdhc3NldHMvaW1hZ2VzL2F0bGFzLnBuZycsICdhc3NldHMvaW1hZ2VzL2F0bGFzLnhtbCcpO1xuICAgICAgICB0aGlzLmdhbWUuc2NhbGUuc2V0UmVzaXplQ2FsbGJhY2soZnVuY3Rpb24gKHNjYWxlLCBwYXJlbnRCb3VuZHMpIHtcbiAgICAgICAgICAgIF90aGlzLmdhbWUud2lkdGggPSBwYXJlbnRCb3VuZHMud2lkdGg7XG4gICAgICAgICAgICBfdGhpcy5nYW1lLmhlaWdodCA9IHBhcmVudEJvdW5kcy5oZWlnaHQ7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgICAvLyBQcmVsb2FkIGZvbnRcbiAgICAgICAgdmFyIHRleHQgPSB0aGlzLmdhbWUuYWRkLnRleHQoLTEwMDAsIC0xMDAwLCAnMdC5Jyk7XG4gICAgICAgIHRleHQuZm9udCA9ICdQcm94aW1hIE5vdmEnO1xuICAgIH07XG4gICAgQm9vdC5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmdhbWUuc3RhdGUuc3RhcnQoJ01haW4nKTtcbiAgICB9O1xuICAgIHJldHVybiBCb290O1xufShQaGFzZXIuU3RhdGUpKTtcbmV4cG9ydHMuQm9vdCA9IEJvb3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9waGFzZXIvc3RhdGVzL0Jvb3QuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgQ29uc3RfMSA9IHJlcXVpcmUoXCIuLy4uL0NvbnN0XCIpO1xudmFyIHNsaWRlcl9vZmZzZXRfeCA9IDUwO1xudmFyIHNsaWRlcl9vZmZzZXRfeSA9IDEzMDtcbnZhciBzbGlkZXJfd2lkdGggPSAzOTA7XG52YXIgc2xpZGVyX2hlaWdodCA9IDI5MDtcbnZhciBzbGlkZXIgPSB7XG4gICAgd29tYW46IFtcbiAgICAgICAge1xuICAgICAgICAgICAgaW1hZ2U6ICd3b21hbl8wJyxcbiAgICAgICAgICAgIHRleHQ6ICfQodC60LjQtNC60Lgg0LTQviA1MCUnLFxuICAgICAgICAgICAgc3ViX3RleHQ6ICfQv9C+INC/0YDQvtC80L7QutC+0LTRgydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaW1hZ2U6ICd3b21hbl8xJyxcbiAgICAgICAgICAgIHRleHQ6ICfQlNC+IDUwJSDQvdCwINGC0L7QstCw0YDRiycsXG4gICAgICAgICAgICBzdWJfdGV4dDogJ9GA0LDQt9C00LXQu9CwINGA0LDRgdC/0YDQvtC00LDQttCwJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpbWFnZTogJ3dvbWFuXzInLFxuICAgICAgICAgICAgdGV4dDogJ9Ch0LrQuNC00LrQuCDQtNC+IDUwJScsXG4gICAgICAgICAgICBzdWJfdGV4dDogJ9C90LAg0L/RgNC10LzQuNCw0LvRjNC90YvQtSDQutC+0LvQu9C10LrRhtC40LgnXG4gICAgICAgIH0sXG4gICAgXSxcbiAgICBtYW46IFtcbiAgICAgICAge1xuICAgICAgICAgICAgaW1hZ2U6ICdtYW5fMCcsXG4gICAgICAgICAgICB0ZXh0OiAn0KHQutC40LTQutC4INC00L4gNTAlJyxcbiAgICAgICAgICAgIHN1Yl90ZXh0OiAn0L/QviDQv9GA0L7QvNC+0LrQvtC00YMnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGltYWdlOiAnbWFuXzEnLFxuICAgICAgICAgICAgdGV4dDogJ9Ch0LrQuNC00LrQuCDQtNC+IDYwJScsXG4gICAgICAgICAgICBzdWJfdGV4dDogJ9C90LAg0YHQv9C+0YDRgtC40LLQvdGL0LUg0LrQvtC70LvQtdC60YbQuNC4J1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpbWFnZTogJ21hbl8yJyxcbiAgICAgICAgICAgIHRleHQ6ICfQl9C40LzQvdGP0Y8g0L7QsdGD0LLRjCcsXG4gICAgICAgICAgICBzdWJfdGV4dDogJ9C90LAg0YHQvNC10L3RgyDQutGA0L7RgdGB0L7QstC60LDQvCdcbiAgICAgICAgfSxcbiAgICBdLFxuICAgIGtpZDogW1xuICAgICAgICB7XG4gICAgICAgICAgICBpbWFnZTogJ2tpZF8wJyxcbiAgICAgICAgICAgIHRleHQ6ICfQodC60LjQtNC60Lgg0LTQviA3MCUnLFxuICAgICAgICAgICAgc3ViX3RleHQ6ICfQvdCwINGC0L7QstCw0YDRiyDQtNC70Y8g0LTQtdCy0L7Rh9C10LonXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGltYWdlOiAna2lkXzEnLFxuICAgICAgICAgICAgdGV4dDogJ9Ch0LrQuNC00LrQuCDQtNC+IDcwJScsXG4gICAgICAgICAgICBzdWJfdGV4dDogJ9C90LAg0YLQvtCy0LDRgNGLINC00LvRjyDQvNCw0LvRjNGH0LjQutC+0LInXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGltYWdlOiAna2lkXzInLFxuICAgICAgICAgICAgdGV4dDogJ9CS0LDQttC90L7QtSDQtNC+0L/QvtC70L3QtdC90LjQtScsXG4gICAgICAgICAgICBzdWJfdGV4dDogJ9GB0L7Qs9GA0LXQstCw0Y7RidC40LUg0LDQutGB0LXRgdGB0YPQsNGA0YsnXG4gICAgICAgIH0sXG4gICAgXVxufTtcbnZhciBNYWluID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTWFpbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNYWluKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMubWVudSA9IHt9O1xuICAgICAgICBfdGhpcy5hY3RpdmVfbWVudSA9ICd3b21hbic7XG4gICAgICAgIF90aGlzLmFjdGl2ZV9zbGlkZSA9IDA7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgTWFpbi5wcm90b3R5cGUucHJlbG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pbml0SGVhZGVyKCk7XG4gICAgICAgIHRoaXMuaW5pdExvZ28oKTtcbiAgICAgICAgdGhpcy5pbml0Q2xvc2VCdXR0b24oKTtcbiAgICAgICAgdGhpcy5pbml0TWVudSgpO1xuICAgICAgICB0aGlzLmluaXRDYWxsVG9BY3Rpb25JY29uKCk7XG4gICAgICAgIHRoaXMuaW5pdENhbGxUb0FjdGlvblRleHQoKTtcbiAgICAgICAgdGhpcy5pbml0Q2FsbFRvQWN0aW9uQnV0dG9uKCk7XG4gICAgICAgIHRoaXMuaW5pdFNsaWRlckdyb3VwKCk7XG4gICAgICAgIHRoaXMuaW5pdFNsaWRlcigpO1xuICAgIH07XG4gICAgTWFpbi5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24gKCkge1xuICAgIH07XG4gICAgTWFpbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgIH07XG4gICAgTWFpbi5wcm90b3R5cGUuaW5pdEhlYWRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGhlYWRlciA9IHRoaXMuZ2FtZS5hZGQuaW1hZ2UoMCwgMCwgJ2hlYWRlci1zaGFkb3cnKTtcbiAgICAgICAgaGVhZGVyLndpZHRoID0gdGhpcy5nYW1lLndpZHRoO1xuICAgICAgICBoZWFkZXIuaGVpZ2h0ID0gMTIzO1xuICAgIH07XG4gICAgTWFpbi5wcm90b3R5cGUuaW5pdExvZ28gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB4ID0gdGhpcy5nYW1lLndpZHRoIC0gMzAwO1xuICAgICAgICB2YXIgeSA9IDU1O1xuICAgICAgICB2YXIgbG9nbyA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKHgsIHksICdzcHJpdGUnLCAnbG9nbycpO1xuICAgICAgICBsb2dvLmFuY2hvci55ID0gLjU7XG4gICAgICAgIGxvZ28uaW5wdXRFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgbG9nby5pbnB1dC51c2VIYW5kQ3Vyc29yID0gdHJ1ZTtcbiAgICAgICAgbG9nby5ldmVudHMub25JbnB1dFVwLmFkZCh0aGlzLm9wZW5GYWtlU3R1YiwgdGhpcyk7XG4gICAgfTtcbiAgICBNYWluLnByb3RvdHlwZS5pbml0Q2xvc2VCdXR0b24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB4ID0gdGhpcy5nYW1lLndpZHRoIC0gMTA7XG4gICAgICAgIHZhciB5ID0gMTA7XG4gICAgICAgIHZhciBidXR0b24gPSB0aGlzLmdhbWUuYWRkLnNwcml0ZSh4LCB5LCAnc3ByaXRlJywgJ2Nsb3NlJyk7XG4gICAgICAgIGJ1dHRvbi53aWR0aCA9IDIwO1xuICAgICAgICBidXR0b24uaGVpZ2h0ID0gMjA7XG4gICAgICAgIGJ1dHRvbi5hbmNob3IueCA9IDE7XG4gICAgICAgIGJ1dHRvbi5pbnB1dEVuYWJsZWQgPSB0cnVlO1xuICAgICAgICBidXR0b24uaW5wdXQudXNlSGFuZEN1cnNvciA9IHRydWU7XG4gICAgfTtcbiAgICBNYWluLnByb3RvdHlwZS5pbml0TWVudSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGl0ZW1zID0ge1xuICAgICAgICAgICAgd29tYW46IHtcbiAgICAgICAgICAgICAgICB4OiA2NSxcbiAgICAgICAgICAgICAgICB5OiA1NVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1hbjoge1xuICAgICAgICAgICAgICAgIHg6IDIyNSxcbiAgICAgICAgICAgICAgICB5OiA1NVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGtpZDoge1xuICAgICAgICAgICAgICAgIHg6IDM4MCxcbiAgICAgICAgICAgICAgICB5OiA1NVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIHRoaXNfMS5tZW51W2tleV0gPSB0aGlzXzEuZ2FtZS5hZGQuc3ByaXRlKGl0ZW1zW2tleV0ueCwgaXRlbXNba2V5XS55LCAnc3ByaXRlJywga2V5KTtcbiAgICAgICAgICAgIHRoaXNfMS5tZW51W2tleV0uYW5jaG9yLnkgPSAuNTtcbiAgICAgICAgICAgIHRoaXNfMS5tZW51W2tleV0uaW5wdXRFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXNfMS5tZW51W2tleV0uaW5wdXQudXNlSGFuZEN1cnNvciA9IHRydWU7XG4gICAgICAgICAgICB0aGlzXzEubWVudVtrZXldLmV2ZW50cy5vbklucHV0VXAuYWRkKGZ1bmN0aW9uIChzcHJpdGUsIHBvaW50ZXIpIHtcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhfdGhpcy5tZW51KS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLm1lbnVbaXRlbV0udW5kZXJsaW5lLndpZHRoID0gMDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBfdGhpcy5nYW1lLmFkZC50d2VlbihfdGhpcy5tZW51W2tleV0udW5kZXJsaW5lKVxuICAgICAgICAgICAgICAgICAgICAudG8oeyB3aWR0aDogc3ByaXRlLndpZHRoIH0sIENvbnN0XzEuZGVmYXVsdC5UUkFOU0lUSU9OX0RVUkFUSU9OLCBQaGFzZXIuRWFzaW5nLkRlZmF1bHQsIHRydWUpO1xuICAgICAgICAgICAgICAgIF90aGlzLmFjdGl2ZV9tZW51ID0ga2V5O1xuICAgICAgICAgICAgICAgIF90aGlzLmFjdGl2ZV9zbGlkZSA9IDA7XG4gICAgICAgICAgICAgICAgX3RoaXMuaW5pdFNsaWRlcigpO1xuICAgICAgICAgICAgfSwgdGhpc18xKTtcbiAgICAgICAgICAgIHRoaXNfMS5tZW51W2tleV0udW5kZXJsaW5lID0gdGhpc18xLmdhbWUuYWRkLnNwcml0ZShpdGVtc1trZXldLngsIGl0ZW1zW2tleV0ueSArIDIwLCAnc3ByaXRlJywgJ3VuZGVybGluZScpO1xuICAgICAgICAgICAgdGhpc18xLm1lbnVba2V5XS51bmRlcmxpbmUudGludCA9IDB4MDAwMDAwO1xuICAgICAgICAgICAgdGhpc18xLm1lbnVba2V5XS51bmRlcmxpbmUud2lkdGggPSBrZXkgPT0gJ3dvbWFuJyA/IHRoaXNfMS5tZW51W2tleV0ud2lkdGggOiAwO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgdGhpc18xID0gdGhpcztcbiAgICAgICAgZm9yICh2YXIga2V5IGluIGl0ZW1zKSB7XG4gICAgICAgICAgICBfbG9vcF8xKGtleSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1haW4ucHJvdG90eXBlLmluaXRDYWxsVG9BY3Rpb25JY29uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgeCA9IHRoaXMuZ2FtZS53aWR0aCAtIDIzMDtcbiAgICAgICAgdmFyIHkgPSAxODA7XG4gICAgICAgIHZhciBpY29uID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUoeCwgeSwgJ3Nwcml0ZScsICdnaWZ0Jyk7XG4gICAgICAgIGljb24uYW5jaG9yLnggPSAuNTtcbiAgICAgICAgaWNvbi5hbmNob3IueSA9IC41O1xuICAgICAgICBpY29uLmFuZ2xlID0gMjA7XG4gICAgICAgIHZhciB0d2VlbjAgPSB0aGlzLmdhbWUuYWRkLnR3ZWVuKGljb24pXG4gICAgICAgICAgICAudG8oeyBhbmdsZTogLTIwIH0sIDUwMCwgUGhhc2VyLkVhc2luZy5TaW51c29pZGFsLkluLCBmYWxzZSwgMCwgLTEsIHRydWUpO1xuICAgICAgICB0d2VlbjAuc3RhcnQoKTtcbiAgICB9O1xuICAgIE1haW4ucHJvdG90eXBlLmluaXRDYWxsVG9BY3Rpb25UZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgeCA9IHRoaXMuZ2FtZS53aWR0aCAtIDUwO1xuICAgICAgICB2YXIgeSA9IDI1MDtcbiAgICAgICAgdmFyIHRleHQgPSB0aGlzLmdhbWUuYWRkLnRleHQoeCwgeSwgQ29uc3RfMS5kZWZhdWx0Lk1BSU5fVEVYVCk7XG4gICAgICAgIHRleHQuZm9udFNpemUgPSAzMDtcbiAgICAgICAgdGV4dC5mb250ID0gJ1Byb3hpbWEgTm92YSc7XG4gICAgICAgIHRleHQud29yZFdyYXBXaWR0aCA9IDM2MDtcbiAgICAgICAgdGV4dC53b3JkV3JhcCA9IHRydWU7XG4gICAgICAgIHRleHQuYWxpZ24gPSAnY2VudGVyJztcbiAgICAgICAgdGV4dC5hbmNob3IueCA9IDE7XG4gICAgfTtcbiAgICBNYWluLnByb3RvdHlwZS5pbml0Q2FsbFRvQWN0aW9uQnV0dG9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgeCA9IHRoaXMuZ2FtZS53aWR0aCAtIDIzO1xuICAgICAgICB2YXIgeSA9IDQxNztcbiAgICAgICAgdmFyIGJ1dHRvbiA9IHRoaXMuZ2FtZS5hZGQuYnV0dG9uKHgsIHksICdzcHJpdGUnLCB0aGlzLm9wZW5GYWtlU3R1YiwgdGhpcywgJ2J1dHRvbi1ob3ZlcicsICdidXR0b24tZGVmYXVsdCcpO1xuICAgICAgICBidXR0b24uYW5jaG9yLnggPSAxO1xuICAgIH07XG4gICAgTWFpbi5wcm90b3R5cGUuaW5pdFNsaWRlckdyb3VwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc2xpZGVyX3NoYWRvd19ncm91cCA9IHRoaXMuZ2FtZS5hZGQuZ3JvdXAoKTtcbiAgICAgICAgdmFyIHNsaWRlcl9zaGFkb3cgPSB0aGlzLmdhbWUuYWRkLmdyYXBoaWNzKHNsaWRlcl9vZmZzZXRfeCAtIDEsIHNsaWRlcl9vZmZzZXRfeSAtIDEsIHNsaWRlcl9zaGFkb3dfZ3JvdXApO1xuICAgICAgICBzbGlkZXJfc2hhZG93LmJlZ2luRmlsbCgweENDQ0NDQyk7XG4gICAgICAgIHNsaWRlcl9zaGFkb3cuZHJhd1JlY3QoMCwgMCwgc2xpZGVyX3dpZHRoICsgMiwgc2xpZGVyX2hlaWdodCArIDIpO1xuICAgICAgICBzbGlkZXJfc2hhZG93LmVuZEZpbGwoKTtcbiAgICAgICAgdmFyIHNsaWRlcl9iYWNrZ3JvdW5kID0gdGhpcy5nYW1lLmFkZC5ncmFwaGljcyhzbGlkZXJfb2Zmc2V0X3gsIHNsaWRlcl9vZmZzZXRfeSwgc2xpZGVyX3NoYWRvd19ncm91cCk7XG4gICAgICAgIHNsaWRlcl9iYWNrZ3JvdW5kLmJlZ2luRmlsbCgweEZGRkZGRik7XG4gICAgICAgIHNsaWRlcl9iYWNrZ3JvdW5kLmRyYXdSZWN0KDAsIDAsIHNsaWRlcl93aWR0aCwgc2xpZGVyX2hlaWdodCk7XG4gICAgICAgIHNsaWRlcl9iYWNrZ3JvdW5kLmVuZEZpbGwoKTtcbiAgICAgICAgdGhpcy5zbGlkZXJfZ3JvdXAgPSB0aGlzLmdhbWUuYWRkLmdyb3VwKCk7XG4gICAgfTtcbiAgICBNYWluLnByb3RvdHlwZS5pbml0U2xpZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnNsaWRlcl9ncm91cC54ID0gc2xpZGVyX29mZnNldF94O1xuICAgICAgICB0aGlzLnNsaWRlcl9ncm91cC55ID0gc2xpZGVyX29mZnNldF95O1xuICAgICAgICB2YXIgaXRlbXMgPSBzbGlkZXJbdGhpcy5hY3RpdmVfbWVudV0uc2xpY2UoMCwgMik7XG4gICAgICAgIGl0ZW1zLnVuc2hpZnQoc2xpZGVyW3RoaXMuYWN0aXZlX21lbnVdW3NsaWRlclt0aGlzLmFjdGl2ZV9tZW51XS5sZW5ndGggLSAxXSk7XG4gICAgICAgIHRoaXMuc2xpZGVyQnVpbGQoaXRlbXMpO1xuICAgICAgICBpZiAoIXRoaXMuc2xpZGVyX3Byb2dyZXNzKSB7XG4gICAgICAgICAgICB0aGlzLnNsaWRlcl9wcm9ncmVzcyA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKHNsaWRlcl9vZmZzZXRfeCwgc2xpZGVyX29mZnNldF95ICsgc2xpZGVyX2hlaWdodCAtIDQsICdzcHJpdGUnLCAndW5kZXJsaW5lJyk7XG4gICAgICAgICAgICB0aGlzLnNsaWRlcl9wcm9ncmVzcy50aW50ID0gMHhGRjAwMDA7XG4gICAgICAgICAgICB0aGlzLnNsaWRlcl9wcm9ncmVzcy53aWR0aCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2xpZGVyX3Byb2dyZXNzX3R3ZWVuKSB7XG4gICAgICAgICAgICB0aGlzLnNsaWRlcl9wcm9ncmVzcy53aWR0aCA9IDA7XG4gICAgICAgICAgICB0aGlzLnNsaWRlcl9wcm9ncmVzc190d2Vlbi5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zbGlkZXJfcHJvZ3Jlc3NfdHdlZW4gPSB0aGlzLmdhbWUuYWRkLnR3ZWVuKHRoaXMuc2xpZGVyX3Byb2dyZXNzKVxuICAgICAgICAgICAgLnRvKHsgd2lkdGg6IHNsaWRlcl93aWR0aCB9LCBDb25zdF8xLmRlZmF1bHQuU0xJREVfRFVSQVRJT04sIFBoYXNlci5FYXNpbmcuRGVmYXVsdCwgdHJ1ZSk7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5zbGlkZXJfYXV0b3NsaWRlX2ludGVydmFsKTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuc2xpZGVyX3JlYnVpbGRfdGltZW91dCk7XG4gICAgICAgIHRoaXMuc2xpZGVyX2F1dG9zbGlkZV9pbnRlcnZhbCA9IHNldEludGVydmFsKHRoaXMubmV4dFNsaWRlLmJpbmQodGhpcyksIENvbnN0XzEuZGVmYXVsdC5TTElERV9EVVJBVElPTik7XG4gICAgICAgIHRoaXMuaW5pdFNsaWRlck1hc2soKTtcbiAgICAgICAgdGhpcy5pbml0U2xpZGVyQXJyb3dzKCk7XG4gICAgICAgIHRoaXMuaW5pdFNsaWRlckRvdHMoKTtcbiAgICB9O1xuICAgIE1haW4ucHJvdG90eXBlLmluaXRTbGlkZXJNYXNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5zbGlkZXJfZ3JvdXAubWFzaylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdmFyIGNyb3AgPSB0aGlzLmdhbWUuYWRkLmdyYXBoaWNzKHNsaWRlcl9vZmZzZXRfeCwgc2xpZGVyX29mZnNldF95KTtcbiAgICAgICAgY3JvcC5iZWdpbkZpbGwoMHhmZmZmZmYpO1xuICAgICAgICBjcm9wLmRyYXdSZWN0KDAsIDAsIHNsaWRlcl93aWR0aCwgc2xpZGVyX2hlaWdodCk7XG4gICAgICAgIGNyb3AuZW5kRmlsbCgpO1xuICAgICAgICB0aGlzLnNsaWRlcl9ncm91cC5tYXNrID0gY3JvcDtcbiAgICB9O1xuICAgIE1haW4ucHJvdG90eXBlLmluaXRTbGlkZXJBcnJvd3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBhcnJvd19wcmV2ID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUoMTUsIHNsaWRlcl9vZmZzZXRfeSArIHNsaWRlcl9oZWlnaHQgLyAyLCAnc3ByaXRlJywgJ2Fycm93Jyk7XG4gICAgICAgIGFycm93X3ByZXYuYW5jaG9yLnggPSAxO1xuICAgICAgICBhcnJvd19wcmV2LmFuY2hvci55ID0gLjU7XG4gICAgICAgIGFycm93X3ByZXYuc2NhbGUueCA9IC0xO1xuICAgICAgICBhcnJvd19wcmV2LmlucHV0RW5hYmxlZCA9IHRydWU7XG4gICAgICAgIGFycm93X3ByZXYuaW5wdXQudXNlSGFuZEN1cnNvciA9IHRydWU7XG4gICAgICAgIGFycm93X3ByZXYuZXZlbnRzLm9uSW5wdXRVcC5hZGQoZnVuY3Rpb24gKHNwcml0ZSwgcG9pbnRlcikge1xuICAgICAgICAgICAgX3RoaXMucHJldlNsaWRlKCk7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB2YXIgYXJyb3dfbmV4dCA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKHNsaWRlcl9vZmZzZXRfeCArIHNsaWRlcl93aWR0aCArIDE1LCBzbGlkZXJfb2Zmc2V0X3kgKyBzbGlkZXJfaGVpZ2h0IC8gMiwgJ3Nwcml0ZScsICdhcnJvdycpO1xuICAgICAgICBhcnJvd19uZXh0LmFuY2hvci55ID0gLjU7XG4gICAgICAgIGFycm93X25leHQuaW5wdXRFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgYXJyb3dfbmV4dC5pbnB1dC51c2VIYW5kQ3Vyc29yID0gdHJ1ZTtcbiAgICAgICAgYXJyb3dfbmV4dC5ldmVudHMub25JbnB1dFVwLmFkZChmdW5jdGlvbiAoc3ByaXRlLCBwb2ludGVyKSB7XG4gICAgICAgICAgICBfdGhpcy5uZXh0U2xpZGUoKTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgfTtcbiAgICBNYWluLnByb3RvdHlwZS5pbml0U2xpZGVyRG90cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG9mZnNldCA9IDY1O1xuICAgICAgICB0aGlzLnNsaWRlcl9kb3RzX2dyb3VwID0gdGhpcy5nYW1lLmFkZC5ncm91cCgpO1xuICAgICAgICB0aGlzLnNsaWRlcl9kb3RzX2dyb3VwLnggPSBzbGlkZXJfb2Zmc2V0X3ggKyAxMjA7XG4gICAgICAgIHRoaXMuc2xpZGVyX2RvdHNfZ3JvdXAueSA9IHNsaWRlcl9vZmZzZXRfeSArIHNsaWRlcl9oZWlnaHQgKyAyNTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBkb3QgPSB0aGlzLmdhbWUuYWRkLnNwcml0ZShvZmZzZXQgKiBpLCAwLCAnc3ByaXRlJywgJ2RvdCcpO1xuICAgICAgICAgICAgZG90LnRpbnQgPSBpID09IDAgPyBDb25zdF8xLmRlZmF1bHQuQUNUSVZFX0RPVF9DT0xPUiA6IENvbnN0XzEuZGVmYXVsdC5ET1RfQ09MT1I7XG4gICAgICAgICAgICB0aGlzLnNsaWRlcl9kb3RzX2dyb3VwLmFkZChkb3QpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNYWluLnByb3RvdHlwZS5oYW5kbGVTbGlkZXJEb3RzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnNsaWRlcl9kb3RzX2dyb3VwLmZvckVhY2goZnVuY3Rpb24gKGRvdCkge1xuICAgICAgICAgICAgZG90LnRpbnQgPSBDb25zdF8xLmRlZmF1bHQuRE9UX0NPTE9SO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgdGhpcy5zbGlkZXJfZG90c19ncm91cC5nZXRDaGlsZEF0KHRoaXMuYWN0aXZlX3NsaWRlKVsndGludCddID0gQ29uc3RfMS5kZWZhdWx0LkFDVElWRV9ET1RfQ09MT1I7XG4gICAgfTtcbiAgICBNYWluLnByb3RvdHlwZS5wcmV2U2xpZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlX3NsaWRlLS07XG4gICAgICAgIHRoaXMuYWN0aXZlX3NsaWRlID0gdGhpcy5hY3RpdmVfc2xpZGUgPCAwID8gc2xpZGVyW3RoaXMuYWN0aXZlX21lbnVdLmxlbmd0aCAtIDEgOiB0aGlzLmFjdGl2ZV9zbGlkZTtcbiAgICAgICAgdGhpcy5oYW5kbGVTbGlkZXJEb3RzKCk7XG4gICAgICAgIHRoaXMuc2xpZGVyUHJvZ3Jlc3NSZXN0YXJ0KCk7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5zbGlkZXJfYXV0b3NsaWRlX2ludGVydmFsKTtcbiAgICAgICAgdGhpcy5zbGlkZXJfYXV0b3NsaWRlX2ludGVydmFsID0gc2V0SW50ZXJ2YWwodGhpcy5uZXh0U2xpZGUuYmluZCh0aGlzKSwgQ29uc3RfMS5kZWZhdWx0LlNMSURFX0RVUkFUSU9OKTtcbiAgICAgICAgdmFyIGN1cnJlbnRfc2xpZGVfaW1hZ2UgPSB0aGlzLnNsaWRlcl9ncm91cC5nZXRDaGlsZEF0KDMpO1xuICAgICAgICB2YXIgY3VycmVudF9zbGlkZV90ZXh0ID0gdGhpcy5zbGlkZXJfZ3JvdXAuZ2V0Q2hpbGRBdCg0KTtcbiAgICAgICAgdmFyIGN1cnJlbnRfc2xpZGVfc3ViX3RleHQgPSB0aGlzLnNsaWRlcl9ncm91cC5nZXRDaGlsZEF0KDUpO1xuICAgICAgICB2YXIgcHJldl9zbGlkZV9pbWFnZSA9IHRoaXMuc2xpZGVyX2dyb3VwLmdldENoaWxkQXQoMCk7XG4gICAgICAgIHZhciBwcmV2X3NsaWRlX3RleHQgPSB0aGlzLnNsaWRlcl9ncm91cC5nZXRDaGlsZEF0KDEpO1xuICAgICAgICB2YXIgcHJldl9zbGlkZV9zdWJfdGV4dCA9IHRoaXMuc2xpZGVyX2dyb3VwLmdldENoaWxkQXQoMik7XG4gICAgICAgIGN1cnJlbnRfc2xpZGVfaW1hZ2VbJ3R3ZWVucyddID0gY3VycmVudF9zbGlkZV9pbWFnZVsndHdlZW5zJ10gfHwge307XG4gICAgICAgIGN1cnJlbnRfc2xpZGVfdGV4dFsndHdlZW5zJ10gPSBjdXJyZW50X3NsaWRlX3RleHRbJ3R3ZWVucyddIHx8IHt9O1xuICAgICAgICBjdXJyZW50X3NsaWRlX3N1Yl90ZXh0Wyd0d2VlbnMnXSA9IGN1cnJlbnRfc2xpZGVfc3ViX3RleHRbJ3R3ZWVucyddIHx8IHt9O1xuICAgICAgICBwcmV2X3NsaWRlX2ltYWdlWyd0d2VlbnMnXSA9IHByZXZfc2xpZGVfaW1hZ2VbJ3R3ZWVucyddIHx8IHt9O1xuICAgICAgICBwcmV2X3NsaWRlX3RleHRbJ3R3ZWVucyddID0gcHJldl9zbGlkZV90ZXh0Wyd0d2VlbnMnXSB8fCB7fTtcbiAgICAgICAgcHJldl9zbGlkZV9zdWJfdGV4dFsndHdlZW5zJ10gPSBwcmV2X3NsaWRlX3N1Yl90ZXh0Wyd0d2VlbnMnXSB8fCB7fTtcbiAgICAgICAgaWYgKGN1cnJlbnRfc2xpZGVfaW1hZ2VbJ3R3ZWVucyddLm1vdmUpXG4gICAgICAgICAgICBjdXJyZW50X3NsaWRlX2ltYWdlWyd0d2VlbnMnXS5tb3ZlLnN0b3AoKTtcbiAgICAgICAgaWYgKGN1cnJlbnRfc2xpZGVfdGV4dFsndHdlZW5zJ10ubW92ZSlcbiAgICAgICAgICAgIGN1cnJlbnRfc2xpZGVfdGV4dFsndHdlZW5zJ10ubW92ZS5zdG9wKCk7XG4gICAgICAgIGlmIChjdXJyZW50X3NsaWRlX3N1Yl90ZXh0Wyd0d2VlbnMnXS5tb3ZlKVxuICAgICAgICAgICAgY3VycmVudF9zbGlkZV9zdWJfdGV4dFsndHdlZW5zJ10ubW92ZS5zdG9wKCk7XG4gICAgICAgIGlmIChwcmV2X3NsaWRlX2ltYWdlWyd0d2VlbnMnXS5tb3ZlKVxuICAgICAgICAgICAgcHJldl9zbGlkZV9pbWFnZVsndHdlZW5zJ10ubW92ZS5zdG9wKCk7XG4gICAgICAgIGlmIChwcmV2X3NsaWRlX3RleHRbJ3R3ZWVucyddLm1vdmUpXG4gICAgICAgICAgICBwcmV2X3NsaWRlX3RleHRbJ3R3ZWVucyddLm1vdmUuc3RvcCgpO1xuICAgICAgICBpZiAocHJldl9zbGlkZV9zdWJfdGV4dFsndHdlZW5zJ10ubW92ZSlcbiAgICAgICAgICAgIHByZXZfc2xpZGVfc3ViX3RleHRbJ3R3ZWVucyddLm1vdmUuc3RvcCgpO1xuICAgICAgICBjdXJyZW50X3NsaWRlX2ltYWdlWyd0d2VlbnMnXS5tb3ZlID0gdGhpcy5nYW1lLmFkZC50d2VlbihjdXJyZW50X3NsaWRlX2ltYWdlKVxuICAgICAgICAgICAgLnRvKHsgeDogY3VycmVudF9zbGlkZV9pbWFnZS54ICsgc2xpZGVyX3dpZHRoIH0sIENvbnN0XzEuZGVmYXVsdC5TTElERV9UUkFOU0lUSU9OX0RVUkFUSU9OLCBQaGFzZXIuRWFzaW5nLkRlZmF1bHQsIHRydWUpO1xuICAgICAgICBjdXJyZW50X3NsaWRlX3RleHRbJ3R3ZWVucyddLm1vdmUgPSB0aGlzLmdhbWUuYWRkLnR3ZWVuKGN1cnJlbnRfc2xpZGVfdGV4dClcbiAgICAgICAgICAgIC50byh7IHg6IGN1cnJlbnRfc2xpZGVfaW1hZ2UueCArIHNsaWRlcl93aWR0aCB9LCBDb25zdF8xLmRlZmF1bHQuU0xJREVfVFJBTlNJVElPTl9EVVJBVElPTiwgUGhhc2VyLkVhc2luZy5EZWZhdWx0LCB0cnVlKTtcbiAgICAgICAgY3VycmVudF9zbGlkZV9zdWJfdGV4dFsndHdlZW5zJ10ubW92ZSA9IHRoaXMuZ2FtZS5hZGQudHdlZW4oY3VycmVudF9zbGlkZV9zdWJfdGV4dClcbiAgICAgICAgICAgIC50byh7IHg6IGN1cnJlbnRfc2xpZGVfaW1hZ2UueCArIHNsaWRlcl93aWR0aCB9LCBDb25zdF8xLmRlZmF1bHQuU0xJREVfVFJBTlNJVElPTl9EVVJBVElPTiwgUGhhc2VyLkVhc2luZy5EZWZhdWx0LCB0cnVlKTtcbiAgICAgICAgcHJldl9zbGlkZV9pbWFnZVsndHdlZW5zJ10ubW92ZSA9IHRoaXMuZ2FtZS5hZGQudHdlZW4ocHJldl9zbGlkZV9pbWFnZSlcbiAgICAgICAgICAgIC50byh7IHg6IHByZXZfc2xpZGVfaW1hZ2UueCArIHNsaWRlcl93aWR0aCB9LCBDb25zdF8xLmRlZmF1bHQuU0xJREVfVFJBTlNJVElPTl9EVVJBVElPTiwgUGhhc2VyLkVhc2luZy5EZWZhdWx0LCB0cnVlKTtcbiAgICAgICAgcHJldl9zbGlkZV90ZXh0Wyd0d2VlbnMnXS5tb3ZlID0gdGhpcy5nYW1lLmFkZC50d2VlbihwcmV2X3NsaWRlX3RleHQpXG4gICAgICAgICAgICAudG8oeyB4OiBwcmV2X3NsaWRlX3RleHQueCArIHNsaWRlcl93aWR0aCB9LCBDb25zdF8xLmRlZmF1bHQuU0xJREVfVFJBTlNJVElPTl9EVVJBVElPTiwgUGhhc2VyLkVhc2luZy5EZWZhdWx0LCB0cnVlKTtcbiAgICAgICAgcHJldl9zbGlkZV9zdWJfdGV4dFsndHdlZW5zJ10ubW92ZSA9IHRoaXMuZ2FtZS5hZGQudHdlZW4ocHJldl9zbGlkZV9zdWJfdGV4dClcbiAgICAgICAgICAgIC50byh7IHg6IHByZXZfc2xpZGVfc3ViX3RleHQueCArIHNsaWRlcl93aWR0aCB9LCBDb25zdF8xLmRlZmF1bHQuU0xJREVfVFJBTlNJVElPTl9EVVJBVElPTiwgUGhhc2VyLkVhc2luZy5EZWZhdWx0LCB0cnVlKTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuc2xpZGVyX3JlYnVpbGRfdGltZW91dCk7XG4gICAgICAgIHRoaXMuc2xpZGVyX3JlYnVpbGRfdGltZW91dCA9IHNldFRpbWVvdXQodGhpcy5zbGlkZXJSZWJ1aWxkLmJpbmQodGhpcyksIENvbnN0XzEuZGVmYXVsdC5TTElERV9UUkFOU0lUSU9OX0RVUkFUSU9OKTtcbiAgICB9O1xuICAgIE1haW4ucHJvdG90eXBlLm5leHRTbGlkZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVfc2xpZGUrKztcbiAgICAgICAgdGhpcy5hY3RpdmVfc2xpZGUgPSB0aGlzLmFjdGl2ZV9zbGlkZSA9PSBzbGlkZXJbdGhpcy5hY3RpdmVfbWVudV0ubGVuZ3RoID8gMCA6IHRoaXMuYWN0aXZlX3NsaWRlO1xuICAgICAgICB0aGlzLmhhbmRsZVNsaWRlckRvdHMoKTtcbiAgICAgICAgdGhpcy5zbGlkZXJQcm9ncmVzc1Jlc3RhcnQoKTtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnNsaWRlcl9hdXRvc2xpZGVfaW50ZXJ2YWwpO1xuICAgICAgICB0aGlzLnNsaWRlcl9hdXRvc2xpZGVfaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh0aGlzLm5leHRTbGlkZS5iaW5kKHRoaXMpLCBDb25zdF8xLmRlZmF1bHQuU0xJREVfRFVSQVRJT04pO1xuICAgICAgICB2YXIgY3VycmVudF9zbGlkZV9pbWFnZSA9IHRoaXMuc2xpZGVyX2dyb3VwLmdldENoaWxkQXQoMyk7XG4gICAgICAgIHZhciBjdXJyZW50X3NsaWRlX3RleHQgPSB0aGlzLnNsaWRlcl9ncm91cC5nZXRDaGlsZEF0KDQpO1xuICAgICAgICB2YXIgY3VycmVudF9zbGlkZV9zdWJfdGV4dCA9IHRoaXMuc2xpZGVyX2dyb3VwLmdldENoaWxkQXQoNSk7XG4gICAgICAgIHZhciBuZXh0X3NsaWRlX2ltYWdlID0gdGhpcy5zbGlkZXJfZ3JvdXAuZ2V0Q2hpbGRBdCg2KTtcbiAgICAgICAgdmFyIG5leHRfc2xpZGVfdGV4dCA9IHRoaXMuc2xpZGVyX2dyb3VwLmdldENoaWxkQXQoNyk7XG4gICAgICAgIHZhciBuZXh0X3NsaWRlX3N1Yl90ZXh0ID0gdGhpcy5zbGlkZXJfZ3JvdXAuZ2V0Q2hpbGRBdCg4KTtcbiAgICAgICAgY3VycmVudF9zbGlkZV9pbWFnZVsndHdlZW5zJ10gPSBjdXJyZW50X3NsaWRlX2ltYWdlWyd0d2VlbnMnXSB8fCB7fTtcbiAgICAgICAgY3VycmVudF9zbGlkZV90ZXh0Wyd0d2VlbnMnXSA9IGN1cnJlbnRfc2xpZGVfdGV4dFsndHdlZW5zJ10gfHwge307XG4gICAgICAgIGN1cnJlbnRfc2xpZGVfc3ViX3RleHRbJ3R3ZWVucyddID0gY3VycmVudF9zbGlkZV9zdWJfdGV4dFsndHdlZW5zJ10gfHwge307XG4gICAgICAgIG5leHRfc2xpZGVfaW1hZ2VbJ3R3ZWVucyddID0gbmV4dF9zbGlkZV9pbWFnZVsndHdlZW5zJ10gfHwge307XG4gICAgICAgIG5leHRfc2xpZGVfdGV4dFsndHdlZW5zJ10gPSBuZXh0X3NsaWRlX3RleHRbJ3R3ZWVucyddIHx8IHt9O1xuICAgICAgICBuZXh0X3NsaWRlX3N1Yl90ZXh0Wyd0d2VlbnMnXSA9IG5leHRfc2xpZGVfc3ViX3RleHRbJ3R3ZWVucyddIHx8IHt9O1xuICAgICAgICBpZiAoY3VycmVudF9zbGlkZV9pbWFnZVsndHdlZW5zJ10ubW92ZSlcbiAgICAgICAgICAgIGN1cnJlbnRfc2xpZGVfaW1hZ2VbJ3R3ZWVucyddLm1vdmUuc3RvcCgpO1xuICAgICAgICBpZiAoY3VycmVudF9zbGlkZV90ZXh0Wyd0d2VlbnMnXS5tb3ZlKVxuICAgICAgICAgICAgY3VycmVudF9zbGlkZV90ZXh0Wyd0d2VlbnMnXS5tb3ZlLnN0b3AoKTtcbiAgICAgICAgaWYgKGN1cnJlbnRfc2xpZGVfc3ViX3RleHRbJ3R3ZWVucyddLm1vdmUpXG4gICAgICAgICAgICBjdXJyZW50X3NsaWRlX3N1Yl90ZXh0Wyd0d2VlbnMnXS5tb3ZlLnN0b3AoKTtcbiAgICAgICAgaWYgKG5leHRfc2xpZGVfaW1hZ2VbJ3R3ZWVucyddLm1vdmUpXG4gICAgICAgICAgICBuZXh0X3NsaWRlX2ltYWdlWyd0d2VlbnMnXS5tb3ZlLnN0b3AoKTtcbiAgICAgICAgaWYgKG5leHRfc2xpZGVfdGV4dFsndHdlZW5zJ10ubW92ZSlcbiAgICAgICAgICAgIG5leHRfc2xpZGVfdGV4dFsndHdlZW5zJ10ubW92ZS5zdG9wKCk7XG4gICAgICAgIGlmIChuZXh0X3NsaWRlX3N1Yl90ZXh0Wyd0d2VlbnMnXS5tb3ZlKVxuICAgICAgICAgICAgbmV4dF9zbGlkZV9zdWJfdGV4dFsndHdlZW5zJ10ubW92ZS5zdG9wKCk7XG4gICAgICAgIGN1cnJlbnRfc2xpZGVfaW1hZ2VbJ3R3ZWVucyddLm1vdmUgPSB0aGlzLmdhbWUuYWRkLnR3ZWVuKGN1cnJlbnRfc2xpZGVfaW1hZ2UpXG4gICAgICAgICAgICAudG8oeyB4OiBjdXJyZW50X3NsaWRlX2ltYWdlLnggLSBzbGlkZXJfd2lkdGggfSwgQ29uc3RfMS5kZWZhdWx0LlNMSURFX1RSQU5TSVRJT05fRFVSQVRJT04sIFBoYXNlci5FYXNpbmcuRGVmYXVsdCwgdHJ1ZSk7XG4gICAgICAgIGN1cnJlbnRfc2xpZGVfdGV4dFsndHdlZW5zJ10ubW92ZSA9IHRoaXMuZ2FtZS5hZGQudHdlZW4oY3VycmVudF9zbGlkZV90ZXh0KVxuICAgICAgICAgICAgLnRvKHsgeDogY3VycmVudF9zbGlkZV9pbWFnZS54IC0gc2xpZGVyX3dpZHRoIH0sIENvbnN0XzEuZGVmYXVsdC5TTElERV9UUkFOU0lUSU9OX0RVUkFUSU9OLCBQaGFzZXIuRWFzaW5nLkRlZmF1bHQsIHRydWUpO1xuICAgICAgICBjdXJyZW50X3NsaWRlX3N1Yl90ZXh0Wyd0d2VlbnMnXS5tb3ZlID0gdGhpcy5nYW1lLmFkZC50d2VlbihjdXJyZW50X3NsaWRlX3N1Yl90ZXh0KVxuICAgICAgICAgICAgLnRvKHsgeDogY3VycmVudF9zbGlkZV9pbWFnZS54IC0gc2xpZGVyX3dpZHRoIH0sIENvbnN0XzEuZGVmYXVsdC5TTElERV9UUkFOU0lUSU9OX0RVUkFUSU9OLCBQaGFzZXIuRWFzaW5nLkRlZmF1bHQsIHRydWUpO1xuICAgICAgICBuZXh0X3NsaWRlX2ltYWdlWyd0d2VlbnMnXS5tb3ZlID0gdGhpcy5nYW1lLmFkZC50d2VlbihuZXh0X3NsaWRlX2ltYWdlKVxuICAgICAgICAgICAgLnRvKHsgeDogbmV4dF9zbGlkZV9pbWFnZS54IC0gc2xpZGVyX3dpZHRoIH0sIENvbnN0XzEuZGVmYXVsdC5TTElERV9UUkFOU0lUSU9OX0RVUkFUSU9OLCBQaGFzZXIuRWFzaW5nLkRlZmF1bHQsIHRydWUpO1xuICAgICAgICBuZXh0X3NsaWRlX3RleHRbJ3R3ZWVucyddLm1vdmUgPSB0aGlzLmdhbWUuYWRkLnR3ZWVuKG5leHRfc2xpZGVfdGV4dClcbiAgICAgICAgICAgIC50byh7IHg6IG5leHRfc2xpZGVfdGV4dC54IC0gc2xpZGVyX3dpZHRoIH0sIENvbnN0XzEuZGVmYXVsdC5TTElERV9UUkFOU0lUSU9OX0RVUkFUSU9OLCBQaGFzZXIuRWFzaW5nLkRlZmF1bHQsIHRydWUpO1xuICAgICAgICBuZXh0X3NsaWRlX3N1Yl90ZXh0Wyd0d2VlbnMnXS5tb3ZlID0gdGhpcy5nYW1lLmFkZC50d2VlbihuZXh0X3NsaWRlX3N1Yl90ZXh0KVxuICAgICAgICAgICAgLnRvKHsgeDogbmV4dF9zbGlkZV9zdWJfdGV4dC54IC0gc2xpZGVyX3dpZHRoIH0sIENvbnN0XzEuZGVmYXVsdC5TTElERV9UUkFOU0lUSU9OX0RVUkFUSU9OLCBQaGFzZXIuRWFzaW5nLkRlZmF1bHQsIHRydWUpO1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5zbGlkZXJfcmVidWlsZF90aW1lb3V0KTtcbiAgICAgICAgdGhpcy5zbGlkZXJfcmVidWlsZF90aW1lb3V0ID0gc2V0VGltZW91dCh0aGlzLnNsaWRlclJlYnVpbGQuYmluZCh0aGlzKSwgQ29uc3RfMS5kZWZhdWx0LlNMSURFX1RSQU5TSVRJT05fRFVSQVRJT04pO1xuICAgIH07XG4gICAgTWFpbi5wcm90b3R5cGUuc2xpZGVyQnVpbGQgPSBmdW5jdGlvbiAoaXRlbXMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5zbGlkZXJfZ3JvdXAucmVtb3ZlQWxsKHRydWUpO1xuICAgICAgICBpdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBqKSB7XG4gICAgICAgICAgICB2YXIgaW1hZ2UgPSBfdGhpcy5nYW1lLmFkZC5pbWFnZSgwLCAwLCBpdGVtLmltYWdlKTtcbiAgICAgICAgICAgIHZhciB4ID0gaiAqIGltYWdlLndpZHRoIC0gaW1hZ2Uud2lkdGg7XG4gICAgICAgICAgICBpbWFnZS54ID0geDtcbiAgICAgICAgICAgIF90aGlzLnNsaWRlcl9ncm91cC5hZGQoaW1hZ2UpO1xuICAgICAgICAgICAgdmFyIHRleHQgPSBfdGhpcy5nYW1lLmFkZC50ZXh0KHggKyAyMCwgMjAwLCBpdGVtLnRleHQpO1xuICAgICAgICAgICAgdGV4dC5maWxsID0gJyNlZjNmMzAnO1xuICAgICAgICAgICAgdGV4dC5mb250U2l6ZSA9IDMwO1xuICAgICAgICAgICAgdGV4dC5mb250ID0gJ1Byb3hpbWEgTm92YSc7XG4gICAgICAgICAgICBfdGhpcy5zbGlkZXJfZ3JvdXAuYWRkKHRleHQpO1xuICAgICAgICAgICAgdmFyIHN1Yl90ZXh0ID0gX3RoaXMuZ2FtZS5hZGQudGV4dCh4ICsgMjAsIDI0NSwgaXRlbS5zdWJfdGV4dCk7XG4gICAgICAgICAgICBzdWJfdGV4dC5mb250U2l6ZSA9IDIwO1xuICAgICAgICAgICAgc3ViX3RleHQuZm9udCA9ICdQcm94aW1hIE5vdmEnO1xuICAgICAgICAgICAgX3RoaXMuc2xpZGVyX2dyb3VwLmFkZChzdWJfdGV4dCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTWFpbi5wcm90b3R5cGUuc2xpZGVyUmVidWlsZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGl0ZW1zID0gW107XG4gICAgICAgIHZhciBwcmV2X2luZGV4ID0gdGhpcy5hY3RpdmVfc2xpZGUgLSAxIDwgMCA/IHNsaWRlclt0aGlzLmFjdGl2ZV9tZW51XS5sZW5ndGggLSAxIDogdGhpcy5hY3RpdmVfc2xpZGUgLSAxO1xuICAgICAgICB2YXIgcHJldl9zbGlkZSA9IHNsaWRlclt0aGlzLmFjdGl2ZV9tZW51XVtwcmV2X2luZGV4XTtcbiAgICAgICAgdmFyIGN1cnJlbnRfaW5kZXggPSB0aGlzLmFjdGl2ZV9zbGlkZTtcbiAgICAgICAgdmFyIGN1cnJlbnRfc2xpZGUgPSBzbGlkZXJbdGhpcy5hY3RpdmVfbWVudV1bY3VycmVudF9pbmRleF07XG4gICAgICAgIHZhciBuZXh0X2luZGV4ID0gdGhpcy5hY3RpdmVfc2xpZGUgKyAxID09IHNsaWRlclt0aGlzLmFjdGl2ZV9tZW51XS5sZW5ndGggPyAwIDogdGhpcy5hY3RpdmVfc2xpZGUgKyAxO1xuICAgICAgICB2YXIgbmV4dF9zbGlkZSA9IHNsaWRlclt0aGlzLmFjdGl2ZV9tZW51XVtuZXh0X2luZGV4XTtcbiAgICAgICAgaXRlbXMucHVzaChwcmV2X3NsaWRlKTtcbiAgICAgICAgaXRlbXMucHVzaChjdXJyZW50X3NsaWRlKTtcbiAgICAgICAgaXRlbXMucHVzaChuZXh0X3NsaWRlKTtcbiAgICAgICAgdGhpcy5zbGlkZXJCdWlsZChpdGVtcyk7XG4gICAgfTtcbiAgICBNYWluLnByb3RvdHlwZS5zbGlkZXJQcm9ncmVzc1Jlc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc2xpZGVyX3Byb2dyZXNzX3R3ZWVuLnN0b3AoKTtcbiAgICAgICAgdGhpcy5zbGlkZXJfcHJvZ3Jlc3Mud2lkdGggPSAwO1xuICAgICAgICB0aGlzLnNsaWRlcl9wcm9ncmVzc190d2VlbiA9IHRoaXMuZ2FtZS5hZGQudHdlZW4odGhpcy5zbGlkZXJfcHJvZ3Jlc3MpXG4gICAgICAgICAgICAudG8oeyB3aWR0aDogc2xpZGVyX3dpZHRoIH0sIENvbnN0XzEuZGVmYXVsdC5TTElERV9EVVJBVElPTiwgUGhhc2VyLkVhc2luZy5EZWZhdWx0LCB0cnVlKTtcbiAgICB9O1xuICAgIE1haW4ucHJvdG90eXBlLm9wZW5GYWtlU3R1YiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHRhYiA9IHdpbmRvdy5vcGVuKENvbnN0XzEuZGVmYXVsdC5UQVJHRVRfVVJMLCAnX2JsYW5rJyk7XG4gICAgICAgIHRhYi5mb2N1cygpO1xuICAgIH07XG4gICAgcmV0dXJuIE1haW47XG59KFBoYXNlci5TdGF0ZSkpO1xuZXhwb3J0cy5NYWluID0gTWFpbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3BoYXNlci9zdGF0ZXMvTWFpbi5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBUUkFOU0lUSU9OX0RVUkFUSU9OOiAxNTAsXG4gICAgU0xJREVfRFVSQVRJT046IDI1MDAsXG4gICAgU0xJREVfVFJBTlNJVElPTl9EVVJBVElPTjogNjAwLFxuICAgIFRBUkdFVF9VUkw6ICdodHRwczovL3d3dy5sYW1vZGEucnUvJyxcbiAgICBNQUlOX1RFWFQ6ICcxMCUgLSDQs9Cw0YDQsNC90YLQuNGA0L7QstCw0L3QvdCw0Y8g0YHQutC40LTQutCwINC90LAg0L/QtdGA0LLRi9C5INC30LDQutCw0LcnLFxuICAgIERPVF9DT0xPUjogMHhDNEM1QzYsXG4gICAgQUNUSVZFX0RPVF9DT0xPUjogMHhFRjNGMzAsXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcGhhc2VyL0NvbnN0LmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=