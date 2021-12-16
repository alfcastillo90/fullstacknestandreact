import { IsMongoId } from 'class-validator';

export class GetCharacterById {
  @IsMongoId()
  id: string;
}
