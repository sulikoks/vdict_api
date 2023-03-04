// import { JwtModuleOptions, JwtOptionsFactory } from '@nestjs/jwt';
// import { Inject } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';
// import { Configuration } from './configuration';
//
// export class JwtFactory implements JwtOptionsFactory {
//   constructor(@Inject(ConfigService) private config: ConfigService<Configuration>) {}
//
//   createJwtOptions(): JwtModuleOptions {
//     return {
//       secret: this.config.get('grpcJwt.secret', { infer: true }),
//       signOptions: {
//         expiresIn: this.config.get('grpcJwt.expiresIn', { infer: true }),
//       },
//     };
//   }
// }
