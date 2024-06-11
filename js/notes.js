const FIELDS = [ 'name',  'overview', 'next-steps', 'pros', 'cons', 'mehs', 'other', 'notes', ]

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
  "Technical Competency",
  "Problem Solving",
  "Communication & Collaboration",
  "Quality Assurance",
  "Ownership",
  "Team Building",
  "GlossGenius Values",
  "Obsess over customers’ success",
  "Strive for excellence, and expect it",
  "Break through walls for results",
  "Move Fast",
  "Make ambitious things happen",
];

const QUESTIONS = {
    pair_programming: [
        {
          title: 'Interview Type',
          value: 'Pair Programming',
          field: 'overview'
        },
        {
          title: 'Hiring Decision',
          value: '',
          field: 'overview'

        },
        {
          title: 'Pros and cons',
          value: '',
          field: 'pros'
        },
        {
          title: 'Did the candidate reach an acceptable solution?',
          value: '',
          field: 'other'
        },
        {
          title: 'How well did the candidate collaborate and communicate?',
          value: '',
          field: 'other'
        },
        {
          title: 'Code',
          value: ''
              + '```\n'
              + 'Enclose code in triple backticks\n'
              + '```',
          field: 'other'
        },
        {
          title: 'Additional Notes',
          value: '',
          field: 'notes'
        },
    ],
    technical_screen: [
        {
          title: 'Interview Type',
          value: 'Technical Screen',
          field: 'overview'
        },
        {
          title: 'Hiring Decision',
          value: '',
          field: 'overview'
        },
        {
          title: 'Next Steps',
          value: '',
          field: 'next-steps'
        },
        {
          title: 'Pros and cons',
          value: '',
          field: 'pros'
        },
        {
          title: 'Did the candidate reach an acceptable solution?',
          value: '',
          field: 'other'
        },
        {
          title: 'How well did the candidate collaborate and communicate?',
          value: '',
          field: 'other',
        },
        {
          title: 'Code',
          value: '\n'
              + '```\n'
              + 'Enclose code in triple backticks\n'
              + '```',
          field: 'notes'
        },
        {
          title: 'Additional Notes',
          value: '',
          field: 'notes'
        },
    ],
    campus_pairing: [
        {
          title: 'Interview Type',
          value: 'Campus Pairing',
          field: 'overview',
        },
        {
          title: 'Hiring Decision',
          value: '',
          field: 'overview',
        },
        {
          title: 'Pros and cons (include Communication, Collaboration, Code Fluency and Analysis)',
          value: '',
          field: 'pros'
        },
        {
          title: 'Did the candidate reach an acceptable solution? '
              + 'If not, were they on the right track to completing the problem?',
          value: '',
          field: 'other'
        },
        {
          title: 'Code',
          value: '\n'
              + '```<br/>'
              + 'Enclose code in triple backticks<br/>'
              + '```',
          field: 'other'
        },
        {
          title: 'Additional Notes',
          value: '',
          field: 'notes'
        },
    ],
    qa_architecture: [
        {
          title: 'Interview Type',
          value: 'Q&A Architecture'
        },
        {
          title: 'Hiring Decision',
          value: ''
        },
        {
          title: 'Pros and cons',
        },
        {
          title: 'Additional Notes',
          value: 'Optional'
        },
    ],
    qa_past_experience: [
        {
          title: 'Interview Type',
          value: 'Q&A Past Experience'
        },
        {
          title: 'Hiring Decision',
          value: 'Hire | No Hire | Neutral (discouraged)\n'
              + '2-3 sentences supporting your decision'
        },
        {
          title: 'Pros and cons',
          value: '5-8 Pros and cons about the candidate with brief justification when possible. For '
              + 'example, how well did the candidate perform at technical design, communication, '
              + 'mentorship, community building, empathy, etc. See go/engrubric\n'
              + '[++] **Dimension1**: Pro with justification\n'
              + '[+] **Dimension2**: Pro with justification\n'
              + '[+] **Dimension3**: Pro with justification\n'
              + '[-] **Dimension4**: Con with justification\n'
              + '[-] **Dimension5**: Con with justification'      },
        {
          title: 'Additional Notes',
          value: 'Optional'
        },
    ],
    qa_leadership: [
        {
          title: 'Interview Type',
          value: 'Q&A Leadership'
        },
        {
          title: 'Hiring Decision',
          value: 'Hire | No Hire | Neutral (discouraged)\n'
              + '2-3 sentences supporting your decision'
        },
        {
          title: 'Pros and cons',
          value: 'Pros and cons about the candidate with brief justification when possible. See go/engrubric\n'
              + '\n'
              + 'Required:\n'
              + '[] **Mentorship**: Justification\n'
              + '[] **Collaboration**: Justification\n'
              + '[] **Team Effectiveness**: Justification\n'
              + '\n'
              + 'Recommended:\n'
              + '[] **Communication**: Justification\n'
              + '[] **Community Building**: Justification\n'
              + '[] **Seeking Divergent Perspectives**: Justification\n'
              + '[] **Taking Principled Risks**: Justification'      },
        {
          title: 'Additional Notes',
          value: 'Optional'
        },
    ],
    sell: [
        {
          title: 'Interview Type',
          value: 'Sell'
        },
        {
          title: 'Hiring Decision',
          value: 'Hire | No Hire | Neutral\n'
              + '2-3 sentences supporting your decision'
        },
        {
          title: 'Additional Notes',
          value: 'Optional'
        },
    ],
    lunch: [
        {
          title: 'Interview Type',
          value: 'Lunch'
        },
        {
          title: 'Hiring Decision',
          value: 'Hire | No Hire | Neutral\n'
              + '2-3 sentences supporting your decision'
        },
        {
          title: 'Additional Notes',
          value: 'Optional'
        },
    ],
    other: [
    ]
   };

    const TEMPLATES_OPTION = {
        title: 'Interview Type',
        prompt: 'Select the type of interview',
        options: ['Pair Programming', 'Systems Design', 'Experience Interview', 'Other']
    };

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

    $('#newInterviewBtn').on('click', function() {
        newInterview(QUESTIONS, FIELDS, $('#interviewTypes')[0].value);
    });

    $('#clearBtn').on('click', function() {
        clearNotes();
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
        minLength: 1,
        source: function(request, response) {

            var regex = new RegExp(/\+*\-*\~?\s*/, 'g')
            regex.test(request.term);
            var prefix = request.term.substr(0, regex.lastIndex);
            var possibleDimension = request.term.replace(/\+*\-*\~?\s*/, '')

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

    populateInterviewTypes();
});

function populateInterviewTypes() {
  const selectElement = $('#interviewTypes');
  TEMPLATES_OPTION.options.forEach(option => {
      const optionElement = $('<option></option>').val(option).text(option);
      selectElement.append(optionElement);
  });
}

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

function record(field, text, prefix="") {
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

function clearFields() {
    FIELDS.forEach(function(field) {
        localStorage[field] = '';
        $(`#${field}`).html('');
    });
}

function addCandidateName(name) {
    $('#name').append("<strong>" + name + "</strong>");
}

function newInterview(questionMap, fieldNames, interviewType) {
    let name = prompt("Candidate Name?", "Name");
    if (name) {
        fields = "";
        fieldNames.forEach(function(field) {
            fields += $(`#${field}`).html();
        });
        note =  fields + "</br>";
        localStorage.savedNotes += note;
        $('#savedNotes').append(note);

        clearFields();

        if (interviewType) {
            populateFields(questionMap, interviewType)
        }

        addCandidateName(name);

    }
}

function keyName(rawName) {
    return rawName.toLowerCase().replace(/ /g, "_").replace(/&/g, "");
}

function populateFields(questionMap, interviewType){
    const questions = questionMap[keyName(interviewType)];
    for (const question of questions) {
        record(question.field, "<br/>")
        record(question.field, '#### ' + question.title)
        record(question.field,  question.value)
    }
}
