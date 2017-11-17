'use strict'

import {Boot} from "./states/Boot"
import {Main} from "./states/Main"

export class Banner extends Phaser.Game{
  constructor() {
    const APP_WIDTH = document.body.clientWidth
    const APP_HEIGHT = document.body.clientHeight

    super({
      width: APP_WIDTH,
      height: APP_HEIGHT,
      renderer: Phaser.AUTO,
      parent: 'app',
      forceSetTimeOut: true
    })

    this.state.add('Boot', Boot, false)
    this.state.add('Main', Main, false)

    this.state.start('Boot')
  }
}