import { Controller, Get, Redirect } from '@nestjs/common';

@Controller('blog')
export class BlogController {
  // @Get()
  // test(@HostParam() HostParam) {
  //   return HostParam;
  // }

  @Get('redirect')
  @Redirect()
  redirect() {
    return { url: 'https://nestjs.com' };
  }
}
