import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {

  constructor() { }

}

const IMAGES = [
  {"id": 1, "category": "japanese food", "caption": "Traditions are taken very seriously in Japan, and one of the most noticeable examples is Japanese food", "url": "assets/img/jap_food_01.jpg" },
  {"id": 2, "category": "japanese food", "caption": "Sushi conveyor-belt restaurants in Taiwan", "url": "assets/img/jap_food_02.jpg" },
  {"id": 3, "category": "japanese food", "caption": "Sushi & traditional dishes prepared fresh", "url": "assets/img/jap_food_03.jpg" },
  {"id": 4, "category": "model", "caption": "เคยไหม? เวลาเมา แล้วชอบนึกถึงแฟนเก่า", "url": "assets/img/model_01.jpg" },
  {"id": 5, "category": "model", "caption": "Vietnam's finest!", "url": "assets/img/model_02.jpg" },
  {"id": 6, "category": "model", "caption": "China's finest !", "url": "assets/img/model_03.jpg" },
  {"id": 7, "category": "sportscar", "caption": "An Arcfox-7 electric sports car, by Chinese car maker BAIC, at Beijing", "url": "assets/img/sportscar_01.jpg" },
  {"id": 8, "category": "sportscar", "caption": "They're a common sight outside of Beijing's luxury car clubs", "url": "assets/img/sportscar_02.jpg" },
  {"id": 9, "category": "sportscar", "caption": "Ever wondered what a 40+ car Lamborghini Traffic jam would look like? Wonder no longer. 'cause here one is...", "url": "assets/img/sportscar_03.jpg" },
  {"id": 10, "category": "korean food", "caption": "This Halal Korean restaurant offers army stew, seafood pancake, bibimbap, and many more tasty dishes!", "url": "assets/img/korea_food_01.jpg" },
  {"id": 11, "category": "korean food", "caption": "Perfect excuse for spicy tofu soup! ", "url": "assets/korea_food_02.jpg" },
  {"id": 12, "category": "vietnamese food", "caption": "best Vietnamese food in Ottawa: bun rieu cua", "url": "assets/img/viet_food_01.jpg" },
  {"id": 13, "category": "vietnamese food", "caption": "I've arrived in New Orleans with food on my mind, and MoPho is dishing what I crave: a fragrant, deeply spiced bowl of pho. As I sip my boozy bubble tea", "url": "assets/img/viet_food_02.jpg" },
  {"id": 14, "category": "vietnamese food", "caption": "Bánh xèo", "url": "assets/img/viet_food_03.jpg" },
  {"id": 15, "category": "tourism", "caption": "APEC Solidifies Tourism Growth Amid Digital Disruptions", "url": "assets/img/tourism_01.jpg" },
  {"id": 16, "category": "tourism", "caption": "Its harvest time for travel and tourism startups, as investor confidence spires through the roof in the form of funding. We look at how the sector has grown by leaps and bound", "url": "assets/img/tourism_02.jpg" },
  {"id": 17, "category": "tourism", "caption": "Bali's Travel and Tourism: Beautiful and Exotic Kuta Beach", "url": "assets/img/tourism_03.jpg" },
  {"id": 18, "category": "tourism", "caption": "tourists being tourists", "url": "assets/img/tourism_04.jpg" },
];
