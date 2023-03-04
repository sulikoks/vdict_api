import { Get, Controller } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  ping() {
    return `Workers is alive. Timestamp: ${new Date()}`;
  }

  @Get('healthz')
  checkHealth() {
    return { successfully: true };
  }
}
