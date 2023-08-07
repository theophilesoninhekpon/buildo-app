import { Injectable } from '@angular/core';
import { Color, SecondaryColorList } from './category';
import { primaryColors, secondaryColors, tertiaryColors } from './chat-data';
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  
  constructor() { }

  getPrimaryColors(): Color[] {

    return primaryColors;

  }

  getSecondaryColors(id: string): Color[] | undefined{
    return secondaryColors.find((element) => element.primaryId === id)?.list;
    
  }

  getTertiaryColors(primary: string, secondary: string): Color[] | undefined{

    return tertiaryColors.find((element) => element.primaryId === primary && element.secondaryId === secondary)?.list;
    
  }

}
