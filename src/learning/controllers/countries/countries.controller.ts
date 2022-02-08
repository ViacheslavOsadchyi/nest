import { CountryCreatedDto } from './../../dto/country-created.dto';
import { CreateCountryDto } from './../../dto/create-country.dto';
import { CountriesService } from './../../services/countries/countries.service';
import { Body, ClassSerializerInterceptor, Controller, Get, Post, UseInterceptors } from '@nestjs/common';

@Controller('countries')
export class CountriesController {
    constructor(
        private countriesService: CountriesService,
    ) {}
    
    @Get('')
    getCountries () {
        return this.countriesService.findAll();
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Post()
    create(@Body() createCountryDto: CreateCountryDto): Promise<CountryCreatedDto> {
      return this.countriesService.create(createCountryDto);
    }
}
