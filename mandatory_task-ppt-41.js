//print ODD numbers in array
function printOddNumbers(num){
    for(i=0;i<num.length;i++){
        if(num%2!=0){
            console.log(num)
        }
    }

}
var num=[1,3,4,5,6]
printOddNumbers(num);

//string to title caps
let op_arr=[];
var cap_str=function(arr){
	
	for (i in arr){
		
		arr[i]=arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
		op_arr.push(arr[i]);
	}
	console.log(op_arr);
}
let str_arr=["hi", "i" ,"am", "Ramya"];
cap_str(str_arr);

//SUM OF ALL NUMBER IN ARRAY
var sum= [1,2,3,4,5]
var count=0;
for(i=0;i<sum.length;i++){
    count +=sum;
    console.log(sum);
}


//PRIME NUMBER
let op_arr2=[];
var pri_num=function(arr){
	for (i in p_arr){
		if (i==1){
			continue;
		}
		if ((i==2)||(i==3)){
			op_arr2.push(i);
			continue;
		}
		let fac=i / 2;
		let cnt=0;
		for (j=2;j<=fac;j++){
			if (i%j != 0){
				cnt++;
			}
			else
      		{
        		cnt=0;
        		break;
      		}
		

		}
		if (cnt >0){
			op_arr2.push(i);
		}

	}
	console.log(op_arr2);
}


let p_arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
pri_num(p_arr);

//program to return pallindrome strings
let pall_arr=["hello","madam","radar","array"];
let op_pall_arr=[];
(function(pall_arr){
	for (i in pall_arr)
	{
		let str=pall_arr[i];
		var split_arr=str.split("");
		var rev_arr=split_arr.reverse();
		var join_arr=rev_arr.join("");
		if (str==join_arr){
			op_pall_arr.push(str);
		}
	}
	console.log(op_pall_arr);
	console.log("program 4")
})(pall_arr);

//program to find median of two arrays

inp_arr1=[10,14,13,12,17];
inp_arr2=[25,22,20,19,31];
(function(arr1,arr2){
	arr1.sort();
	arr2.sort();

	len_arr1=arr1.length;
	len_arr2=arr2.length;
	if (len_arr1 % 2 !=0){
		var ind=(len_arr1+1)/2
		var med1=inp_arr1[ind-1];
		var med2=inp_arr2[ind-1];
	}
	else{
		var ind1=len_arr/2;
		var ind2=ind1+1;
		var med1=inp_arr1[ind-1];
		var med2=inp_arr2[ind-1];
	}
	console.log(med1.toString() + " "+ med2.toString());
	

})(inp_arr1,inp_arr2);

//REMOVE DUPLICATES
var inp_arr=[12,23,12,24,25];
function rem_dup_item(inp_arr)
{
	
	var uniq_arr=[];
	var res_arr=inp_arr.reduce((uniq_arr,item)=>{
		if (!(uniq_arr.includes(item))){
			uniq_arr.push(item);
			return uniq_arr;
		}
		else{
			ind=inp_arr.indexOf(item);
			inp_arr.splice(ind,1);
			return uniq_arr;
		}
	
	},[]);
	console.log(inp_arr);
	console.log("program 6")
}

rem_dup_item(inp_arr);


//Rotate an array by ktimes
inp_arr=[1,2,3,4,5];var k=3;

function arr_rotate(inp_arr,k){
    for (i=0;i<k;i++){

        var temp=inp_arr.shift();
        inp_arr[inp_arr.length]=temp;
        console.log(inp_arr);
    }
    
}

arr_rotate(inp_arr,k);
