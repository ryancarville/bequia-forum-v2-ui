import { InputDataModel } from '@Shared/types/forms/inputs.types'
import { IBaseFormModel } from '@Shared/types/forms/model.types'
import { EValidationTypes } from '@Shared/types/validation.types'

export interface ICommentsFormInputsModel {
  comment: InputDataModel<string>;
  postId: InputDataModel<string>;
  userId: InputDataModel<string>;
}

export default function commentModel(): IBaseFormModel<ICommentsFormInputsModel> {

  const comment: ICommentsFormInputsModel['comment'] = {
    name: 'comment',
    value: '',
    validations: [{type: EValidationTypes.REQUIRED}, {type: EValidationTypes.MAX_CHARACTERS, assertion: {maxLength: 250}}]
  }

  const postId: ICommentsFormInputsModel['postId'] = {
    name: 'postId',
    value: '',
    validations: [{type: EValidationTypes.REQUIRED}]
  }

  const userId: ICommentsFormInputsModel['userId'] = {
    name: 'userId',
    value: '',
    validations: [{ type: EValidationTypes.REQUIRED }]
  };

  const getInputs = (): ICommentsFormInputsModel => {
    return {
      comment,
      postId,
      userId
    }
  };

  return { getInputs };
}
