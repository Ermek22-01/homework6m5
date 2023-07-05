import React from 'react';
import { useSelector} from "react-redux";
import {productsSelect} from "../../redux/productsSlice";
import ProductItem from "../ProducItem/ProductItem";

const MainPage = () => {
    const {products} = useSelector(productsSelect)


    return (
        <div>
            <ul className='ul'style={{width: '1300px', margin: '20px auto'}}>
                {
                    products.map(i => <ProductItem i={i}/>)
                }
            </ul>
        </div>
    );
};

export default MainPage;
// Здесь определен функциональный компонент MainPage с использованием стрелочной функции.
// Внутри компонента используется хук useSelector для получения значения products из состояния Redux,
// используя селектор productsSelect.
//
// Компонент MainPage возвращает JSX, который представляет главную страницу. В данном случае,
// выводится список продуктов в виде упорядоченного списка <ul>. Каждый элемент списка представлен
// компонентом ProductItem, который принимает объект i в качестве пропса.
//
// В конце кода компонент MainPage экспортируется по умолчанию для использования в других частях приложения.
//
// Таким образом, данный компонент MainPage отображает список продуктов на главной странице.
// Он использует хук useSelector для получения списка продуктов из состояния Redux и отображает
// каждый продукт с помощью компонента ProductItem.