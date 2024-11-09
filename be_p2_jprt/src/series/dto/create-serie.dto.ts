import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty } from 'class-validator';
import { IsDefined, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateSerieDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo titulo es obligatorio' })
  @IsString({ message: 'El campo titulo debe ser tipo cadena' })
  @MaxLength(250, { message: 'El campo titulo excede los 250 caractares' })
  readonly titulo: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo sinopsis es obligatorio' })
  @IsString({ message: 'El campo sinopsis debe ser tipo cadena' })
  @MaxLength(5000, { message: 'El campo sinopsis excede los 5000 caractares' })
  readonly sinopsis: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo director es obligatorio' })
  @IsString({ message: 'El campo director debe ser tipo cadena' })
  @MaxLength(100, { message: 'El campo director excede los 100 caractares' })
  readonly director: string;

  @ApiProperty()
  @IsDefined({ message: 'El campo temporadas debe estar definido' })
  @IsNumber({}, { message: 'El campo temporadas debe ser de tipo numérico' })
  readonly temporadas: number;

  @ApiProperty({ example: 'yyyy-mm-dd' })
  @IsNotEmpty({ message: 'El campo fechaEstreno debe estar definido' })
  @IsDateString({}, { message: 'El campo fechaEstreno debe ser de tipo fecha' })
  readonly fechaEstreno: Date;
}
