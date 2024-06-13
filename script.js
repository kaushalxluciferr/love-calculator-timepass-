const btn=document.querySelector("button");
const ka=document.querySelector("span");
const cname=document.querySelector("#cname");
const namee=document.querySelector("#name");
btn.addEventListener("click",()=>{
    let num=Math.floor(Math.random()*100);
    console.log(num);
    if(cname.value==""&&namee.value=="")
       {
           alert("Enter Your Both Name")
           return;
       }
    if(cname.value=="")
        {
            alert("Enter Your crush Name")
            return;
        }
        if(namee.value=="")
            {
                alert("Enter Your  Name")
                return;
            }

ka.innerText="Your love % is "+num+"%";
})