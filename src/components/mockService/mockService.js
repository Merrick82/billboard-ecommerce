import {getCategoriesList, getProductList, getFeaturedProductsList} from '../utils/mockDataUtils.js';

// Settea la lista de categorias que se creo en mockDataUtils.js
const categoriesList = getCategoriesList();

// Settea la lista de productos que se creo en mockDataUtils.js
const productList = getProductList();

// Settea la lista de productos destacados que se creo en mockDataUtils.js
const featuredProductList = getFeaturedProductsList();

export function getCategories() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(categoriesList);
            reject('Hubo un problema al querer consultar las categorias');
        }, 100)
    });
}

export function getCategoryNameById(categoryId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(categoriesList.find(category => category.id === Number(categoryId)).title);
            reject('Hubo un problema al querer obtener el nombre de la categoria');
        }, 500)
    });
}

export function getProductsByCategoryId(categoryId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productList.filter(product => product.category === Number(categoryId)));
            reject('Hubo un problema al querer consultar los productos');
        }, 2000)
    });
}

export function getProductById(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productList.find(product => product.id === Number(id)));
            reject('Hubo un problema al querer consultar el detalle');
        }, 200)
    });
}

export function getFeaturedProducts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(featuredProductList);
            reject('Hubo un problema al querer consultar los productos destacados');
        }, 100)
    });
}