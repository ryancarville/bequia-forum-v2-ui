import { CONFIG } from "@Shared/config"
import { HTTP_METHODS } from "@Shared/types/common.types"

function postServices() {
  const getPost = async (id: string) => {
    return await fetch(CONFIG.API_ENDPOINT + `/get-post/${id}`, {
      method: HTTP_METHODS.GET,
      headers: {
        'Content-type': 'application/json'
      },
      mode: 'cors',
      cache: 'default'
    }).then(result => result.json()).then(data => data).catch(err => err)
  }

  const listPosts = async (id?: string) => {
    return await fetch(CONFIG.API_ENDPOINT + `/list-posts/${id}`, {
      method: HTTP_METHODS.GET,
      headers: {
        'Content-type': 'application/json'
      },
      mode: 'cors',
      cache: 'default'
    })
      .then((result) => result.json())
      .then((data) => data)
      .catch((err) => err);
  }

  return { getPost, listPosts }
}

export default postServices;