function createRow(users) {
    for (let i = 0; i < users.length; i++) {


        let tmp = `<tr>
                    <td>${users[i].fname}</td>
                    <td>${users[i].lname}</td>
                    <td>${users[i].email}</td>
                    <td>${users[i].age}</td>
                    <td>${users[i].phone}</td>
                    <td>${users[i].address}</td>
                  </tr>`;           
        console.log(tmp);
        $("#usersTable").append(tmp);
    }
    


}

function init() {
    console.log("Listing users");
    let users = readUsers();
    createRow(users);

}
window.onload = init;