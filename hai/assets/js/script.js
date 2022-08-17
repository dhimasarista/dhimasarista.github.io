const hasil = document.querySelector(".hasil");
const tanya = document.querySelector(".tanya");

function doYouWant() {
  // Do you want?
  const doYou = prompt("You Want?");
  // If yes
  if (doYou == "iya" || doYou == "mau" || doYou == "ya" || doYou == "yes") {
    alert("Love You!");
    // Show the result to dom
    hasil.innerHTML = jawabanIya();
    tanya.remove();
  }
  // if not
  else if (doYou == "tidak" || doYou == "ngga" || doYou == "no") {
    alert("Okelah! Terimakasih atas jawabannya");
    // Show the result to dom
    hasil.innerHTML = jawabanTidak();
    tanya.remove();
  } else {
    alert("Jawab yang benar! iya apa ngga?");
    // return the question
    doYouWant();
  }
}

function jawabanIya() {
  return `<div class="container hasil">
  <div class="p-4">
    <div class="card">
      <div class="card-header">Result</div>
      <div class="card-body">
        <blockquote class="blockquote mb-0">
          <p>Kamu Menjawab: IYA/MAU</p>
          <footer class="blockquote text-muted">
            <cite title="Source Title"
              >Bisakah kamu tunjukan hasilnya ke aku</cite
            >
          </footer>
        </blockquote>
      </div>
    </div>
  </div>
</div>`;
}
function jawabanTidak() {
  return `<div class="container hasil">
  <div class="p-4">
    <div class="card">
      <div class="card-header">Result</div>
      <div class="card-body">
        <blockquote class="blockquote mb-0">
          <p>Kamu Menjawab: TIDAK</p>
          <footer class="blockquote text-muted">
            <cite title="Source Title"
              >Bisakah kamu tunjukan hasilnya ke aku</cite
            >
          </footer>
        </blockquote>
      </div>
    </div>
  </div>
</div>`;
}
