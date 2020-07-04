var notes_holder = document.getElementById("notes");

function add_note() {
  var note_input = document.getElementById("note_input");
  if (note_input.value !== "") {
    if (note_input.value.length <= 24){

      var note = document.createElement("div");
      note.style = "display: flex;";

      var note_content = document.createElement("p");
      note_content.innerHTML = note_input.value;
      note_content.style = "text-align: center; background-color: lightblue; border-radius: 10px; border: 1px solid black; font-weight: bold; width: 70%;";
      note_content.id = "as"
      note.appendChild(note_content);

      var delete_button = document.createElement("button");
      delete_button.style = "padding: 0; font-weight: bold; font-size: 15pt; border: 1px solid black; background-color: lightblue; width: 5%; height: 5%; margin: 12px 2px 10px 2px;"
      delete_button.innerHTML = "X";
      delete_button.addEventListener("click", function(){
        notes_holder.removeChild(note);})
      note.appendChild(delete_button);



      var done_button = document.createElement("button");
      done_button.style = "padding: 0; font-weight: bold; font-size: 15pt; border: 1px solid black; background-color: lightblue; width: 5%; height: 5%; margin: 12px 2px 10px 2px;"
      done_button.addEventListener("click", function(){
        note_content.style = "text-align: center; background-color: lightblue; border-radius: 10px; border: 1px solid black; font-weight: bolder; width: 70%; text-decoration: line-through; color: green;"});
      done_button.innerHTML = "D";
        note.appendChild(done_button);

      var edit_button = document.createElement("button");
      edit_button.style = "padding: 0; font-weight: bold; font-size: 15pt; border: 1px solid black; background-color: lightblue; width: 5%; height: 5%; margin: 12px 2px 10px 2px;"
      edit_button.innerHTML = "E";
      edit_button.addEventListener("click", function(){
        var edit = document.createElement("input");
        edit.value = note_content.innerHTML;
        edit.placeholder = "edit your note";
        edit.style = "text-align: center; background-color: lightblue; border-radius: 10px; border: 1px solid black; font-weight: bold; width: 70%; margin-top: 4%; margin-bottom: 4%;";
        note.removeChild(note_content);
        note.removeChild(delete_button);
        note.removeChild(done_button);
        note.appendChild(edit);
        note.appendChild(delete_button);
        note.appendChild(done_button);
        note.appendChild(edit_button);
        })
      note.appendChild(edit_button);

      notes_holder.appendChild(note);}
    else{
      alert("Note can not be more than 24 characters!!!");
    }}
  else{
    alert("You need to inter a note!!!");
  }
  console.log(notes_holder);
  note_input.value = '';}
