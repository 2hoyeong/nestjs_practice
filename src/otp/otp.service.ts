import { Injectable } from '@nestjs/common';
import { authenticator } from 'otplib';

@Injectable()
export class OtpService {
  private readonly serviceName: string = 'nestjs-playground';

  generateSecret(len = 32): string {
    return authenticator.generateSecret(len);
  }

  generateOtpPath(user: string, secret: string): string {
    return authenticator.keyuri(user, this.serviceName, secret); // 👈  Property 'keyuri' does not exist on type 'Authenticator<AuthenticatorOptions<string>>'.ts(2339)
  }

  checkOtp(token: string, secret: string): boolean {
    if (authenticator.check(token, secret)) { // 👈  Property 'check' does not exist on type 'Authenticator<AuthenticatorOptions<string>>'.ts(2339)
      return true;
    }
    throw new Error('Otp is not correct');
  }
}
