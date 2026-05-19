const scenes = [
  {
    title: "Cảnh 1 — Tốt nghiệp",
    description:
      "Mình từng nghĩ… sau khi tốt nghiệp, mọi thứ sẽ dễ dàng hơn. Có công việc tốt. Có tiền. Có một cuộc sống ổn định như mình từng tưởng tượng.",
    dropCount: 3,
    fragments: [
      { id: 1, src: "assets/scene1/sc1_fg1.png" },
      { id: 2, src: "assets/scene1/sc1_fg2.png" },
      { id: 3, src: "assets/scene1/sc1_fg3.png" },
    ],
    memory:
      "Sân trường đại học, ngày tốt nghiệp. Mình nhận bằng cấp với tay run run, chụp ảnh kỷ niệm cùng gia đình. Bạn bè cười vui vẻ, tung nón cao lên trời. Lúc đó mình nghĩ mọi thứ sẽ suôn sẻ, tương lai sáng rõ phía trước.",
    hint: "💡 Gợi ý: Hãy nghĩ về thứ tự các sự kiện xảy ra trong ngày tốt nghiệp. Bắt đầu từ lúc nhận bằng, sau đó chụp ảnh, rồi tung nón lên.",
  },

  {
    title: "Cảnh 2 — Xin việc",
    description:
      "Nhưng hóa ra… Tốt nghiệp chỉ là bắt đầu của một áp lực khác. Không ai còn hỏi mình được bao nhiêu điểm. Người ta bắt đầu hỏi: 'Khi nào có việc?' 'Lương bao nhiêu?' 'Ổn định chưa?'",
    dropCount: 3,
    fragments: [
      { id: 1, src: "assets/scene2/sc2_fg1.png" },
      { id: 2, src: "assets/scene2/sc2_fg2.png" },
      { id: 3, src: "assets/scene2/sc2_fg3.png" },
    ],
    memory:
      "Phòng trọ buổi đêm. Mình ngồi trước laptop chỉnh CV, gửi đơn xin việc liên tục. Chuông email rơi lần lượt: 'We regret to inform you…' Lúc 2 giờ sáng, mình nằm nhìn lên trần nhà, tự hỏi liệu mình có thực sự đủ khả năng không.",
    hint: "💡 Gợi ý: Theo dõi quá trình xin việc: đầu tiên chỉnh CV, sau đó gửi đơn, cuối cùng là nhận tin từ chối vào lúc 2 giờ sáng.",
  },

  {
    title: "Cảnh 3 — Mâu Thuẫn",
    description:
      "Mình muốn theo đuổi điều mình thích. Nhưng mình cũng cần tiền. Mình muốn nghỉ ngơi. Nhưng deadline vẫn tới mỗi ngày. Mình muốn trưởng thành. Nhưng lại sợ thất bại.",
    dropCount: 3,
    fragments: [
      { id: 1, src: "assets/scene3/sc3_fg1.png" },
      { id: 2, src: "assets/scene3/sc3_fg2.png" },
      { id: 3, src: "assets/scene3/sc3_fg3.png" },
    ],
    memory:
      "Mạng xã hội full tin vui của bạn bè: 'Mình vừa được tuyển!', 'Công ty thứ 2 rồi!', 'Lương tốt lắm!'. Mình ngồi một mình ở quán cafe, cầm điện thoại rồi bỏ. Mẹ gọi hỏi 'Con tính khi nào đi làm chính thức?' Mình chỉ biết đáp 'Dạ… con vẫn đang tìm.'",
    hint: "💡 Gợi ý: Sắp xếp theo cảm xúc: bạn bè thành công trên mạng → ngồi một mình ở cafe buồn bã → cuộc gọi từ mẹ hỏi về việc làm.",
  },

  {
    title: "Cảnh 4 — Khủng Hoảng",
    description:
      "Có những ngày mình cảm thấy bản thân thật vô dụng. Mình bắt đầu nghi ngờ: Liệu mình có thật sự phù hợp với công việc này không?",
    dropCount: 3,
    fragments: [
      { id: 1, src: "assets/scene4/sc4_fg1.png" },
      { id: 2, src: "assets/scene4/sc4_fg2.png" },
      { id: 3, src: "assets/scene4/sc4_fg3.png" },
    ],
    memory:
      "Công ty thực tập. Mình ngồi trước màn hình, làm task xong lại bị sửa. Deadline tối nay, nhưng task chưa hoàn thành. Ăn mì gói lúc nửa đêm, mắt mệt, lưng đau. Nhìn vào gương, mình thấy một phiên bản khác của chính mình mà không có gì tự hào.",
    hint: "💡 Gợi ý: Theo thứ tự: làm việc tại công ty (bị sửa) → ăn mì gói đêm khuya → nhìn gương và cảm thấy khủng hoảng.",
  },

  {
    title: "Cảnh 5 — Thay Đổi Dần",
    description:
      "Mọi thứ không thay đổi ngay lập tức. Nhưng từng lần thất bại… Từng áp lực nhỏ… Từng trải nghiệm nhỏ… Đang khiến mình thay đổi từng ngày.",
    dropCount: 3,
    fragments: [
      { id: 1, src: "assets/scene5/sc5_fg1.png" },
      { id: 2, src: "assets/scene5/sc5_fg2.png" },
      { id: 3, src: "assets/scene5/sc5_fg3.png" },
    ],
    memory:
      "Những ngày đi qua, mình dần chuyên tâm hơn. Mở notebook học thêm kỹ năng mới, dậy sớm hơn, đi bộ buổi sáng. Chủ động trao đổi với đồng nghiệp, hỏi từng câu hỏi. Từng lần thất bại trở thành bài học. Từng áp lực nhỏ khiến mình mạnh mẽ hơn từng ngày.",
    hint: "💡 Gợi ý: Sắp xếp các hành động tích cực: học notebook → dậy sớm đi bộ → trao đổi với đồng nghiệp.",
  },

  {
    title: "Cảnh 6 — Trưởng Thành",
    description:
      "Mình không còn là phiên bản trước đây nữa. Nhưng cũng không đánh mất chính mình. Có lẽ trưởng thành… Không phải là trở nên hoàn hảo. Mà là học cách bước tiếp dù cuộc sống không như mong đợi.",
    dropCount: 3,
    fragments: [
      { id: 1, src: "assets/scene6/sc6_fg1.png" },
      { id: 2, src: "assets/scene6/sc6_fg2.png" },
      { id: 3, src: "assets/scene6/sc6_fg3.png" },
    ],
    memory:
      "Hôm nay, mình ngồi ở cafe với những người bạn cũ. Nhìn lại ảnh tốt nghiệp trên điện thoại, mình cười nhẹ. Mình đã thay đổi, nhưng chưa hoàn toàn mất đi bản thân. Hoàng hôn chiếu vàng qua cửa kính, mình nhận ra: trưởng thành không phải là trở nên hoàn hảo, mà là biết cách sống với những không hoàn hảo đó.",
    hint: "💡 Gợi ý: Sắp xếp quá trình nhận ra sự trưởng thành: ngồi cafe với bạn → xem lại ảnh cũ cười → hoàng hôn vàng và sự thấu hiểu.",
  },
];

let currentScene = 0;
let dragged = null;
let sceneComplete = false;
let currentGalleryIndex = 0;
let allFragments = [];
let hintShown = false;
let currentQuestionIndex = 0;
let lockedFragments = {}; // Track locked fragments: { "sceneId-fragmentId": true }

const questions = [
  {
    situation:
      "Minh từng nghĩ sau khi tốt nghiệp sẽ nhanh chóng có việc làm ổn định. Nhưng sau nhiều lần gửi CV và nhận email từ chối, Minh bắt đầu cảm thấy áp lực và thất vọng.",
    question: "Tình huống trên thể hiện nội dung triết học nào?",
    options: [
      { text: "Quy luật lượng đổi dẫn đến chất đổi", correct: false },
      {
        text: "Sự đấu tranh giữa kỳ vọng và hiện thực trong mâu thuẫn biện chứng",
        correct: true,
      },
      { text: "Phủ định sạch trơn quá khứ", correct: false },
      { text: "Vật chất không vận động", correct: false },
    ],
  },
  {
    situation:
      "Những ngày đi qua, Minh dần chuyên tâm hơn. Mở notebook học thêm kỹ năng mới, dậy sớm hơn, đi bộ buổi sáng. Chủ động trao đổi với đồng nghiệp.",
    question: "Quá trình thay đổi này phản ánh quy luật nào?",
    options: [
      { text: "Quy luật lượng đổi dẫn đến chất đổi", correct: true },
      { text: "Quy luật bất toàn", correct: false },
      { text: "Sự phụ thuộc tuyệt đối", correct: false },
      { text: "Phủ định của phủ định", correct: false },
    ],
  },
  {
    situation: "Minh mất ngủ lúc 2h sáng.",
    question: "Ý thức Minh đang phản ánh điều gì?",
    options: [
      { text: "A. Ước mơ", correct: false },
      { text: "B. Áp lực từ thực tế", correct: true },
      { text: "C. Sự tưởng tượng", correct: false },
      { text: "D. Ký ức", correct: false },
    ],
  },
];

// OOP Fragment Unlock Question
const fragmentUnlockQuestion = {
  sceneId: 1, // Scene 2 (0-indexed)
  fragmentId: 2, // Fragment 2
  question:
    "Phân cảnh: Minh mất ngủ lúc 2h sáng. Ý thức Minh đang phản ánh điều gì?",
  options: [
    { text: "A. Ước mơ", correct: false },
    { text: "B. Áp lực từ thực tế", correct: true },
    { text: "C. Sự tưởng tượng", correct: false },
    { text: "D. Ký ức", correct: false },
  ],
};

const fragmentContainer = document.getElementById("fragmentContainer");
const dropContainer = document.getElementById("dropContainer");
const mysteryOverlay = document.getElementById("mysteryOverlay");
const mysteryBoxContainer = document.getElementById("mysteryBoxContainer");
const mysteryMessage = document.getElementById("mysteryMessage");
const sceneTitle = document.getElementById("sceneTitle");
const result = document.getElementById("result");
const memoryBox = document.getElementById("memoryBox");
const completeModal = document.getElementById("completeModal");
const completeMemory = document.getElementById("completeMemory");
const completeNextBtn = document.getElementById("completeNextBtn");
const galleryPage = document.getElementById("galleryPage");
const gameContainer = document.getElementById("gameContainer");
const questionsPage = document.getElementById("questionsPage");
const galleryImage = document.getElementById("galleryImage");
const currentIndexDisplay = document.getElementById("currentIndex");
const totalIndexDisplay = document.getElementById("totalIndex");
const startScreen = document.getElementById("startScreen");
const startButton = document.getElementById("startButton");

startButton.addEventListener("click", () => {
  startScreen.classList.add("hidden");
});

// Modal references
const fragmentModal = document.getElementById("fragmentModal");
const modalQuestionText = document.getElementById("modalQuestionText");
const modalOptionsContainer = document.getElementById("modalOptionsContainer");
const modalCloseBtn = document.getElementById("modalCloseBtn");

let boxShuffleInterval = null;
let secretBoxIndex = null;
let scene4FoundHiddenFragment = false;
let isMysteryShuffling = false;

function initGame() {
  // Collect all fragments from all scenes
  scenes.forEach((scene) => {
    scene.fragments.forEach((frag) => {
      allFragments.push(frag);
    });
  });

  totalIndexDisplay.innerText = allFragments.length;

  loadScene(currentScene);
}

// Initialize locked fragments before starting game
lockedFragments[
  `${fragmentUnlockQuestion.sceneId}-${fragmentUnlockQuestion.fragmentId}`
] = true;

initGame();

function shuffleArray(arr) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function loadScene(index) {
  const scene = scenes[index];

  sceneTitle.innerText = scene.title;
  document.querySelector(".story-box p").innerText = scene.description;

  fragmentContainer.innerHTML = "";
  dropContainer.innerHTML = "";

  result.innerHTML = "";
  memoryBox.classList.add("hidden");
  document.getElementById("hintBox").classList.add("hidden");
  sceneComplete = false;
  hintShown = false;
  document.getElementById("checkBtn").innerText = "Kiểm Tra";
  document.getElementById("resetBtn").style.display = "flex";

  // CREATE DROP ZONES
  for (let i = 1; i <= scene.dropCount; i++) {
    const zone = document.createElement("div");
    zone.classList.add("drop-zone");
    zone.dataset.order = i;

    zone.innerHTML = `<span>Vị trí ${i}</span>`;

    addDrop(zone);

    dropContainer.appendChild(zone);
  }

  // Scene 4 special: mystery box puzzle for fragment 3
  if (index === 3) {
    mysteryOverlay.classList.remove("hidden");
    scene4FoundHiddenFragment = false;
    setupScene4MysteryBoxes(scene);
  } else {
    mysteryOverlay.classList.add("hidden");
    mysteryMessage.innerText = "";
    clearMysteryShuffle();
    isMysteryShuffling = false;
  }

  // CREATE FRAGMENTS (with shuffle)
  const visibleFragments =
    index === 3 ? scene.fragments.filter((f) => f.id !== 3) : scene.fragments;
  const shuffledFragments = shuffleArray(visibleFragments);
  shuffledFragments.forEach((f) => {
    const img = document.createElement("img");
    img.src = f.src;
    img.classList.add("fragment");
    img.draggable = true;
    img.dataset.id = f.id;
    img.dataset.sceneId = index;
    img.dataset.fragmentId = f.id;

    // Check if this fragment is locked
    const lockKey = `${index}-${f.id}`;
    if (lockedFragments[lockKey]) {
      img.classList.add("locked");
      img.draggable = false;
    }
    addDrag(img);

    fragmentContainer.appendChild(img);
  });
}

function addDrag(el) {
  el.addEventListener("dragstart", () => {
    dragged = el;
  });

  // Click event to handle locked fragments or zoom unlocked fragments
  el.addEventListener("click", (e) => {
    e.stopPropagation();

    const sceneId = parseInt(el.dataset.sceneId);
    const fragmentId = parseInt(el.dataset.fragmentId);
    const lockKey = `${sceneId}-${fragmentId}`;

    // Check if this fragment is locked
    if (lockedFragments[lockKey]) {
      showFragmentUnlockModal(el);
    } else {
      // Open zoom modal for unlocked fragments
      openZoomModal(el.src);
    }
  });

  // Set cursor to pointer for visual feedback
  el.style.cursor = "pointer";
}

function addDrop(zone) {
  zone.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  zone.addEventListener("drop", () => {
    const existing = zone.querySelector("img");
    if (existing) fragmentContainer.appendChild(existing);

    zone.innerHTML = "";
    zone.appendChild(dragged);
  });
}

function setupScene4MysteryBoxes(scene) {
  clearMysteryShuffle();
  mysteryBoxContainer.innerHTML = "";
  mysteryMessage.innerText = "Xem kỹ để biết mảnh ở hộp nào...";
  scene4FoundHiddenFragment = false;
  secretBoxIndex = Math.floor(Math.random() * 3);
  isMysteryShuffling = true;

  for (let i = 0; i < 3; i++) {
    const box = document.createElement("div");
    box.classList.add("mystery-box", "disabled");
    box.dataset.boxIndex = i;
    box.dataset.position = i;
    box.dataset.checked = "false";
    box.dataset.disabled = "true";
    box.innerHTML = `
      <div class="box-icon">
        <img src="assets/shared/secrect-box.png" alt="Hộp bí ẩn" />
      </div>
      <div class="box-content">?</div>
    `;

    box.addEventListener("click", () => {
      if (
        box.dataset.checked === "true" ||
        scene4FoundHiddenFragment ||
        isMysteryShuffling
      ) {
        return;
      }
      handleMysteryBoxClick(box, scene);
    });

    mysteryBoxContainer.appendChild(box);
  }

  positionMysteryBoxes();
  revealSecretBox(scene);
}

function revealSecretBox(scene) {
  const correctBox = mysteryBoxContainer.querySelector(
    `[data-box-index="${secretBoxIndex}"]`,
  );
  if (!correctBox) return;

  correctBox.classList.add("correct");
  correctBox.dataset.disabled = "true";
  correctBox.innerHTML = `
    <div class="box-content found">Mảnh 3 ở đây!</div>
  `;

  const hiddenFragment = scene.fragments.find((f) => f.id === 3);
  if (hiddenFragment) {
    correctBox.querySelector(".box-content").innerHTML = `
      <img src="${hiddenFragment.src}" class="box-preview" />
      <div>Đây là mảnh 3</div>
    `;
  }

  mysteryMessage.innerText = "Đã thấy vị trí mảnh. Hộp sẽ tráo trong 3 giây...";

  setTimeout(() => {
    resetBoxesAfterReveal();
    startMysteryShuffle();
    setTimeout(() => {
      stopMysteryShuffle();
      mysteryMessage.innerText = "Chọn hộp bạn nghĩ có mảnh 3.";
      enableRemainingBoxes();
    }, 3000);
  }, 2000);
}

function resetBoxesAfterReveal() {
  Array.from(mysteryBoxContainer.children).forEach((box) => {
    box.classList.remove("correct");
    box.dataset.disabled = "true";
    if (box.dataset.checked !== "true") {
      box.innerHTML = `
        <div class="box-icon">
          <img src="assets/shared/secrect-box.png" alt="Hộp bí ẩn" />
        </div>
        <div class="box-content">?</div>
      `;
    }
  });
}

function enableRemainingBoxes() {
  Array.from(mysteryBoxContainer.children).forEach((box) => {
    if (box.dataset.checked !== "true") {
      box.classList.remove("disabled");
      box.dataset.disabled = "false";
    }
  });
}

function startMysteryShuffle() {
  clearMysteryShuffle();
  isMysteryShuffling = true;
  boxShuffleInterval = setInterval(() => {
    const boxes = Array.from(mysteryBoxContainer.children).filter(
      (box) => box.dataset.checked === "false",
    );
    if (boxes.length <= 1) {
      clearMysteryShuffle();
      return;
    }

    const [boxA, boxB] = chooseTwoRandomBoxes(boxes);
    const posA = parseInt(boxA.dataset.position, 10);
    const posB = parseInt(boxB.dataset.position, 10);

    boxA.dataset.position = posB;
    boxB.dataset.position = posA;

    boxA.classList.add("moving");
    boxB.classList.add("moving");
    positionMysteryBoxes();

    setTimeout(() => {
      boxA.classList.remove("moving");
      boxB.classList.remove("moving");
    }, 1200);
  }, 1200);
}

function chooseTwoRandomBoxes(boxes) {
  if (boxes.length <= 2) {
    return boxes;
  }
  const idxA = Math.floor(Math.random() * boxes.length);
  let idxB = Math.floor(Math.random() * boxes.length);
  while (idxB === idxA) {
    idxB = Math.floor(Math.random() * boxes.length);
  }
  return [boxes[idxA], boxes[idxB]];
}

function stopMysteryShuffle() {
  clearMysteryShuffle();
  isMysteryShuffling = false;
}

function clearMysteryShuffle() {
  if (boxShuffleInterval) {
    clearInterval(boxShuffleInterval);
    boxShuffleInterval = null;
  }
}

function handleMysteryBoxClick(box, scene) {
  const boxIndex = parseInt(box.dataset.boxIndex, 10);
  const isCorrect = boxIndex === secretBoxIndex;

  if (isMysteryShuffling) {
    return;
  }

  if (isCorrect) {
    box.classList.add("correct");
    box.dataset.checked = "true";
    box.classList.remove("disabled");
    box.innerHTML = `
      <div class="box-content found">Mảnh 3 ở đây!</div>
    `;
    scene4FoundHiddenFragment = true;
    mysteryMessage.innerText =
      "Chính xác! Mảnh 3 đã được tìm thấy. Hộp sẽ đóng lại và mảnh sẽ xuất hiện.";
    revealScene4HiddenFragment(scene);
    setTimeout(() => {
      mysteryOverlay.classList.add("hidden");
      mysteryMessage.innerText = "";
    }, 700);
  } else {
    box.classList.add("wrong");
    box.dataset.checked = "true";
    box.classList.add("disabled");
    box.innerHTML = `
      <div class="box-content">Không có mảnh</div>
    `;
    mysteryMessage.innerText = "Sai rồi! Chọn lại một hộp khác.";
  }
}

function revealScene4HiddenFragment(scene) {
  const hiddenFragment = scene.fragments.find((f) => f.id === 3);
  if (!hiddenFragment) return;

  const img = document.createElement("img");
  img.src = hiddenFragment.src;
  img.classList.add("fragment");
  img.draggable = true;
  img.dataset.id = hiddenFragment.id;
  img.dataset.sceneId = 3;
  img.dataset.fragmentId = hiddenFragment.id;
  addDrag(img);
  fragmentContainer.appendChild(img);
}

function positionMysteryBoxes() {
  const positions = [0, 260, 520];
  Array.from(mysteryBoxContainer.children).forEach((box) => {
    const pos = parseInt(box.dataset.position, 10);
    box.style.left = `${positions[pos]}px`;
  });
}

function resetScene() {
  if (currentScene === 3) {
    loadScene(currentScene);
    return;
  }

  document.querySelectorAll(".drop-zone img").forEach((img) => {
    fragmentContainer.appendChild(img);
  });

  document.querySelectorAll(".drop-zone").forEach((zone) => {
    zone.innerHTML = `<span>Vị trí ${zone.dataset.order}</span>`;
  });

  result.innerHTML = "";
  memoryBox.classList.add("hidden");
  document.getElementById("hintBox").classList.add("hidden");
  sceneComplete = false;
  hintShown = false;
  document.getElementById("checkBtn").innerText = "Kiểm Tra";
  document.getElementById("resetBtn").style.display = "flex";
}

document.getElementById("checkBtn").addEventListener("click", () => {
  if (currentScene === 3 && !scene4FoundHiddenFragment) {
    result.innerHTML =
      "⚠️ Bạn phải mở hộp bí ẩn và tìm mảnh 3 trước khi kiểm tra.";
    return;
  }

  if (sceneComplete) {
    nextScene();
    return;
  }

  if (hintShown) {
    resetScene();
    return;
  }

  let correct = true;

  document.querySelectorAll(".drop-zone").forEach((zone) => {
    const img = zone.querySelector("img");

    if (!img || img.dataset.id !== zone.dataset.order) {
      correct = false;
    }
  });

  if (correct) {
    result.innerHTML = "🎬 Mảnh Ký Ức Hoàn Chỉnh";
    memoryBox.innerText = scenes[currentScene].memory;
    memoryBox.classList.remove("hidden");
    sceneComplete = true;

    // Check if it's the last scene (scene 6)
    if (currentScene === scenes.length - 1) {
      document.getElementById("checkBtn").innerText =
        "📚 Xem lại toàn bộ ký ức";
      showCompleteModal(scenes[currentScene].memory, true);
    } else {
      document.getElementById("checkBtn").innerText = "Cảnh Tiếp Theo";
      showCompleteModal(scenes[currentScene].memory, false);
    }

    document.getElementById("resetBtn").style.display = "none";
  } else {
    const hintBox = document.getElementById("hintBox");
    hintBox.innerHTML = scenes[currentScene].hint;
    hintBox.classList.remove("hidden");
    result.innerHTML = "";
    memoryBox.classList.add("hidden");
    hintShown = true;
    document.getElementById("checkBtn").innerText = "Thử Lại";
    document.getElementById("resetBtn").style.display = "none";
  }
});

function nextScene() {
  currentScene++;

  if (currentScene >= scenes.length) {
    gameContainer.classList.add("hidden");
    galleryPage.classList.remove("hidden");
    currentGalleryIndex = 0;
    showGalleryImage();
    return;
  }

  loadScene(currentScene);
}

document.getElementById("resetBtn").addEventListener("click", () => {
  resetScene();
});

completeNextBtn.addEventListener("click", () => {
  hideCompleteModal();
  nextScene();
});

function showCompleteModal(memoryText, isLastScene) {
  completeMemory.innerText = memoryText;
  completeNextBtn.innerText = isLastScene
    ? "📚 Xem lại toàn bộ ký ức"
    : "Cảnh Tiếp Theo";
  completeModal.classList.remove("hidden");
}

function hideCompleteModal() {
  completeModal.classList.add("hidden");
}

function showGalleryImage() {
  if (allFragments.length > 0) {
    galleryImage.src = allFragments[currentGalleryIndex].src;
    currentIndexDisplay.innerText = currentGalleryIndex + 1;
  }
}

document.getElementById("prevBtn").addEventListener("click", () => {
  if (currentGalleryIndex > 0) {
    currentGalleryIndex--;
    showGalleryImage();
  }
});

document.getElementById("nextBtn").addEventListener("click", () => {
  if (currentGalleryIndex < allFragments.length - 1) {
    currentGalleryIndex++;
    showGalleryImage();
  }
});

document.getElementById("nextSectionBtn").addEventListener("click", () => {
  galleryPage.classList.add("hidden");
  questionsPage.classList.remove("hidden");
});

// ========== FRAGMENT UNLOCK MODAL FUNCTIONS ==========

function showFragmentUnlockModal(fragmentElement) {
  // Set lock key from fragment attributes
  const sceneId = parseInt(fragmentElement.dataset.sceneId);
  const fragmentId = parseInt(fragmentElement.dataset.fragmentId);
  const lockKey = `${sceneId}-${fragmentId}`;

  // Display question
  modalQuestionText.innerText = fragmentUnlockQuestion.question;

  // Clear previous options
  modalOptionsContainer.innerHTML = "";

  // Add options
  fragmentUnlockQuestion.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.classList.add("modal-option-btn");
    btn.innerText = option.text;

    btn.addEventListener("click", () => {
      handleFragmentUnlockAnswer(btn, option.correct, fragmentElement, lockKey);
    });

    modalOptionsContainer.appendChild(btn);
  });

  // Show modal
  fragmentModal.classList.remove("hidden");
}

function handleFragmentUnlockAnswer(
  btnElement,
  isCorrect,
  fragmentElement,
  lockKey,
) {
  // Disable all buttons
  document.querySelectorAll(".modal-option-btn").forEach((btn) => {
    btn.disabled = true;
  });

  if (isCorrect) {
    // Correct answer - unlock fragment
    btnElement.classList.add("correct");

    // Remove lock from lockedFragments
    delete lockedFragments[lockKey];

    // Update UI
    fragmentElement.classList.remove("locked");
    fragmentElement.draggable = true;

    // Show success message
    setTimeout(() => {
      showSuccessPopup("✅ Chính xác! Mảnh đã mở khóa.");
      closeFragmentModal();
    }, 500);
  } else {
    // Wrong answer - show popup to retry
    btnElement.classList.add("wrong");

    // Show error popup and allow retry
    setTimeout(() => {
      showWrongPopup("❌ Sai rồi! Hãy chọn lại.");

      // Re-enable buttons for retry
      document.querySelectorAll(".modal-option-btn").forEach((btn) => {
        btn.disabled = false;
        btn.classList.remove("wrong");
      });
    }, 500);
  }
}

function closeFragmentModal() {
  fragmentModal.classList.add("hidden");

  // Reset modal buttons
  document.querySelectorAll(".modal-option-btn").forEach((btn) => {
    btn.disabled = false;
    btn.classList.remove("correct", "wrong");
  });
}

// Close modal button
modalCloseBtn.addEventListener("click", () => {
  closeFragmentModal();
});

// Close modal when clicking outside
fragmentModal.addEventListener("click", (e) => {
  if (e.target === fragmentModal) {
    closeFragmentModal();
  }
});

// ========== SUCCESS POPUP FUNCTIONALITY ==========

function showSuccessPopup(message) {
  // Create popup container
  const popup = document.createElement("div");
  popup.className = "success-popup";
  popup.innerText = message;
  popup.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    color: #000;
    padding: 30px 40px;
    border-radius: 12px;
    font-size: 18px;
    font-weight: bold;
    font-family: "Caveat", cursive;
    z-index: 2000;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
    animation: popupSlideIn 0.3s ease;
  `;

  document.body.appendChild(popup);

  // Auto remove after 2 seconds
  setTimeout(() => {
    popup.style.animation = "popupSlideOut 0.3s ease";
    setTimeout(() => popup.remove(), 300);
  }, 2000);
}

function showWrongPopup(message) {
  // Create popup container
  const popup = document.createElement("div");
  popup.className = "wrong-popup";
  popup.innerText = message;
  popup.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #ffcccc;
    color: #c00;
    padding: 30px 40px;
    border-radius: 12px;
    font-size: 18px;
    font-weight: bold;
    font-family: "Caveat", cursive;
    z-index: 2000;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
    animation: popupSlideIn 0.3s ease;
    border: 2px solid #c00;
  `;

  document.body.appendChild(popup);

  // Auto remove after 1.5 seconds
  setTimeout(() => {
    popup.style.animation = "popupSlideOut 0.3s ease";
    setTimeout(() => popup.remove(), 300);
  }, 1500);
}

// Add CSS animation
const style = document.createElement("style");
style.textContent = `
  @keyframes popupSlideIn {
    from {
      transform: translate(-50%, -50%) scale(0.5);
      opacity: 0;
    }
    to {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
  }

  @keyframes popupSlideOut {
    from {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
    to {
      transform: translate(-50%, -50%) scale(0.5);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// ========== IMAGE ZOOM FUNCTIONALITY ==========

const zoomModal = document.getElementById("zoomModal");
const zoomImage = document.getElementById("zoomImage");
const zoomClose = document.querySelector(".zoom-close");

// Open zoom modal when clicking on fragment image
function openZoomModal(imageSrc) {
  zoomImage.src = imageSrc;
  zoomModal.classList.remove("hidden");
}

// Close zoom modal
function closeZoomModal() {
  zoomModal.classList.add("hidden");
  zoomImage.src = "";
}

// Add click event listener to open zoom modal
// This is called in loadScene when creating fragment images
function addZoomListener(img) {
  img.style.cursor = "pointer";
  img.addEventListener("click", (e) => {
    e.stopPropagation();
    openZoomModal(img.src);
  });
}

// Close button click
zoomClose.addEventListener("click", closeZoomModal);

// Close when clicking outside the image
zoomModal.addEventListener("click", (e) => {
  if (e.target === zoomModal) {
    closeZoomModal();
  }
});

// Close on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeZoomModal();
  }
});
