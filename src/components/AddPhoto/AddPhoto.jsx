import { useState } from "react";
import s from "./AddPhoto.module.css";
import { useEffect } from "react";

export const AddPhoto = () => {
  const [file, setFile] = useState("");
  const [discription, setDiscription] = useState('');
  const [url, setUrl] = useState('');

  function onPostImage({ file }) {
    const data = new FormData();
    data.append("file", file);

    return fetch(" https://wedev-api.sky.pro/api/upload/image", {
      method: "POST",
      body: data,
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.fileUrl);
        setUrl(data.fileUrl);
      })
      .catch((error) => {
        console.error("Ошибка", error);
      });
  }

  useEffect(() => {
    onPostImage(file);
  }, [file]);

  const onSubmitChange = async (e) => {
    e.preventDefault();
    const data = {
        description: discription,
        imageUrl: url,
    };
    try {
        const response = await fetch('https://webdev-hw-api.vercel.app/api/v1/prod/instapro', 
        {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Authorization" : `Bearer ${localStorage.getItem("userToken")}`, 
            }
        });
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.log("Ошибка:", error);
    }
  }

  return (
    <form className={s.add_photo}>
      <p className={s.add_photo_text}>Добавить пост</p>
      <input
        className={s.input_img}
        type="file"
        accept="image/*"
        title=" "
        onChange={(e) => {
          setFile(e.target.files[0]);
        }}
      />
      <input
        className={s.input_description}
        type="text"
        placeholder="Добавить описание"
        onChange={(e) => {
            setDiscription(e.target.value);
        }}
      />
      <button className={s.button} onClick={()=>onSubmitChange()}>Добавить</button>
    </form>
  );
};
