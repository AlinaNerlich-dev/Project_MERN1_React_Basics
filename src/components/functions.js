
 export async function callAPI(URL, API_KEY, date) {
    return await fetch(`${URL}${date}&api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        return data;
      });
  }

  