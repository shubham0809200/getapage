function firstt()
{
    document.getElementById('firstSheet').style.display='block';
    document.getElementById('secondSheet').style.display='none';
    document.getElementById('thirdSheet').style.display='none';
    document.getElementById('fourthSheet').style.display='none';


}

function secondd()
{
    document.getElementById('secondSheet').style.display='block';
    document.getElementById('firstSheet').style.display='none';
    document.getElementById('thirdSheet').style.display='none';
    document.getElementById('fourthSheet').style.display='none';



}

function thirdd()
{
    document.getElementById('thirdSheet').style.display='block';
    document.getElementById('firstSheet').style.display='none';
    document.getElementById('secondSheet').style.display='none';
    document.getElementById('fourthSheet').style.display='none';


}

function fourthh()
{
    document.getElementById('fourthSheet').style.display='block';
    document.getElementById('firstSheet').style.display='none';
    document.getElementById('secondSheet').style.display='none';
    document.getElementById('thirdSheet').style.display='none';
    

}

var c=0;


function hotel(){

            if(c===1)
            {
                document.getElementById('hotell').style.display='none';
                c=0;
            }
            else
            {
                document.getElementById('hotell').style.display='block';
                c=1;
            }


}


var s=0;
function shops(){

    if(s===1)
    {
        document.getElementById('shopp').style.display='none';
        s=0;
    }
    else
    {
        document.getElementById('shopp').style.display='block';
        s=1;
    }


}


var o=0;
function office(){

    if(o===1)
    {
        document.getElementById('officee').style.display='none';
        o=0;
    }
    else
    {
        document.getElementById('officee').style.display='block';
        o=1;
    }


}


var ot=0;
function other(){

    if(ot===1)
    {
        document.getElementById('otherr').style.display='none';
        ot=0;
    }
    else
    {
        document.getElementById('otherr').style.display='block';
        ot=1;
    }


}


