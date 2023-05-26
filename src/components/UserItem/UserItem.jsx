import s from './UserItem.module.css';
import { IoHeartOutline } from "react-icons/io5";
import { IoHeartSharp } from "react-icons/io5";
import { useState, useEffect } from 'react';
import { formatDistance } from "date-fns";

export const UserItem = () => {
    const [liked, setLiked] = useState(false);
    const [data, setData] = useState({posts : []});

    useEffect(() => {
      fetch(`https://webdev-hw-api.vercel.app/api/v1/prod/instapro`)
      .then(response => response.json())
      .then(data => setData(data));
    }, []);

    const onLikedChange = () => {
        liked ? setLiked(false) : setLiked(true);
    }

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
                  <IoHeartSharp onClick={() => onLikedChange()} />
                ) : (
                  <IoHeartOutline onClick={() => onLikedChange()} />
                )}
                {post.likes.length === 0 ? (
                  <p className={s.big}>Нравится : 0</p>
                ) : (
                  <p>
                    <span className={s.big}>
                      Нравится : {post.likes[0].name}{" "}
                    </span>{" "}
                    и еще {post.likes.length - 1}
                  </p>
                )}
              </div>
              <p>
                {post.user.login}
                <span className={s.big}> {post.description}</span>
              </p>
              <p>{formatDistance(new Date(Date.parse(post.createdAt)), new Date(), {addSuffix: true})}</p>
            </div>
          ))}
      </>
    );
}