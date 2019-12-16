const personType = document.querySelectorAll('.person-type input');
const chooseType = document.querySelectorAll('.types-choose');

function activePersonType(index) {
  chooseType.forEach((form) => {
    form.classList.remove('active');
  });

  chooseType[index].classList.add('active');
}

chooseType[1].classList.add('active');

personType.forEach((item, index) => {
  item.addEventListener('click', () => {
    activePersonType(index);
  });
});

const typesChoose = document.querySelectorAll('.types-choose form');
const typesVr = document.querySelectorAll('.vr-types');

function activeFormType(index) {
  typesChoose.forEach((enterprise) => {
    enterprise.classList.remove('active');
  });
  
  typesChoose[index].classList.add('active');
}

typesChoose[0].classList.add('active');

typesVr.forEach((item, index) => {
  item.addEventListener('click', () => {
    activeFormType(index);
  })
})
