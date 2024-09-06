export const exerciseOptions = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': process.env.REACT_APP_RAPID_KEY,
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
    };

export const fetchData = async (url, options) => {
    const response = await fetch(url, options)
    const data = await response.json()

    return data
}