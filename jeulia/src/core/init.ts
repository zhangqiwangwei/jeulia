import { compile } from "../compile/index";

export function initState(vm:Jeulia) {
    console.log(vm);
    if (vm.$data) {
        for (let key in vm.$data) {
            vm._Obsevers[key] = [];
        }
    }
}
export function initRender(vm:Jeulia) {
    compile(vm.$el)
}