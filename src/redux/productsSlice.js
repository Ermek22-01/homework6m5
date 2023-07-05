import {createSlice} from "@reduxjs/toolkit";
import prod from './products.json'

const initialState = {
    products: prod,
}
//Здесь мы инициализируем начальное состояние Redux для среза продуктов.
// Свойство products устанавливается равным импортированному массиву prod.


const productsSlice = createSlice({
    name: 'productsSlice',
    initialState,
    reducers: {}
})

// Мы вызываем функцию `createSlice` и передаем ей объект с настройками для создания среза состояния.
// В данном случае, мы устанавливаем имя среза как `'productsSlice'`, начальное состояние как `initialState`,
// и пустой объект `reducers`, так как здесь нет дополнительных reducer-функций.

export default productsSlice.reducer;
export const productsSelect = state => state.productsSlice;
//Мы экспортируем reducer-функцию среза состояния, которую можно использовать для объединения в
// общий reducer для хранилища Redux. Также мы экспортируем селектор `productsSelect`, который принимает
// `state` и возвращает состояние среза продуктов.