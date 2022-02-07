import { CreateCountryDto } from './../../dto/create-country.dto';
import { CountriesService } from './../../services/countries/countries.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('countries')
export class CountriesController {
    constructor(
        private countriesService: CountriesService,
    ) {}
    
    @Get('')
    getCountries () {
        return this.countriesService.findAll();
    }

    @Post()
    create(@Body() createCountryDto: CreateCountryDto) {
      this.countriesService.create(createCountryDto);
    }
}
