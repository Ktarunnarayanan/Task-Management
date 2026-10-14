const missionInput = document.getElementById('missionInput');
  const addBtn = document.getElementById('addBtn');
const missionList = document.getElementById('missionList');
const totalCount = document.getElementById('totalCount');
     const completedCount = document.getElementById('completedCount');
const pendingCount = document.getElementById('pendingCount');
const colorBtn = document.getElementById('colorBtn');

const backgroundColors = ['#f4f7f6', '#e0f2fe', '#fef3c7', '#fce7f3'];
let colorIndex = 0;

function updateCounters() {
let total = missionList.children.length;
    let completed = 0;

for (let i = 0; i < total; i++) {
        if (missionList.children[i].classList.contains('completed')) {
    completed++;
        }
    }

    let pending = total - completed;

  totalCount.textContent = total;
    completedCount.textContent = completed;
pendingCount.textContent = pending;
}

function addMission() {
  let text = missionInput.value.trim();

    if (text === "") {
return;
    }

    let li = document.createElement('li');
      li.className = 'mission-item';

    let span = document.createElement('span');
    span.className = 'mission-text';
      span.textContent = text;

    span.onclick = function() {
li.classList.toggle('completed');
        updateCounters();
    };

      let deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';

    deleteBtn.onclick = function() {
        li.remove();
  updateCounters();
    };

    li.appendChild(span);
      li.appendChild(deleteBtn);
    missionList.appendChild(li);

    missionInput.value = "";

      updateCounters();
}

  addBtn.addEventListener('click', addMission);

missionInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
          addMission();
    }
});

colorBtn.onclick = function() {
colorIndex = (colorIndex + 1) % backgroundColors.length;
    document.body.style.backgroundColor = backgroundColors[colorIndex];
};