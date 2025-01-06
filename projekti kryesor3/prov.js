function toggleTable() {
    var table = document.getElementById("table-content");
    if (table.style.display === "none") {
      table.style.display = "table";
    } else {
      table.style.display = "none";
    }
  }