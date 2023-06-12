import s from "./UserItem.module.css";
import { IoHeartOutline } from "react-icons/io5";
import { IoHeartSharp } from "react-icons/io5";
import { useState, useEffect } from "react";
import { formatDistance } from "date-fns";
import { ru } from "date-fns/esm/locale";
import { Link } from "react-router-dom";
import { getData, onLikedChange } from "../ApiServes/ApiServes";
import { postsById } from "../ApiServes/ApiServes";

export const UserItem = ({ data, setData }) => {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    getData(setData);
  }, [liked, setData]);

  return (
    <>
      {data.posts.map((post) => (
        <div key={post.id} className={s.user}>
          <Link
            to={`/user/${post.user.id}`}
            className={s.user_discription}
            onClick={() => postsById(post.user.id, setData)}
          >
            <img
              src={post.user.imageUrl}
              alt="user_photo"
              className={s.user_photo}
            />
            <p className={`${s.login} ${s.big}`}>{post.user.login}</p>
          </Link>
          <img
            className={s.publication}
            src={post.imageUrl}
            alt="publication"
          />
          <div className={s.photo_discription}>
            {post.isLiked ? (
              <IoHeartSharp
                onClick={() => onLikedChange(post.id, liked, setLiked)}
              />
            ) : (
              <IoHeartOutline
                onClick={() => onLikedChange(post.id, liked, setLiked)}
              />
            )}
            {post.likes.length === 0 ? (
              <p className={s.big}>Нравится : 0</p>
            ) : (
              <p>
                <span className={s.big}>Нравится : {post.likes[0].name} </span>{" "}
                {post.likes.length > 1 ? `и еще ${post.likes.length - 1}` : ""}
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
