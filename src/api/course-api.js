const baseUrl = process.env.REACT_APP_API_BASE_URL || 'https://course-api-express.herokuapp.com/api/'

const postCourse = async (url = 'courses', data) => {
  try {
    const response = await fetch(baseUrl + url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    return response.json()
  } catch (err) {
    console.log(err)
  }
}

const updateCourse = async (url = 'courses/', id, data) => {
  try {
    const response = await fetch(baseUrl + url + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    return response.json()
  } catch (err) {
    console.log(err)
  }
}

const deleteCourse = async (url = 'courses/', id) => {
  try {
    const response = await fetch(baseUrl + url + id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return response.json()
  } catch (err) {
    console.log(err)
  }
}

const postAuthor = async (url = 'authors', data) => {
  try {
    const response = await fetch(baseUrl + url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    return response.json()
  } catch (err) {
    console.log(err)
  }
}

const updateAuthor = async (url = 'authors/', id, data) => {
  try {
    const response = await fetch(baseUrl + url + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    return response.json()
  } catch (err) {
    console.log(err)
  }
}

const deleteAuthor = async (url = 'authors/', id) => {
  try {
    const response = await fetch(baseUrl + url + id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return response.json()
  } catch (err) {
    console.log(err)
  }
}

export {
  postCourse,
  updateCourse,
  deleteCourse,
  postAuthor,
  updateAuthor,
  deleteAuthor
}
