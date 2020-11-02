// Code snippet adapted from the one curteously provided by Geoff Graham
// on https://css-tricks.com/snippets/css/typewriter-effect/

let title = document.getElementById("main-title");
const text = "Nõuanded algajale programmeerijale";
sleep_delay = 100;

function write_letter(text, i) {
  // Execute only if we haven't reached end of text.
  if (i < text.length) {
    // Write the current character to title.
    title.innerHTML = text.substring(0, i + 1) + '<span class="cursor-blinker"></span>';

    // After a small delay, write the next character.
    setTimeout(function() {
      write_letter(text, i + 1);
    }, sleep_delay);
  }
  else return;
}

write_letter(text, 0);
