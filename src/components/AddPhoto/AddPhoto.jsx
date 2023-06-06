import { useState } from "react";
import s from "./AddPhoto.module.css";
import { useEffect } from "react";

export const AddPhoto = ({ user }) => {
  const [file, setFile] = useState("");
  const [discription, setDiscription] = useState("");
  const [url, setUrl] = useState("");
  const [disableButton, setDisableButton] = useState(true);


  useEffect(() => {
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
        console.error("Ошибка:", error);
      });
  }, [file]);

  const onSubmitChange = async () => {
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

  useEffect(()=>{
    if(url !== "" && discription !== "") {
      setDisableButton(false);
    }else{
      setDisableButton(true);
    }
  }, [url, discription])

  return (
    <div className={s.add_photo}>
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
      {url && <img className={s.photo} src={url} alt="user_photo" />}
      <input
        className={s.input_description}
        type="text"
        placeholder="Добавить описание"
        onChange={(e) => {
          setDiscription(e.target.value);
        }}
      />
      <button className={disableButton ? `${s.hidden}` : `${s.button}`} onClick={() => onSubmitChange()} disabled={disableButton}>
        Добавить
      </button>
    </div>
  );
};
