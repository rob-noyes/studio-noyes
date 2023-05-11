function filterProjects() {
  const filterButtons = document.querySelectorAll('.filter');
  const projectTags = document.querySelectorAll('.project-tag');
  const projectContainers = document.querySelectorAll(
    '.project-link-container'
  );

  let selectedFilters = []; // store the selected filters in an array

  // add click event listener to each filter button
  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filterValue = button.getAttribute('value');

      // toggle the selected state of the button
      button.classList.toggle('selected');

      // add or remove filter from the selectedFilters array
      if (button.classList.contains('selected')) {
        selectedFilters.push(filterValue);
      } else {
        selectedFilters = selectedFilters.filter(
          (filter) => filter !== filterValue
        );
      }

      // filter the projects based on selected filters
      projectContainers.forEach((container) => {
        const projectTag = container.querySelector('.project-tag');
        const tagValue = projectTag.getAttribute('data-tag');

        if (
          selectedFilters.length === 0 ||
          selectedFilters.includes(tagValue)
        ) {
          // container.style.display = 'block';
          container.classList.remove('hidden');
        } else {
          // container.style.display = 'none';
          container.classList.add('hidden');
        }
      });
      // display all projects if no filters are selected
      if (selectedFilters.length === 0) {
        projectContainers.forEach((container) => {
          // container.style.display = 'block';
          container.classList.remove('hidden');
        });
      }
    });
  });
}

filterProjects();
