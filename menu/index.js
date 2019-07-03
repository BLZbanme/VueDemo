Vue.directive("clickoutsides", {
    bind(el, binding, vnode) {
        function handleClick(e) {
            if(el.contains(e.target)){
                return false;
            }
            if(binding.expression){
                binding.value(e);
            }
        };
        el.__vueClickOutSide__ = handleClick;
        document.addEventListener("click", handleClick);
    },
    unbind(el) {
        document.removeEventListener("click", el.__vueClickOutSide__);
        delete el.__vueClickOutSide__;
    }
})


