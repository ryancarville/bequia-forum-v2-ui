import { IRegistrationFormData } from "../../components/organisms/RegisterForm/registrationForm.types"
import { HTTP_METHODS } from "../../shared/types/common.types"

class RegistrationServices {
  public async createNewUser(userPayload: IRegistrationFormData): Promise<any> {
    console.log(userPayload)
    try {
      return await fetch(process.env.API_ENDPOINT + '/register', {
        method: HTTP_METHODS.POST,
        body: JSON.stringify(userPayload),
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        cache: 'default'
      })
        .then((result) => result.json())
        .then((data) => data)
    } catch(err) {
      console.log(err)
      return err;
    }
  }
}

export default RegistrationServices;