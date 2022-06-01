import React from 'react';
import styles from './Counters.module.scss'


//  Объект из рандомных значений 

const counters = {
    minutes: 7,
    level: 'Hard',
    up: '5%',
}

const Counters = () => {
    return (
        <div className={styles.wrapper}>
            {/* Object.entries() - итерируемся по объекту и создаем новый массив ключ\значение, далее map-им его и получаем значения. Указываем уникальный ключ */}
            {Object.entries(counters).map(item => (
                <div className={styles.count} key={'_key_' + item[0]}>
                    <div className={styles.heading}>{item[0]}</div>
                    <div className={styles.number}>{item[1]}</div>
                </div>
            ))}
        </div>
    );
}

export default Counters;
