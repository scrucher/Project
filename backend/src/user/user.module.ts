import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtStrategy } from './jwt.startegy';
import { UsersController } from './user.controller';
import { User, UserSchema } from './user.schema';
import { UserService } from './user.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
            secret: 'topsecret51',
            // signOptions: { expiresIn: '360s' }
        }),
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
    ],
    providers: [UserService, JwtStrategy,],
    controllers: [UsersController],
    exports: [
        JwtStrategy,
        PassportModule,
    ],
})
export class UserModule { }

