const FIELDS = ['pros', 'cons', 'mehs', 'overview', 'notes']

const SPECIAL_CHARACTERS = {
    '++': 'pros',
    '+': 'pros',
    '--': 'cons',
    '-': 'cons',
    '~': 'mehs',
    '=': 'overview',
}

const PREFIXES = {
    '+': '[+] ',
    '++': '[++] ',
    '-': '[-] ',
    '--': '[--]',
    '~': '[~] ',
    '=': '',
};

const AVAILBLE_DIMENSIONS = [
    'Analysis',
    'Troubleshooting',
    'Code Fluency',
    'Code Maintainability',
    'Technical Design',
    'Domain Specific Knowledge',
    'Curiosity',
    'Awareness',
    'Mentorship',
];

$(function() {
    $('#notes-form').on('submit', function() {
        let noteText = $('#note-text').val();
        if (noteText == undefined || noteText == '') {
            return false;
        }
        takeNote(noteText);
        $('#note-text').val('');
        return false;
    });

    $('#saveBtn').on('click', function() {
        saveNotes();
    });

    $('#clearBtn').on('click', function() {
        clearNotes();
    });

    $('#clearSavedBtn').on('click', function() {
        clearSavedNotes();
    });

    FIELDS.forEach(function(field) {
        if (localStorage[field] != undefined) {
            $(`#${field}`).html(localStorage[field]);
        }
    });

    if (localStorage.savedNotes != undefined) {
        $('#savedNotes').html(localStorage.savedNotes);
    }

    $( "#note-text" ).autocomplete({
        autoFocus:true,
        minLength: 3,
        source: function(request, response) {

            var regex = new RegExp(/\+*\-*\s*/, 'g')
            regex.test(request.term);
            var prefix = request.term.substr(0, regex.lastIndex);
            var possibleDimension = request.term.replace(/\+*\-*\s*/, '')

            var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex(possibleDimension), 'i' );
            response($.grep( AVAILBLE_DIMENSIONS, function( value ) {
              return matcher.test( value.label || value.value || value) ;
            }).map(function(value) { return prefix + " " + value + " "; }));
        }
    });

     $("#note-text").keydown(function(event) {
        if(event.keyCode != $.ui.keyCode.TAB) { return true; }
        $(this).trigger($.Event('keydown'), { keyCode: $.ui.keyCode.ENTER });
        $(this).autocomplete( "close" );
        return false;
    });
});

function takeNote(text) {
    var specialChar = Object.keys(SPECIAL_CHARACTERS).find(function(key) {
        return text.startsWith(key);
    });
    if(specialChar) {
        record(SPECIAL_CHARACTERS[specialChar], text.substr(specialChar.length), PREFIXES[specialChar]);
    } else {
        record('notes', text, "<b>" + getTimeStamp() + "</b> - ");
    }
}

function record(field, text, prefix) {
    let note = "<li>" + prefix + text + "</li>";
    const elem = $(`#${field}`)
    elem.append(note);
    localStorage[field] = elem.html();
}

function getTimeStamp() {
    return new Date().toLocaleTimeString();
}

function clearNotes() {
    let response = confirm("Are you sure you want to clear your notes?");
    if (response) {
        clearFields();
    }
}

function clearSavedNotes() {
    let response = confirm("Are you sure you want to clear your saved notes?");
    if (response) {
        localStorage.savedNotes = '';
        $('savedNotes').html('');
    }
}

function clearFields() {
    FIELDS.forEach(function(field) {
        localStorage[field] = '';
        $(`#${field}`).html('');
    });
}

function saveNotes() {
  let name = prompt("Save as...");
  if (name != '') {
    fields = "";
    FIELDS.forEach(function(field) {
        fields += $(`#${field}`).html();
    });
    note = "<strong>" + name + "</strong>" + fields + "</br>";
    localStorage.savedNotes += note;
    $('#savedNotes').append(note);

    clearFields();
  }
}
