import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async login(phone: string, password: string): Promise<boolean> {
    throw new Error('');
  }
}
