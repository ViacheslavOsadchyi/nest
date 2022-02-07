import { CountryNames } from '../enums/country-names.enum';
import { IsEnum, IsNotEmpty } from 'class-validator';

// It's important for DTO to be a class and not an interface due to Typescript peculiarities
export class CreateCountryDto {
    @IsEnum(CountryNames)
    name: CountryNames;

    @IsNotEmpty()
    currency: string;

    @IsNotEmpty()
    president: string;
}