export function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function load(key) {
  const value = localStorage.getItem(key);

  if (value === null || value === "undefined") {
    return null;
  }

  return JSON.parse(value);
}

export function remove(key) {
  localStorage.removeItem(key);
}

export function clear() {
  localStorage.clear();
}
