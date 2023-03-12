import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common"
import { RegNameDto } from "./dto/create-user.dto"
import { LoginUserDto } from "./dto/login-user.dto"
import { UpdateUserDto } from "./dto/update-user.dto"
import { User } from "./schema/user.schema"
import { UserService } from "./user.service"


@Controller('user')
export class UserController {

    constructor(private readonly usersService: UserService) {
    }
    @Get('all')
    getall(): Promise<User[]> {
        return this.usersService.getall()
    }

    @Get(':id')
    getOne(@Param('id') id: string): Promise<User> {
        return this.usersService.getById(id)
    }
   
    @Post('registration')
    registration(@Body() regNameDto: RegNameDto): Promise<User> {
        return this.usersService.create(regNameDto)
        //return `Ваш ник: ${regNameDto.nickName}! \n Ваш email: ${regNameDto.email} \n Ваш пароль ${regNameDto.password}`
    }

    @Post('login')
    login(@Body() loginUserDto: LoginUserDto): Promise<User> {
        return this.usersService.login(loginUserDto)
        //return `Ваш ник:${loginUserDto.nickName},\n Ваш пароль:${loginUserDto.password}`
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<User> {
        return this.usersService.remove(id)
        //return 'Remove ' + id
    }

    @Put(':id')
    Put(@Body() updateUserDto: UpdateUserDto, @Param('id') id:string): Promise<User> { 
        return this.usersService.update(id, updateUserDto)
        //return 'Updated ' + id
    }

 }

