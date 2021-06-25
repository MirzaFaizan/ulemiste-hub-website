export default function debounce(
    func: (unknown) => unknown,
    timeout = 300,
    invokeImmediately = false
): () => void {
    let timer;
    return (...args) => {
        if (!timer && invokeImmediately) func.apply(this, args);
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, timeout);
    };
}
