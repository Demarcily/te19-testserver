window.addEventListener('load', () => {
  console.log('hej världen');

  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', (e) => {
      console.log(e.target);
      const id = e.target.id.split("-")[1];

      const url = `/tasks/${id}/complete`;

      fetch(url, {
        method: 'POST',
      }).then(response => {
        console.log(response);
        if (e.target.checked) {
          req.session.flash = {
            msg: 'Task completed',
            task: task + "' was added"
          }
        } else {
          req.session.flash = {
            msg: 'Task uncompleted',
            task: task + "' was added"
          }
        }
      }).catch(error => {
        console.error(error);
      });
    });
  });
});