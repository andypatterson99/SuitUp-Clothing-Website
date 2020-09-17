import { environment } from 'src/environments/environment';

export const baseUrl = environment.production ? 'https://api.shoppingcart.com' :'http://localhost:3000'
export const productsUrl = baseUrl + '/products';
export const cartUrl = baseUrl + '/cart';
export const wishlistUrl = baseUrl + '/wishlist';
export const autumn = baseUrl + '/autumn';
export const summer = baseUrl + '/summer';
export const spring = baseUrl + '/spring';
export const winter= baseUrl + '/winter';