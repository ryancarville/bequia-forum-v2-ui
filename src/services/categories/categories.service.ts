import { CONFIG } from "@Shared/config"
import { HTTP_METHODS } from "@Shared/types/common.types"

function categoriesService() {
  const getCategory = async (id: string) => {
    try {
      return await fetch(CONFIG.API_ENDPOINT + `/get-category?id=${id}`, {
        method: HTTP_METHODS.GET,
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        cache: 'default'
      })
        .then((result) => result.json())
        .then((data) => data);
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  const listCategories = async () => {
    try {
      return await fetch(CONFIG.API_ENDPOINT + '/list-categories', {
          method: HTTP_METHODS.GET,
          headers: {
            'Content-Type': 'application/json'
          },
          mode: 'cors',
          cache: 'default'
        }).then(result => result.json()).then(data => data);
    }
    catch(err) {
      console.log(err);
      return err;
    }
  }

  return { getCategory, listCategories }
}

export default categoriesService;