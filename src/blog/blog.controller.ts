import { Controller, Get, Head, HostParam, Ip, Redirect } from '@nestjs/common';

@Controller('blog')
export class BlogController {
  @Get()
  test(@HostParam() HostParam) {
    return HostParam;
  }

  @Head()
  head(){
    return "Head"
  }

  @Get("redirect")
  @Redirect()
  redirect(){
    return { url: 'https://nestjs.com' };
  }
}
