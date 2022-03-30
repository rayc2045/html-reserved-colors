function getParamsByUrl(url = window.location.href) {
  const urlSearch = url.split('?')[1];
  const urlSearchParams = new URLSearchParams(urlSearch);
  return Object.fromEntries(urlSearchParams.entries());
}

async function getData(api) {
  const res = await fetch(api);
  return await res.json();
}

function getRepeatedItem(arr) {
  const set = new Set();
  return arr.filter(item =>
    set.has(JSON.stringify(item))
      ? true
      : (set.add(JSON.stringify(item)), false)
  );
}

function copyText(text) {
  navigator.clipboard.writeText(text);
}

function playAudio(audio, volume = 1) {
  audio.currentTime = 0;
  audio.volume = volume;
  audio.play();
}

function audioCatch(audios, minute = 1) {
  audios.forEach(audio => playAudio(audio, 0));
  setTimeout(() => audioCatch(audios, minute), minute * 60_000);
}

export {
  getParamsByUrl,
  getData,
  getRepeatedItem,
  copyText,
  playAudio,
  audioCatch
}