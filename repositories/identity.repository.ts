import { UserIdentity } from '../interfaces/identity.interfaces';

import { IdentityModel } from '../models'

export interface IdentityRepository {
  getByEmail: (email: string) => Promise<UserIdentity | undefined>;
  addUser: (email: string, password: string) => Promise<UserIdentity>;
}

export default class IdentityrepositoryImpl implements IdentityRepository {

  async addUser(email: string, password: string): Promise<UserIdentity> {
    const user = new IdentityModel({
      email, password, isVerified: false
    });

    const res = await user.save();

    return {
      id: res._id,
      email: res.email,
      isVerified: res.isVerified,
      createdAt: '',
      updatedAt: '',
    }
  }

  async getByEmail(userEmail: string): Promise<UserIdentity | undefined> {
    const results = await IdentityModel.find({ email: userEmail }).exec();

    if (!results.length) {
      return;
    }

    const data = results[0];

    return {
      id: data._id,
      email: data.email,
      isVerified: data.isVerified,
      createdAt: '',
      updatedAt: '',
    }
  }

}
