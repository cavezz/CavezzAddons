import { Color } from "../Vigilance";
import {
    @ButtonProperty,
Color,
    @ColorProperty,
@PercentSliderProperty,
@SelectorProperty,
@TextProperty,
@SwitchProperty,
@SliderProperty,
@Vigilant,
@CheckboxProperty,
@ParagraphProperty
} from '../Vigilance';


@Vigilant("CavezzModule")


class Settings {

    constructor() {
        this.initialize(this);
    }

    @SwitchProperty({
        name: "Stonk Ghost Blocks",
        category: "General",
        description: "Stonk Ghost Blocks"
    })
    stonkGhostBlocks = false;


    @SwitchProperty({
        name: "Auto Close Chest",
        category: "General",
        description: "Auto Close Chest"
    })
    autoCloseChest = false;


    @SwitchProperty({
        name: "ESP",
        category: "General",
        description: "ESP",
    })
    esp = false;

    @SwitchProperty({
        name: "Wither Key ESP",
        category: "Mob ESP",
        description: "Wither Key ESP",
        subcategory: "Key ESP"
    })
    witherKey = false;

    @ColorProperty({
        name: "Wither Key ESP Color",
        category: "Mob ESP",
        description: "Wither Key ESP Color",
        subcategory: "Key ESP"
    })
    witherKeyColor = Color.RED;

    @SwitchProperty({
        name: "Blood Key ESP",
        category: "Mob ESP",
        description: "Blood Key ESP",
        subcategory: "Key ESP"
    })
    bloodKey = false;

    @ColorProperty({
        name: "Blood Key ESP Color",
        category: "Mob ESP",
        description: "Blood Key ESP Color",
        subcategory: "Key ESP"
    })
    bloodKeyColor = Color.RED;

    @SwitchProperty({
        name: "Shadow Assassin ESP",
        category: "Mob ESP",
        description: "Shadow Assassin ESP",
        subcategory: "Mini Boss ESP"
    })
    shadowAssassin = false;

    @ColorProperty({
        name: "Shadow Assassin ESP Color",
        category: "Mob ESP",
        description: "Shadow Assassin ESP Color",
        subcategory: "Mini Boss ESP"
    })
    shadowAssassinColor = Color.RED;

    @SwitchProperty({
        name: "Lost Adventurer ESP",
        category: "Mob ESP",
        description: "Lost Adventurer ESP",
        subcategory: "Mini Boss ESP"
    })
    lostAdventurer = false;

    @ColorProperty({
        name: "Lost Adventurer ESP Color",
        category: "Mob ESP",
        description: "Lost Adventurer ESP Color",
        subcategory: "Mini Boss ESP"
    })
    lostAdventurerColor = Color.RED;

    @SwitchProperty({
        name: "Angry Archeologist ESP",
        category: "Mob ESP",
        description: "Angry Archeologist ESP",
        subcategory: "Mini Boss ESP"
    })
    angryArcheologist = false;

    @ColorProperty({
        name: "Angry Archeologist ESP Color",
        category: "Mob ESP",
        description: "Angry Archeologist ESP Color",
        subcategory: "Mini Boss ESP"
    })
    angryArcheologistColor = Color.RED;

    @SwitchProperty({
        name: "Frozen Adventurer ESP",
        category: "Mob ESP",
        description: "Frozen Adventurer ESP",
        subcategory: "Mini Boss ESP"
    })
    frozenAdventurer = false;

    @ColorProperty({
        name: "Frozen Adventurer ESP Color",
        category: "Mob ESP",
        description: "Frozen Adventurer ESP Color",
        subcategory: "Mini Boss ESP"
    })
    frozenAdventurerColor = Color.RED;

    @SwitchProperty({
        name: "King Midas ESP",
        category: "Mob ESP",
        description: "King Midas ESP",
        subcategory: "Mini Boss ESP"
    })
    kingMidas = false;

    @ColorProperty({
        name: "King Midas ESP Color",
        category: "Mob ESP",
        description: "King Midas ESP Color",
        subcategory: "Mini Boss ESP"
    })
    kingMidasColor = Color.RED;

    @SwitchProperty({
        name: "Bonzo ESP",
        category: "Mob ESP",
        description: "Bonzo ESP",
        subcategory: "Boss ESP"
    })
    bonzo = false;

    @ColorProperty({
        name: "Bonzo ESP Color",
        category: "Mob ESP",
        description: "Bonzo ESP Color",
        subcategory: "Boss ESP"
    })
    bonzoColor = Color.RED;

    @SwitchProperty({
        name: "Scarf ESP",
        category: "Mob ESP",
        description: "Scarf ESP",
        subcategory: "Boss ESP"
    })
    scarf = false;

    @ColorProperty({
        name: "Scarf ESP Color",
        category: "Mob ESP",
        description: "Scarf ESP Color",
        subcategory: "Boss ESP"
    })
    scarfColor = Color.RED;

    @SwitchProperty({
        name: "Star Mobs ESP",
        category: "Mob ESP",
        description: "Star Mobs ESP",
        subcategory: "Star Mobs ESP"
    })
    starMobs = false;

    @ColorProperty({
        name: "Star Mobs ESP Color",
        category: "Mob ESP",
        description: "Star Mobs ESP Color",
        subcategory: "Star Mobs ESP"
    })
    starMobsColor = Color.RED;



}

export default new Settings();