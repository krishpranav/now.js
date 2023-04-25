// main index

const EngineObject = require('./engineobj')
const point = require('./point')

class Engine {
    constructor(link, width, height, options = {}) {
        this._link = link; 
        this._width = width || window.innerWidth;
        this._height = height || window.innerHeight;        
    }

    create(name, x, y, width, height, options = {}) {
        this._objects[name] = new EngineObject(name, x, y, width, height, options);

        if (!this._objects[name].options.disabledEvents) {
        }
    }

    add(object) {
        
    }
}