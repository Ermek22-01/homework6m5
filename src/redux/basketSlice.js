import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    busket: [],
}
//```: Здесь мы инициализируем начальное состояние Redux для среза корзины товаров. Свойство `busket` устанавливается равным пустому массиву.

const busketSlice = createSlice({
    name: 'busketSlice',
    initialState,
    reducers: {
        setBusket: (state, action) => {
            state.busket.push(action.payload)
        },
        removeFromBasket: (state, action) => {
            state.busket.splice(action.payload, 1);
        },
        changePrice : (state,action )=>{
            state.busket = state.busket.map(item=>{
                const price = + item.price.replace(/\$/,'')
                if(item._id === action.payload ){
                    return {...item,price: '$'+(price + price)}
                }else {
                    return item
                }
            })
        },
        minPrice : (state,action )=>{
            state.busket = state.busket.map(item=>{
                const price = item.price.replace(/\$/,'')
                if(item._id === action.payload ){
                    return {...item, price: '$'+(price - price)}
                }else {
                    return item
                }
            })
        },
    }
})
//Мы вызываем функцию `createSlice` и передаем ей объект с настройками для создания среза состояния.
// В данном случае, мы устанавливаем имя среза как `'busketSlice'`, начальное состояние как `initialState`,
// и определяем reducer-функции внутри объекта `reducers`. В данном случае, у нас есть `setBusket`,
// `removeFromBasket`, `changePrice` и `minPrice` - каждая функция представляет действие, которое может
// быть отправлено в хранилище Redux для изменения состояния корзины товаров.
export default busketSlice.reducer;
export const {setBusket, minPrice, removeFromBasket,changePrice} = busketSlice.actions;

export const busketSelect = state => state.busketSlice;
//```: Мы экспортируем reducer-функцию среза состояния, которую можно использовать для объединения в
// общий reducer для хранилища Redux. Мы также экспортируем отдельные действия `setBusket`, `minPrice`,
// `removeFromBasket` и `changePrice` для использования в компонентах или других частях приложения. Наконец,
// мы экспортируем селектор `busketSelect`, который принимает `state` и возвращает состояние среза корзины товаров.


//Таким образом, данный код создает срез состояния Redux для корзины товаров, инициализирует его начальным состоянием
// и определяет reducer-функции для изменения состояния корзины товаров. Экспортируются reducer-функция, отдельные
// действия и селектор для использования в других частях приложения.