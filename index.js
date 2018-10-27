var $ = jQuery;
var data = [];
table = $('#table').DataTable({data: data});
function listLrv4s() {
  var totalCount = 0;
  for(var x=2000; x < 2100; x++) {
    $.getJSON(
      "http://webservices.nextbus.com/service/publicJSONFeed",
      {
        command: "vehicleLocation",
        a: "sf-muni",
        v: x,
      },
      function(result) {
        var vehicle = result.vehicle;
        if (vehicle) {
          totalCount++;
          $("#count").html(totalCount);
          console.log(vehicle)
          var row = [
            vehicle.id,
            vehicle.routeTag ? vehicle.routeTag : '',
            vehicle.dirTag ? vehicle.dirTag : '',
            vehicle.leadingVehicleId ? vehicle.leadingVehicleId : '',
          ]
          table.row.add(row).draw();
        }
      });
  }
}

$(document).ready( function () {
    listLrv4s();
    console.log(data)
} );
