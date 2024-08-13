export const exerciseOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '536d9882e2msh99ca6a0d7a16b93p1364cajsn7889eec5c5a7',
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
  }
}

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': '536d9882e2msh99ca6a0d7a16b93p1364cajsn7889eec5c5a7'
  }
}

export const fetchData = async (url, options) => {
  const response = await fetch(url, options)
  const data = await response.json()
  return data
}
