
const check = document.querySelector('.check');
const ueserform = document.querySelector('.ueserform');
const loder = document.querySelector('.loder');
const audio = document.querySelector('.audio');



// create click event

ueserform.onsubmit = (e) => {
    e.preventDefault();

    const getdata = new FormData(ueserform);

    const objectData = Object.fromEntries(getdata);

    const result = getResult(objectData.mark);

    loder.style.display = ' block';

    setTimeout(() => {

        loder.style.display = 'none';
     massge.innerHTML =  alertFunctions(`subject: ${objectData.SubjectName} / gpa: ${result.gpa} / grade: ${result.grade}`, 'success')
     audio.play();
        
    }, 1000);
  
    
     ueserform.reset();


};
// 