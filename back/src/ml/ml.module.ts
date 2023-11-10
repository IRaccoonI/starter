import { MlService } from '@/ml/ml.service';
import { SpidersModule } from '@/spiders/spiders.module';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [HttpModule, ConfigModule, SpidersModule],
  providers: [MlService],
  exports: [MlService],
})
export class MlModule {}
