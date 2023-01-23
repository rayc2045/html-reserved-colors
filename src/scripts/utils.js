export function getQueryParams(url = window.location.href) {
  const urlSearch = url.split('?')[1];
  const urlSearchParams = new URLSearchParams(urlSearch);
  return Object.fromEntries(urlSearchParams.entries());
}

export async function getData(api) {
  const res = await fetch(api);
  return await res.json();
}

export function getRepeatedItem(arr) {
  const set = new Set();
  return arr.filter(item =>
    set.has(JSON.stringify(item))
      ? true
      : (set.add(JSON.stringify(item)), false)
  );
}

export function getNextItem(arr, currentValue) {
  if (!arr.includes(currentValue)) return console.log(`Can not find ${currentValue} in ${arr}`);
  if (currentValue === arr[arr.length - 1]) return arr[0];
  return arr[arr.indexOf(currentValue) + 1];
}

export function copyText(text) {
  navigator.clipboard.writeText(text);
}

export function playAudio(audio, volume = 1) {
  audio.currentTime = 0;
  audio.volume = volume;
  audio.play();
}

export function audiosCatch(audios, minute = 1) {
  audios.forEach(audio => playAudio(audio, 0));
  setTimeout(() => audiosCatch(audios, minute), minute * 60_000);
}
