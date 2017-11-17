'use strict'

import CONST from './../Const'

const slider_offset_x = 50
const slider_offset_y = 130
const slider_width = 390
const slider_height = 290
const slider = {
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
}

export class Main extends Phaser.State {
  protected menu: any = {}
  protected active_menu: string = 'woman'
  protected active_slide: number = 0
  protected slider_group: Phaser.Group
  protected slider_dots_group: Phaser.Group
  protected slider_autoslide_interval: any
  protected slider_rebuild_timeout: any
  protected slider_progress: Phaser.Sprite
  protected slider_progress_tween: Phaser.Tween

  preload() {
    this.initHeader()
    this.initLogo()
    this.initCloseButton()
    this.initMenu()
    this.initCallToActionIcon()
    this.initCallToActionText()
    this.initCallToActionButton()
    this.initSliderGroup()
    this.initSlider()
  }

  create() {
  }

  update() {

  }

  initHeader() {
    let header = this.game.add.image(0, 0, 'header-shadow')
    header.width = this.game.width
    header.height = 123
  }

  initLogo() {
    let x = this.game.width - 300
    let y = 55
    let logo = this.game.add.sprite(x, y, 'sprite', 'logo')
    logo.anchor.y = .5
    logo.inputEnabled = true
    logo.input.useHandCursor = true
    logo.events.onInputUp.add(this.openFakeStub, this)
  }

  initCloseButton() {
    let x = this.game.width - 10
    let y = 10
    let button = this.game.add.sprite(x, y, 'sprite', 'close')
    button.width = 20
    button.height = 20
    button.anchor.x = 1
    button.inputEnabled = true
    button.input.useHandCursor = true
  }

  initMenu() {
    let items = {
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
    }

    for (let key in items) {
      this.menu[key] = this.game.add.sprite(items[key].x, items[key].y, 'sprite', key)
      this.menu[key].anchor.y = .5
      this.menu[key].inputEnabled = true
      this.menu[key].input.useHandCursor = true
      this.menu[key].events.onInputUp.add((sprite, pointer) => {
        Object.keys(this.menu).forEach(item => {
          this.menu[item].underline.width = 0
        })

        this.game.add.tween(this.menu[key].underline)
          .to({width: sprite.width}, CONST.TRANSITION_DURATION, Phaser.Easing.Default, true)

        this.active_menu = key
        this.active_slide = 0
        this.initSlider()
      }, this)

      this.menu[key].underline = this.game.add.sprite(items[key].x, items[key].y + 20, 'sprite', 'underline')
      this.menu[key].underline.tint = 0x000000
      this.menu[key].underline.width = key == 'woman' ? this.menu[key].width : 0
    }
  }

  initCallToActionIcon() {
    let x = this.game.width - 230
    let y = 180
    let icon = this.game.add.sprite(x, y, 'sprite', 'gift')
    icon.anchor.x = .5
    icon.anchor.y = .5
    icon.angle = 20
    let tween0 = this.game.add.tween(icon)
      .to({angle: -20}, 500, Phaser.Easing.Sinusoidal.In, false, 0, -1, true)
    tween0.start()

  }

  initCallToActionText() {
    let x = this.game.width - 50
    let y = 250
    let text = this.game.add.text(x, y, CONST.MAIN_TEXT)
    text.fontSize = 30
    text.font = 'Proxima Nova'
    text.wordWrapWidth = 360
    text.wordWrap = true
    text.align = 'center'
    text.anchor.x = 1
  }

  initCallToActionButton() {
    let x = this.game.width - 23
    let y = 417
    let button = this.game.add.button(x, y, 'sprite', this.openFakeStub, this, 'button-hover', 'button-default')
    button.anchor.x = 1
  }

  initSliderGroup() {
    let slider_shadow_group = this.game.add.group()
    let slider_shadow = this.game.add.graphics(slider_offset_x - 1, slider_offset_y - 1, slider_shadow_group)
    slider_shadow.beginFill(0xCCCCCC)
    slider_shadow.drawRect(0, 0, slider_width + 2, slider_height + 2)
    slider_shadow.endFill()

    let slider_background = this.game.add.graphics(slider_offset_x, slider_offset_y, slider_shadow_group)
    slider_background.beginFill(0xFFFFFF)
    slider_background.drawRect(0, 0, slider_width, slider_height)
    slider_background.endFill()

    this.slider_group = this.game.add.group()
  }

  initSlider() {
    this.slider_group.x = slider_offset_x
    this.slider_group.y = slider_offset_y

    let items = slider[this.active_menu].slice(0, 2)
    items.unshift(slider[this.active_menu][slider[this.active_menu].length - 1])
    this.sliderBuild(items)

    if (!this.slider_progress) {
      this.slider_progress = this.game.add.sprite(slider_offset_x, slider_offset_y + slider_height - 4, 'sprite', 'underline')
      this.slider_progress.tint = 0xFF0000
      this.slider_progress.width = 0
    }

    if (this.slider_progress_tween) {
      this.slider_progress.width = 0
      this.slider_progress_tween.stop()
    }

    this.slider_progress_tween = this.game.add.tween(this.slider_progress)
      .to({width: slider_width}, CONST.SLIDE_DURATION, Phaser.Easing.Default, true)

    clearInterval(this.slider_autoslide_interval)
    clearTimeout(this.slider_rebuild_timeout)
    this.slider_autoslide_interval = setInterval(this.nextSlide.bind(this), CONST.SLIDE_DURATION)

    this.initSliderMask()
    this.initSliderArrows()
    this.initSliderDots()
  }

  initSliderMask() {
    if (this.slider_group.mask) return

    let crop = this.game.add.graphics(slider_offset_x, slider_offset_y)
    crop.beginFill(0xffffff)
    crop.drawRect(0, 0, slider_width, slider_height)
    crop.endFill()

    this.slider_group.mask = crop
  }

  initSliderArrows() {
    let arrow_prev = this.game.add.sprite(15, slider_offset_y + slider_height / 2, 'sprite', 'arrow')
    arrow_prev.anchor.x = 1
    arrow_prev.anchor.y = .5
    arrow_prev.scale.x = -1
    arrow_prev.inputEnabled = true
    arrow_prev.input.useHandCursor = true

    arrow_prev.events.onInputUp.add((sprite, pointer) => {
      this.prevSlide()
    }, this)

    let arrow_next = this.game.add.sprite(slider_offset_x + slider_width + 15, slider_offset_y + slider_height / 2, 'sprite', 'arrow')
    arrow_next.anchor.y = .5
    arrow_next.inputEnabled = true
    arrow_next.input.useHandCursor = true

    arrow_next.events.onInputUp.add((sprite, pointer) => {
      this.nextSlide()
    }, this)
  }

  initSliderDots() {
    let offset = 65
    this.slider_dots_group = this.game.add.group()
    this.slider_dots_group.x = slider_offset_x + 120
    this.slider_dots_group.y = slider_offset_y + slider_height + 25

    for (let i = 0; i < 3; i++) {
      let dot = this.game.add.sprite(offset * i, 0, 'sprite', 'dot')
      dot.tint = i == 0 ? CONST.ACTIVE_DOT_COLOR : CONST.DOT_COLOR
      this.slider_dots_group.add(dot)
    }
  }

  handleSliderDots() {
    this.slider_dots_group.forEach(dot => {
      dot.tint = CONST.DOT_COLOR
    }, this)
    this.slider_dots_group.getChildAt(this.active_slide)['tint'] = CONST.ACTIVE_DOT_COLOR
  }

  prevSlide() {
    this.active_slide--
    this.active_slide = this.active_slide < 0 ? slider[this.active_menu].length - 1 : this.active_slide
    this.handleSliderDots()
    this.sliderProgressRestart()

    clearInterval(this.slider_autoslide_interval)
    this.slider_autoslide_interval = setInterval(this.nextSlide.bind(this), CONST.SLIDE_DURATION)

    let current_slide_image = this.slider_group.getChildAt(3)
    let current_slide_text = this.slider_group.getChildAt(4)
    let current_slide_sub_text = this.slider_group.getChildAt(5)

    let prev_slide_image = this.slider_group.getChildAt(0)
    let prev_slide_text = this.slider_group.getChildAt(1)
    let prev_slide_sub_text = this.slider_group.getChildAt(2)

    current_slide_image['tweens'] = current_slide_image['tweens'] || {}
    current_slide_text['tweens'] = current_slide_text['tweens'] || {}
    current_slide_sub_text['tweens'] = current_slide_sub_text['tweens'] || {}
    prev_slide_image['tweens'] = prev_slide_image['tweens'] || {}
    prev_slide_text['tweens'] = prev_slide_text['tweens'] || {}
    prev_slide_sub_text['tweens'] = prev_slide_sub_text['tweens'] || {}

    if (current_slide_image['tweens'].move) current_slide_image['tweens'].move.stop()
    if (current_slide_text['tweens'].move) current_slide_text['tweens'].move.stop()
    if (current_slide_sub_text['tweens'].move) current_slide_sub_text['tweens'].move.stop()
    if (prev_slide_image['tweens'].move) prev_slide_image['tweens'].move.stop()
    if (prev_slide_text['tweens'].move) prev_slide_text['tweens'].move.stop()
    if (prev_slide_sub_text['tweens'].move) prev_slide_sub_text['tweens'].move.stop()

    current_slide_image['tweens'].move = this.game.add.tween(current_slide_image)
      .to({x: current_slide_image.x + slider_width}, CONST.SLIDE_TRANSITION_DURATION, Phaser.Easing.Default, true)
    current_slide_text['tweens'].move = this.game.add.tween(current_slide_text)
      .to({x: current_slide_image.x + slider_width}, CONST.SLIDE_TRANSITION_DURATION, Phaser.Easing.Default, true)
    current_slide_sub_text['tweens'].move = this.game.add.tween(current_slide_sub_text)
      .to({x: current_slide_image.x + slider_width}, CONST.SLIDE_TRANSITION_DURATION, Phaser.Easing.Default, true)

    prev_slide_image['tweens'].move = this.game.add.tween(prev_slide_image)
      .to({x: prev_slide_image.x + slider_width}, CONST.SLIDE_TRANSITION_DURATION, Phaser.Easing.Default, true)
    prev_slide_text['tweens'].move = this.game.add.tween(prev_slide_text)
      .to({x: prev_slide_text.x + slider_width}, CONST.SLIDE_TRANSITION_DURATION, Phaser.Easing.Default, true)
    prev_slide_sub_text['tweens'].move = this.game.add.tween(prev_slide_sub_text)
      .to({x: prev_slide_sub_text.x + slider_width}, CONST.SLIDE_TRANSITION_DURATION, Phaser.Easing.Default, true)

    clearTimeout(this.slider_rebuild_timeout)
    this.slider_rebuild_timeout = setTimeout(this.sliderRebuild.bind(this), CONST.SLIDE_TRANSITION_DURATION)
  }

  nextSlide() {
    this.active_slide++
    this.active_slide = this.active_slide == slider[this.active_menu].length ? 0 : this.active_slide
    this.handleSliderDots()
    this.sliderProgressRestart()

    clearInterval(this.slider_autoslide_interval)
    this.slider_autoslide_interval = setInterval(this.nextSlide.bind(this), CONST.SLIDE_DURATION)

    let current_slide_image = this.slider_group.getChildAt(3)
    let current_slide_text = this.slider_group.getChildAt(4)
    let current_slide_sub_text = this.slider_group.getChildAt(5)

    let next_slide_image = this.slider_group.getChildAt(6)
    let next_slide_text = this.slider_group.getChildAt(7)
    let next_slide_sub_text = this.slider_group.getChildAt(8)

    current_slide_image['tweens'] = current_slide_image['tweens'] || {}
    current_slide_text['tweens'] = current_slide_text['tweens'] || {}
    current_slide_sub_text['tweens'] = current_slide_sub_text['tweens'] || {}
    next_slide_image['tweens'] = next_slide_image['tweens'] || {}
    next_slide_text['tweens'] = next_slide_text['tweens'] || {}
    next_slide_sub_text['tweens'] = next_slide_sub_text['tweens'] || {}

    if (current_slide_image['tweens'].move) current_slide_image['tweens'].move.stop()
    if (current_slide_text['tweens'].move) current_slide_text['tweens'].move.stop()
    if (current_slide_sub_text['tweens'].move) current_slide_sub_text['tweens'].move.stop()
    if (next_slide_image['tweens'].move) next_slide_image['tweens'].move.stop()
    if (next_slide_text['tweens'].move) next_slide_text['tweens'].move.stop()
    if (next_slide_sub_text['tweens'].move) next_slide_sub_text['tweens'].move.stop()

    current_slide_image['tweens'].move = this.game.add.tween(current_slide_image)
      .to({x: current_slide_image.x - slider_width}, CONST.SLIDE_TRANSITION_DURATION, Phaser.Easing.Default, true)
    current_slide_text['tweens'].move = this.game.add.tween(current_slide_text)
      .to({x: current_slide_image.x - slider_width}, CONST.SLIDE_TRANSITION_DURATION, Phaser.Easing.Default, true)
    current_slide_sub_text['tweens'].move = this.game.add.tween(current_slide_sub_text)
      .to({x: current_slide_image.x - slider_width}, CONST.SLIDE_TRANSITION_DURATION, Phaser.Easing.Default, true)

    next_slide_image['tweens'].move = this.game.add.tween(next_slide_image)
      .to({x: next_slide_image.x - slider_width}, CONST.SLIDE_TRANSITION_DURATION, Phaser.Easing.Default, true)
    next_slide_text['tweens'].move = this.game.add.tween(next_slide_text)
      .to({x: next_slide_text.x - slider_width}, CONST.SLIDE_TRANSITION_DURATION, Phaser.Easing.Default, true)
    next_slide_sub_text['tweens'].move = this.game.add.tween(next_slide_sub_text)
      .to({x: next_slide_sub_text.x - slider_width}, CONST.SLIDE_TRANSITION_DURATION, Phaser.Easing.Default, true)

    clearTimeout(this.slider_rebuild_timeout)
    this.slider_rebuild_timeout = setTimeout(this.sliderRebuild.bind(this), CONST.SLIDE_TRANSITION_DURATION)
  }

  sliderBuild(items) {
    this.slider_group.removeAll(true)

    items.forEach((item, j) => {
      let image = this.game.add.image(0, 0, item.image)
      let x = j * image.width - image.width
      image.x = x
      this.slider_group.add(image)

      let text = this.game.add.text(x + 20, 200, item.text)
      text.fill = '#ef3f30'
      text.fontSize = 30
      text.font = 'Proxima Nova'
      this.slider_group.add(text)

      let sub_text = this.game.add.text(x + 20, 245, item.sub_text)
      sub_text.fontSize = 20
      sub_text.font = 'Proxima Nova'
      this.slider_group.add(sub_text)
    })
  }

  sliderRebuild() {
    let items = []
    let prev_index = this.active_slide - 1 < 0 ? slider[this.active_menu].length - 1 : this.active_slide - 1
    let prev_slide = slider[this.active_menu][prev_index]
    let current_index = this.active_slide
    let current_slide = slider[this.active_menu][current_index]
    let next_index = this.active_slide + 1 == slider[this.active_menu].length ? 0 : this.active_slide + 1
    let next_slide = slider[this.active_menu][next_index]

    items.push(prev_slide)
    items.push(current_slide)
    items.push(next_slide)

    this.sliderBuild(items)
  }

  sliderProgressRestart() {
    this.slider_progress_tween.stop()
    this.slider_progress.width = 0
    this.slider_progress_tween = this.game.add.tween(this.slider_progress)
      .to({width: slider_width}, CONST.SLIDE_DURATION, Phaser.Easing.Default, true)
  }

  openFakeStub() {
    let tab = window.open(CONST.TARGET_URL, '_blank')
    tab.focus()
  }
}