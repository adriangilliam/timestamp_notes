$(function() {
    $('#notes-form').on('submit', function() {
      let noteText = $('#note-text').val();
      if (noteText != undefined && noteText != '') {
        takeNote(noteText);
        $('#note-text').val('');
      }

      let proText = $('#pros-text').val();
      if (proText != undefined && proText != '') {
        recordPro(proText, '(+)');
        $('#pros-text').val('');
      }

      let conText = $('#cons-text').val();
      if (conText != undefined && conText != '') {
        recordCon(conText, '(-)');
        $('#cons-text').val('');
      }

      return false;
  });

  $('#clearBtn').on('click', function() {
    clearNotes();
  })

  if (localStorage.notes != undefined) {
    $('#notes').html(localStorage.notes);
  }

  if (localStorage.pros != undefined) {
    $('#pros').html(localStorage.notes);
  }

  if (localStorage.cons != undefined) {
    $('#cons').html(localStorage.notes);
  }
});

function takeNote(text) {
  let timeStamp = getTimeStamp();
  let note = "<li><b>" + timeStamp + "</b> - " + text + "</li>";
  $('#notes').append(note);
  localStorage.notes = $('#notes').html();
}

function recordPro(text) {
  let note = "<li> (+) " + text + "</li>";
  $('#pros').append(note);
  localStorage.pros = $('#pros').html()
}

function recordCon(text) {
  let note = "<li> (-) " + text + "</li>";
  $('#cons').append(note);
  localStorage.cons = $('#cons').html()
}

function getTimeStamp() {
    return new Date().toLocaleTimeString();
}

function clearNotes() {
  let response = confirm("Are you sure you want to clear your notes?");
  if (response) {
      localStorage.notes = '';
      localStorage.prosAndCons = '';
    $('#notes').html('');
    $('#pros').html('');
    $('#cons').html('');
  }
}
