// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "Level1":
            case "Level1":return tiles.createTilemap(hex`100020000e06060606060606060606060606060601060606060606060606060d06060605060d010606060606060606010101010106010606060606060601060606060606060606060606060606060606060606060106060606060606060601060606060e06010606060606060d010606060606010606060606060a060106060606010606060601060601010106060609060606060601060606060606060606010606010106060606060606060606060606060606010c0606060606060606060606060708060106060606060606060606060101010606060606060606010a0606060606060101010101060606010106060606060606060606010606060601010606060606060e070901060606060601010606060606010101010606060606060101060606060606060606060606060606060606060106060606060606060606060d01010106060606060606060606060601010101060106060606060606060a060606060e0c060606060606060601010106060606010606060606060601060606060606060708090606060606060606070b0b0b09010101010101060601010101010101010106060606060c06060606010101010101060606060601060606060601010101010606010a010a0106060606060101010106010a010a0e0601060606060601010106060606060606060606070808090103040404040404040404040404040402`, img`
................
2...............
..2........22222
.2.......2......
................
2.........2.....
.2.......2.....2
........2....2..
..2..222........
.2.........2..22
................
2...............
.2...........222
........2.......
22222...22......
....2....22.....
....2.....22....
.2222......22...
................
2............222
............2222
.2..............
.........222....
2.......2.......
................
222222..22222222
2..........22222
2.....2.....2222
2..2.2.2.....222
2.2.2...2.....22
2..............2
2222222222222222
`, [myTiles.transparency16,sprites.builtin.brick,sprites.builtin.oceanSand7,sprites.builtin.oceanSand5,sprites.builtin.oceanSand6,myTiles.tile1,sprites.dungeon.darkGroundCenter,sprites.builtin.coral3,sprites.builtin.coral4,sprites.builtin.coral5,sprites.builtin.coral0,sprites.builtin.coral2,myTiles.tile2,myTiles.tile4,myTiles.tile3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile2":
            case "tile4":return tile4;
            case "Kürbis":
            case "tile3":return tile3;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
