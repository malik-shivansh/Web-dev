async function fetch(){
    let x=["initialising hacking...","Readin your files...","Password files detected...","Sendin all password and personal files to server...","cleaning up..."];
    for(let i of x){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(x[i])},Math.random()*7*2000);
        })
    }
}
async function time1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("initialising hacking...")
         },Math.random()*7);
    })
}
async function time2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Readin your files...")
         },Math.random()*7*2000);
    })
}
async function time3(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Password files detected...")
         },Math.random()*7*2000);
    })
}
async function time4(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Sendin all password and personal files to server...")
         },Math.random()*7*2000);
    })
}
async function time5(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("cleaning up...")
         },Math.random()*7*2000);
    })
}
async function main(){
    let data1=await time1();
    let data2=await time2();
    let data3=await time3();
    let data4=await time4();
    let data5=await time5();
    document.getElementById("demo").innerHTML=`${data1} <br> ${data2} <br> ${data3} <br> ${data4} <br> ${data5}`;
    console.log(data1);
    console.log(data2);
    console.log(data3);
    console.log(data4);
    console.log(data5);
}