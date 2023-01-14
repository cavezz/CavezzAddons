/// <reference types="../CTAutocomplete" />
/// <reference lib="es2015" />

import config from "./config"; 
import RenderLib  from "../RenderLib/index.js";

const ghostBlockExclude = [
    "minecraft:lever",
    "minecraft:stone_button",
    "minecraft:chest",
    "minecraft:trapped_chest",
    "minecraft:skull",
    "minecraft:command_block"
];
const BP = Java.type("net.minecraft.util.BlockPos");
const mc = Client.getMinecraft()

const epsEntities = [
    "Wither Key", 
    "Blood Key", 
    "Shadow Assassin", 
    "Lost Adventurer", 
    "Angry Archaeologist", 
    "Frozen Adventurer", 
    "King Midas", 
    "Bonzo", 
    "Scarf", 
    "✯" 
];


register("command", () => config.openGUI()).setName("cavezz", true);


// Stonk GB

register("step", () => {
    if (config.stonkGhostBlocks) {
        const itemHolding = Player?.getHeldItem()?.getItem()?.getRegistryName()?.toLowerCase();

        if (!itemHolding) return; 

        if (itemHolding.includes("stonk") || itemHolding.includes("pickaxe")) {
            if (mc.field_71474_y.field_74313_G.func_151470_d()) {
                ghostBlocks();
            }
        }
    }
}); 

register("playerInteract", (action, pos, event) => {
    if (config.stonkGhostBlocks) {
        const itemHolding = Player?.getHeldItem()?.getItem()?.getRegistryName()?.toLowerCase();

        if (!itemHolding) return; 

        if (itemHolding.includes("stonk") || itemHolding.includes("pickaxe")) {
            if (action === "RIGHT_CLICK_BLOCK") {
                cancel(event); 
            }
        }
    }
});

// ------------------------------

// Auto Close Chest

register("postGuiRender", (x, y, gui) => {

    if (!gui) return; 

    const name = Player.getOpenedInventory()?.getName()?.toLowerCase()?.removeFormatting();

    // console.log(name);

    if (!name) return;

    if (config.autoCloseChest) {
        if (isOnIsland("cata")) {
            const chestsToExclude = ["wood", "gold", "diamond", "emerald", "bedrock", "obsidian"]; 

            if (name?.includes("chest") && !chestsToExclude.some(chest => name?.includes(chest))) {
                Client.currentGui.close(); 
            }
        }
    }
})

// ------------------------------

// ESP


register("renderEntity", (entity, pos, pTicks, event) => {
    if (!config.esp) return; 



    // ChatLib.chat(entity?.getClassName()?.toString()); 

   // if (entity.getClassName().toLowerCase().includes("entityarmorstand")) {
        if (epsEntities.some(eps => entity.getName().toLowerCase().includes(eps.toLowerCase()))) {
            const x = entity.getRenderX();
            const y = entity.getRenderY();
            const z = entity.getRenderZ();

            const espEntityData = {
                "Wither Key": {
                    red: config.witherKeyColor.getRed(),
                    green: config.witherKeyColor.getGreen(),
                    blue: config.witherKeyColor.getBlue(),
                    alpha: config.witherKeyColor.getAlpha(),
                    toggle: config.witherKey,
                    height: 1,
                    width: 1
                },
                "Blood Key": {
                    red: config.bloodKeyColor.getRed(),
                    green: config.bloodKeyColor.getGreen(),
                    blue: config.bloodKeyColor.getBlue(),
                    alpha: config.bloodKeyColor.getAlpha(),
                    toggle: config.bloodKey,
                    height: 1,
                    width: 1
                },
                "Shadow Assassin": {
                    red: config.shadowAssassinColor.getRed(),
                    green: config.shadowAssassinColor.getGreen(),
                    blue: config.shadowAssassinColor.getBlue(),
                    alpha: config.shadowAssassinColor.getAlpha(),
                    toggle: config.shadowAssassin,
                    height: 2,
                    width: 1
                },
                "Lost Adventurer": {
                    red: config.lostAdventurerColor.getRed(),
                    green: config.lostAdventurerColor.getGreen(),
                    blue: config.lostAdventurerColor.getBlue(),
                    alpha: config.lostAdventurerColor.getAlpha(),
                    toggle: config.lostAdventurer,
                    height: 2,
                    width: 1
                },
                "Angry Archaeologist": {
                    red: config.angryArcheologistColor.getRed(),
                    green: config.angryArcheologistColor.getGreen(),
                    blue: config.angryArcheologistColor.getBlue(),
                    alpha: config.angryArcheologistColor.getAlpha(),
                    toggle: config.angryArcheologist,
                    height: 2,
                    width: 1
                },
                "Frozen Adventurer": {
                    red: config.frozenAdventurerColor.getRed(),
                    green: config.frozenAdventurerColor.getGreen(),
                    blue: config.frozenAdventurerColor.getBlue(),
                    alpha: config.frozenAdventurerColor.getAlpha(),
                    toggle: config.frozenAdventurer,
                    height: 2,
                    width: 1
                },
                "King Midas": {
                    red: config.kingMidasColor.getRed(),
                    green: config.kingMidasColor.getGreen(),
                    blue: config.kingMidasColor.getBlue(),
                    alpha: config.kingMidasColor.getAlpha(),
                    toggle: config.kingMidas,
                    height: 2,
                    width: 1
                },
                "Bonzo": {
                    red: config.bonzoColor.getRed(),
                    green: config.bonzoColor.getGreen(),
                    blue: config.bonzoColor.getBlue(),
                    alpha: config.bonzoColor.getAlpha(),
                    toggle: config.bonzo,
                    height: 2,
                    width: 1
                },
                "Scarf": {
                    red: config.scarfColor.getRed(),
                    green: config.scarfColor.getGreen(),
                    blue: config.scarfColor.getBlue(),
                    alpha: config.scarfColor.getAlpha(),
                    toggle: config.scarf,
                    height: 2,
                    width: 1
                },
                "✯": {
                    red: config.starMobsColor.getRed(),
                    green: config.starMobsColor.getGreen(),
                    blue: config.starMobsColor.getBlue(),
                    alpha: config.starMobsColor.getAlpha(),
                    toggle: config.starMobs,
                    height: 2,
                    width: 1
                }
            }

            for (ent in espEntityData) {
                if (entity.getName().toLowerCase().includes(ent.toLowerCase())) {
                    if (espEntityData[ent].toggle) {
                        RenderLib.drawEspBox(x, y, z, espEntityData[ent].width, espEntityData[ent].height, espEntityData[ent].red, espEntityData[ent].green, espEntityData[ent].blue, espEntityData[ent].alpha, true);
                    }
                }
            }
        }
    //}   
})

const isOnIsland = (island) => {
    const scoreboard = Scoreboard.getLines().map(line => line.getName()?.removeFormatting()?.toLowerCase()); 
    return !!scoreboard.find(name => name.includes(island.toLowerCase()));
}; 

const ghostBlocks = () => {
    const lookingAt = Player.lookingAt(); 
    if (lookingAt.getClass() === Block) {
            if (!ghostBlockExclude.includes(lookingAt.type.getRegistryName())) {
                World.getWorld().func_175698_g(new BP(lookingAt.getX(), lookingAt.getY(), lookingAt.getZ()));
            }
    }
}; 