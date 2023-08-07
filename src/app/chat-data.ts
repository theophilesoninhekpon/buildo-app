import { Color, SecondaryColorList, TertiaryColorList } from "./category"

export const primaryColors: Color[] = [

    {
        'id': '1',
        'hexCode': '#f95568'
    },
    {
        'id': '2',
        'hexCode': '#452636'
    },
    {
        'id': '3',
        'hexCode': '#563258'
    },

];


// Tableau contenant les couleurs secondaires liées à chaque couleur primaire
export const secondaryColors: SecondaryColorList[] =[

    {               //vert
        'primaryId': '1',
        'list': [
            {
                'id': '1',
                'hexCode': '#666e61'
            },
            {
                'id': '2',
                'hexCode': '#f4dd13'
            },
            {
                'id': '3',
                'hexCode': '#236eff'
            }
        ]
    },
    {               //jaune
        'primaryId': '2',
        'list': [
            {
                'id': '1',
                'hexCode': '#236eff'
            },
            {
                'id': '2',
                'hexCode': '#800000' 
            },
            {
                'id': '3',
                'hexCode': '#800000' 
            }
        ]
    },
    {               //bleu
        'primaryId': '3',
        'list': [
            {
                'id': '1',
                'hexCode': '#954b00'
            },
            {
                'id': '2',
                'hexCode': '#f4dd13' 
            },
            {
                'id': '2',
                'hexCode': '#f4dd13' 
            }
        ]
    }
    
]

// Tableau contenant les couleurs secondaires liées à chaque couleur primaire
export const tertiaryColors: TertiaryColorList[] =[

    // Couleur primaire 1
    {               
        'primaryId': '1',
        'secondaryId': '1',
        'list': [
            {
                'id': '1',
                'hexCode': '#555e61'
            },
            {
                'id': '2',
                'hexCode': '#f4d25e'
            },
            {
                'id': '3',
                'hexCode': '#2325d3'
            }
        ]
    },
    {               
        'primaryId': '1',
        'secondaryId': '2',
        'list': [
            {
                'id': '1',
                'hexCode': '#589c2c'
            },
            {
                'id': '2',
                'hexCode': '#f4dd13'
            },
            {
                'id': '3',
                'hexCode': '#23ffff'
            }
        ]
    },
    {               
        'primaryId': '1',
        'secondaryId': '3',
        'list': [
            {
                'id': '1',
                'hexCode': '#00021'
            },
            {
                'id': '2',
                'hexCode': '#dfff27'
            },
            {
                'id': '3',
                'hexCode': '#236eff'
            }
        ]
    },


    // Couleur primaire 2
    {               
        'primaryId': '2',
        'secondaryId': '1',
        'list': [
            {
                'id': '1',
                'hexCode': '#446e61'
            },
            {
                'id': '2',
                'hexCode': '#f4dd13'
            },
            {
                'id': '3',
                'hexCode': '#236eff'
            }
        ]
    },
    {               
        'primaryId': '2',
        'secondaryId': '2',
        'list': [
            {
                'id': '1',
                'hexCode': '#666e61'
            },
            {
                'id': '2',
                'hexCode': '#f4dd13'
            },
            {
                'id': '3',
                'hexCode': '#236eff'
            }
        ]
    },
    {               
        'primaryId': '2',
        'secondaryId': '3',
        'list': [
            {
                'id': '1',
                'hexCode': '#666e61'
            },
            {
                'id': '2',
                'hexCode': '#f4dd13'
            },
            {
                'id': '3',
                'hexCode': '#236eff'
            }
        ]
    },

    // Couleur primaire 3
    {               
        'primaryId': '3',
        'secondaryId': '1',
        'list': [
            {
                'id': '1',
                'hexCode': '#666e61'
            },
            {
                'id': '2',
                'hexCode': '#f4dd13'
            },
            {
                'id': '3',
                'hexCode': '#236eff'
            }
        ]
    },
    {               
        'primaryId': '3',
        'secondaryId': '2',
        'list': [
            {
                'id': '1',
                'hexCode': '#666e61'
            },
            {
                'id': '2',
                'hexCode': '#f4dd13'
            },
            {
                'id': '3',
                'hexCode': '#236eff'
            }
        ]
    },
    {               
        'primaryId': '3',
        'secondaryId': '3',
        'list': [
            {
                'id': '1',
                'hexCode': '#666e61'
            },
            {
                'id': '2',
                'hexCode': '#f4dd13'
            },
            {
                'id': '3',
                'hexCode': '#236eff'
            }
        ]
    },


    
]