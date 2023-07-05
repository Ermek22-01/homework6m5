import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {setBusket} from "../../redux/basketSlice";
import styles from './product.module.css'


const ProductItem = ({i}) => {
    const dispatch = useDispatch()
    const [buttonClicked, setButtonClicked] = useState(false)

    const addProducts = () => {
        if (!buttonClicked) {
            dispatch(setBusket(i));
            setButtonClicked(true);
        } else {
            alert("Вы уже добавили этот товар в корзину")
        }
    }

    return (
        <li>
            <div className={styles.container}>
                <div style={{overflow: 'hidden'}}>
                    <img className='img' src={i.picture}/>
                </div>
                <div className={styles.comment}>
                    <h2>{i.name}</h2>
                    <h3>Price: {i.price}</h3>
                    <button  className={styles.button} variant='contained' onClick={addProducts}>Busket</button>
                </div>
            </div>
        </li>
    )
}
export default ProductItem;
//Внутри компонента используется хук useDispatch для получения диспетчера Redux. Затем с помощью хука
// useState создается состояние buttonClicked, и функция setButtonClicked используется для его обновления.
// По умолчанию buttonClicked устанавливается в значение false.
//
// Функция addProducts вызывается при клике на кнопку. Если buttonClicked равно false, то вызывается диспетчер
// Redux dispatch с передачей функции setBusket(i) для добавления товара в корзину. Затем состояние buttonClicked
// устанавливается в значение true. Если buttonClicked уже равно true, выводится предупреждение с сообщением
// "Вы уже добавили этот товар в корзину".
//
// Компонент ProductItem возвращает JSX, который представляет элемент списка (<li>) с информацией о продукте.
// Внутри JSX используются классы стилей из объекта styles для стилизации компонента. Изображение продукта,
// имя и цена отображаются с помощью соответствующих свойств объекта i. Кнопка "Busket" вызывает функцию addProducts
// при клике.