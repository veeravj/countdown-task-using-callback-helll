let i=10;
setTimeout(()=>{
  console.log(i); 

 document.body.style.color="red"; document.querySelector(".count").innerText=i;
  setTimeout(()=>{
    console.log(i-1);
 document.querySelector(".count").innerText=i-1;
    setTimeout(()=>{
      console.log(i-2);
       document.querySelector(".count").innerText=i-2;
      setTimeout(()=>{
        console.log(i-3);
         document.querySelector(".count").innerText=i-3;
        setTimeout(()=>{
          console.log(i-4);
           document.querySelector(".count").innerText=i-4;
          setTimeout(()=>{
            console.log(i-5);
             document.querySelector(".count").innerText=i-5;
            setTimeout(()=>{
              console.log(i-6);
               document.querySelector(".count").innerText=i-6;
              setTimeout(()=>{
                console.log(i-7);
                 document.querySelector(".count").innerText=i-7;
                setTimeout(()=>{
                  console.log(i-8);
                   document.querySelector(".count").innerText=i-8;
                  setTimeout(()=>{
                    console.log(i-9);
                     document.querySelector(".count").innerText=i-9;
                  },1000)
                },1000)
              },1000)
            },1000)
          },1000)
        },1000)
      },1000)
    },1000)
  },1000)
},1000)
setTimeout(()=>{
  console.log("Happy Independance day!!!!!!")
  document.querySelector(".count").innerText="Happy Independance day!!!!!!";
},11*1000);