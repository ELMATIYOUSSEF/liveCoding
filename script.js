let url ='https://jsonplaceholder.typicode.com/posts';
async function fetchuser(){
    let response = await fetch(url)
    let data= await  response.json()
    return data;
}
async function main(){
    try {
        let json = await fetchuser()
        //console.log(json)
        return json
    } catch (error) {
        console.error(error);
    }
}
let data=main();
data.then(data=>{
    console.log(data);
    data.forEach(element => {
        addElement(element);
});
})



// // affiche data in index page 

function addElement(data) {

if(data['id'] != undefined){
 
  document.getElementById('data').innerHTML +=`<tr>
  <td width=450px>${data['body']} </td>
  <td width=250px>${data['id']} </td>
  <td width=400px>${data['title']} </td>
  <td width=250px>${data['userId']} </td>

  </tr>`;
}
}


let Url ='https://jsonplaceholder.typicode.com/posts';
  axios.get(Url)
  .then((res)=> addElement(res.data)
  )
  .catch((error)=>console.log(error))


//   // affiche data in index page areas

function addElement(res) {
res.forEach(data => {
    document.getElementById('data').innerHTML +=`<tr>
    <td width=450px>${data['body']} </td>
    <td width=250px>${data['id']} </td>
    <td width=400px>${data['title']} </td>
    <td width=250px>${data['userId']} </td>
    </tr>`;
});

}