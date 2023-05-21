import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import s from './Header.module.css';

export const Header = () => {
    const [modalActive, setModalActive] = useState(false);
    return (
        <div className={s.header}>
            <p className={s.logo}>Instapro</p>
            <button className={s.button} onClick={()=>setModalActive(true)}>Войти</button>
            <Modal active={modalActive} setActive={setModalActive}>
                <p>Test</p>
            </Modal>
        </div>
    )
}