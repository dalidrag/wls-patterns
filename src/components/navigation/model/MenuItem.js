/**
 * MenuItem definition
 *
 * @typedef {Object} MenuItem
 * @property {?string} id
 * @property {?string} type
 * @property {?string} title
 * @property {?Array.<MenuItem>} children
 */

class MenuItem {
    constructor(id, type, title, children) {
        this.id = id;
        this.type = type;
        this.title = title;
        this.children = children;
    }
}

export default MenuItem;

