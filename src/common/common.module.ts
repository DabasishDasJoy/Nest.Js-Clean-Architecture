import { Module } from '@nestjs/common';
import * as injects from './index';

const moduleList = injects.ObjectUtils.getModuleList(injects);

@Module({
  imports: [
    ...moduleList,
  ],
})
export class CommonModule {}
