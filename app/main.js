
// const check = document.querySelector('.check');
// const ueserform = document.querySelector('.ueserform');
// const loder = document.querySelector('.loder');
// const audio = document.querySelector('.audio');



// // create click event

// ueserform.onsubmit = (e) => {
//     e.preventDefault();

//     const getdata = new FormData(ueserform);

//     const objectData = Object.fromEntries(getdata);

//     const result = getResult(objectData.mark);

//     loder.style.display = ' block';

//     setTimeout(() => {

//     loder.style.display = 'none';
//      massge.innerHTML =  alertFunctions(`subject: ${objectData.SubjectName} / gpa: ${result.gpa} / grade: ${result.grade}`, 'success')
//      audio.play();
        
//     }, 1000);
  
    
//      ueserform.reset();


// };
// // 



const userForm = document.querySelector('.userForm');
const massge1 = document.querySelector('.massge');
const loding = document.querySelector('.loding');
const audio = document.querySelector('.audio');
const celebration = document.querySelector('.celebration');

// creare submit evant

userForm.onsubmit = (e) => {

    e.preventDefault();

    const getDtata = new FormData(e.target);

    const Data = Object.fromEntries(getDtata);
     const Marks =  getResult(Data.mark);
     loding.style.display ='block';
       
     
     // Validations 
    
     setTimeout(() => {
        loding.style.display ='none';
    if (!Data.Subject.trim() || !Data.mark.trim()  ) {

        alertFunctions('All Fileds Are Required', 'danger');
        
    } else {

        
        massge.innerHTML =  alertFunctions( `Subject: ${Data.Subject} / Gpa: ${Marks.gpa} / Greade: ${Marks.grade}`, 'info');
        
        
    }
    celebration.style.display ='block';

    audio.play();
        
     }, 1000);
     
   
    


  

    userForm.reset();

};

// 