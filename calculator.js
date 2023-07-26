document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('#add').onclick = () => {
        document.querySelector('#result').style.display = 'block';
        let fnum = document.getElementById('first').value;
        let snum = document.getElementById('second').value;
        document.querySelector('#res_label').innerHTML = parseInt(fnum) + parseInt(snum);
    }

    document.querySelector('#subtract').onclick = () => {
        document.querySelector('#result').style.display = 'block';
        let fnum = document.getElementById('first').value;
        let snum = document.getElementById('second').value;
        document.querySelector('#res_label').innerHTML = parseInt(fnum) - parseInt(snum);
    }

    document.querySelector('#multiply').onclick = () => {
        document.querySelector('#result').style.display = 'block';
        let fnum = document.getElementById('first').value;
        let snum = document.getElementById('second').value;
        document.querySelector('#res_label').innerHTML = parseInt(fnum) * parseInt(snum);
    }

    document.querySelector('#divide').onclick = () => {
        document.querySelector('#result').style.display = 'block';
        let fnum = document.getElementById('first').value;
        let snum = document.getElementById('second').value;
        document.querySelector('#res_label').innerHTML = parseInt(fnum) / parseInt(snum);
    }
})