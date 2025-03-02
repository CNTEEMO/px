// 禁用右键菜单
document.addEventListener('contextmenu', function(event) {
  event.preventDefault(); // 禁用右键菜单
}, false);

// 禁用开发者工具快捷键
document.addEventListener('keydown', function(event) {
  // 禁用 F12 键（开发者工具快捷键）
  if (event.keyCode === 123) {
    event.preventDefault();
  }
  // 禁用 Ctrl + Shift + I（开发者工具快捷键）
  if (event.ctrlKey && event.shiftKey && event.keyCode === 73) {
    event.preventDefault();
  }
  // 禁用 Ctrl + Shift + J（开发者工具快捷键）
  if (event.ctrlKey && event.shiftKey && event.keyCode === 74) {
    event.preventDefault();
  }
  // 禁用 Ctrl + U（查看源代码）
  if (event.ctrlKey && event.keyCode === 85) {
    event.preventDefault();
  }
}, false);

// 禁用文本选择和复制
document.addEventListener('selectstart', function(event) {
  event.preventDefault(); // 禁止选择文本
}, false);

document.addEventListener('copy', function(event) {
  event.preventDefault(); // 禁止复制
}, false);

// 禁止拖动文本
document.addEventListener('dragstart', function(event) {
  event.preventDefault(); // 禁止拖拽
}, false);
