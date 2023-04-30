function alphaOnly(event) {
    var key = event.keyCode;
    return ((key >= 65 && key <= 90) || key == 8);
};
function onlyNumberKey(evt) {
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}
function GenerateDynamicTimeTable() {
    TotalSubject = $('#TotalSubject').val();
    var HoursForWeek = $('#HoursForWeek').val();
    var WorkingDays = $('#WorkingDays').val();
    var SubjectPerDay = $('#SubjectPerDay').val();
    var sumOfSubjectHours = 0;
    var dict = [];
    for (var i = 0; i < parseInt(TotalSubject); i++) {
        dict.push({
            Subject: $('#SubjectName_' + i).val(),
            Hours: $('#hoursOfSubject_' + i).val(),
        });

        sumOfSubjectHours = parseInt(sumOfSubjectHours) + parseInt($('#hoursOfSubject_' + i).val())
    }
    if (HoursForWeek == sumOfSubjectHours) {
        var subjectAndHoursModel = {};
        subjectAndHoursModel.HoursForWeek = parseInt(HoursForWeek);
        subjectAndHoursModel.TotalSubject = parseInt(TotalSubject);
        subjectAndHoursModel.WorkingDays = parseInt(WorkingDays);
        subjectAndHoursModel.SubjectPerDay = parseInt(SubjectPerDay);
        subjectAndHoursModel.SubjectAndHours = dict;
        generateTable(subjectAndHoursModel);

    } else {
        alert("Subject Hours are not matched with Hours For Week.can you please enter proper Hours of Subject?");
        return false;
    }

}

function generateTable(subjectAndHoursModel) {
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
    var List = subjectAndHoursModel.SubjectAndHours;
    for (let i = 0; i < subjectAndHoursModel.SubjectPerDay; i++) {
        const row = document.createElement("tr");

        for (let j = 0; j < subjectAndHoursModel.WorkingDays; j++) {
            const keys = Object.keys(subjectAndHoursModel.SubjectAndHours);
            const len = keys.length;
            const rnd = Math.floor(Math.random() * len);
            const key = subjectAndHoursModel.SubjectAndHours[keys[rnd]];
            key.Hours = parseInt(key.Hours) - 1;
            if (key.Hours <= 0) {
                subjectAndHoursModel.SubjectAndHours.splice(rnd, 1);
            }
            const cell = document.createElement("td");
            const cellText = document.createTextNode(key.Subject);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    document.body.appendChild(tbl);
    tbl.setAttribute("border", "2");
    $('#TT').html(tbl);
}