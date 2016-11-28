import numeral from 'numeral';
import { getUsers } from './api/usrApi';
import './index.css';

const courseValue = numeral(1000).format('$0,0.00');
console.log(`I would pay ${courseValue}`);

getUsers().then( result => {
    let usersBody ='';
    result.forEach(user => {
        usersBody += `<tr>
        <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
        <td>${user.id}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
        </tr>`
    });
    global.document.getElementById('users').innerHTML = usersBody;
});