//throttle helper function

const throttle = (func, delay) => {
  let inThrottle = false;
    return function(...args) {
        if(!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, delay);
        }
    };
}