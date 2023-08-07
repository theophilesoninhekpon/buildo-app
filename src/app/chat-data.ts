import { Color, SecondaryColorList, TertiaryColorList } from "./category"

export const primaryColors: Color[] = [

    {
        'id': '1',
        'hexCode': '#f95568'
    },
    {
        'id': '1',
        'hexCode': '#452636'
    },
    {
        'id': '1',
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

    // Couleur secondaire 1
    {               
        'primaryId': '1',
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
        'primaryId': '1',
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
        'primaryId': '1',
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


    
]