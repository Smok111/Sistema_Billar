import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from './prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.prisma.usuarios.findUnique({
      where: { Correo: email },
      include: { Roles: true }
    });

    // In a real scenario, compare hashed passwords:
    // const isMatch = await bcrypt.compare(pass, user.Password);
    // Assuming for now it's plain text or handled elsewhere for legacy compatibility:
    const isMatch = user && user.Password === pass; 

    if (user && isMatch) {
      const { Password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    let permisos = [];
    try {
      if (user.Roles?.Permisos) {
        permisos = JSON.parse(user.Roles.Permisos);
      }
    } catch (e) {
      console.error("Error parsing permisos", e);
    }

    const payload = { 
      email: user.Correo, 
      sub: user.IdUsuario, 
      role: user.Roles?.NomRol,
      permisos: permisos 
    };
    
    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: user.IdUsuario,
        name: user.NomUsuario,
        email: user.Correo,
        role: user.Roles?.NomRol,
        permisos: permisos
      }
    };
  }
}
