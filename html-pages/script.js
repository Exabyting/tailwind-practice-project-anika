const grid = document.getElementById('masonry-grid');

// Generate dummy items with variable height
for (let i = 0; i < 20; i++) {
  const item = document.createElement('div');
  item.className = 'grid-item';
  item.innerHTML = `<p><strong>Item ${i + 1}</strong></p>
                    <p>${'Lorem ipsum dolor sit amet. '.repeat(Math.floor(Math.random() * 5) + 1)}</p>`;
  grid.appendChild(item);
}

window.addEventListener('load', () => {
  layoutMasonry();
});

window.addEventListener('resize', () => {
  layoutMasonry();
});

function layoutMasonry() {
  const gridItems = Array.from(document.querySelectorAll('.grid-item'));
  const columnCount = getComputedStyle(grid).getPropertyValue('grid-template-columns').split(' ').length;
  const columnHeights = new Array(columnCount).fill(0);

  const columnWidth = grid.offsetWidth / columnCount;

  gridItems.forEach((item, index) => {
    const col = columnHeights.indexOf(Math.min(...columnHeights));
    const top = columnHeights[col];
    const left = col * columnWidth;

    item.style.top = `${top}px`;
    item.style.left = `${left}px`;
    item.style.width = `${columnWidth - 16}px`; // Adjust for gap
    columnHeights[col] += item.offsetHeight + 16; // Include gap
  });

  grid.style.height = `${Math.max(...columnHeights)}px`;
}
