import {configureStore} from "@reduxjs/toolkit";
import productsSlice from "./productsSlice";
import busketSlice from './basketSlice'

export const store = configureStore({
    reducer: {
        productsSlice,
        busketSlice
    }
})
// Здесь мы вызываем функцию `configureStore` и передаем ей объект с настройками. Мы указываем
// `reducer` как объект, в котором ключами являются имена срезов состояния, а значениями - сами
// срезы состояния (`productsSlice` и `busketSlice`). Это позволяет объединить все срезы состояния в
// одно хранилище Redux.
//
// import {configureStore} from "@reduxjs/toolkit";: Здесь мы импортируем
// функцию configureStore из пакета @reduxjs/toolkit. Эта функция используется для
// создания и настройки хранилища Redux.
//
// import productsSlice from "./productsSlice";: Здесь мы импортируем срез состояния Redux для
// продуктов из файла productsSlice.js. Для правильной работы хранилища, вам нужно создать
// отдельный файл productsSlice.js, содержащий код, который вы предоставили ранее.
//
// import busketSlice from './basketSlice': Здесь мы импортируем срез состояния Redux для корзины
// товаров из файла basketSlice.js. Аналогично, вам нужно создать отдельный файл basketSlice.js,
// содержащий код, который вы предоставили ранее.
