function ohmsCalc() {

    //Setting constables for objects

    const uobj = document.getElementById('u').value;
    const robj = document.getElementById('r').value;
    const iobj = document.getElementById('i').value;
    const div = document.getElementById('result');

    //Parsing the value of the objects to Float
    let parsediobj = parseFloat(iobj);
    let parsedrobj = parseFloat(robj);
    let parseduobj = parseFloat(uobj);

    //Calculating the objects Float
    const ucalc = parsedrobj * parsediobj;
    const icalc = parseduobj / parsedrobj;
    const rcalc = parseduobj / parsediobj;


    //Pasting result depending on which input that have been written to
    if (uobj.length === 0) {
        div.innerHTML = 'U = ' + ucalc;
    } else if (robj.length === 0) {
        div.innerHTML = 'R = ' + rcalc;
    } else if (iobj.length === 0){
        div.innerHTML = 'I = ' + icalc;
    }
}