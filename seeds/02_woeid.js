exports.seed = function(knex, Promise) {
  return knex("woeid")
    .del()
    .then(function() {
      return knex("woeid").insert([
        {
          WOE_ID: 1,
          ISO: "World",
          Name: "World",
          Language: "World",
          PlaceType: "World",
          Parent_ID: 1
        },
        {
          WOE_ID: 23424829,
          ISO: "DE",
          Name: "Germany",
          Language: "GER",
          PlaceType: "Country",
          Parent_ID: 1
        },
        {
          WOE_ID: 23424975,
          ISO: "GB",
          Name: "United Kingdom",
          Language: "ENG",
          PlaceType: "Country",
          Parent_ID: 1
        },
        {
          WOE_ID: 23424748,
          ISO: "AU",
          Name: "Australia",
          Language: "ENG",
          PlaceType: "Country",
          Parent_ID: 1
        },
        {
          WOE_ID: 23424853,
          ISO: "IT",
          Name: "Italia",
          Language: "ITA",
          PlaceType: "Country",
          Parent_ID: 1
        },
        {
          WOE_ID: 23424856,
          ISO: "JP",
          Name: "%u65E5%u672C-Japan",
          Language: "JPN",
          PlaceType: "Country",
          Parent_ID: 1
        },
        {
          WOE_ID: 23424982,
          ISO: "VE",
          Name: "Venezuela",
          Language: "SPA",
          PlaceType: "Country",
          Parent_ID: 1
        },
        {
          WOE_ID: 23424942,
          ISO: "ZA",
          Name: "South Africa",
          Language: "ENG",
          PlaceType: "Country",
          Parent_ID: 1
        },
        {
          WOE_ID: 23424916,
          ISO: "NZ",
          Name: "New Zealand",
          Language: "ENG",
          PlaceType: "Country",
          Parent_ID: 1
        },
        {
          WOE_ID: 23424957,
          ISO: "CH",
          Name: "Switzerland",
          Language: "GER",
          PlaceType: "Country",
          Parent_ID: 1
        },
        {
          WOE_ID: 23424911,
          ISO: "NP",
          Name: "Nepal",
          Language: "ENG",
          PlaceType: "Country",
          Parent_ID: 1
        },
        {
          WOE_ID: 23424976,
          ISO: "UA",
          Name: "Ukraine",
          Language: "ENG",
          PlaceType: "Country",
          Parent_ID: 1
        },
        {
          WOE_ID: 23424868,
          ISO: "KR",
          Name: "%uD55C%uAD6D-Korea",
          Language: "KOR",
          PlaceType: "Country",
          Parent_ID: 1
        },
        {
          WOE_ID: 23424900,
          ISO: "MX",
          Name: "Mexico",
          Language: "SPA",
          PlaceType: "Country",
          Parent_ID: 1
        },
        {
          WOE_ID: 23424936,
          ISO: "RU",
          Name: "Russia",
          Language: "ENG",
          PlaceType: "Country",
          Parent_ID: 1
        },
        {
          WOE_ID: 23424775,
          ISO: "CA",
          Name: "Canada",
          Language: "ENG",
          PlaceType: "Country",
          Parent_ID: 1
        },
        {
          WOE_ID: 23424954,
          ISO: "SE",
          Name: "Sweden",
          Language: "SWE",
          PlaceType: "Country",
          Parent_ID: 1
        },
        {
          WOE_ID: 23424819,
          ISO: "FR",
          Name: "France",
          Language: "FRE",
          PlaceType: "Country",
          Parent_ID: 1
        },
        {
          WOE_ID: 23424910,
          ISO: "NO",
          Name: "Norway",
          Language: "NOR",
          PlaceType: "Country",
          Parent_ID: 1
        },
        {
          WOE_ID: 23424948,
          ISO: "SG",
          Name: "Singapore",
          Language: "ENG",
          PlaceType: "Country",
          Parent_ID: 1
        },
        {
          WOE_ID: 23424950,
          ISO: "ES",
          Name: "Spain",
          Language: "SPA",
          PlaceType: "Country",
          Parent_ID: 1
        },
        {
          WOE_ID: 23424781,
          ISO: "CN",
          Name: "%u4E2D%u570B-China",
          Language: "CHI",
          PlaceType: "Country",
          Parent_ID: 1
        },
        {
          WOE_ID: 23424738,
          ISO: "AE",
          Name: "UAE-%u0627%u0644%u0627%u0645%u0627%u0631%u0627%u062A",
          Language: "ARA",
          PlaceType: "Country",
          Parent_ID: 1
        },
        {
          WOE_ID: 23424848,
          ISO: "IN",
          Name: "India",
          Language: "ENG",
          PlaceType: "Country",
          Parent_ID: 1
        },
        {
          WOE_ID: 23424852,
          ISO: "IL",
          Name: "Israel",
          Language: "ENG",
          PlaceType: "Country",
          Parent_ID: 1
        },
        {
          WOE_ID: 2347559,
          ISO: "US",
          Name: "Alabama",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347560,
          ISO: "US",
          Name: "Alaska",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347561,
          ISO: "US",
          Name: "Arizona",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347563,
          ISO: "US",
          Name: "California",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347564,
          ISO: "US",
          Name: "Colorado",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347565,
          ISO: "US",
          Name: "Connecticut",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347566,
          ISO: "US",
          Name: "Delaware",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347567,
          ISO: "US",
          Name: "District of Columbia",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347568,
          ISO: "US",
          Name: "Florida",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347569,
          ISO: "US",
          Name: "Georgia",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347570,
          ISO: "US",
          Name: "Hawaii",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347571,
          ISO: "US",
          Name: "Idaho",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347572,
          ISO: "US",
          Name: "Illinois",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347573,
          ISO: "US",
          Name: "Indiana",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347574,
          ISO: "US",
          Name: "Iowa",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347575,
          ISO: "US",
          Name: "Kansas",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347576,
          ISO: "US",
          Name: "Kentucky",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347578,
          ISO: "US",
          Name: "Maine",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347579,
          ISO: "US",
          Name: "Maryland",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347580,
          ISO: "US",
          Name: "Massachusetts",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347581,
          ISO: "US",
          Name: "Michigan",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347582,
          ISO: "US",
          Name: "Minnesota",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347583,
          ISO: "US",
          Name: "Mississippi",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347584,
          ISO: "US",
          Name: "Missouri",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347585,
          ISO: "US",
          Name: "Montana",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347586,
          ISO: "US",
          Name: "Nebraska",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347587,
          ISO: "US",
          Name: "Nevada",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347588,
          ISO: "US",
          Name: "New Hampshire",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347589,
          ISO: "US",
          Name: "New Jersey",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347590,
          ISO: "US",
          Name: "New Mexico",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347591,
          ISO: "US",
          Name: "New York",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347593,
          ISO: "US",
          Name: "North Dakota",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347594,
          ISO: "US",
          Name: "Ohio",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347596,
          ISO: "US",
          Name: "Oregon",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347597,
          ISO: "US",
          Name: "Pennsylvania",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347598,
          ISO: "US",
          Name: "Rhode Island",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347599,
          ISO: "US",
          Name: "South Carolina",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347600,
          ISO: "US",
          Name: "South Dakota",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347601,
          ISO: "US",
          Name: "Tennessee",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347602,
          ISO: "US",
          Name: "Texas",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347603,
          ISO: "US",
          Name: "Utah",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347604,
          ISO: "US",
          Name: "Vermont",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347605,
          ISO: "US",
          Name: "Virginia",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347606,
          ISO: "US",
          Name: "Washington",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347607,
          ISO: "US",
          Name: "West Virginia",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347608,
          ISO: "US",
          Name: "Wisconsin",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347609,
          ISO: "US",
          Name: "Wyoming",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347562,
          ISO: "US",
          Name: "Arkansas",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347595,
          ISO: "US",
          Name: "Oklahoma",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347592,
          ISO: "US",
          Name: "North Carolina",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347577,
          ISO: "US",
          Name: "Louisiana",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2391279,
          ISO: "US",
          Name: "Denver",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 12587743
        },
        {
          WOE_ID: 2471390,
          ISO: "US",
          Name: "Phoenix",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 12587587
        },
        {
          WOE_ID: 2459115,
          ISO: "US",
          Name: "New York",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 2347591
        },
        {
          WOE_ID: 2442047,
          ISO: "US",
          Name: "Los Angeles",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 12590145
        },
        {
          WOE_ID: 2379574,
          ISO: "US",
          Name: "Chicago",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 12588093
        },
        {
          WOE_ID: 2424766,
          ISO: "US",
          Name: "Houston",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 12590107
        },
        {
          WOE_ID: 2471217,
          ISO: "US",
          Name: "Philadelphia",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 12589778
        },
        {
          WOE_ID: 2357536,
          ISO: "US",
          Name: "Austin",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 12590233
        },
        {
          WOE_ID: 2487956,
          ISO: "US",
          Name: "San Francisco",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 12587707
        },
        {
          WOE_ID: 2378426,
          ISO: "US",
          Name: "Charlotte",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 12589433
        },
        {
          WOE_ID: 2391585,
          ISO: "US",
          Name: "Detroit",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 12588795
        },
        {
          WOE_ID: 2490383,
          ISO: "US",
          Name: "Seattle",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 12590456
        },
        {
          WOE_ID: 2514815,
          ISO: "US",
          Name: "Washington DC",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 12587802
        },
        {
          WOE_ID: 2367105,
          ISO: "US",
          Name: "Boston",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 12588712
        },
        {
          WOE_ID: 2457170,
          ISO: "US",
          Name: "Nashville",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 12589930
        },
        {
          WOE_ID: 2358820,
          ISO: "US",
          Name: "Baltimore",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 12588679
        },
        {
          WOE_ID: 2475687,
          ISO: "US",
          Name: "Portland",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 12589717
        },
        {
          WOE_ID: 2436704,
          ISO: "US",
          Name: "Las Vegas",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 12589233
        },
        {
          WOE_ID: 2357024,
          ISO: "US",
          Name: "Atlanta",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 12587929
        },
        {
          WOE_ID: 2478307,
          ISO: "US",
          Name: "Raleigh",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 12589465
        },
        {
          WOE_ID: 2450022,
          ISO: "US",
          Name: "Miami",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 12587815
        },
        {
          WOE_ID: 2452078,
          ISO: "US",
          Name: "Minneapolis",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 12588823
        },
        {
          WOE_ID: 2458833,
          ISO: "US",
          Name: "New Orleans",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 12588631
        },
        {
          WOE_ID: 2405641,
          ISO: "US",
          Name: "Fort Collins",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 12587762
        },
        {
          WOE_ID: 2367231,
          ISO: "US",
          Name: "Boulder",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 12587734
        },
        {
          WOE_ID: 2383489,
          ISO: "US",
          Name: "Colorado Springs",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 12587747
        }
      ]);
    });
};
