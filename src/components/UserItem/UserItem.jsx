import s from './UserItem.module.css';
import posts from '../../mock';
import { IoHeartOutline } from "react-icons/io5";
import { IoHeartSharp } from "react-icons/io5";
import { useState } from 'react';

export const UserItem = () => {
    const [liked, setLiked] = useState(false);
    const onLikedChenge = () => {
        liked ? setLiked(false) : setLiked(true);
    }
    return (
      <>
        {posts.map((post) => (
          <div id={post.id} className={s.user}>
            <div className={s.user_discription}>
              <img
                src={post.user.imageUrl}
                alt="user_photo"
                className={s.user_photo}
              />
              <p className={`${s.login} ${s.big}`}>{post.user.login}</p>
            </div>
            <img src={post.imageUrl} alt="publication" />
            <div className={s.photo_discription}>
              {liked ? (
                <IoHeartSharp onClick={() => onLikedChenge()} />
              ) : (
                <IoHeartOutline onClick={() => onLikedChenge()} />
              )}
              <p>
                <span className={s.big}>Нравится : {post.likes.name} </span> и еще{" "}
                {post.likes.length - 1}
              </p>
            </div>
            <p>
              {post.user.login}
              <span className={s.big}> {post.description}</span>
            </p>
          </div>
        ))}
      </>
    );
}