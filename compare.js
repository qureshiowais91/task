// Two JSON objects with different order of keys
const json1 = '{"name": "John", "age": 30}';
const json2 = '{"age": 30, "name": "John"}';

// paser key and sort them
const obj1 = JSON.parse(json1);
const obj2 = JSON.parse(json2);

const key1 = Object.keys(obj1).sort();
const key2 = Object.keys(obj2).sort();

if(key1.length == key2.length){  
    let flag = false;  
    for(let i=0;i!=key1.length;i++){
        if(key1[i]==key2[i]){
            flag=true;
        }else{
            flag=false;
        }
    }
    console.log(flag)
}else{

    console.log(flag)
}
