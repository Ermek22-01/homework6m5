import * as React from 'react';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {busketSelect} from "../../redux/basketSlice";


function NavBar() {
    const {busket} = useSelector(busketSelect)

    return (
        <div>
            <NavLink className='link' to={'/'}>
                HOME
            </NavLink>
            <NavLink className='link' to={'/busket'}>
                <buscket/>
                {!!busket.length && busket.length}
            </NavLink>
        </div>
    );
}

export default NavBar;

// В этой части кода определен функциональный компонент NavBar.
// Он использует хук useSelector для получения значения busket из состояния Redux,
// используя селектор busketSelect. Затем компонент возвращает JSX, который представляет навигационную панель.
//
// В JSX определены две ссылки (NavLink): одна ведет на главную страницу ('/'), а другая - на страницу корзины
// ('/busket'). Каждая ссылка имеет класс link и отображает текст ("HOME" или название корзины). Также внутри
// второй ссылки используется компонент <buscket/>, предположительно, для отображения иконки корзины. После
// иконки выводится количество товаров в корзине (busket.length), только если оно больше нуля.