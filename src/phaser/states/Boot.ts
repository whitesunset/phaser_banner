'use strict'

export class Boot extends Phaser.State {
  preload() {
    this.stage.disableVisibilityChange = true
    this.stage.backgroundColor = '#f5f5f5'

    this.game.load.image('header-shadow', 'assets/images/header-shadow.png')
    this.game.load.image('man_0', 'assets/images/man_0.jpg')
    this.game.load.image('man_1', 'assets/images/man_1.jpg')
    this.game.load.image('man_2', 'assets/images/man_2.jpg')
    this.game.load.image('woman_0', 'assets/images/woman_0.jpg')
    this.game.load.image('woman_1', 'assets/images/woman_1.jpg')
    this.game.load.image('woman_2', 'assets/images/woman_2.jpg')
    this.game.load.image('kid_0', 'assets/images/kid_0.jpg')
    this.game.load.image('kid_1', 'assets/images/kid_1.jpg')
    this.game.load.image('kid_2', 'assets/images/kid_2.jpg')
    this.game.load.atlasXML('sprite', 'assets/images/atlas.png', 'assets/images/atlas.xml')

    this.game.scale.setResizeCallback((scale, parentBounds) => {
      this.game.width = parentBounds.width
      this.game.height= parentBounds.height
    }, this)

    // Preload font
    let text = this.game.add.text(-1000, -1000, '1й')
    text.font = 'Proxima Nova'
  }

  create() {
    this.game.state.start('Main')
  }
}