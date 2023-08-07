import { Injectable } from '@angular/core';
import { Color, SecondaryColorList } from './category';
import { primaryColors, secondaryColors } from './chat-data';
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
}
