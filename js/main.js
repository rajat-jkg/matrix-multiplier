var a1, a2, b1, b2, i, j,i1,j1;
var a = 0,b = 0;
i=0;
j=0;
i1=0;
j1=0;
var mat1 = [[],[],[],[],[],[],[],[],[],[],[],[]];
var mat2 = [[],[],[],[],[],[],[],[],[],[],[],[]];
var result = [[],[],[],[],[],[],[],[],[],[],[],[]];
function matr1()
{
    if(i<a1&&j<a2)
    {
        mat1[i][j] = Number(document.getElementById("a").value);
        j++;
        document.getElementById("a").value = '';

        if(i==a1-1&&j==a2)
        {
        document.getElementById("matrix1").innerHTML = "" ;
        i = 0;
        j = 0;
        document.getElementById("a").value = '';
        document.getElementById("mat1").innerHTML = "First matrix that you entered is <br>"
        for(i1 = 0;i1<a1;i1++)
        {
            for(j1 = 0; j1<a2; j1++)
            {
                document.getElementById("mat1").innerHTML = document.getElementById("mat1").innerHTML+ mat1[i1][j1] + "\t  ";
            }
            document.getElementById("mat1").innerHTML = document.getElementById("mat1").innerHTML+ "<br>";
        }
        document.getElementById("a").style.display = "none";
        document.getElementById("ent1").style.display = "none";
        document.getElementById("matrix1").innerHTML = "";
        document.getElementById("m2").style.display = "block";
        document.getElementById("matrix2").innerHTML = "Enter the numbers for matrix 2 in horizontal order";
        }
    }
    else if(j==a2&&i<a1-1)
    {
        i++;
        j=0;
        mat1[i][j] = Number(document.getElementById("a").value);
        j++;
        document.getElementById("a").value = '';
        if(i==a1-1&&j==a2)
        {
        document.getElementById("matrix1").innerHTML = "" ;
        i = 0;
        j = 0;
        document.getElementById("a").value = '';
        document.getElementById("mat1").innerHTML = "Second matrix that you entered is <br>"
        for(i1 = 0;i1<a1;i1++)
        {
            for(j1 = 0; j1<a2; j1++)
            {
                document.getElementById("mat1").innerHTML = document.getElementById("mat1").innerHTML+ mat1[i1][j1] + "\t  ";
            }
            document.getElementById("mat1").innerHTML = document.getElementById("mat1").innerHTML+ "<br>";
        }
        document.getElementById("a").style.display = "none";
        document.getElementById("ent1").style.display = "none";
        document.getElementById("matrix1").innerHTML = "";
        document.getElementById("m2").style.display = "block";
        document.getElementById("matrix2").innerHTML = "Enter the numbers for matrix 2 in horizontal order";
        }

    }
}
function matr2()
{
    if(i<b1&&j<b2)
    {
        mat2[i][j] = Number(document.getElementById("b").value);
        j++;
        document.getElementById("b").value = '';
        if(i==b1-1&&j==b2)
        {
        document.getElementById("matrix2").innerHTML = "" ;
        i = 0;
        j = 0;
        document.getElementById("b").value = '';
        document.getElementById("mat2").innerHTML = "Second matrix that you entered is <br>"
        for(i1 = 0;i1<b1;i1++)
        {
            for(j1 = 0; j1<b2; j1++)
            {
                document.getElementById("mat2").innerHTML = document.getElementById("mat2").innerHTML+ mat2[i1][j1] + "\t  ";
            }
            document.getElementById("mat2").innerHTML = document.getElementById("mat2").innerHTML+ "<br>";
        }
        document.getElementById("a").style.display = "none";
        document.getElementById("ent2").style.display = "none";
        document.getElementById("b").style.display = "none";
        document.getElementById("matrix2").innerHTML = "";
        calResult();
        }
    }
    else if(j==b2&&i<b1-1)
    {
        i++;
        j=0;
        mat2[i][j] = Number(document.getElementById("b").value);
        j++;
        document.getElementById("b").value = '';
        if(i==b1-1&&j==b2)
        {
        document.getElementById("matrix2").innerHTML = "" ;
        i = 0;
        j = 0;
        document.getElementById("b").value = '';
        document.getElementById("mat2").innerHTML = "Second matrix that you entered is <br>"
        for(i1 = 0;i1<b1;i1++)
        {
            for(j1 = 0; j1<b2; j1++)
            {
                document.getElementById("mat2").innerHTML = document.getElementById("mat2").innerHTML+ mat2[i1][j1] + "\t  ";
            }
            document.getElementById("mat2").innerHTML = document.getElementById("mat2").innerHTML+ "<br>";
        }
        document.getElementById("a").style.display = "none";
        document.getElementById("ent2").style.display = "none";
        document.getElementById("b").style.display = "none";
        document.getElementById("matrix2").innerHTML = "";
        calResult();
        }

    }
}
function store()
{
    a1 = Number(document.getElementById("a1").value);
    a2 = Number(document.getElementById("a2").value);
    b1 = Number(document.getElementById("b1").value);
    b2 = Number(document.getElementById("b2").value);
    if(a1==0||a2==0||b1==0||b2==0)
    alert("Please make the proper input");
    else if(a2!=b1)
    alert("Marices cannot be multilied");
    else if(a1>10||a2>10||b1>10||b2>10)
    alert("You exceeded the maximum size");
    else
    {
        document.getElementById("m1").style.display = "block";
        document.getElementById("matrix1").innerHTML = "Enter numbers of matrix 1 in horizontal order";

    }
    document.getElementById("ent0").style.display = "none";

}
function calResult()
{
    var k;
    var sum = 0;
    for(i=0;i<a1;i++)
    {
        for(j=0;j<b2;j++)
        {
            for(k=0;k<a2;k++)
            {
                sum = sum+(mat1[i][k]*mat2[k][j]);
            }
            result[i][j] = sum;
            sum = 0;
        }
    }
    document.getElementById("result").innerHTML = "Result of multiplication  <br>";
    for(i1 = 0;i1<a1;i1++)
    {
        for(j1 = 0; j1<b2; j1++)
        {
            document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+ result[i1][j1] + "\t  ";
        }
        document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+ "<br>";
    }
}