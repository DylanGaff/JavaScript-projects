function dictionary() {
    var me= {
        Name: "Dylan",
        Age: 23,
        Job: 'Saw operator',
        Skills: 'Javascript'
    } ;
    delete me.Job;
    document.getElementById('Dict').innerHTML = me.Job;
}