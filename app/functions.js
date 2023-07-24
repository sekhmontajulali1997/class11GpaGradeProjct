const getResult = (mark) => {

    let gpa ='';
    let grade ='';


    if (mark >=0 && mark <=32 ) {
        gpa = '0';
        grade = 'D'
        
    } else if (mark >=33 && mark <=49 ) {
        gpa = '1';
        grade = 'c'
    } else if (mark >=50 && mark <=69 ) {
        gpa = '2';
        grade =  'B'   
    }else if (mark >=70 && mark <=89 ) {
        gpa = '4';
        grade = 'A'
    }else if (mark >=90 && mark <=100 ) {
        gpa = '5';
        grade = 'AA+'
    }else{
        gpa = 'invalid';
        grade = 'invalid';
    }

    return {

        gpa: gpa,
        grade: grade,
    }

};

//  Create alert functions

const massge = document.querySelector('.massge');
 
const alertFunctions = ( msg, type) =>  {

    
    return massge.innerHTML =`

    <p class="alert alert-${type} d-flex justify-content-between">${msg} <button class=" btn-close" data-bs-dismiss="alert"></button></p>

  
    `
  
 

};
