export const getData = async (path) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/${path}`, {
      method: "GET",
      credentials: "include",
    });

    const data = await response.json();
    return { data, status: response.status };
  } catch (error) {
    console.error(error);
  }
};

export const postData = async (path, body) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/${path}`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    return { data, status: response.status };
  } catch (error) {
    console.error(error);
  }
};
