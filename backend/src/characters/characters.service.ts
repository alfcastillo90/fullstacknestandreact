import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';

@Injectable()
export class CharactersService {
  url = 'https://api.got.show/api/map/characters/';

  constructor(private httpService: HttpService) {}

  async findAll(): Promise<AxiosResponse<any[]>> {
    const request = await this.httpService.get(this.url).toPromise();
    return request.data;
  }

  async findOne(id: string): Promise<AxiosResponse<any[]>> {
    const url = `${this.url}/byId/${id}`;
    console.log(url);
    const request = await this.httpService.get(url).toPromise();
    return request.data;
  }
}
