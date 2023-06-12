import { useState } from "react";
import s from "./AddPhoto.module.css";
import { useEffect } from "react";
import { imageLoader, onSubmitChange } from "../ApiServes/ApiServes";

export const AddPhoto = () => {
  const [file, setFile] = useState("");
  const [discription, setDiscription] = useState("");
  const [url, setUrl] = useState("");
  const [disableButton, setDisableButton] = useState(true);


  useEffect(() => {
    imageLoader(file, setUrl)
  }, [file]);

  const handleSubmit = () => {
    onSubmitChange(discription, url)
  }

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
      <button className={disableButton ? `${s.hidden}` : `${s.button}`} onClick={() => handleSubmit()} disabled={disableButton}>
        Добавить
      </button>
    </div>
  );
};
