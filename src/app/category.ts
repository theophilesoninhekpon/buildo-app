export class Category {
    constructor(
        public id: string,
        public title: string
    ) {}
}

export class Color {
    constructor(
        public id: string,
        public hexCode: string
    ) {}
}

export class SecondaryColorList{
    constructor(
        public primaryId: string,
        public list: Color[]
    ) {}
}

export class TertiaryColorList {
    constructor(
        public primaryId: string,
        public secondaryId: string,
        public list: Color[]
    ) {}
}

    
  
    
  
    