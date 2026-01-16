// Minimal Storehouse shim for browser usage using localStorage
const Storehouse = {
    getItem(namespace, key) {
        try {
            const raw = localStorage.getItem(namespace + '::' + key);
            if (raw === null) return null;
            try { return JSON.parse(raw); } catch (e) { return raw; }
        } catch (e) {
            return null;
        }
    },
    setItem(namespace, key, value /*, expiredAt */) {
        try {
            const toStore = (typeof value === 'string') ? value : JSON.stringify(value);
            localStorage.setItem(namespace + '::' + key, toStore);
        } catch (e) {
            // ignore storage errors
        }
    }
};

export default Storehouse;
