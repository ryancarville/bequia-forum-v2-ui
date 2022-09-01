import useCookies from '@Hooks/cookies/useCookies.hook'
import useForm from '@Hooks/forms/useForm'
import commentModel, { ICommentsFormInputsModel } from '@Shared/forms/models/commentModel.model'
import React, { useEffect } from 'react'
import { ICommentsFormData } from './commentsForm.types'


function CommentFrom() {
  const commentModelInputs: ICommentsFormInputsModel = commentModel().getInputs();
  const cookies = useCookies();
  const currPostId: string = '32erw3e4fw3f423fw34fr42r3';
  const loggedInUserId: string = cookies.getItem('sub')
  const {inputsState, setInput, getInputsState, mapInputs} = useForm<ICommentsFormInputsModel,ICommentsFormData>(commentModelInputs);
  const { comment, postId, userId } = inputsState;

  useEffect(() => {
    if (!!!postId.value) setInput({ name: postId.name, value: currPostId });
  },[postId, currPostId, setInput])

  useEffect(() => {
    if (!!!userId.value) setInput({ name: userId.name, value: loggedInUserId });
  }, [loggedInUserId, userId, setInput]);


  const handleChange = (e: any) => {
    e.preventDefault();
    const {name, value} = e.target;
    setInput({name, value});
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const request = mapInputs();
    console.log(request)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type={'textarea'} onChange={handleChange} name={comment.name} value={comment.value}/>
      <button type={'submit'}>Post</button>
      <button type={'reset'}>Clear</button>
    </form>
  );
}
export default CommentFrom;