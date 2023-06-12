export const getData = (setData) => {
  fetch(`https://webdev-hw-api.vercel.app/api/v1/prod/instapro`, {
    headers:
      localStorage.getItem("userToken") !== null
        ? {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          }
        : {},
  })
    .then((response) => response.json())
    .then((data) => {
      setData(data);
    });
};

export const onLikedChange = async (id, liked, setLiked) => {
  if (localStorage.getItem("userToken") !== null) {
    try {
      const responseLike = await fetch(
        `https://wedev-api.sky.pro/api/v1/prod/instapro/${id}/${
          liked ? "dislike" : "like"
        }`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        }
      );
      const result = await responseLike.json();
      setLiked(result.post.isLiked);
    } catch (error) {
      console.error("Ошибка:", error);
      alert("Вы должны быть авторизованны.");
    }
  } else {
    alert("Вы должны быть авторизованны.");
  }
};

export const postsById = async (id, setData) => {
  await fetch(`https://wedev-api.sky.pro/api/v1/prod/instapro/user-posts/${id}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setData(data);
    })
    .catch((error) => {
      console.error("Ошибка:", error);
    });
};

export const onLogInChange = async (
  login,
  password,
  setModalActive
) => {
  const data = {
    login: login,
    password: password,
  };
  try {
    const response = await fetch(`https://wedev-api.sky.pro/api/user/login`, {
      method: "POST",
      body: JSON.stringify(data),
    });
    const result = await response.json();
    if (response.status === 400) {
      alert(result.error);
    }
    localStorage.setItem("userToken", result.user.token);
    setModalActive(false);
  } catch (error) {
    console.log("Ошибка:", error);
  }
};

export const onSignUpChange = async (
  url,
  login,
  name,
  password,
  setModalActive
) => {
  const data = {
    imageUrl: url,
    login: login,
    name: name,
    password: password,
  };
  try {
    const response = await fetch(`https://wedev-api.sky.pro/api/user`, {
      method: "POST",
      body: JSON.stringify(data),
    });
    const result = await response.json();
    if (response.status === 400) {
      alert(result.error);
    }
    localStorage.setItem("userToken", result.user.token);
    setModalActive(false);
  } catch (error) {
    console.log("Ошибка:", error);
  }
};

export const imageLoader = async (file, setUrl) => {
  const data = new FormData();
  data.append("file", file);

  await fetch(`https://wedev-api.sky.pro/api/upload/image`, {
    method: "POST",
    body: data,
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setUrl(data.fileUrl);
    })
    .catch((error) => {
      console.error("Ошибка:", error);
    });
};

export const onSubmitChange = async (discription, url) => {
  const data = {
    description: discription,
    imageUrl: url,
  };
  try {
    const response = await fetch(
      "https://webdev-hw-api.vercel.app/api/v1/prod/instapro",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      }
    );
    const result = await response.json();
    if (result.result === "ok") {
      return window.location.reload();
    }
  } catch (error) {
    console.error("Ошибка:", error);
  }
};
