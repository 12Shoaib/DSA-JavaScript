const rec =(n) => {
    //baseCondition

    if(n==0) return 
    console.log(n)

    //RecursiveCall
    rec(n-1)
}


//Printing Number in  Order
const recu = (n) => {
    //baseCondition

    if(n===0) return 

    //recusrsiveCall
    recu(n-1)
    console.log(n)

}

recu(5)
rec(5)
