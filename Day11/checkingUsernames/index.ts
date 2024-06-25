let currentUsers: string[] = ["Alex", "John", "David", "James", "Ava", "Sophia"];

let newUsers: string[] = ["Liam", "Amelia", "Noah", "David", "Sophia", "Olivia"];

let lowerCaseCurrentUser: string [] = currentUsers.map(user => user.toLowerCase());

for (let newUser of newUsers){
    if (lowerCaseCurrentUser.includes(newUser.toLowerCase())){
        console.log(`The username "${newUser}" is already existing.`)
    } else {
        console.log(`The username "${newUser}" is available`)
    }
}