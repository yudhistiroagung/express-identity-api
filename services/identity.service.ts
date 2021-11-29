import { UserIdentity } from '../interfaces';

import constants from '../constants';
import { IdentityRepository } from '../repositories/identity.repository';

const { ERROR_MESSAGES } = constants;

type RegisterPayload = Pick<UserIdentity, 'email'> & { password: string };
type RegisterResponse = Omit<UserIdentity, 'password'>;

type Injectables = {
  identityRepository: IdentityRepository,
}

export interface IdentityService {
  register: (payload: RegisterPayload) => Promise<RegisterResponse>;
}

export default class IdentityServiceImpl implements IdentityService {

  private identityRepo: IdentityRepository;

  constructor({ identityRepository }: Injectables) {
    this.identityRepo = identityRepository;
  }

  async register({ email, password }: RegisterPayload): Promise<RegisterResponse> {

    const user = await this.identityRepo.getByEmail(email);
    if (user) {
      throw new Error(ERROR_MESSAGES.EMAIL_ALREADY_EXIST);
    }

    const newUser = await this.identityRepo.addUser(email, password);

    return newUser
  }

}