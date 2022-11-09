// let x=29;

// if(x%2==0)
// {
//     console.log( " x là số chẵn :",x, "chia 2 =",x/2);
// }
// else 
// {
//     if(x%3==0)
//     {console.log("x la so lẻ")}
//     else
//     console.log("x là số lẻ:", "x:3 dư:", x%3);
// }
let result = "";
for (let i = 1   ; i <=11; i++)//laphang
{
    for (let j = 1; j <= 6  ; j++) //lapcot
    {
        if(j<6)
        {
            if(j>=7-i)
        {result+="*";}
        else{
            result+=" ";
        }
        }
        
    }
    


}



