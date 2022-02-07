import { CreateCountryDto } from './../../dto/create-country.dto';
import { Injectable } from '@nestjs/common';
import countries from 'src/learning/consts/countries';

@Injectable()
export class CountriesService {
    private countries;

    constructor() {
        // App should be stateless, but I's just for learning purposes
        this.countries = countries;
    }

    async findAll () {
        return countries;
    }

    async create (createCountryDto: CreateCountryDto) {
        this.countries.push(createCountryDto);
    }
}
