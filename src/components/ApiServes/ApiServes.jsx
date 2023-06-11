export const getData = (user, setData) => {
  fetch(`https://webdev-hw-api.vercel.app/api/v1/prod/instapro`, {
    headers: user !== null
      ? {
          Authorization: `Bearer ${user.user}`,
        }
      : {},
  })
    .then((response) => response.json())
    .then((data) => {
      setData(data);
    });
};

export const onLikedChange = async (user, id, liked, setLiked) => {
  if (user !== "") {
    try {
      const responseLike = await fetch(
        `https://wedev-api.sky.pro/api/v1/prod/instapro/${id}/${
          liked ? "dislike" : "like"
        }`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${user.user}`,
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
  setUser,
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
    localStorage.setItem("userToken", result.user.token);
    setUser(result.user.token);
    setModalActive(false);
  } catch (error) {
    console.log("Ошибка:", error);
  }
};

export const onSignUpChange = async (url, login, name, password, setUser, setModalActive) => {
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
      setUser(result.user.token);
      localStorage.setItem('userToken', result.user.token);
      setModalActive(false);
    } catch (error) {
      console.log("Ошибка:", error);
    }
  };

  export const imageLoader = (file, setUrl) => {
    const data = new FormData();
    data.append("file", file);

    fetch(`https://wedev-api.sky.pro/api/upload/image`, {
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
        console.log("Ошибка:", error);
      });
  }

  export const onSubmitChange = async (discription, url, user) => {
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
            Authorization: `Bearer ${user}`,
          },
        }
      );
      const result = await response.json();
      if (result.result === "ok") {
        return window.location.reload()};
    } catch (error) {
      console.error("Ошибка:", error);
    }
  };