import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @MessagePattern('auth_register_user')
  registerUser() {
    return "register user";
  }

  @MessagePattern('auth_login_user')
  loginUser() {
    return "login user";
  }

  @MessagePattern('auth_verify_token')
  verifyToken() {
    return "verify token";
  }
}
