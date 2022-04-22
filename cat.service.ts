/* import { Injectable } from '@nestjs/common';
import {CATS} from './car.mock';
@Injectable()
export class CatService {
    private cats = CATS;
    public async getCats(){
       return this.cats; 
    }
} */

import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto';
import { Cat } from './cat.entity';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: CreateCatDto): Cat {
    this.cats.push(cat);
    return cat;
  }

  findOne(id: number): Cat {
    return this.cats[id];
  }
}