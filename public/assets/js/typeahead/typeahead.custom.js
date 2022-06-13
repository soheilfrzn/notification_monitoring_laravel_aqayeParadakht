(function($) {
  var substringMatcher = function(strs) {
    return function findMatches(q, cb) {
      var matches, substringRegex;
      matches = [];
      substrRegex = new RegExp(q, 'i');
      $.each(strs, function(i, str) {
        if (substrRegex.test(str)) {
          matches.push(str);
        }
      });
      cb(matches);
    };
  };
  var states = ['آلاباما', 'آلاسکا', 'آریزونا', 'آرکانزاس', 'کالیفرنیا',
    "کلرادو", "کانکتیکات", "دلاور", "فلوریدا", "جورجیا", "هاوایی",
    "آیداهو", "ایلینوی", "ایندیانا", "آیووا", "کانزاس", "کنتاکی", "لوئیزیانا",
    "مین", "مریلند", "ماساچوست", "میشیگان", "مینسوتا",
    "می سی سی پی", "میسوری", "مونتانا", "نبراسکا", "نوادا", "نیوهمپشایر",
    "نیوجرسی", "نیومکزیکو", "نیویورک", "کارولینای شمالی", "داکوتای شمالی",
    "اوهایو", "اوکلاهما", "اورگان", "پنسیلوانیا", "رود آیلند",
    "کارولینای جنوبی", "داکوتای جنوبی", "تنسی", "تگزاس", "یوتا", "ورمونت",
    "ویرجینیا", "واشنگتن", "ویرجینیای غربی", "ویسکونسین", "وایومینگ"
  ];
  $('#the-basics .typeahead').typeahead({
    hint: true,
    highlight: true,
    minLength: 1
  },
  {
    name: 'states',
    source: substringMatcher(states)
  });
  var states = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.whitespace,
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: states
  });
  $('#bloodhound .typeahead').typeahead({
    hint: true,
    highlight: true,
    minLength: 1
  },
  {
    name: 'states',
    source: states
  });
  var countries = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.whitespace,
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    prefetch: '../assets/js/typeahead/data/countries.json'
  });
  $('#prefetch .typeahead').typeahead(null, {
    name: 'countries',
    source: countries
  });
  var bestPictures = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    prefetch: './../assets/js/typeahead/data/films/post_1960.json',
    remote: {
      url: '../assets/js/typeahead/data/films/queries/%QUERY.json',
      wildcard: '%QUERY'
    }
  });
  $('#remote .typeahead').typeahead(null, {
    name: 'best-pictures',
    display: 'value',
    source: bestPictures
  });
  var nflTeams = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('team'),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    identify: function(obj) { return obj.team; },
    prefetch: '../assets/js/typeahead/data/nfl.json'
  });
  function nflTeamsWithDefaults(q, sync) {
    if (q === '') {
      sync(nflTeams.get('شیرهای دیترویت', 'گرین بی پکرز', 'خرس های شیکاگو'));
    }
    else {
      nflTeams.search(q, sync);
    }
  }
  $('#default-suggestions .typeahead').typeahead({
    minLength: 0,
    highlight: true
  },
  {
    name: 'nfl-teams',
    display: 'team',
    source: nflTeamsWithDefaults
  });
  $('#custom-templates .typeahead').typeahead(null, {
    name: 'best-pictures',
    display: 'value',
    source: bestPictures,
    templates: {
      empty: [
        '<div class="empty-message">',
        'نمی‌توان هیچ برنده بهترین عکس را پیدا کرد که با درخواست فعلی مطابقت داشته باشد',
        '</div>'
      ].join('\n'),
      suggestion: Handlebars.compile('<div><strong>{{value}}</strong> – {{year}}</div>')
    }
  });
  var nbaTeams = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('team'),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    prefetch: '../assets/js/typeahead/data/nba.json'
  });
  var nhlTeams = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('team'),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    prefetch: '../assets/js/typeahead/data/nhl.json'
  });
  $('#multiple-datasets .typeahead').typeahead({
    highlight: true
  },
  {
    name: 'nba-teams',
    display: 'team',
    source: nbaTeams,
    templates: {
      header: '<h3 class="league-name">تیم های NBA</h3>'
    }
    },
    {
      name: 'nhl-teams',
      display: 'team',
      source: nhlTeams,
      templates: {
        header: '<h3 class="league-name">تیم های NHL</h3>'
      }
    });
    $('#scrollable-dropdown-menu .typeahead').typeahead(null, {
      name: 'countries',
      limit: 10,
      source: countries
    });
    var arabicPhrases = new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.whitespace,
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      local: [
        "هند",
        "آمریکا",
        "استرالیا",
        "ایران",
        "چین"
      ]
    });
    $('#rtl-support .typeahead').typeahead({
      hint: false
    },
    {
      name: 'arabic-phrases',
      source: arabicPhrases
    });
})(jQuery);