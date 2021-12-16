import { Controller, Get, Param } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { GetCharacterById } from './dto/character.dto';

@Controller('characters')
export class CharactersController {
  constructor(private readonly charactersService: CharactersService) {}

  @Get()
  findAll() {
    return this.charactersService.findAll();
  }

  @Get(':id')
  findOne(@Param() param: GetCharacterById) {
    return this.charactersService.findOne(param.id);
  }
}
