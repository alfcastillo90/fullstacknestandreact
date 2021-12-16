import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CharactersService {
   url = 'https://api.got.show/api/map/characters/';

  constructor(private httpService: HttpService) {
  }

  async findAll(): Promise<any> {
    return await this.httpService.get(this.url); 
  }

  async findOne(id: string): Promise<any> {
    return await this.httpService.get(`${this.url}${id}`); 
  }
}
