
 export async function callAPI(URL, API_KEY, date) {
    await fetch(`${URL}planetary/apod?date=${date}&api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        return data;
      });
  }

  