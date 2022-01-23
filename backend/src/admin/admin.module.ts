import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtStrategy } from './jwt.startegy';
import { AdminsController } from './admin.controller';
import { Admin, AdminSchema } from './admin.schema';
import { AdminService } from './admin.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'topsecret51',
      // signOptions: { expiresIn: '360s' }
    }),
    MongooseModule.forFeature([{ name: Admin.name, schema: AdminSchema }]),
  ],
  providers: [AdminService, JwtStrategy],
  controllers: [AdminsController],
  exports: [JwtStrategy, PassportModule],
})
export class AdminModule {}
