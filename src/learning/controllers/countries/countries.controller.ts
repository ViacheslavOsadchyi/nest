import { CountriesService } from './../../services/countries/countries.service';
import { Controller, Get } from '@nestjs/common';

@Controller('countries')
export class CountriesController {
    constructor(
        private countriesService: CountriesService,
    ) {}
    
    @Get('')
    getCountries () {
        return this.countriesService.findAll();
    }
}
