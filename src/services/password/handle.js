import permittedCharacters from "./utils/permittedCharacters.js";

async function handle(){
let characters = []
let password = ""

const passwordLength = process.env.PASSWORD_LENGTH || 12;
characters = await permittedCharacters()

for(let i = 0; i < passwordLength; i++){
    const Index = Math.floor(Math.random() * characters.length)
    password += characters[Index];

}
}
export default handle;