namespace SpriteKind {
    export const StatusBar = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    info.changeLifeBy(-1)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Crow.vy == 0) {
        Crow.vy = -200
        animation.runImageAnimation(
        Crow,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . f f b f b f f . . . . 
            . . . . . f 4 4 4 4 4 f . . . . 
            . . . . . f f f 4 f f f . . . . 
            . f f . . f f f f f f f . . f f 
            . f f f . f f f f f f f . f f f 
            . f f f f f f f f f f f f f f f 
            . . f f f f f f f f f f f f f . 
            . . . f f f f f f f f f f f . . 
            . . . . f f f f f f f f f . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . f 4 f f f 4 f . . . . 
            . . . . 4 4 4 4 . 4 4 4 4 . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . f f b f b f f . . . . 
            . . . . . f 4 4 4 4 4 f . . . . 
            . . . . . f f f 4 f f f . . . . 
            . . . . f f f f f f f f f . . . 
            . . . f f f f f f f f f f f . . 
            . . . f f f f f f f f f f f . . 
            . . f f f f f f f f f f f f f . 
            . . f f f f f f f f f f f f f . 
            . f f f . f f f f f f f . f f f 
            . f f . . f f f f f f f . . f f 
            . . . . . f 4 f f f 4 f . . . . 
            . . . . 4 4 4 4 . 4 4 4 4 . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`myTile2`, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.darkGroundCenter)
    sprite.destroy()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (RightDirection == 1) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . b b . . . 
            . . b 5 5 b . . 
            . b 5 d 1 5 b . 
            . c 5 3 1 5 c . 
            . . f 3 1 f . . 
            . . . f d . . . 
            . . . . . . . . 
            . . . . . . . . 
            `, Crow, 50, 0)
    } else if (LeftDirection == 1) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . b b . . . 
            . . b 5 5 b . . 
            . b 5 d 1 5 b . 
            . c 5 3 1 5 c . 
            . . f 3 1 f . . 
            . . . f d . . . 
            . . . . . . . . 
            . . . . . . . . 
            `, Crow, -50, 0)
    }
})
controller.anyButton.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, Crow)
    Crow.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . f f b f b f f . . . . 
        . . . . . f 4 4 4 4 4 f . . . . 
        . . . . . f f f 4 f f f . . . . 
        . . . . f f f f f f f f f . . . 
        . . . . f f f f f f f f f . . . 
        . . . . f f f f f f f f f . . . 
        . . . . f f f f f f f f f . . . 
        . . . . f f f f f f f f f . . . 
        . . . . f f f f f f f f f . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . . 4 . 4 . . . . . . 
        . . . . . 4 4 4 4 4 4 4 . . . . 
        `)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    LeftDirection = 1
    RightDirection = 0
    animation.runImageAnimation(
    Crow,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f b f f f f . . . . . 
        . 4 4 4 f f f f f f f . . . . . 
        . . . 4 f f f f f f f . . . . . 
        . . . 4 f f f f f f f . . . . . 
        . . . . f f f f f f f f f f f . 
        . . . . f f f f f f f f f f f . 
        . . . . f f f f f f f f f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . f f f f f f f f f . . . 
        . . . . f f f f f f f f f . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . 4 4 4 4 4 . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f . . . . . . . 
        . . . f f f f f f f . . . . . . 
        . . . f f b f f f f . . . . . . 
        4 4 4 f f f f f f f . . . . . . 
        . . 4 f f f f f f f . . . . . . 
        . . 4 f f f f f f f . . . . . . 
        . . . f f f f f f f f f f f f . 
        . . . . f f f f f f f f f f f . 
        . . 4 . f f f f f f f f f f . . 
        . . 4 . f f f f f f f f f f . . 
        . . 4 4 f f f f f f f f f . . . 
        . . 4 . f f f f f f f f f . . . 
        . . 4 . . f f f f f f f . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . 4 4 4 4 4 . . . . . . 
        `],
    100,
    true
    )
})
info.onCountdownEnd(function () {
    game.over(false)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    RightDirection = 1
    LeftDirection = 0
    animation.runImageAnimation(
    Crow,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . f f f f b f f . . . . 
        . . . . . f f f f f f f 4 4 4 . 
        . . . . . f f f f f f f 4 . . . 
        . . . . . f f f f f f f 4 . . . 
        . f f f f f f f f f f f . . . . 
        . f f f f f f f f f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f f f f f f f . . . . 
        . . . f f f f f f f f f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . . . 4 . . . . . . . 
        . . . . . . 4 4 4 4 4 . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f f f f . . . . 
        . . . . . . f f f f f f f . . . 
        . . . . . . f f f f b f f . . . 
        . . . . . . f f f f f f f 4 4 4 
        . . . . . . f f f f f f f 4 . . 
        . . . . . . f f f f f f f 4 . . 
        . f f f f f f f f f f f f . . . 
        . f f f f f f f f f f f . . . . 
        . . f f f f f f f f f f . 4 . . 
        . . f f f f f f f f f f . 4 . . 
        . . . f f f f f f f f f 4 4 . . 
        . . . f f f f f f f f f . 4 . . 
        . . . . f f f f f f f . . 4 . . 
        . . . . . . . . 4 . . . . . . . 
        . . . . . . 4 4 4 4 4 . . . . . 
        `],
    100,
    true
    )
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`myTile0`, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.darkGroundCenter)
    sprite.destroy()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Kürbis`, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.darkGroundCenter)
    info.changeScoreBy(1)
})
let projectile: Sprite = null
let LeftDirection = 0
let RightDirection = 0
let Crow: Sprite = null
scene.setBackgroundColor(12)
tiles.setTilemap(tilemap`Level1`)
Crow = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . f f b f b f f . . . . 
    . . . . . f 4 4 4 4 4 f . . . . 
    . . . . . f f f 4 f f f . . . . 
    . . . . f f f f f f f f f . . . 
    . . . . f f f f f f f f f . . . 
    . . . . f f f f f f f f f . . . 
    . . . . f f f f f f f f f . . . 
    . . . . f f f f f f f f f . . . 
    . . . . f f f f f f f f f . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . . 4 . 4 . . . . . . 
    . . . . . 4 4 4 4 4 4 4 . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(Crow, tiles.getTileLocation(1, 30))
scene.cameraFollowSprite(Crow)
controller.moveSprite(Crow, 75, 0)
Crow.ay = 500
info.startCountdown(100)
info.setLife(3)
