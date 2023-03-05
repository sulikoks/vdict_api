import { Body, Controller, Get, Post } from "@nestjs/common"
import { RegNameDto } from "./dto/create-user.dto"
import { LoginUserDto } from "./dto/login-user.dto"


@Controller('user')
export class UserController {
   
    @Post('registration')
    user(@Body() regNameDto: RegNameDto): string {
        return `Ваш ник: ${regNameDto.nickName}! \n Ваш email: ${regNameDto.email} \n Ваш пароль ${regNameDto.password}`
    }

    @Post('login')
    login(@Body() loginUserDto: LoginUserDto): string {
        return `Ваш ник:${loginUserDto.nickName},\n Ваш пароль:${loginUserDto.password}`
    }
}

