
const getData = async ()=>{
    const res=await fetch("https://api.spacexdata.com/v3/capsules");
    const data=await res.json();
    // console.log(data)
    return data;
}

export default getData;