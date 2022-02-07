import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LearningModule } from './learning/learning.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [LearningModule],
})
export class AppModule {}
