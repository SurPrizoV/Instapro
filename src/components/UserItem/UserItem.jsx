import s from "./UserItem.module.css";
import { IoHeartOutline } from "react-icons/io5";
import { IoHeartSharp } from "react-icons/io5";
import { useState, useEffect } from "react";
import { formatDistance } from "date-fns";
import { ru } from "date-fns/esm/locale";

export const UserItem = (user) => {
  const [liked, setLiked] = useState(false);
  const [data, setData] = useState({ posts: [] });

  useEffect(() => {
    fetch(`https://webdev-hw-api.vercel.app/api/v1/prod/instapro`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [user, liked]);

  const onLikedChange = async (id) => {
    if (user.user !== "") {
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
      }
    } else {
      alert("Вы должны быть авторизованны.");
    }
  };

  console.log(data);
  console.log(user);

  return (
    <>
      {data.posts &&
        data.posts.map((post) => (
          <div key={post.id} className={s.user}>
            <div className={s.user_discription}>
              <img
                src={post.user.imageUrl}
                alt="user_photo"
                className={s.user_photo}
              />
              <p className={`${s.login} ${s.big}`}>{post.user.login}</p>
            </div>
            <img
              className={s.publication}
              src={post.imageUrl}
              alt="publication"
            />
            <div className={s.photo_discription}>
              {liked ? (
                <IoHeartSharp onClick={() => onLikedChange(post.id)} />
              ) : (
                <IoHeartOutline onClick={() => onLikedChange(post.id)} />
              )}
              {post.likes.length === 0 ? (
                <p className={s.big}>Нравится : 0</p>
              ) : (
                <p>
                  <span className={s.big}>
                    Нравится : {post.likes[0].name}{" "}
                  </span>{" "}
                  {post.likes.length > 1
                    ? `и еще ${post.likes.length - 1}`
                    : ""}
                </p>
              )}
            </div>
            <p>
              {post.user.login}
              <span className={s.big}> {post.description}</span>
            </p>
            <p>
              {formatDistance(new Date(post.createdAt), new Date(), {
                locale: ru,
                addSuffix: true,
              })}
            </p>
          </div>
        ))}
    </>
  );
};