import { Injectable } from '@angular/core';
import { Credentials } from './credentials';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor() { }

  async create({ name, email, password }: Credentials) {}

  async login({ email, password }: Pick<Credentials, 'email' | 'password'>) {}

  async resetPassword({ email }: Pick<Credentials, 'email'>) {}
}
