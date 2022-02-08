import { Exclude } from 'class-transformer';
import { CountryNames } from './../enums/country-names.enum';

export class CountryCreatedDto {
    name: CountryNames;
    currency: string;
    
    @Exclude()
    president: string;

    constructor(props) {
        Object.assign(this, props);
    }
}