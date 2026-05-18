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
];

// OOP Fragment Unlock Question
const fragmentUnlockQuestion = {
  sceneId: 1, // Scene 2 (0-indexed)
  fragmentId: 2, // Fragment 2
  question:
    "Đâu KHÔNG phải là một trong bốn tính chất chính của lập trình hướng đối tượng (OOP)?",
  options: [
    { text: "A. Đóng gói (Encapsulation)", correct: false },
    { text: "B. Kế thừa (Inheritance)", correct: false },
    { text: "C. Biên dịch (Compilation)", correct: true },
    { text: "D. Đa hình (Polymorphism)", correct: false },
  ],
};

const fragmentContainer = document.getElementById("fragmentContainer");
const dropContainer = document.getElementById("dropContainer");
const sceneTitle = document.getElementById("sceneTitle");
const result = document.getElementById("result");
const memoryBox = document.getElementById("memoryBox");
const galleryPage = document.getElementById("galleryPage");
const gameContainer = document.getElementById("gameContainer");
const questionsPage = document.getElementById("questionsPage");
const galleryImage = document.getElementById("galleryImage");
const currentIndexDisplay = document.getElementById("currentIndex");
const totalIndexDisplay = document.getElementById("totalIndex");

// Modal references
const fragmentModal = document.getElementById("fragmentModal");
const modalQuestionText = document.getElementById("modalQuestionText");
const modalOptionsContainer = document.getElementById("modalOptionsContainer");
const modalCloseBtn = document.getElementById("modalCloseBtn");

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

  // CREATE FRAGMENTS (with shuffle)
  const shuffledFragments = shuffleArray(scene.fragments);
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

  // Click event to handle locked fragments
  el.addEventListener("click", () => {
    const sceneId = parseInt(el.dataset.sceneId);
    const fragmentId = parseInt(el.dataset.fragmentId);
    const lockKey = `${sceneId}-${fragmentId}`;

    // Check if this fragment is locked
    if (lockedFragments[lockKey]) {
      showFragmentUnlockModal(el);
    }
  });
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

function resetScene() {
  document.querySelectorAll(".drop-zone img").forEach((img) => {
    fragmentContainer.appendChild(img);
  });

  document.querySelectorAll(".drop-zone").forEach((zone) => {
    zone.innerHTML = `<span>Vị trí ${zone.dataset.order}</span>`;
  });

  result.innerHTML = "";
  memoryBox.classList.add("hidden");
  sceneComplete = false;
  hintShown = false;
  document.getElementById("checkBtn").innerText = "Kiểm Tra";
  document.getElementById("resetBtn").style.display = "flex";
}

document.getElementById("checkBtn").addEventListener("click", () => {
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
    } else {
      document.getElementById("checkBtn").innerText = "Cảnh Tiếp Theo";
    }

    document.getElementById("resetBtn").style.display = "none";
  } else {
    result.innerHTML = "⚠️ Chưa đúng rồi!<br>" + scenes[currentScene].hint;
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
      alert("✅ Chính xác! Mảnh đã mở khóa.");
      closeFragmentModal();
    }, 500);
  } else {
    // Wrong answer - hide fragment
    btnElement.classList.add("wrong");

    // Hide fragment
    setTimeout(() => {
      fragmentElement.style.display = "none";
      alert(
        "❌ Sai rồi! Mảnh sẽ biến mất. Hãy trả lời câu hỏi chính xác để mở khóa.",
      );
      closeFragmentModal();
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
