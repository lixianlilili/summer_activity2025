"hello".length;
console.log("hello".length);
console.log("hello".charAt(0));
console.log("hello".replace("hello","ook"))
console.log("hello,world".toUpperCase());
var name="dastauto";
console.log(name);
let a=1;
console.log(a);
name="simon";
console.log(name);
a+=1;
console.log(a);
const Pi=3.14;

let x=5;
x+=5;
x++;
console.log(x);
var o="3"+"4";
console.log(o);
o="3"+4+5;
console.log(o);
o=3+4+"5";
console.log(o);
//类型自动转换
console.log(123=="123");
//没有类型自动转换
console.log(123==="123");
let age=20;
name="johnsun";
if(name=="simon"&&age==19)
{
    console.log("去你码的");
}
else if(name=="john"){
    console.log("你好");
}
else
{
    console.log("娶你·");
}
var t=19;
do{
    t++;
    console.log(t);
}while(t==20)
//var是全局作用域，let和const是没有作用域的
for(let i=1;i<100;i++)
    {
        console.log(i);
    }
//对象
let obj=new Object();
let obj2={};
obj={
    n:"sinmon",
    age:"20",
    email:"sinmon.al",
    contact:{
    phone:"1234567",
    Telegram:"@simon"
    }

}
console.log(obj);
console.log(obj.n);
console.log(obj.contact.phone);
console.log(obj["contact"]["phone"]);
obj.age=21;
console.log(obj.age);
obj.contact.wechat="lxl123";
console.log(obj.contact);
console.log(obj.contact.wechat);
//数组
var arr=new Array();
var brr=[];
arr[0]="dog";
arr[1]="cat";
arr[5]="cow";
console.log(arr);
brr=["dog","cat","cow"];
console.log(brr);
for(let i=0;i<brr.length;i++)
    {
        console.log(brr[i]);
    }

