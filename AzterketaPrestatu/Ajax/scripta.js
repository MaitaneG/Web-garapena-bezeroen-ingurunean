// Formularioa balidatu 
$(document).ready(
    $.ajax({
        url:'datuak.json',
        dataType:'json',
        success:function(data){
            for(var i=0; i<data.length;i++){
                var lerroa="<tr> <td>"+data[i].user_name+"</td><td>"+data[i].password+"</td></tr>";
                $('#taula').append(lerroa);
            }
        }
    })
)
// Ajax-ekin Json-a irakurri eta idatzi