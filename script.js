const el = (id) => document.getElementById(id);
const ls = (key, value) => {
  if (value) {
    localStorage.setItem(key, value);
  }
  return localStorage.getItem(key);
};

const dream = () => {
  const fark = el("fark").value * 1;
  const fiyat = el("fiyat").value * 1;
  const maliyet = el("maliyet").value * 1;
  ls("fark", fark);
  ls("fiyat", fiyat);
  ls("maliyet", maliyet);
  const kar = (maliyet / fiyat) * (fiyat + fark) - maliyet;
  el("kar").value = kar.toFixed(2);
  el("yontem").value = `${maliyet} ÷ ${fiyat} × ${
    fiyat + fark
  } - ${maliyet} = ${kar.toFixed(5)}`;
};

window.addEventListener("load", () => {
  document.body.style.opacity = 1;
  ["fark", "fiyat", "maliyet"].forEach((item) => {
    el(item).onchange = dream;
    el(item).onkeyup = dream;
    if (ls(item)) el(item).value = ls(item);
  });
  dream();
});
