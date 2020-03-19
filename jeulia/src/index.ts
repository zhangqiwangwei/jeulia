import { initState,initRender } from './core/init'
class Jeulia {
    $el:any
    $data:Object;
    $options:Object;
    _Obsevers:Object
    constructor(options:Options) {
        this.$options = options;
        this.$data = options.data;
        this.$el = document.querySelector(options.el);
        this._Obsevers = {};
        initState(this);
        initRender(this);
    }
}
export = Jeulia


