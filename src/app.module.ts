import { Module } from '@nestjs/common';
import * as index from './index';

const moduleList = index.ObjectUtils.getModuleList(index);

@Module({
  imports: [
    ...moduleList
  ],
  controllers: [index.AppController],
  providers: [index.AppService],
})
export class AppModule {}
