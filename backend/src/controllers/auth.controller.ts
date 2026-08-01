import { Controller, Post, Body, UnauthorizedException, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from '../services/auth.service';

@Controller('api/acceso')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Body() signInDto: Record<string, any>) {
    const user = await this.authService.validateUser(signInDto.email, signInDto.password);
    if (!user) {
      throw new UnauthorizedException('Credenciales inválidas');
    }
    return this.authService.login(user);
  }

  @Post('logout')
  async logout() {
    // Para JWT stateless, el logout se maneja comúnmente en el frontend borrando el token.
    // Aquí podemos devolver un simple mensaje de éxito.
    return { message: 'Sesión cerrada exitosamente' };
  }
}
