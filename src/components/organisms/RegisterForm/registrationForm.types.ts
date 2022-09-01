import { IFileData } from "../../../shared/types/common.types"

export interface IRegistrationFormData {
  givenName: string;
  familyName: string;
  email: string;
  username: string;
  password: string;
  dob: string;
  tosAccepted: boolean;
  phoneNumber?: string;
  profilePhoto?: IFileData | null;
}