import { CountriesController } from './controllers/countries/countries.controller';
import { CountriesService } from './services/countries/countries.service';
import { Module } from '@nestjs/common';


@Module({
  controllers: [CountriesController],
  providers: [CountriesService],
  exports: [
    CountriesService,
  ],
})
export class LearningModule {
}
