import { Injectable } from '@angular/core';
import { Category, PrimaryColor, SecondaryColorList } from './category';
import { categories, primaryColors } from './chat-data';
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  
  constructor() { }

  getCategories(): Category[]{

    return categories;

  } 

  getPrimaryColors(): PrimaryColor[] {

    return primaryColors;

  }

  // getSecondaryColors(id: string): ColorList[] {

  //   return primaryColors.find((element) => element.id === id).list;
    
  // }
}
