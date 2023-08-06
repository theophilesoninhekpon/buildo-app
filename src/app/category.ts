export class Category {
    constructor(
        public id: string,
        public title: string
    ) {}
}

export class PrimaryColor {
    constructor(
        public id: string,
        public hexCode: string
    ) {}
}

export class ColorList {
    constructor(
        public id: string,
        public hexCode: string
    ) {}
}

export class SecondaryColorList {
    constructor(
        public primaryId: string,
        public list: string[]
    ) {}
}

export class TertiaryColorList {
    constructor(
        public secondaryId: string,
        public list: string[]
    ) {}
}
