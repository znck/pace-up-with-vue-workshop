import { mapGetters, mapState, mapActions } from 'vuex'

// HELPERS ~ GETTERS

/** @type {GetterAuth} */
export const authGetters = {
  ...mapState('auth', ['currentUser']),
  ...mapGetters('auth', ['loggedIn']),
}

/** @type {GetterCartSummary} */
export const cartSummaryGetters = {
  ...mapGetters('cart', {
    productsInCart: 'items',
    totalCartAmount: 'amount',
    isProductInCart: 'has',
    productQuantityInCart: 'quantityIn',
  }),
}

/** @type {GetterWishlistSummary} */
export const wishlistGetters = {
  ...mapGetters('wishlist', {
    productsInWishlist: 'items',
    isProductInWishlist: 'has',
  }),
}

/** @type {GetterProductSummary} */
export const productsGetters = {
  ...mapState('products', ['products']),
  ...mapGetters('products', {
    productById: 'byId',
  }),
}

// HELPERS ~ METHODS
/** @type {MethodsAuth} */
export const authMethods = {
  ...mapActions('auth', ['logIn', 'logOut']),
}

// BASE ~ TYPES

/**
 * @typedef {object} User
 * @property {number} id
 * @property {string} name
 * @property {string} username
 */

/**
 * @typedef {object} Product
 * @property {number} id
 * @property {string} sku
 * @property {string} title
 * @property {string} desc
 * @property {string} image
 * @property {boolean} stocked
 * @property {number} basePrice
 * @property {number} price
 */

/**
 * @typedef {Product} ProductInCart
 * @property {number} quantity
 */

// GETTER ~ TYPES

/**
 * @typedef {object} GetterAuth
 * @property {function(): User} user
 * @property {function(): boolean} loggedIn
 */

/**
 * @typedef {object} GetterCartSummary
 * @property {function(): ProductInCart[]} productsInCart
 * @property {function(): number} totalCartAmount
 * @property {function(): {(productOrId: Product | number) => boolean}} isProductInCart
 * @property {function(): {(productOrId: Product | number) => number}} productQuantityInCart
 */

/**
 * @typedef {object} GetterWishlistSummary
 * @property {function(): Product[]} productsInWishlist
 * @property {function(): {(productOrId: Product | number) => boolean}} isProductInWishlist
 */

/**
 * @typedef {object} GetterProductSummary
 * @property {function(): Product[]} products
 * @property {function(): {(id: number) => Product}} productById
 */

// METHOD ~ TYPES

/**
 * @typedef {object} MethodsAuth
 * @property {{({ username: string, password: string }) => Promise<User>}} logIn
 * @property {{() => Promise<void>}} logOut
 */
