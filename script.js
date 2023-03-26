const el = (id) => document.getElementById(id);

const dream = () => {
  const fark = el("fark").value * 1;
  const fiyat = el("fiyat").value * 1;
  const maliyet = el("maliyet").value * 1;
  const kar = (maliyet / fiyat) * (fiyat + fark) - maliyet;
  el("kar").value = kar.toFixed(2);
  el(
    "yontem"
  ).value = `(${maliyet} / ${fiyat}) * (${fiyat} + ${fark}) - ${maliyet} = ${kar.toFixed(5)}`;
};

window.addEventListener("load", () => {
  document.body.style.opacity = 1;
  [el("fark"), el("fiyat"), el("maliyet")].forEach((item) => {
    item.onchange = dream;
    item.onkeyup = dream;
  });
  dream();
});
