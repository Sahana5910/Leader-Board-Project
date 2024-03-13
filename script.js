

let section = document.querySelector(".section-2");
let fname = document.querySelector(".fname");
let lname =  document.querySelector(".lname");
let pcountry = document.querySelector(".country");
let pscore = document.querySelector(".score");
let btn = document.querySelector('button')
let data = [
    {
        firstName:"sahana",
        lastName:"s",
        country:"india",
        playerScore:123
    },
    {
        firstName:"sahana",
        lastName:"s",
        country:"india",
        playerScore:12
    },
    {
        firstName:"sahana",
        lastName:"s",
        country:"india",
        playerScore:13
    }
 ]
btn.addEventListener('click',(e)=>{
    e.preventDefault();


    if(fname.value==""||lname.value==""||pcountry.value==""||pscore.value==""){
        alert("Please fill all the fields");
    }
    let a ={
        firstName:fname.value,
        lastName:lname.value,
        country:pcountry.value,
        playerScore:Number(pscore.value)


};
data.push(a);
updateData()
});


function updateData(){
    data.sort((p1,p2)=>{
        return p2.playerScore-p1.playerScore;
    });
    // console.log(data);
}
// console.log(data);
data.forEach((item)=>{
    let div =document.createElement('div');
    let playerFName=document.createElement("span");
    let playerLName=document.createElement("span");
    let playerCountry=document.createElement("span");
    let score=document.createElement("span");

    let lastSpan = document.createElement('div');

    playerFName.innerText=item.firstName;
    playerLName.innerText=item.lastName;
    playerCountry.innerText=item.country;
    score.innerText=item.playerScore;
    lastSpan.innerHTML = `<i class="fa-solid fa-trash-can"></i><span class="add">+5</span><span class="minus">-5</span>`

    
    div.append(playerFName, playerLName,playerCountry,score,lastSpan)
    // console.log(div);
    section.appendChild(div);
})
document.addEventListener('load',updateData)

// let section2 = document.querySelector(".section-2")
